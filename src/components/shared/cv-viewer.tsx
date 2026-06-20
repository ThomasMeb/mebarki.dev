"use client";
import { useState } from "react";
import { Download } from "lucide-react";

const FILES = {
  FR: "/cv/Thomas_Mebarki_CV.pdf",
  EN: "/cv/Thomas_Mebarki_CV_EN.pdf",
} as const;

type Lang = keyof typeof FILES;

export function CvViewer() {
  const [lang, setLang] = useState<Lang>("FR");
  const file = FILES[lang];

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)]">
      {/* Window title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </span>
        <span className="ml-3 truncate font-mono text-xs text-muted-foreground">
          Thomas_Mebarki_CV{lang === "EN" ? "_EN" : ""}.pdf
        </span>

        <div className="ml-auto flex items-center gap-3">
          {/* Lang toggle */}
          <div className="flex overflow-hidden rounded-md border border-border font-mono text-xs">
            {(Object.keys(FILES) as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 transition-colors ${
                  lang === l
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={file}
            download
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-teal"
            aria-label={`Télécharger le CV ${lang}`}
          >
            <Download className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">télécharger</span>
          </a>
        </div>
      </div>

      {/* PDF preview — toolbar hidden for a cleaner embed */}
      <iframe
        key={lang}
        src={`${file}#toolbar=0&navpanes=0&view=FitH`}
        className="h-[78vh] w-full bg-[#3a3f44]"
        title={`CV Thomas Mebarki (${lang})`}
      />
    </div>
  );
}
