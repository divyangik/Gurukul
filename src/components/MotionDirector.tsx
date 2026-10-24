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
let cameFromHistory = false
let lastPath: string | null = null
if (typeof window !== 'undefined') window.addEventListener('popstate', () => (cameFromHistory = true))

/** True once React has hydrated the page body (its DOM nodes carry a React fibre key). Touching the DOM earlier makes hydration fail. */
function pageIsHydrated() {
  let el: Element | null = document.getElementById('main')
  if (!el) return true
  while (el.lastElementChild) el = el.lastElementChild
  return Object.keys(el).some((k) => k.startsWith('__reactFiber'))
}

export function MotionDirector() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    let stop: (() => void) | undefined
    let raf = 0
    let tries = 0
    const go = () => {
      if (pageIsHydrated() || tries++ > 300) stop = setup(pathname)
      else raf = requestAnimationFrame(go)
    }
    go()
    return () => {
      cancelAnimationFrame(raf)
      stop?.()
    }
  }, [pathname])

  return null
}

function setup(pathname: string): () => void {
  {
    window.__gkMotion = true
    const root = document.documentElement

    // Every new page opens at the top. (The global smooth-scroll would otherwise get interrupted while the new
    // page mounts, leaving the visitor part-way down.) Back/forward keep their remembered position; #anchors are left alone.
    const pageChanged = lastPath !== null && lastPath !== pathname
    lastPath = pathname
    if (pageChanged && !cameFromHistory && !window.location.hash) {
      const prev = root.style.scrollBehavior
      root.style.scrollBehavior = 'auto'
      window.scrollTo(0, 0)
      requestAnimationFrame(() => {
        window.scrollTo(0, 0)
        root.style.scrollBehavior = prev
      })
    }
    cameFromHistory = false
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
      // Fail-safe: anything at or above the lower edge of the viewport is shown, so a section that
      // was jumped past (anchor links, fast scrolling) can never stay hidden.
      let sweepFrame = 0
      const sweep = () => {
        sweepFrame = 0
        const limit = window.innerHeight * 0.95
        document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)').forEach((el) => {
          if (el.getBoundingClientRect().top < limit) {
            el.classList.add('is-in')
            io.unobserve(el)
          }
        })
      }
      const onScrollSweep = () => {
        if (!sweepFrame) sweepFrame = requestAnimationFrame(sweep)
      }
      window.addEventListener('scroll', onScrollSweep, { passive: true })
      window.addEventListener('resize', onScrollSweep)
      const sweepTimer = window.setTimeout(sweep, 1500)
      cleanups.push(() => {
        window.removeEventListener('scroll', onScrollSweep)
        window.removeEventListener('resize', onScrollSweep)
        window.clearTimeout(sweepTimer)
        cancelAnimationFrame(sweepFrame)
      })
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

    // Counters — written into the existing text node (never replacing it), so React can still manage it.
    const fmt = (el: HTMLElement, n: number) => (el.dataset.countFormat === 'locale' ? n.toLocaleString('en-IN') : String(n))
    const setText = (el: HTMLElement, text: string) => {
      const node = el.firstChild
      if (node && node.nodeType === Node.TEXT_NODE) node.nodeValue = text
      else el.textContent = text
    }
    const runCount = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.count || '0')
      if (reduced) {
        setText(el, fmt(el, target))
        return
      }
      const start = performance.now()
      const dur = 1800
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur)
        setText(el, fmt(el, Math.round(target * (1 - Math.pow(1 - p, 4)))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
    const seen = new WeakSet<Element>()
    let cio: IntersectionObserver | undefined
    if ('IntersectionObserver' in window) {
      cio = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              runCount(entry.target as HTMLElement)
              cio?.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.4 },
      )
      cleanups.push(() => cio?.disconnect())
    }
    const watchCounters = () => {
      document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
        if (seen.has(el)) return
        seen.add(el)
        if (cio) cio.observe(el)
        else setText(el, el.dataset.count || '')
      })
    }
    watchCounters()
    // The new page can mount just after this effect runs (client-side navigation), so keep looking for counters.
    const countersMo = new MutationObserver(watchCounters)
    countersMo.observe(document.body, { childList: true, subtree: true })
    cleanups.push(() => countersMo.disconnect())

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
  }
}