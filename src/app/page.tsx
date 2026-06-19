import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { HomeIntro } from "@/components/sections/home-intro";
import { ProjectGrid } from "@/components/sections/project-grid";
import { HomeCta } from "@/components/sections/home-cta";

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
      <HomeIntro />
      <ProjectGrid />
      <HomeCta />
    </>
  );
}
