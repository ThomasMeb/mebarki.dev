"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CardContainer, CardBody, CardItem } from "@/components/aceternity/3d-card";
import { projects } from "@/lib/data/projects";
import { CATEGORY_COLORS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectGrid() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Mes <span className="text-teal">Projets</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Machine Learning, NLP, Computer Vision, SaaS & Trading
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={item}>
              <Link href={`/projects/${project.slug}`}>
                <CardContainer containerClassName="w-full">
                  <CardBody className="group relative w-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-teal/30">
                    <CardItem translateZ={30} className="w-full">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            {project.image && (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={28}
                                height={28}
                                className="rounded"
                              />
                            )}
                            <h3 className="text-lg font-bold">{project.title}</h3>
                          </div>
                          <p className="mt-1 text-sm text-teal">{project.subtitle}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-teal" />
                      </div>
                    </CardItem>

                    <CardItem translateZ={20} className="mt-4 w-full">
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </CardItem>

                    <CardItem translateZ={15} className="mt-4 w-full">
                      <div className="flex flex-wrap gap-1.5">
                        {project.categories.map((cat) => (
                          <Badge
                            key={cat}
                            variant="outline"
                            className={CATEGORY_COLORS[cat] || "border-border text-muted-foreground"}
                          >
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </CardItem>

                    <CardItem translateZ={10} className="mt-4 w-full">
                      <div className="flex gap-4">
                        {project.metrics.slice(0, 3).map((m) => (
                          <div key={m.label} className="text-center">
                            <p className="text-sm font-bold text-teal">{m.value}</p>
                            <p className="text-xs text-muted-foreground">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
