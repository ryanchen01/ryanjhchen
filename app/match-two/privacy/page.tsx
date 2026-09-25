import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Match Two privacy policy",
  description: "How Match Two stores game data on your device. No accounts, analytics, advertising, or tracking.",
};

const sections = [
  {
    title: "Your data stays on your device",
    body: "Match Two works offline. The app does not collect or transmit personal information, use analytics or advertising services, or track you across apps and websites. No account is required.",
  },
  {
    title: "Saved game data",
    body: "The app stores your current board, score, stage, remaining Adds, best score, and tutorial completion on your device so you can resume playing. This data stays until it is replaced or the app is deleted. It may be included in device backups managed by your operating system or backup provider.",
  },
  {
    title: "Deleting your data",
    body: "Choose New game in Settings to reset the current game while keeping your best score. Delete the app through your device's settings to remove all of its local data. Offloading the app keeps its data. Manage or delete any backups separately through your backup provider.",
  },
  {
    title: "Changes to this policy",
    body: "If the app's data practices change, this policy will be updated with the app.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-10 sm:py-20">
      <Link href="/" className={cn(buttonVariants({ variant: "link" }), "mb-12 min-h-8 h-auto p-0 text-base")}>
        <span aria-hidden="true">←</span> Ryan Chen
      </Link>
      <article>
        <header className="mb-12 border-b border-border pb-8">
          <h1 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">Match Two privacy policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Effective <time dateTime="2026-09-25">September 25, 2026</time>
          </p>
        </header>
        <div className="space-y-9">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold tracking-tight">{section.title}</h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
