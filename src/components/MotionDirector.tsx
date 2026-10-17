import { useEffect } from 'react'
import { useRouterState } from '@tanstack/react-router'

declare global {
  interface Window {
    __gkMotion?: boolean
  }
}

/**
 * One place that wires scroll motion for whichever page is mounted:
 *  - [data-reveal]        → class "is-in" when scrolled into view (CSS handles the transition)
 *  - [data-parallax="n"]  → GSAP ScrollTrigger scrubbed vertical drift (desktop only)
 *  - [data-tilt]          → pointer-driven 3D tilt (fine pointers only)
 *  - [data-count="n"]     → number counts up from 0 when scrolled into view
 *  - [data-hscroll]       → section pins and its [data-hscroll-track] slides sideways (desktop only)
 * Re-runs on every route change and tears everything down afterwards.
 */
export function MotionDirector() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    window.__gkMotion = true
    const root = document.documentElement
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cleanups: Array<() => void> = []

    // Reveals
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)'))
    if (reduced || !root.classList.contains('motion') || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-in'))
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in')
              io.unobserve(entry.target)
            }
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
      )
      revealEls.forEach((el) => io.observe(el))
      // Content mounted later (tabs, accordions, carousels) is observed too
      const mo = new MutationObserver(() => {
        document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)').forEach((el) => io.observe(el))
      })
      mo.observe(document.body, { childList: true, subtree: true })
      cleanups.push(() => {
        io.disconnect()
        mo.disconnect()
      })
    }

    // Counters
    const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'))
    const runCount = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.count || '0')
      if (reduced) {
        el.textContent = String(target)
        return
      }
      const start = performance.now()
      const dur = 1800
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur)
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 4))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
    if ('IntersectionObserver' in window) {
      const cio = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              runCount(entry.target as HTMLElement)
              cio.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.4 },
      )
      counters.forEach((el) => cio.observe(el))
      cleanups.push(() => cio.disconnect())
    } else {
      counters.forEach((el) => (el.textContent = el.dataset.count || ''))
    }

    // Parallax via GSAP (loaded lazily so it never blocks first paint)
    let cancelled = false
    let gsapCtx: { revert: () => void } | undefined
    if (!reduced) {
      Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia()
        mm.add('(min-width: 768px)', () => {
          document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
            const amount = parseFloat(el.dataset.parallax || '0.12')
            gsap.fromTo(
              el,
              { yPercent: -amount * 50 },
              {
                yPercent: amount * 50,
                ease: 'none',
                scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: true },
              },
            )
          })
          document.querySelectorAll<HTMLElement>('[data-hscroll]').forEach((section) => {
            const track = section.querySelector<HTMLElement>('[data-hscroll-track]')
            if (!track) return
            const distance = () => Math.max(0, track.scrollWidth - section.clientWidth)
            gsap.to(track, {
              x: () => -distance(),
              ease: 'none',
              scrollTrigger: { trigger: section, start: 'top top', end: () => `+=${distance()}`, scrub: 0.6, pin: true, invalidateOnRefresh: true },
            })
          })
        })
        gsapCtx = mm
        requestAnimationFrame(() => ScrollTrigger.refresh())
      })
    }
    cleanups.push(() => {
      cancelled = true
      gsapCtx?.revert()
    })

    // Tilt
    if (!reduced && window.matchMedia('(pointer: fine)').matches) {
      document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
        const strength = parseFloat(el.dataset.tilt || '8')
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect()
          const x = (e.clientX - r.left) / r.width - 0.5
          const y = (e.clientY - r.top) / r.height - 0.5
          el.style.transform = `perspective(900px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateZ(0)`
        }
        const leave = () => {
          el.style.transform = ''
        }
        el.addEventListener('pointermove', move)
        el.addEventListener('pointerleave', leave)
        cleanups.push(() => {
          el.removeEventListener('pointermove', move)
          el.removeEventListener('pointerleave', leave)
        })
      })
    }

    return () => cleanups.forEach((fn) => fn())
  }, [pathname])

  return null
}
