import { useCallback, useEffect, useState } from 'react'
import { ArrowDown, ChevronDown, ChevronUp } from 'lucide-react'

/**
 * Placeholder photographs from the Gurukula's own library — swap `img` / `thumb`
 * when the final hero photography is approved. Titles stay short so they read
 * clearly over any picture.
 */
const slides = [
  {
    img: '/img/vedic-study/yajna-3.jpg',
    title: ['Where wisdom guides', 'the next generation'],
    alt: 'A teacher with hands folded in prayer, seated before students in white kurtas during a yajna.',
    position: '50% 35%',
  },
  {
    img: '/img/academic-study/academic-study-2.jpg',
    title: ['Learning with', 'a joyful heart'],
    alt: 'A boy in a green shirt resting his chin on his hand as he studies at his desk.',
    position: '50% 40%',
  },
  {
    img: '/img/slider/slider-1.jpg',
    title: ['Friendships that', 'last a lifetime'],
    alt: 'Four smiling Gurukula boys in white kurtas, arms around one another, with tilak on their foreheads.',
    position: '50% 30%',
  },
  {
    img: '/img/sports/yoga.jpg',
    title: ['A strong body,', 'a steady mind'],
    alt: 'Students practising yoga in rows on mats beneath the trees of the campus.',
    position: '50% 55%',
  },
  {
    img: '/img/daily-schedule/temple-sankirtan.jpg',
    title: ['Culture lived', 'every single day'],
    alt: 'Students in white dhotis leading kirtan with mridanga drums and kartals in the temple hall.',
    position: '50% 50%',
  },
]

const INTERVAL = 10000

/**
 * Full-viewport photo slider. A heavy left-hand scrim keeps the headline readable
 * on every photograph; the thumbnail rail on the right doubles as navigation.
 */
export function HeroCinematic() {
  const [active, setActive] = useState(0)
  const [hold, setHold] = useState(false) // hover / keyboard focus pauses the autoplay
  const [reduced, setReduced] = useState(false)

  const go = useCallback((i: number) => setActive((i + slides.length) % slides.length), [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const on = () => setReduced(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  useEffect(() => {
    if (hold || reduced) return
    const t = window.setTimeout(() => setActive((a) => (a + 1) % slides.length), INTERVAL)
    return () => window.clearTimeout(t)
  }, [active, hold, reduced])

  const slide = slides[active]

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Gurukula life"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
      className="relative isolate min-h-svh overflow-hidden bg-teal-deep text-pearl"
    >
      {/* Photographs — cross-fade */}
      {slides.map((s, i) => (
        <div
          key={s.img}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${i === active ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className={i === active ? 'kenburns absolute inset-0' : 'absolute inset-0'}>
            {/* Plain <img>, all eager: every slide is already in the cache before its turn */}
            <img
              src={s.img}
              alt={i === active ? s.alt : ''}
              loading="eager"
              decoding="async"
              fetchPriority={i === 0 ? 'high' : 'auto'}
              className="h-full w-full object-cover"
              style={{ objectPosition: s.position }}
            />
          </div>
        </div>
      ))}

      {/* Scrim: solid on the text side, clear on the photograph side */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-teal-deep/95 via-teal-deep/70 to-teal-deep/15" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-teal-deep/90 via-transparent to-teal-deep/60" />

      {/* Copy */}
      <div className="relative z-10 mx-auto flex min-h-svh max-w-[1440px] flex-col justify-end px-5 pb-36 pt-32 md:justify-center md:px-10 md:pb-16 md:pt-28">
        <div className="max-w-[62rem]" aria-live={hold ? 'polite' : 'off'}>
          <h1 key={active} className="display slide-in text-[clamp(2.8rem,5.8vw,5.9rem)] text-pearl [text-shadow:0_2px_30px_rgba(12,46,49,0.55)]">
            <span className="block">{slide.title[0]}</span>
            <span className="block italic text-brass-soft">{slide.title[1]}</span>
          </h1>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#about" className="btn btn-brass">
              Discover Our Gurukula <ArrowDown className="btn-arrow h-4 w-4" aria-hidden />
            </a>
            <a href="#inspiration" className="btn btn-ghost-light">
              Our Inspiration
            </a>
          </div>
        </div>
      </div>

      {/* Thumbnail rail — vertical on desktop, horizontal on phones */}
      <div className="absolute inset-x-0 bottom-8 z-20 flex items-center justify-center gap-3 md:inset-x-auto md:bottom-auto md:right-10 md:top-1/2 md:-translate-y-1/2 md:flex-col md:gap-4">
        <button type="button" onClick={() => go(active - 1)} aria-label="Previous photo" className="flex h-9 w-9 items-center justify-center rounded-full text-pearl/80 transition-colors hover:text-brass">
          <ChevronUp className="h-5 w-5 -rotate-90 md:rotate-0" aria-hidden />
        </button>

        <div className="flex items-center gap-3 md:flex-col md:gap-4" role="tablist" aria-label="Choose a photo">
          {slides.map((s, i) => (
            <button
              key={s.img}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Photo ${i + 1} of ${slides.length}: ${s.title.join(' ')}`}
              onClick={() => go(i)}
              className={`relative overflow-hidden rounded-full border-2 transition-all duration-500 ${
                i === active ? 'h-14 w-14 border-brass shadow-[0_0_0_4px_rgba(183,154,97,0.25)] md:h-[4.5rem] md:w-[4.5rem]' : 'h-11 w-11 border-pearl/40 opacity-75 hover:opacity-100 md:h-14 md:w-14'
              }`}
            >
              <img src={s.img} alt="" loading="eager" decoding="async" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>

        <button type="button" onClick={() => go(active + 1)} aria-label="Next photo" className="flex h-9 w-9 items-center justify-center rounded-full text-pearl/80 transition-colors hover:text-brass">
          <ChevronDown className="h-5 w-5 -rotate-90 md:rotate-0" aria-hidden />
        </button>
        <p aria-hidden className="hidden text-xs tabular-nums text-pearl/70 md:block">
          <span className="font-bold text-brass-soft">{String(active + 1).padStart(2, '0')}</span> / {String(slides.length).padStart(2, '0')}
        </p>
      </div>

    </section>
  )
}