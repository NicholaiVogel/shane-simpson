"use client"

import 'lenis/dist/lenis.css'
import { ReactLenis } from "lenis/react"
import type { LenisRef } from "lenis/react"
import React, { useEffect, useMemo, useRef } from "react"
import Lenis from "lenis"

/**
 * LenisRoot mounts a Lenis instance at the document root.
 * - Runs only on the client ("use client")
 * - Uses reasonable defaults for desktop wheel/touch
 * - Respects prefers-reduced-motion by disabling smoothing
 *
 * Notes:
 * - The ReactLenis component exposes a ref (LenisRef) when you need to call methods
 *   such as scrollTo or raf yourself. We attach a ref here so the instance can be
 *   inspected during development and is ready for any future integrations.
 * - Importing 'lenis/dist/lenis.css' ensures the optional CSS required by Lenis is loaded.
 */
export function LenisRoot() {
  const lenisRef = useRef<LenisRef | null>(null)

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const options = useMemo(
    () => ({
      // Let Lenis drive its own RAF loop (recommended for ReactLenis)
      autoRaf: true,
      // Enable smooth wheel scrolling when the user hasn't requested reduced motion
      smoothWheel: !prefersReducedMotion,
      // Enable a gentle smoothing for touch devices (set true to get smoothing on mobile)
      // You can change this to `false` if you prefer native touch scrolling.
      smoothTouch: !prefersReducedMotion,
      // Enable anchor handling so links to #ids are handled by Lenis
      anchors: true as const,
      // Interpolation factor (0..1) - lower = more smoothing. When reduced motion is requested, disable smoothing.
      lerp: prefersReducedMotion ? 1 : 0.08,
    }),
    [prefersReducedMotion]
  )

  useEffect(() => {
    // Poll a few times until the ReactLenis ref is populated, then expose the instance
    let checks = 0
    const maxChecks = 20
    const interval = setInterval(() => {
      checks += 1

      if (lenisRef.current?.lenis) {
        console.debug("Lenis initialized", lenisRef.current.lenis)
        // Expose on window for quick debugging in devtools
        try {
          // @ts-expect-error - dev-only debugging helper
          window.__lenis = lenisRef.current.lenis
        } catch {
          /* ignore */
        }

        // Ensure the instance is running
        try {
          lenisRef.current.lenis.start?.()
        } catch {
          /* ignore */
        }

        clearInterval(interval)
        return
      }

      if (checks >= maxChecks) {
        console.warn("Lenis did not initialize within expected time")
        clearInterval(interval)
      }
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [])

  React.useEffect(() => {
    const instance = lenisRef.current?.lenis
    if (!instance) return

    const onScroll = (e: Lenis) => {
      console.debug("lenis:scroll", e)
    }

    instance.on?.("scroll", onScroll)

    return () => {
      instance.off?.("scroll", onScroll)
    }
  }, [])

  return <ReactLenis root options={options} ref={lenisRef} />
}

export default LenisRoot
