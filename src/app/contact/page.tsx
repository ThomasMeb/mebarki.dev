import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Twitter, ExternalLink, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { SOCIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Thomas Mebarki — ML Engineer & Entrepreneur.",
};

const socialLinks = [
  { icon: Github, label: "GitHub", href: SOCIAL.github },
  { icon: Linkedin, label: "LinkedIn", href: SOCIAL.linkedin },
  { icon: Twitter, label: "X / Twitter", href: SOCIAL.twitter },
  { icon: ExternalLink, label: "egir.app", href: SOCIAL.egir },
];

export default function ContactPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
            Me <span className="text-teal">Contacter</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Toujours ouvert aux discussions sur le ML, l&apos;entrepreneuriat ou une collaboration.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left - Info */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Discutons de</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Opportunités professionnelles en ML / Data Science</li>
                <li>Collaborations sur des projets innovants</li>
                <li>Échanges sur l&apos;IA et l&apos;entrepreneuriat</li>
                <li>EGIR si vous êtes restaurateur !</li>
              </ul>
            </div>

            <div>
              <h3 className="eyebrow mb-3 block">
                Email
              </h3>
              <Link
                href={`mailto:${SOCIAL.email}`}
                className="flex items-center gap-2 text-teal hover:underline"
              >
                <Mail size={16} />
                {SOCIAL.email}
              </Link>
            </div>

            <div>
              <h3 className="eyebrow mb-3 block">
                Localisation
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                France — Disponible en remote
              </div>
            </div>

            <div>
              <h3 className="eyebrow mb-3 block">
                Réseaux
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-colors hover:border-teal/30 hover:text-teal"
                    aria-label={link.label}
                  >
                    <link.icon size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
