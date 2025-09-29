"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

type CollapsibleAreaProps = {
  children: React.ReactNode
  collapsedClass?: string
  expandLabel?: string
  collapseLabel?: string
}

export function CollapsibleArea({
  children,
  collapsedClass = "max-h-[35vh] md:max-h-[40vh] overflow-hidden",
  expandLabel = "Show full CV",
  collapseLabel = "Show less",
}: CollapsibleAreaProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="relative">
      <div className={clsx(!expanded && collapsedClass)}>{children}</div>

      {!expanded && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-background/0" />
      )}

      <div className="mt-4 flex items-center justify-center">
        <Button
          variant="default"
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-label={expanded ? collapseLabel : expandLabel}
        >
          {expanded ? collapseLabel : expandLabel}
        </Button>
      </div>
    </div>
  )
}
