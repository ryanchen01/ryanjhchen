import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { apps } from "@/lib/apps";

export default function Home() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-10 sm:py-32">
      <header className="mb-16 sm:mb-20">
        <h1 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Ryan Chen</h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I&apos;m a medical imaging algorithms engineer making games and apps for fun.
        </p>
      </header>
      <section aria-labelledby="apps-heading">
        <h2 id="apps-heading" className="mb-5 text-lg font-medium tracking-tight">Apps &amp; games</h2>
        <ul className="space-y-4">
          {apps.map((app) => (
            <li key={app.slug}>
              <Card className="rounded-2xl border-border/80 py-0 shadow-none">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-5 sm:gap-6">
                    <Image src={app.icon} alt="" width={88} height={88} priority
                      className="size-16 shrink-0 rounded-2xl sm:size-[88px] sm:rounded-[20px]" />
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold tracking-tight">{app.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{app.platform}</p>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{app.description}</p>
                      <Link href={`/${app.slug}/privacy/`}
                        className={cn(buttonVariants({ variant: "link" }), "mt-3 min-h-8 h-auto p-0 text-sm font-medium underline-offset-4")}
                        aria-label={`${app.name} privacy policy`}>
                        Privacy policy
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
      <footer className="mt-12 border-t border-border pt-6">
        <Link href="/support/" className={cn(buttonVariants({ variant: "link" }), "min-h-8 h-auto p-0 text-sm")}>
          Support
        </Link>
      </footer>
    </main>
  );
}
