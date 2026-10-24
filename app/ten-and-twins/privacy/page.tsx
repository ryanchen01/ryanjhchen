import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ten & Twin privacy policy",
  description: "How Ten & Twin stores game progress and uses Google AdMob for optional rewarded ads, including your privacy choices.",
};

const policyLinkClassName = "underline underline-offset-4 hover:text-foreground";

const sections = [
  {
    title: "About this policy",
    body: "Ten & Twin is an iPhone and iPad game developed by Ryan Chen. No account is required, and you can play the puzzle offline. The app uses Google AdMob to offer optional rewarded ads for additional hints. Ad services require an internet connection and process information as described below.",
  },
  {
    title: "Saved game data",
    body: "The app saves your current board, score, stage, remaining Adds and hints, best score, tutorial completion, theme, and vibration preference on your device. These records let you resume playing and keep your settings. The app does not upload your saved board or scores to a developer-operated server. Local app data may be included in device backups managed by your operating system or backup provider.",
  },
  {
    title: "Optional rewarded ads",
    body: "You can choose to watch an ad to earn more hints. The app adds hints when AdMob confirms that you earned the reward. Choosing to watch an ad is optional. The app requests non-personalized ads from Google AdMob, with ad personalization and Google's publisher first-party ID disabled. When online, the app checks your ad consent status and may initialize AdMob and preload an ad when permitted, before you tap Watch ad. This means ad-related information may be sent to Google even if you do not watch an ad.",
  },
  {
    title: "Information processed by ad services",
    body: (
      <>
        Google&apos;s Mobile Ads SDK may collect your IP address, which can indicate approximate location;
        device or app identifiers; crash and performance information; and information about app and ad
        interactions, such as launches, ad views, and taps. Google uses this information to deliver and
        measure ads, support advertising analytics, improve its services, and help prevent fraud.
        Information may also be shared with advertising partners. The app does not request access to
        your precise GPS location. See Google&apos;s{" "}
        <a href="https://developers.google.com/admob/ios/privacy/data-disclosure" className={policyLinkClassName}>
          Mobile Ads data disclosure
        </a>{" "}
        for details.
      </>
    ),
  },
  {
    title: "Consent and privacy choices",
    body: "The app uses Google's User Messaging Platform to check consent requirements and display privacy messages when required. Your choices and applicable requirements affect whether ads can be requested. When available, open Settings in the app and choose Ad privacy to review or change your choices. Ad personalization remains disabled regardless of your consent choices. The app does not request Apple's app tracking permission. Non-personalized ads can still involve data processing for ad delivery, limiting ad repetition, aggregate reporting, and fraud prevention.",
  },
  {
    title: "Google and other services",
    body: (
      <>
        Google&apos;s processing, retention, international transfers, and privacy controls are described in its{" "}
        <a href="https://policies.google.com/privacy" className={policyLinkClassName}>Privacy Policy</a>{" "}
        and its explanation of{" "}
        <a href="https://policies.google.com/technologies/partner-sites" className={policyLinkClassName}>
          how it uses information from apps that use its services
        </a>.
        Ads may link to other apps or websites, whose privacy policies apply when you use them.
      </>
    ),
  },
  {
    title: "Retention and deleting your data",
    body: "Saved game data stays on your device until it is replaced or deleted. Choose New game in Settings to reset the current board, score, and hint allowance while keeping your best score and preferences. Deleting the app through your device's settings removes its local data; offloading it keeps that data. Manage backups separately through your backup provider. Deleting the app does not delete information already received by Google or other services. Consult their privacy policies and controls for retention and deletion options.",
  },
  {
    title: "Contact and privacy requests",
    body: (
      <>
        If you email me, I receive your email address and the information you include, and use them to
        respond to your request. For questions about this policy or requests concerning information
        you have sent me, contact{" "}
        <a href="mailto:dev@ryanjhchen.com" className={policyLinkClassName}>dev@ryanjhchen.com</a>.
        For information held by Google, use the privacy controls and contact options in Google&apos;s
        Privacy Policy.
      </>
    ),
  },
  {
    title: "Changes to this policy",
    body: "This policy will be updated when the app's data practices change. The date below the title identifies the latest revision.",
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
          <h1 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">Ten &amp; Twin privacy policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Effective <time dateTime="2026-10-05">October 5, 2026</time>
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
