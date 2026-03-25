import type { Metadata } from "next";
import { Shield, Database, Eye, Trash2, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — ChessRank",
  description:
    "Privacy Policy for the ChessRank Twitch Extension. Learn how we collect, use, and protect your data.",
  alternates: { canonical: "https://mebarki.dev/chessrank/privacy" },
};

const sections = [
  {
    id: "introduction",
    icon: Shield,
    title: "Introduction",
    content: (
      <>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          ChessRank is a Twitch Extension that lets viewers link their Chess.com
          or Lichess account to display a chess rating badge on a channel page.
          It is operated by{" "}
          <span className="font-medium text-foreground">Thomas Mebarki</span>, an
          independent developer based in France.
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          This Privacy Policy explains what data the ChessRank extension
          collects, how it is used, and your rights regarding that data.
        </p>
      </>
    ),
  },
  {
    id: "data-collected",
    icon: Database,
    title: "Information We Collect",
    content: (
      <>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          When you use ChessRank and choose to link a chess account, the
          following data is collected:
        </p>
        <ul className="mt-3 space-y-2 pl-6 text-muted-foreground list-disc">
          <li>
            <span className="font-medium text-foreground">Twitch User ID</span>{" "}
            — A numeric identifier provided by Twitch when you grant identity
            sharing permission. We do not receive your Twitch username, email, or
            password.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Chess platform username
            </span>{" "}
            — The Chess.com or Lichess username you voluntarily enter in the
            extension.
          </li>
          <li>
            <span className="font-medium text-foreground">Chess ratings</span>{" "}
            — Your Blitz, Rapid, and Bullet ratings, along with any title (GM,
            IM, FM, etc.), fetched from the public Chess.com or Lichess API.
          </li>
          <li>
            <span className="font-medium text-foreground">Timestamps</span> —
            When you linked your account and when your ratings were last
            refreshed.
          </li>
        </ul>
        <div className="mt-6 rounded-xl border border-border bg-card p-5">
          <p className="text-sm font-medium text-foreground">
            What we do NOT collect
          </p>
          <ul className="mt-2 space-y-1 pl-5 text-sm text-muted-foreground list-disc">
            <li>Email addresses or real names</li>
            <li>Passwords or authentication tokens</li>
            <li>Payment or billing information</li>
            <li>IP addresses for tracking purposes</li>
            <li>Browsing history or device identifiers</li>
            <li>
              Cookies or analytics trackers (no Google Analytics, no tracking
              pixels)
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "usage",
    icon: Eye,
    title: "How We Use Your Information",
    content: (
      <ul className="mt-4 space-y-2 pl-6 text-muted-foreground list-disc">
        <li>
          Display your chess rating badge next to your name in the extension
          panel.
        </li>
        <li>Show your rating on the channel leaderboard.</li>
        <li>
          Notify other viewers in real time when you link or unlink your account
          (via Twitch PubSub).
        </li>
        <li>
          Cache your ratings temporarily (up to 6 hours) to reduce API calls and
          improve performance.
        </li>
      </ul>
    ),
  },
  {
    id: "legal-basis",
    title: "Legal Basis for Processing",
    content: (
      <>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Under the General Data Protection Regulation (GDPR), we process your
          data on the following legal bases:
        </p>
        <ul className="mt-3 space-y-2 pl-6 text-muted-foreground list-disc">
          <li>
            <span className="font-medium text-foreground">Consent</span> — You
            actively choose to link your chess account and grant Twitch identity
            sharing permission through Twitch&apos;s built-in consent dialog.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Legitimate interest
            </span>{" "}
            — Temporary caching of ratings for performance optimization.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "storage",
    title: "Data Storage and Security",
    content: (
      <ul className="mt-4 space-y-2 pl-6 text-muted-foreground list-disc">
        <li>
          Data is stored in an SQLite database on a server located in the{" "}
          <span className="font-medium text-foreground">
            European Union (OVH, France)
          </span>
          .
        </li>
        <li>No data is transferred outside the EU for storage.</li>
        <li>
          All communications are encrypted with HTTPS (TLS) via a Caddy reverse
          proxy.
        </li>
        <li>
          Access to the database is restricted to the extension backend service
          only.
        </li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Data Sharing",
    content: (
      <>
        <ul className="mt-4 space-y-2 pl-6 text-muted-foreground list-disc">
          <li>
            Your chess username and ratings are{" "}
            <span className="font-medium text-foreground">
              visible to other viewers
            </span>{" "}
            on the same Twitch channel — this is the core purpose of the
            extension.
          </li>
          <li>
            We query the Chess.com and Lichess public APIs to fetch your ratings.
            We do not send your Twitch User ID to these services.
          </li>
          <li>
            We do not sell, rent, or share your data with any third parties for
            advertising, marketing, or analytics purposes.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    icon: Trash2,
    title: "Data Retention",
    content: (
      <ul className="mt-4 space-y-2 pl-6 text-muted-foreground list-disc">
        <li>
          Your linked account data is stored for as long as your account remains
          linked.
        </li>
        <li>Rating cache entries expire automatically after 6 hours.</li>
        <li>
          When you click{" "}
          <span className="font-medium text-foreground">
            &quot;Unlink account&quot;
          </span>{" "}
          in the extension, your record is{" "}
          <span className="font-medium text-foreground">
            permanently deleted
          </span>{" "}
          from the database.
        </li>
      </ul>
    ),
  },
  {
    id: "rights",
    title: "Your Rights (GDPR)",
    content: (
      <>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          As a user in the European Union, you have the following rights:
        </p>
        <ul className="mt-3 space-y-2 pl-6 text-muted-foreground list-disc">
          <li>
            <span className="font-medium text-foreground">Access</span> — You
            can view your linked data directly in the extension panel at any
            time.
          </li>
          <li>
            <span className="font-medium text-foreground">Deletion</span> —
            Click &quot;Unlink account&quot; to permanently delete your data. You
            may also contact us to request manual deletion.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Withdraw consent
            </span>{" "}
            — Unlink your account at any time, no questions asked.
          </li>
          <li>
            <span className="font-medium text-foreground">Portability</span> —
            Contact us to receive a copy of your stored data in a standard
            format.
          </li>
          <li>
            <span className="font-medium text-foreground">Complaint</span> — You
            have the right to file a complaint with a supervisory authority (CNIL
            in France).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: (
      <p className="mt-4 leading-relaxed text-muted-foreground">
        ChessRank is not directed at children under 13. Twitch&apos;s Terms of
        Service require users to be at least 13 years old. We do not knowingly
        collect data from children.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p className="mt-4 leading-relaxed text-muted-foreground">
        We may update this Privacy Policy from time to time. The &quot;Last
        updated&quot; date at the top of this page will be revised accordingly.
        Continued use of the extension after changes constitutes acceptance of
        the updated policy.
      </p>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact",
    content: (
      <p className="mt-4 leading-relaxed text-muted-foreground">
        If you have any questions about this Privacy Policy or wish to exercise
        your rights, contact us at{" "}
        <a
          href="mailto:thomas@mebarki.dev"
          className="font-medium text-teal underline-offset-4 hover:underline"
        >
          thomas@mebarki.dev
        </a>
        .
      </p>
    ),
  },
];

export default function ChessRankPrivacyPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-mono text-muted-foreground">
          Last updated — March 25, 2026
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Chess<span className="text-teal">Rank</span> — Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          How the ChessRank Twitch Extension handles your data.
        </p>

        <hr className="my-12 border-border" />

        {sections.map((section, i) => (
          <div key={section.id} className={i > 0 ? "mt-12" : ""}>
            <h2 className="flex items-center gap-2 text-2xl font-semibold">
              {section.icon && (
                <section.icon className="size-5 text-teal" />
              )}
              {section.title}
            </h2>
            {section.content}
          </div>
        ))}
      </div>
    </section>
  );
}
