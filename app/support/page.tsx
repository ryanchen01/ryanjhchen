import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Support",
  description: "Contact Ryan Chen for help with apps and games.",
};

export default function Support() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-10 sm:py-20">
      <Link href="/" className={cn(buttonVariants({ variant: "link" }), "mb-12 min-h-8 h-auto p-0 text-base")}>
        <span aria-hidden="true">←</span> Ryan Chen
      </Link>
      <header className="mb-12 border-b border-border pb-8">
        <h1 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">Support</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Need help with one of my apps or games? Email me with your question or feedback.
        </p>
      </header>
      <section aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-lg font-semibold tracking-tight">Contact</h2>
        <a href="mailto:dev@ryanjhchen.com"
          className={cn(buttonVariants({ variant: "link" }), "mt-3 min-h-8 h-auto max-w-full whitespace-normal break-all p-0 text-base underline underline-offset-4")}>
          dev@ryanjhchen.com
        </a>
        <p className="mt-5 text-base leading-7 text-muted-foreground">
          If you&apos;re reporting a problem, include the app name, your device and operating system version, and what happened. Screenshots can help too.
        </p>
      </section>
    </main>
  );
}
