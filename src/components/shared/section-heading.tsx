"use client";
import { motion } from "framer-motion";

export function SectionHeading({
  title,
  highlight,
  description,
}: {
  title: string;
  highlight: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold tracking-tight">
        {title} <span className="text-teal">{highlight}</span>
      </h2>
      {description && (
        <p className="mt-3 text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}
