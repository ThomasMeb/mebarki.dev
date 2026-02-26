import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ProjectGrid } from "@/components/sections/project-grid";

export const metadata: Metadata = {
  title: "Thomas Mebarki — ML Engineer & Entrepreneur",
  description:
    "Portfolio de Thomas Mebarki — ML Engineer & Entrepreneur. Projets en Machine Learning, NLP, Computer Vision et SaaS. Fondateur d'EGIR, Grada et JobScout.",
  alternates: { canonical: "https://mebarki.dev" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
    </>
  );
}
