import { useEffect, useRef, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { prabhupadaTimeline } from '@/content/home'

/** Native sticky photography follows the fourteen chapters without trapping scroll. */
export function InspirationStory() {
  const [active, setActive] = useState(0)
  const storyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const story = storyRef.current
    if (!story) return
    const chapters = Array.from(story.querySelectorAll<HTMLElement>('[data-inspiration-chapter]'))
    let frame = 0
    const update = () => {
      frame = 0
      const readingLine = window.innerHeight * 0.5
      let current = 0
      chapters.forEach((chapter, index) => {
        if (chapter.getBoundingClientRect().top <= readingLine) current = index
      })
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="inspiration" aria-labelledby="inspiration-title" className="inspiration-story bg-teal-deep text-pearl">
      <header className="mx-auto max-w-[1440px] px-5 pb-14 pt-20 md:px-10 md:pb-20 md:pt-28">
        <p className="flex items-center gap-3 text-sm text-brass-soft"><span className="h-px w-8 bg-brass" aria-hidden="true" />Our Inspiration · 1896–1977</p>
        <div className="mt-7 grid gap-7 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-12">
          <h2 id="inspiration-title" className="inspiration-title font-display font-medium">Srila<br /><em className="text-brass-soft">Prabhupada.</em></h2>
          <div className="max-w-lg">
            <p className="text-lg leading-relaxed text-pearl/80">His Divine Grace A. C. Bhaktivedanta Swami Prabhupada, Founder-Acharya of ISKCON.</p>
            <p className="mt-4 leading-relaxed text-pearl/65">The life and teachings that continue to inspire Bhaktivedanta Gurukula.</p>
            <a href="#prabhupada-0" className="mt-6 inline-flex items-center gap-3 py-2 text-sm text-brass-soft link-sweep">A life of devotion <ArrowDown className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
      </header>

      <div ref={storyRef} className="inspiration-layout mx-auto max-w-[1440px] px-5 pb-16 md:px-10 md:pb-28">
        <div className="inspiration-visual-column hidden md:block">
          <figure className="inspiration-visual">
            <div className="inspiration-photo-stage bg-slate">
              {prabhupadaTimeline.map((chapter, index) => (
                <div key={chapter.img} className={`inspiration-photo ${active === index ? 'is-active' : ''}`} aria-hidden={active !== index}>
                  <Photo src={chapter.img} alt={`Srila Prabhupada's life: ${chapter.title}, ${chapter.year}`} priority={index === 0} sizes="(min-width: 1440px) 600px, 48vw" className="h-full w-full object-contain" />
                </div>
              ))}
            </div>
            <figcaption className="mt-5 flex items-center justify-between gap-4 border-b border-brass/25 pb-5">
              <span className="font-display text-3xl text-brass-soft">{prabhupadaTimeline[active]?.year}</span>
              <span className="text-xs text-pearl/65">{String(active + 1).padStart(2, '0')} / 14</span>
            </figcaption>
            <nav aria-label="Inspiration years" className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
              {prabhupadaTimeline.map((chapter, index) => (
                <a key={chapter.year} href={`#prabhupada-${index}`} aria-current={active === index ? 'step' : undefined} aria-label={`${chapter.year}: ${chapter.title}`} className={`inspiration-year py-2 text-xs transition-colors hover:text-brass-soft ${active === index ? 'text-brass-soft' : 'text-pearl/55'}`}>{chapter.year}</a>
              ))}
            </nav>
          </figure>
        </div>

        <div className="inspiration-chapters">
          {prabhupadaTimeline.map((chapter, index) => (
            <article key={chapter.img} id={`prabhupada-${index}`} data-inspiration-chapter className={`inspiration-chapter ${active === index ? 'is-active' : ''}`} aria-labelledby={`prabhupada-title-${index}`}>
              <p className="mb-5 flex items-center gap-3 text-sm text-brass-soft"><span className="inspiration-chapter-dot h-2 w-2 shrink-0 rounded-full bg-brass" aria-hidden="true" />{chapter.year}<span className="ml-auto text-xs text-pearl/45">{String(index + 1).padStart(2, '0')}</span></p>
              <figure className="mb-7 md:hidden">
                <Photo src={chapter.img} alt={`Srila Prabhupada's life: ${chapter.title}, ${chapter.year}`} className="inspiration-mobile-photo w-full bg-slate object-contain" sizes="100vw" />
              </figure>
              <h3 id={`prabhupada-title-${index}`} className="inspiration-chapter-title font-display text-3xl font-medium leading-tight md:text-4xl">{chapter.title}</h3>
              <p className="mt-5 text-base font-medium leading-relaxed text-brass-soft">{chapter.event}</p>
              {chapter.text && <p className="mt-4 max-w-lg text-base leading-loose text-pearl/70">{chapter.text}</p>}
            </article>
          ))}
        </div>
      </div>
      <div className="border-t border-brass/20 px-5 py-12 text-center md:py-16">
        <p className="font-display text-3xl text-brass-soft md:text-4xl">A legacy that lives on.</p>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-pearl/70">His teachings continue to guide our students in a life of wisdom, devotion and service.</p>
      </div>
    </section>
  )
}