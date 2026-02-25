import { Badge } from "@/components/ui/badge";

export function TechBadge({ name }: { name: string }) {
  return (
    <Badge variant="outline" className="border-border bg-secondary text-muted-foreground">
      {name}
    </Badge>
  );
}
