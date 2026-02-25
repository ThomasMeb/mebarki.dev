"use client";
import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-border bg-card p-6 transition duration-200 hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5",
        className
      )}
    >
      {header}
      <div className="transition duration-200">
        {icon}
        <div className="my-2 font-sans font-bold text-foreground">{title}</div>
        <div className="font-sans text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}
