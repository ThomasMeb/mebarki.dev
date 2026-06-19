"use client";
import { motion } from "framer-motion";

export function MetricCard({
  label,
  value,
  delta,
  color,
}: {
  label: string;
  value: string;
  delta?: string;
  color?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="rounded-xl border border-border bg-card p-5 text-center"
    >
      <p
        className="font-mono text-2xl font-bold text-teal"
        style={color ? { color } : undefined}
      >
        {value}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
      {delta && <p className="mt-1 text-xs text-green-400">{delta}</p>}
    </motion.div>
  );
}
