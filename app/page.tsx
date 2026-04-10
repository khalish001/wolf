"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GitBranch, Link as LinkIcon, Mail, MessageCircle, Phone } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"
import ProjectsSection from "@/components/ProjectsSection"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />
      <Spotlight className="-top-28 left-[10%] opacity-80" fill="white" />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-12 lg:px-8"
      >
        <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-card/80 px-4 py-2 text-sm text-foreground shadow-sm shadow-black/5 backdrop-blur-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_8px_rgba(16,185,129,0.12)] animate-pulse" />
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-500">
                Available for work
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text">
                Hi, I&apos;m Khalima
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xl font-medium text-foreground/90 sm:text-2xl">
                <span>I build</span>
                <ContainerTextFlip
                  words={["Networking", "Web Development", "Linux", "Design", "CCTV", "Next.js"]}
                  className="text-primary"
                  textClassName="text-primary"
                />
              </div>

              <p className="max-w-2xl text-base leading-8 text-foreground/80 sm:text-lg">
                I build polished, secure digital experiences using modern web stacks and strong infrastructure knowledge. I love turning ideas into clean, responsive interfaces while keeping performance and maintainability front of mind.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild>
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 text-foreground/80">
              <Link href="#" aria-label="GitHub" className="transition hover:text-foreground">
                <GitBranch className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="transition hover:text-foreground">
                <LinkIcon className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Twitter" className="transition hover:text-foreground">
                <MessageCircle className="h-6 w-6" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/80">
              <a
                href="mailto:khalimasuleiman37@gmail.com"
                className="inline-flex items-center gap-2 transition hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                khalimasuleiman37@gmail.com
              </a>
              <a
                href="tel:0756904838"
                className="inline-flex items-center gap-2 transition hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                0756904838
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative w-full max-w-[550px] aspect-square mx-auto order-1 lg:order-2"
          >
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl -z-10 scale-95" />

            {/* Online badge */}
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-background/80 backdrop-blur-sm border border-border/40 flex items-center gap-1.5 px-2 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium">Online</span>
              </Badge>
            </div>

            <Image
              src="/IMG_0603.jpg (1).jpeg"
              alt="Profile Photo"
              fill
              priority
              className="object-cover object-top rounded-2xl shadow-2xl border border-border/40
                         hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
        </div>
      </motion.section>

      <ProjectsSection />
    </main>
  )
}
