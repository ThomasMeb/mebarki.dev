import type { Metadata } from "next";
import { spaceMono, ibmPlexSans, jetbrainsMono } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/layout/lenis-provider";
import { SITE } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    creator: "@_elmeb_",
  },
  robots: { index: true, follow: true },
  other: {
    "theme-color": "#0a0c0f",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Thomas Mebarki",
              url: "https://mebarki.dev",
              jobTitle: "ML Engineer & Entrepreneur",
              description:
                "ML Engineer & Entrepreneur. Fondateur d'EGIR (SaaS restauration), Grada (trading automatisé) et JobScout (veille emploi IA).",
              knowsAbout: [
                "Machine Learning",
                "NLP",
                "Computer Vision",
                "Python",
                "Deep Learning",
                "SaaS",
              ],
              sameAs: [
                "https://github.com/ThomasMeb",
                "https://linkedin.com/in/thomasmebarki",
                "https://x.com/_elmeb_",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${ibmPlexSans.variable} ${spaceMono.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <LenisProvider>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
