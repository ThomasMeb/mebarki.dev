"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProjectTabs({
  demo,
  context,
  resources,
}: {
  demo: React.ReactNode;
  context: React.ReactNode;
  resources: React.ReactNode;
}) {
  return (
    <Tabs defaultValue="demo" className="w-full">
      <TabsList className="mb-8 grid w-full grid-cols-3 bg-secondary">
        <TabsTrigger value="demo">Demo</TabsTrigger>
        <TabsTrigger value="context">Contexte</TabsTrigger>
        <TabsTrigger value="resources">Ressources</TabsTrigger>
      </TabsList>
      <TabsContent value="demo">{demo}</TabsContent>
      <TabsContent value="context">{context}</TabsContent>
      <TabsContent value="resources">{resources}</TabsContent>
    </Tabs>
  );
}
