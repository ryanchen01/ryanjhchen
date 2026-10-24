import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "VoxaView privacy policy",
  description: "How VoxaView handles images and analysis on your device, purchases, exports, and local data deletion.",
};

const sections = [
  {
    title: "Images and analysis stay on your device",
    body: "VoxaView processes imported images and scientific data on your device. The app does not automatically upload your images, image metadata, annotations, or measurements to the developer or RevenueCat. Imported copies and your latest analysis are stored in the app's local workspace so you can resume after restarting.",
  },
  {
    title: "Purchases and subscriptions",
    body: "Apple or Google processes your payment. VoxaView uses RevenueCat to check subscription access, present purchase options, and restore purchases. These services receive purchase and subscription information, an app user identifier, and technical information needed to provide their services. VoxaView does not receive your payment card details. Purchase services may require a network connection.",
  },
  {
    title: "Exports and sharing",
    body: "Files leave the app when you choose an export or share destination. Measurement CSV files include image metadata, which may contain names or other identifying information from the original file. Your chosen destination handles shared files under its own privacy policy.",
  },
  {
    title: "Retention and deletion",
    body: "Imported copies, saved analysis, and exports remain in the local workspace until you delete them or uninstall the app. Temporary previews and shared-file staging copies may also be stored locally. Use Delete Local Data on the Imports screen to remove VoxaView's imported copies, saved analysis, exports, and shared-file staging copies. This does not delete your original files, copies already shared elsewhere, store purchase records, or copies held in device backups. Device backup settings may include app data.",
  },
  {
    title: "Contact",
    body: (
      <>
        For privacy questions, contact the developer through{" "}
        <a href="https://ryanjhchen.com/support/"
          className="underline underline-offset-4 hover:text-foreground">
          VoxaView&apos;s support page
        </a>.
        You can also read this policy offline in the app&apos;s Settings.
      </>
    ),
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
          <h1 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">VoxaView privacy policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Updated <time dateTime="2026-09-30">September 30, 2026</time>
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
