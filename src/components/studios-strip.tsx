import { Badge } from "@/components/ui/badge"

type Studio = { name: string }

const STUDIOS: Studio[] = [
  { name: "Scanline VFX" },
  { name: "Industrial Light & Magic" },
  { name: "DNEG" },
  { name: "Blur Studio" },
  { name: "FuseFX" },
  { name: "Pixomondo" },
  { name: "Method Studios" },
  { name: "Digic Pictures" },
  { name: "Digital Domain" },
  { name: "MPC" },
  { name: "Framestore" },
  { name: "Digital Tutors" },
  { name: "Panda Panther" },
]

/**
 * StudiosStrip
 * Present studios as a wrapping chip grid using shadcn/ui Badge.
 * This removes any horizontal scrollbar and looks consistent in light/dark.
 */
export function StudiosStrip() {
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {STUDIOS.map((s) => (
        <li key={s.name}>
          <Badge
            variant="secondary"
            className="h-8 rounded-md px-3 text-xs font-medium"
            aria-label={s.name}
            title={s.name}
          >
            {s.name}
          </Badge>
        </li>
      ))}
    </ul>
  )
}
