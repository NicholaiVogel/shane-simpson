import type { Metadata } from "next"
import Image from "next/image"
import { ExternalLink, FileText, Film } from "lucide-react"

import { LINKS } from "@/lib/links"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { CollapsibleArea } from "@/components/collapsible-area"
import { StudiosStrip } from "@/components/studios-strip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export const metadata: Metadata = {
  title: "Shane Simpson — VFX Artist (Houdini, FX & Lighting)",
  description:
    "Portfolio of Shane Simpson, a visual effects artist specializing in Houdini, FX, and lighting for film and animation.",
}

// Vimeo numeric IDs provided
const VIMEO = {
  fxReelId: "896003602",
  lightingReelId: "896017082",
  reel2019Id: "427214395",
} as const

const VimeoEmbed = ({ id, title }: { id: string; title: string }) => {
  const src = `https://player.vimeo.com/video/${id}`
  return (
    <div>
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg border bg-muted">
        <iframe
          title={title}
          src={src}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </AspectRatio>
      <div className="mt-2 flex items-center gap-2">
        <Button asChild size="sm" className="gap-2">
          <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} on Vimeo`}>
            <Film className="size-4" aria-hidden="true" />
            Open on Vimeo
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main>
      {/* Top bar with breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-6 md:pt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#top">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Navigation</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbEllipsis className="hidden md:flex" />
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <header id="top" className="mx-auto max-w-6xl px-4 pt-4 md:pt-6 pb-6 pt-6 md:pb-8 md:pt-8">
        <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight md:text-6xl">
          <span className="text-primary">Shane Simpson</span>
        </h1>
        <p className="text-muted-foreground mt-3 max-w-prose text-lg md:text-xl">
          Visual Effects Artist — Houdini, FX & Lighting
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="gap-2">
                  <a
                    href={LINKS.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open CV in a new tab"
                  >
                    <FileText className="size-4" aria-hidden="true" />
                    View CV
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="gap-2">
                  <a
                    href={LINKS.fxReel}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Houdini FX Reel in a new tab"
                  >
                    <Film className="size-4" aria-hidden="true" />
                    Houdini FX Reel
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
          </Button>

          <Button asChild variant="secondary" size="lg" className="gap-2">
                  <a
                    href={LINKS.reel2019}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open 2019 FX Highlight Reel in a new tab"
                  >
                    <Film className="size-4" aria-hidden="true" />
                    2019 FX Highlight
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
          </Button>
        </div>
      </header>

      <Separator className="mx-auto max-w-6xl my-6" />

      <div className="mt-6 flex flex-wrap items-center gap-3">
      </div>


      {/* Top navigation (tabs) */}
      <section className="mx-auto max-w-6xl px-4 pt-4 md:pt-6">
        <Tabs defaultValue="home">
          <TabsList className="grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="home" aria-label="Home">Home</TabsTrigger>
            <TabsTrigger value="portfolio" aria-label="Portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="about" aria-label="About and CV">About / CV</TabsTrigger>
          </TabsList>

          {/* HOME (condensed) */}
          <TabsContent value="home">
            {/* Hero */}
            <div className="grid gap-8 md:grid-cols-12 md:gap-10">
              {/* Sticky lede */}
              <aside className="md:col-span-5">
                
                <div className="sticky top-24 py-6 md:py-8">
                  <h2 className="text-pretty text-3xl font-semibold leading-tight md:text-4xl">
                    From curiosity to craft
                  </h2>
                  <p className="text-muted-foreground mt-3 text-base leading-relaxed md:text-lg">
                    Building images that feel inevitable&mdash;shaped by physics, story,
                    and restraint.
                  </p>

                  {/* Skills strip (horizontal on small, wrapped on large) */}
                  <div className="mt-6 md:mt-8">
                    <ScrollArea className="max-w-full">
                      <div className="flex w-max items-center gap-2 pb-2 md:w-full md:flex-wrap">
                        <Badge variant="secondary">Houdini</Badge>
                        <Badge variant="secondary">FX</Badge>
                        <Badge variant="secondary">Lighting</Badge>
                        <Badge variant="outline">Maya</Badge>
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </div>
              </aside>

              {/* Condensed right column */}
              <article className="space-y-8 md:col-span-7 md:space-y-10 py-6 md:py-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Highlights</CardTitle>
                    <CardDescription>
                      A quick look at recent work and affiliations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <VimeoEmbed id={VIMEO.fxReelId} title="Houdini FX Reel" />
                    <div>
                      <h3 className="text-sm font-semibold">Studios</h3>
                      <div className="mt-3">
                        <StudiosStrip />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>
            </div>
          </TabsContent>

          {/* PORTFOLIO */}
          <TabsContent value="portfolio">
            <div className="py-6 md:py-8">
              <h2 className="text-pretty text-3xl font-semibold leading-tight md:text-4xl">
                Portfolio
              </h2>
              <p className="text-muted-foreground mt-2">
                Selected reels and highlights.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Houdini FX Reel</CardTitle>
                  <CardDescription>Physically grounded FX with production-friendly iteration.</CardDescription>
                </CardHeader>
                <CardContent>
                  <VimeoEmbed id={VIMEO.fxReelId} title="Houdini FX Reel" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lighting Reel</CardTitle>
                  <CardDescription>Selected lighting work across film and cinematics.</CardDescription>
                </CardHeader>
                <CardContent>
                  <VimeoEmbed id={VIMEO.lightingReelId} title="Lighting Reel" />
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>2019 FX Highlight</CardTitle>
                  <CardDescription>Earlier highlights and studies.</CardDescription>
                </CardHeader>
                <CardContent>
                  <VimeoEmbed id={VIMEO.reel2019Id} title="2019 FX Highlight Reel" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ABOUT / CV (full current content) */}
          <TabsContent value="about">
            {/* Editorial section with sticky left rail */}
            <section id="story" className="relative">
              <div className="pt-12 pb-20 md:pt-16 md:pb-28">
                <div className="grid gap-8 md:grid-cols-12 md:gap-10">
                  {/* Sticky heading/lede */}
                  <aside className="md:col-span-5">
                    <div className="sticky top-24">
                      <h2 className="text-pretty text-3xl font-semibold leading-tight md:text-4xl">
                        From curiosity to craft
                      </h2>
                      <p className="text-muted-foreground mt-3 text-base leading-relaxed md:text-lg">
                        Building images that feel inevitable&mdash;shaped by physics, story,
                        and restraint.
                      </p>

                      {/* Skills strip (horizontal on small, wrapped on large) */}
                      <div className="mt-6 md:mt-8">
                        <ScrollArea className="max-w-full">
                          <div className="flex w-max items-center gap-2 pb-2 md:w-full md:flex-wrap">
                            <Badge variant="secondary">Houdini</Badge>
                            <Badge variant="secondary">FX</Badge>
                            <Badge variant="secondary">Lighting</Badge>
                            <Badge variant="outline">Maya</Badge>
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    </div>
                  </aside>

                  {/* Flowing content right column */}
                  <article className="space-y-8 md:col-span-7 md:space-y-10">
                    <Card>
                      <CardHeader>
                        <CardTitle>Bio</CardTitle>
                        <CardDescription>
                          A career shaped by curiosity, collaboration, and craft.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 leading-7">
                        <p>
                          Maya was the first software I learned in 2008. 2009 began my
                          time at the School of Visual Art in Manhattan for Computer
                          Animation and Visual Effects in pursuit of my Bachelor's
                          of Fine Art degree.
                        </p>
                        <p>
                          Sophomore year was when I started learning Houdini. The same
                          year I began working my first internship and involving myself
                          in as many senior thesis projects as possible.
                        </p>
                        <p>
                          By Junior year after two internships under my belt I had
                          landed my first job for both lighting and FX at an animation
                          studio called Panda Panther in NYC. From that point and after
                          graduation in 2013, I continued to freelance from NYC, to LA,
                          to Hungary and then Canada for companies such as;
                        </p>
                        <p className="text-balance">
                          Aardman Nathan Love, Framestore, MPC, Psyop, Digital Domain,
                          Digic Pictures, Pixomondo, FuseFX, Method Studios, Blur
                          Studios, DNeg
                        </p>
                        <p>My motivation is to create great work and continue learning.</p>
                      </CardContent>
                    </Card>

                    <Separator />

                    {/* Right-aligned media block inside card */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent work and reels</CardTitle>
                        <CardDescription>
                          Selected highlights and studies in motion.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid items-start gap-6 md:grid-cols-5">
                          <div className="space-y-4 leading-7 md:col-span-3">
                            <p>
                              Focused on physically grounded effects, lighting, and the
                              interplay between simulation and composition. I favor
                              readable setups and production-friendly iteration.
                            </p>
                            <div className="flex flex-wrap gap-3">
                              <Button asChild size="sm" className="gap-2">
                                <a
                                  href={LINKS.fxReel}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Open Houdini FX Reel in a new tab"
                                >
                                  <Film className="size-4" aria-hidden="true" />
                                  FX Reel
                                  <ExternalLink className="size-4" aria-hidden="true" />
                                </a>
                              </Button>
                              <Button asChild size="sm" variant="outline" className="gap-2">
                                <a
                                  href={LINKS.reel2019}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Open 2019 FX Highlight Reel in a new tab"
                                >
                                  <Film className="size-4" aria-hidden="true" />
                                  2019 Highlight
                                  <ExternalLink className="size-4" aria-hidden="true" />
                                </a>
                              </Button>
                              <Button asChild size="sm" variant="secondary" className="gap-2">
                                <a
                                  href={LINKS.cv}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Open CV in a new tab"
                                >
                                  <FileText className="size-4" aria-hidden="true" />
                                  CV
                                  <ExternalLink className="size-4" aria-hidden="true" />
                                </a>
                              </Button>
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border bg-muted">
                              <Image
                                src="/window.svg"
                                alt=""
                                fill
                                className="object-contain p-6"
                                sizes="(min-width: 768px) 320px, 100vw"
                                priority
                              />
                            </div>
                            <p className="text-muted-foreground mt-2 text-xs">
                              Representative still — replace with artwork or film still.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </article>
                </div>
              </div>
            </section>

            {/* CV Section */}
            <section id="cv" className="relative">
              <div className="py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-12 md:gap-10">
                  {/* Sticky heading/lede for CV */}
                  <aside className="md:col-span-5">
                    <div className="sticky top-24">
                      <h2 className="text-pretty text-3xl font-semibold leading-tight md:text-4xl">
                        Curriculum Vitae
                      </h2>
                      <p className="text-muted-foreground mt-3 text-base leading-relaxed md:text-lg">
                        Selected experience, skills, and education.
                      </p>

                      {/* Section anchors */}
                      <nav
                        aria-label="CV sections"
                        className="mt-6 hidden flex-col gap-2 md:flex"
                      >
                        <a
                          href="#cv-objective"
                          className="rounded px-1 py-0.5 text-sm text-foreground/80 hover:text-foreground hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          Objective
                        </a>
                        <a
                          href="#cv-experience"
                          className="rounded px-1 py-0.5 text-sm text-foreground/80 hover:text-foreground hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          Experience
                        </a>
                        <a
                          href="#cv-skills"
                          className="rounded px-1 py-0.5 text-sm text-foreground/80 hover:text-foreground hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          Skills
                        </a>
                        <a
                          href="#cv-education"
                          className="rounded px-1 py-0.5 text-sm text-foreground/80 hover:text-foreground hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          Education
                        </a>
                        <a
                          href="#cv-references"
                          className="rounded px-1 py-0.5 text-sm text-foreground/80 hover:text-foreground hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          References
                        </a>
                      </nav>
                    </div>
                  </aside>

                  {/* CV content */}
                  <article className="space-y-8 md:col-span-7 md:space-y-10">
                    <Card id="cv-objective" className="scroll-mt-28">
                      <CardHeader>
                        <CardTitle>Objective</CardTitle>
                        <CardDescription>
                          Driven by continuous learning and production-ready workflows.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="leading-7">
                        <p>
                          I strive to provide realistic simulations by continuously learning the
                          latest tools, softwares, and workflows for working in a fast-paced
                          production pipeline.
                        </p>
                      </CardContent>
                    </Card>

                    <Separator />

                    <Card>
                      <CardHeader>
                        <CardTitle>Studios</CardTitle>
                        <CardDescription>Selected studios Shane has contributed to.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <StudiosStrip />
                      </CardContent>
                    </Card>

                    <Separator />

                    <Card id="cv-experience" className="scroll-mt-28">
                      <CardHeader>
                        <CardTitle>Experience</CardTitle>
                        <CardDescription>
                          Film, TV, and cinematics across leading studios.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Collapsible list to keep the section concise */}
                        <CollapsibleArea>
                          <div className="space-y-6">
                            {/* ScanlineVFX */}
                            <section>
                              <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold">
                                  FX TD and Generalist (Lighting TD) — ScanlineVFX
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  Vancouver, BC — June 2021 – December 2023
                                </p>
                              </div>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                                <li>
                                  Worked on films such as The Adam Project, The Grey Man, Black
                                  Adam, and The Meg 2.
                                </li>
                                <li>
                                  Created particle and volumetric FX including rigid body dynamics
                                  in Houdini. Transitioned to Lighting, working in 3DS Max.
                                </li>
                              </ul>
                            </section>

                            <Separator />

                            {/* ILM */}
                            <section>
                              <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold">
                                  FX TD — Industrial Light & Magic
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  Vancouver, BC — March 2021 – May 2021
                                </p>
                              </div>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                                <li>Worked on Jurassic World: Dominion.</li>
                                <li>
                                  Created particle and fire FX, including rigid body dynamics
                                  work.
                                </li>
                              </ul>
                            </section>

                            <Separator />

                            {/* DNEG */}
                            <section>
                              <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold">FX TD — DNEG</h3>
                                <p className="text-xs text-muted-foreground">
                                  Vancouver, BC — February 2020 – April 2020
                                </p>
                              </div>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                                <li>
                                  Worked on Dune; created volumetric FX in Houdini and rendered
                                  with Clarisse.
                                </li>
                                <li>Worked on Ghostbusters; volumetric dust and particle FX.</li>
                              </ul>
                            </section>

                            <Separator />

                            {/* Blur Studio */}
                            <section>
                              <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold">FX Animator — Blur Studio</h3>
                                <p className="text-xs text-muted-foreground">
                                  Los Angeles, CA — April 2019 – August 2019
                                </p>
                              </div>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                                <li>
                                  Created particle and volumetric FX for The Elder Scrolls Online
                                  cinematic.
                                </li>
                                <li>
                                  Created particle, volumetric, and rigid body FX for League of
                                  Legends cinematic; FX in Houdini, lit in V-Ray for 3DS Max.
                                </li>
                              </ul>
                            </section>

                            <Separator />

                            {/* FuseFX */}
                            <section>
                              <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold">Lead FX Artist — FuseFX</h3>
                                <p className="text-xs text-muted-foreground">
                                  Los Angeles & Vancouver, BC — Sep 2017 – Jan 2018, Sep 2018 – Feb 2019
                                </p>
                              </div>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                                <li>
                                  Created Houdini FX for The Tick, The Magicians, Lost in Space,
                                  Deadly Class, The 100, and The Orville.
                                </li>
                                <li>
                                  Bidded and delivered FX shots for The Magicians S3; reviewed work
                                  and provided feedback.
                                </li>
                                <li>
                                  Led insect swarm across 15 shots; smoke, FLIP, and environment FX;
                                  rendered with Mantra.
                                </li>
                                <li>Created FX assets exported and tested in 3DS Max.</li>
                              </ul>
                            </section>

                            <Separator />

                            {/* Pixomondo */}
                            <section>
                              <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold">Senior FX Artist — Pixomondo</h3>
                                <p className="text-xs text-muted-foreground">
                                  Vancouver, BC — Jan 2017 – Sep 2017, Jul 2018 – Sep 2018
                                </p>
                              </div>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                                <li>
                                  Created large-scale simulations: bullet glass, FLIP, volumetrics
                                  (smoke/dust), particles; lighting/rendering with Mantra and V-Ray.
                                </li>
                                <li>
                                  Developed a cloud asset tool used to populate over 35 shots; dynamic
                                  “Balloon Spider” CFX rig for Goosebumps 2.
                                </li>
                              </ul>
                            </section>

                            <Separator />

                            {/* Method Studios */}
                            <section>
                              <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold">FX TD — Method Studios</h3>
                                <p className="text-xs text-muted-foreground">
                                  Vancouver, BC — Feb 2018 – May 2018
                                </p>
                              </div>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                                <li>FX asset: bubble force field for The New Mutants.</li>
                                <li>Various FX assets for Ant-Man and the Wasp.</li>
                              </ul>
                            </section>

                            <Separator />

                            {/* Digic Pictures */}
                            <section>
                              <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold">FX Artist — Digic Pictures</h3>
                                <p className="text-xs text-muted-foreground">
                                  Budapest, Hungary — Feb 2016 – Dec 2016
                                </p>
                              </div>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                                <li>Created FX for Final Fantasy XV: Kingsglaive.</li>
                                <li>
                                  Worked on several game cinematics including League of Legends; FX
                                  in Houdini and Maya.
                                </li>
                              </ul>
                            </section>

                            <Separator />

                            {/* Digital Domain */}
                            <section>
                              <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold">
                                  Houdini FX & Lighting Artist — Digital Domain
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  Los Angeles — Aug 2015 – Oct 2015
                                </p>
                              </div>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                                <li>Lighting in V-Ray for Maya on Starz' Black Sails.</li>
                                <li>Cloud FX in Houdini rendered with Mantra.</li>
                              </ul>
                            </section>

                            <Separator />

                            {/* MPC */}
                            <section>
                              <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold">
                                  FX & Lighting/Texture Artist — MPC NY/LA
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  New York, NY — 2013–2015 (various engagements)
                                </p>
                              </div>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                                <li>Commercial FX: nCloth, nParticles, Maya Fluids.</li>
                                <li>
                                  Assisted lighting using Mental Ray, Arnold; textured environment
                                  assets in Mari.
                                </li>
                              </ul>
                            </section>

                            <Separator />

                            {/* Framestore */}
                            <section>
                              <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold">
                                  FX & Lighting Artist — Framestore NY/LA
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  NY — Jul–Aug 2013; LA — May 2014 – Feb 2015
                                </p>
                              </div>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                                <li>
                                  Commercials: 7up “Light it up” (2015), Julius Baer (2015), Target
                                  Holiday (2014–2015).
                                </li>
                                <li>
                                  Houdini shatter assets and simulations for Mercedes-Benz CLA
                                  “Barriers” (2013).
                                </li>
                              </ul>
                            </section>

                            <Separator />

                            {/* Digital Tutors */}
                            <section>
                              <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold">Digital Tutors — Author</h3>
                                <p className="text-xs text-muted-foreground">March 2015 – May 2015</p>
                              </div>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                                <li>
                                  Created series “Workflow for Rendering Fur in V-Ray”.
                                </li>
                                <li>
                                  Covered stylization with texture-driven maps and render optimization
                                  techniques.
                                </li>
                              </ul>
                            </section>

                            <Separator />

                            {/* Panda Panther */}
                            <section>
                              <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold">
                                  Lead FX Artist & Lighting — Panda Panther
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  New York, NY — May – July 2012
                                </p>
                              </div>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                                <li>
                                  Effects and lighting for Spyro: Skylanders using Maya Fluids and
                                  nParticles; lighting in V-Ray.
                                </li>
                              </ul>
                            </section>
                          </div>
                        </CollapsibleArea>
                      </CardContent>
                    </Card>

                    <Separator />

                    <Card id="cv-skills" className="scroll-mt-28">
                      <CardHeader>
                        <CardTitle>Skills</CardTitle>
                      </CardHeader>
                      <CardContent className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <h4 className="text-sm font-semibold">Effects</h4>
                          <p className="text-sm text-muted-foreground">Houdini, Maya, RealFlow</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold">Lighting / Rendering</h4>
                          <p className="text-sm text-muted-foreground">
                            V-Ray, 3DS Max, Mental Ray, Arnold, Krakatoa, Mantra, Redshift
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold">Compositing</h4>
                          <p className="text-sm text-muted-foreground">Nuke, After Effects</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold">Texturing</h4>
                          <p className="text-sm text-muted-foreground">Mudbox, Mari, Photoshop, Illustrator</p>
                        </div>
                        <div className="sm:col-span-2">
                          <h4 className="text-sm font-semibold">Coding</h4>
                          <p className="text-sm text-muted-foreground">Python, Node.js, Java, TypeScript, C++</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Separator />

                    <Card id="cv-education" className="scroll-mt-28">
                      <CardHeader>
                        <CardTitle>Education</CardTitle>
                      </CardHeader>
                      <CardContent className="leading-7">
                        <p>
                          School of Visual Arts — BFA, Computer Animation and Visual Effects — 2009–2013
                        </p>
                      </CardContent>
                    </Card>

                    <Separator />

                    <Card id="cv-references" className="scroll-mt-28">
                      <CardHeader>
                        <CardTitle>References</CardTitle>
                      </CardHeader>
                      <CardContent className="leading-7">
                        <p>Available upon request</p>
                      </CardContent>
                    </Card>
                  </article>
                </div>
              </div>
            </section>

            
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}
