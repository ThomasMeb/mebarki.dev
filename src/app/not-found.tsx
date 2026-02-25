import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-teal">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">Page introuvable</p>
      <Button asChild className="mt-8" variant="outline">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l&apos;accueil
        </Link>
      </Button>
    </section>
  );
}
