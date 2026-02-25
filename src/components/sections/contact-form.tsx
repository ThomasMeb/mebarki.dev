"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FORMSPREE_URL = "https://formspree.io/f/" + (process.env.NEXT_PUBLIC_FORMSPREE_ID || "placeholder");

const SUBJECTS = [
  "Opportunité professionnelle",
  "Collaboration",
  "Question technique",
  "egir.app",
  "Autre",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [subject, setSubject] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("subject", subject);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setSubject("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-4 rounded-xl border border-border bg-card p-6"
    >
      <h3 className="text-lg font-semibold">Envoyer un message</h3>

      <Input name="name" placeholder="Nom *" required className="bg-secondary" />
      <Input name="email" type="email" placeholder="Email *" required className="bg-secondary" />

      <Select value={subject} onValueChange={setSubject}>
        <SelectTrigger className="bg-secondary">
          <SelectValue placeholder="Sujet" />
        </SelectTrigger>
        <SelectContent>
          {SUBJECTS.map((s) => (
            <SelectItem key={s} value={s}>
              {s}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Textarea
        name="message"
        placeholder="Message *"
        required
        rows={5}
        className="bg-secondary"
      />

      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-teal text-background hover:bg-teal/90"
      >
        {status === "sending" ? (
          "Envoi..."
        ) : (
          <>
            Envoyer <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      {status === "success" && (
        <div className="flex items-center gap-2 text-sm text-green-400">
          <CheckCircle size={16} />
          Message envoyé ! Je vous répondrai sous 24-48h.
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle size={16} />
          Erreur d&apos;envoi. Réessayez ou contactez-moi directement par email.
        </div>
      )}
    </motion.form>
  );
}
