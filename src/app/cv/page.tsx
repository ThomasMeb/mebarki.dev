import type { Metadata } from "next";
import { CvViewer } from "@/components/shared/cv-viewer";

export const metadata: Metadata = {
  title: "CV",
  description: "Téléchargez le CV de Thomas Mebarki — ML Engineer & Entrepreneur.",
};

export default function CVPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs text-teal">$ open cv.pdf</span>
          <h1 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
            Mon <span className="text-teal">CV</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Consultez le CV ci-dessous, ou téléchargez-le en français ou en anglais.
          </p>
        </div>

        <CvViewer />
      </div>
    </section>
  );
}
