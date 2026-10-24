#!/usr/bin/env bash
set -Eeuo pipefail

# Deploy the current checkout; pull the desired changes before running this script.
PROJECT_ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
DEPLOY_ROOT=/var/www
LIVE_PATH="$DEPLOY_ROOT/ryanjhchen"
CHECK_URL=http://127.0.0.1:3003

cd "$PROJECT_ROOT"
for command in npm curl flock mktemp; do
  command -v "$command" >/dev/null || { echo "Required command missing: $command" >&2; exit 1; }
done
if [[ ! -w "$DEPLOY_ROOT" ]]; then
  echo "Deployment requires write access to $DEPLOY_ROOT. Run with an account that has it." >&2
  exit 1
fi
if [[ ! -L "$LIVE_PATH" ]]; then
  echo "Expected $LIVE_PATH to be an existing release symlink; refusing to replace it." >&2
  exit 1
fi

# Prevent simultaneous deployments from building or publishing over each other.
exec 9>"$DEPLOY_ROOT/.ryanjhchen-deploy.lock"
flock -n 9 || { echo "Another deployment is running." >&2; exit 1; }

previous_release="$(readlink -f -- "$LIVE_PATH")"
[[ -d "$previous_release" ]] || { echo "Current release directory is missing." >&2; exit 1; }
release=""
link_dir=""
switched=false
cleanup() {
  result=$?
  trap - EXIT
  if (( result != 0 )); then
    if [[ "$switched" == true ]]; then
      echo "Deployment check failed; restoring $previous_release." >&2
      ln -s -- "$previous_release" "$link_dir/rollback"
      mv -Tf -- "$link_dir/rollback" "$LIVE_PATH"
    fi
    [[ -z "$release" ]] || rm -rf -- "$release"
  fi
  [[ -z "$link_dir" ]] || rm -rf -- "$link_dir"
  exit "$result"
}
trap cleanup EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

npm ci --no-audit --no-fund
npm run lint
npm run build

for page in index.html 404.html ten-and-twins/privacy/index.html; do
  [[ -s "out/$page" ]] || { echo "Build is missing out/$page" >&2; exit 1; }
done

revision="$(git rev-parse --short HEAD)"
release="$(mktemp -d "$DEPLOY_ROOT/ryanjhchen-release-$revision-XXXXXX")"
cp -a out/. "$release/"
chmod -R a+rX "$release"
link_dir="$(mktemp -d "$DEPLOY_ROOT/.ryanjhchen-switch-XXXXXX")"
ln -s -- "$release" "$link_dir/live"
# Rename on the same filesystem publishes the complete release atomically.
switched=true
mv -Tf -- "$link_dir/live" "$LIVE_PATH"

for route in / /ten-and-twins/privacy/; do
  curl --fail --silent --show-error --retry 2 --retry-delay 1 --max-time 15 \
    "$CHECK_URL$route" -o "$link_dir/response"
  cmp --silent "$release${route}index.html" "$link_dir/response" || {
    echo "Served content does not match the release at $route" >&2
    exit 1
  }
done

# Only prune after verification, keeping the release we just replaced for rollback.
for old_release in "$DEPLOY_ROOT"/ryanjhchen-release-*; do
  [[ -d "$old_release" && ! -L "$old_release" ]] || continue
  [[ "$old_release" != "$release" && "$old_release" != "$previous_release" ]] || continue
  if ! rm -rf -- "$old_release"; then
    echo "Warning: could not remove old release $old_release" >&2
  fi
done

echo "Deployed $revision to $release"
echo "Previous release retained at $previous_release"
