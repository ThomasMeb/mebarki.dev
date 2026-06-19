import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "CV",
  description: "Téléchargez le CV de Thomas Mebarki — ML Engineer & Entrepreneur.",
};

const cvFiles = [
  {
    label: "CV Français",
    href: "/cv/Thomas_Mebarki_CV.pdf",
    icon: FileText,
    lang: "FR",
  },
  {
    label: "CV English",
    href: "/cv/Thomas_Mebarki_CV_EN.pdf",
    icon: Globe,
    lang: "EN",
  },
];

export default function CVPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Curriculum</span>
        <h1 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
          Mon <span className="text-teal">CV</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Téléchargez mon CV en français ou en anglais.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {cvFiles.map((cv) => (
            <Button
              key={cv.lang}
              asChild
              size="lg"
              variant={cv.lang === "FR" ? "default" : "outline"}
              className={
                cv.lang === "FR"
                  ? "bg-teal text-background hover:bg-teal/90"
                  : "border-border hover:border-teal/50 hover:text-teal"
              }
            >
              <Link href={cv.href} target="_blank" download>
                <cv.icon className="mr-2 h-5 w-5" />
                {cv.label}
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ))}
        </div>

        {/* PDF Preview */}
        <div className="mt-16 overflow-hidden rounded-xl border border-border">
          <iframe
            src="/cv/Thomas_Mebarki_CV.pdf"
            className="h-[70vh] w-full"
            title="CV Thomas Mebarki"
          />
        </div>
      </div>
    </section>
  );
}
