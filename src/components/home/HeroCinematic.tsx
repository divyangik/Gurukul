import { useEffect, useRef, useState } from 'react'
import { Pause, Play, ArrowDown } from 'lucide-react'
import { Photo } from '../Photo'
import { hero } from '@/content/home'

const lineOne = ['Where', 'wisdom']
const lineTwo = ['guides', 'the', 'next', 'generation']

/**
 * Full-viewport cinematic opening. Uses the Gurukula's own photograph of
 * HG Bāla Govinda Dāsa seated with students; slow Ken Burns motion stands in
 * for video until approved footage is supplied (see README "Media").
 */
export function HeroCinematic() {
  const ref = useRef<HTMLElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  // Scroll-linked depth: the photograph sinks and the copy lifts away as the visitor scrolls on.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let ctx: { revert: () => void } | undefined
    let cancelled = false
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (cancelled || !ref.current) return
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        const mm = gsap.matchMedia()
        mm.add('(min-width: 768px)', () => {
          gsap.to(mediaRef.current, {
            yPercent: 14,
            ease: 'none',
            scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
          })
          gsap.to(copyRef.current, {
            yPercent: -18,
            opacity: 0.15,
            ease: 'none',
            scrollTrigger: { trigger: ref.current, start: '35% top', end: 'bottom top', scrub: true },
          })
        })
      }, ref)
    })
    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [])

  let wordIndex = 0
  const word = (w: string) => {
    const d = 0.25 + wordIndex++ * 0.09
    return (
      <span key={w + d} className="hero-word mr-[0.22em]">
        <span style={{ ['--d' as string]: `${d}s` }}>{w}</span>
      </span>
    )
  }

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className={`grain relative isolate flex min-h-svh flex-col overflow-hidden bg-teal-deep text-pearl md:block ${paused ? 'paused' : ''}`}
    >
      {/* Photograph */}
      <div className="relative h-[62svh] overflow-hidden md:absolute md:inset-0 md:h-auto">
        <div ref={mediaRef} className="absolute inset-0 will-change-transform">
          <div className="kenburns absolute inset-0">
            <Photo
              src="/img/vedic-study/yajna-3.jpg"
              alt="HG Bāla Govinda Dāsa, hands folded in prayer, seated cross-legged before a group of students in white kurtas beneath the trees of the Gurukula during a yajna."
              priority
              width={1800}
              widths={[640, 960, 1400, 1800, 2200]}
              sizes="100vw"
              className="h-full w-full object-cover object-[22%_30%] md:object-[50%_32%]"
            />
          </div>
        </div>
        {/* Peacock-teal grading: keeps faces natural, deepens the edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-deep/70 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-teal-deep to-transparent md:h-[58%] md:from-teal-deep md:via-teal-deep/75" />
        <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_at_70%_20%,rgba(212,191,148,0.18),transparent_55%)] mix-blend-screen md:block" />
      </div>

      {/* Copy */}
      <div ref={copyRef} className="relative z-10 flex flex-1 flex-col justify-end md:absolute md:inset-0">
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-10 pt-2 md:px-10 md:pb-14">
          <div className="flex items-center gap-4">
            <span className="hero-rule h-px w-12 bg-brass" style={{ ['--d' as string]: '0.1s' }} aria-hidden />
            <p className="hero-fade eyebrow text-brass" style={{ ['--d' as string]: '0.15s' }}>
              Bhaktivedanta Gurukula · {hero.taglines[0]}
            </p>
          </div>

          <div className="mt-5 grid items-end gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            <h1 id="hero-title" className="display text-[clamp(2.8rem,6.4vw,6.4rem)] text-pearl">
              <span className="block">{lineOne.map(word)}</span>
              <span className="block italic text-brass-soft">{lineTwo.map(word)}</span>
            </h1>

            <div className="hero-fade max-w-md pb-2" style={{ ['--d' as string]: '1s' }}>
              <p className="text-[1.05rem] leading-relaxed text-pearl/85">
                Discover an education rooted in knowledge, character, spiritual growth, and meaningful living.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#about" className="btn btn-brass">
                  Discover Our Gurukula <ArrowDown className="btn-arrow h-4 w-4" aria-hidden />
                </a>
                <a href="#philosophy" className="btn btn-ghost-light">
                  Explore Our Philosophy
                </a>
              </div>
            </div>
          </div>

          <div className="hero-fade mt-10 flex items-center justify-between gap-6 border-t border-pearl/15 pt-5 text-xs text-pearl/65" style={{ ['--d' as string]: '1.3s' }}>
            <p className="max-w-lg leading-relaxed">
              HG Bāla Govinda Dāsa, Director of the Gurukula, with students during a yajna.
            </p>
            <div className="flex shrink-0 items-center gap-5">
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-pressed={paused}
                className="flex items-center gap-2 rounded-full border border-pearl/25 px-3 py-1.5 text-pearl/80 transition-colors hover:border-brass hover:text-brass"
              >
                {paused ? <Play className="h-3.5 w-3.5" aria-hidden /> : <Pause className="h-3.5 w-3.5" aria-hidden />}
                {paused ? 'Resume motion' : 'Pause motion'}
              </button>
              <a href="#about" className="hidden items-center gap-3 uppercase tracking-[0.3em] text-pearl/70 hover:text-brass md:flex">
                Scroll
                <span className="relative block h-10 w-px overflow-hidden bg-pearl/20">
                  <span className="scroll-cue absolute inset-0 bg-brass" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
