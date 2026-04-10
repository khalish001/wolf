"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Button } from "@/components/ui/button"
import { ExternalLink, Palette, Rocket, UtensilsCrossed } from "lucide-react"

const projects = [
  {
    title: "Resturant",
    description: "The meal are fresh, well-cooked, and full of flavour.",
    image: "/1.png",
    link: "https://canva.link/mj634tpn8g646gj",
    icon: UtensilsCrossed,
  },
  {
    title: "Make up",
    description: "This is a soft glam make up look...",
    image: "/2.png",
    link: "https://canva.link/s3eahdk55ztypqp",
    icon: Palette,
  },
  {
    title: "khalima lopez",
    description: "it helps students revies and understand their work better.",
    image: "/3.png",
    link: "https://canva.link/fxzp77j87svpms9",
    icon: Rocket,
  },
]

const isSupportedImage = (src: string) =>
  /\.(png|jpe?g|webp|gif|svg)$/i.test(src)

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="px-4 py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A few things I built and designed recently
          </p>
        </div>

        <BentoGrid className="max-w-none">
          {projects.map((project, index) => {
            const Icon = project.icon
            const imageSrc = isSupportedImage(project.image) ? project.image : "/file.svg"

            return (
              <BentoGridItem
                key={project.title}
                className={index === 2 ? "md:col-span-2" : ""}
                header={
                  <div className="group relative h-44 w-full overflow-hidden rounded-lg">
                    <Image
                      src={imageSrc}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                }
                title={
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{project.title}</span>
                  </div>
                }
                description={
                  <div className="space-y-4">
                    <p>{project.description}</p>
                    <Button asChild variant="outline" size="sm">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                }
              />
            )
          })}
        </BentoGrid>
      </div>
    </motion.section>
  )
}
