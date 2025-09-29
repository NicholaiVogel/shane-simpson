import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, Youtube } from "lucide-react";
import { LINKS } from "@/lib/links";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer aria-label="Site footer" className="bg-background/0 border-t border-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Shane Simpson</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              VFX Artist — Houdini, FX & Lighting
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild size="sm">
                <a
                  href={LINKS.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View CV"
                >
                  View CV
                </a>
              </Button>

              <Button asChild variant="outline" size="sm">
                <a
                  href={LINKS.fxReel}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View FX reel"
                >
                  FX Reel
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium">Quick links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <a href="#portfolio" className="hover:underline">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#cv" className="hover:underline">
                  CV
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium">Connect</h4>
            <p className="mt-2 text-sm text-muted-foreground">Follow or send a quick message</p>

            <div className="mt-3 flex items-center gap-2">
              <Button asChild variant="ghost" size="sm">
                <a href="mailto:hello@shanesimpson.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="ghost" size="sm">
                <a
                  href="https://www.imdb.com/name/nm5104608/?ref_=ext_shr_lnk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="IMDB"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="ghost" size="sm">
                <a
                  href="https://www.linkedin.com/in/shane-simpson"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="ghost" size="sm">
                <a
                  href={LINKS.reel2019}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vimeo reel"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Separator />
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">
          <p>© {year} Shane Simpson. All rights reserved.</p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{" "}
            • Designed with Tailwind + shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
