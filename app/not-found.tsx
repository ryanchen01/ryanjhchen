import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-10 sm:py-32">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <Link href="/" className={cn(buttonVariants({ variant: "link" }), "mt-6 min-h-8 h-auto p-0 text-base")}>
        Back to Ryan Chen
      </Link>
    </main>
  );
}
