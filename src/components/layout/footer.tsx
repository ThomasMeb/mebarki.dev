import Link from "next/link";
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { SOCIAL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Thomas Mebarki
          </p>
          <span className="hidden sm:inline text-border">·</span>
          <Link
            href="/chessrank/privacy"
            className="hidden sm:inline transition-colors hover:text-teal"
          >
            Privacy
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-teal"
            aria-label="GitHub"
          >
            <Github size={18} />
          </Link>
          <Link
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-teal"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href={SOCIAL.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-teal"
            aria-label="X / Twitter"
          >
            <Twitter size={18} />
          </Link>
          <Link
            href={SOCIAL.egir}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-teal"
            aria-label="egir.app"
          >
            <ExternalLink size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
