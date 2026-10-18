import { createFileRoute } from '@tanstack/react-router'
import { Photo } from '@/components/Photo'
import { Mandala, MoreServices, SpotCard, useScrollProgress } from '@/components/services'
import { ChipCloud } from '@/components/services'
import { ContactActions, Eyebrow, PageHero, RevealLines } from '@/components/ui'
import { communityService, sacredServices, samskaras, serviceHead } from '@/content/services'

export const Route = createFileRoute('/samskaras-yajnas')({
  head: () => serviceHead('Samskaras, Yajnas & Pujas', 'Harinam sankirtan, śrāddha, yajna-puja vidhi and the Vedic samskaras, performed by Bhaktivedanta Gurukula at your home, office or event.', '/samskaras-yajnas'),
  component: Page,
})

function Page() {
  const path = useScrollProgress<HTMLOListElement>()
  return (
    <>
      <PageHero
        eyebrow="Services · 06"
        title={['Samskaras,', 'Yajnas & Pujas']}
        intro="Sacred rites that mark the great moments of life, and the congregational chanting that sanctifies a home, an office or an event."
        image="/img/vedic-study/yajna-3.jpg"
        imageAlt="A yajna at the Gurukula"
        position="center 40%"
      />

      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Eyebrow>We come to you</Eyebrow>
          <RevealLines lines={['Three sacred', <em key="s" className="text-[#8a6f3c]">services.</em>]} className="display mt-5 text-[clamp(2.25rem,5vw,4.5rem)] text-teal" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {sacredServices.map((s, i) => (
              <SpotCard key={s.title} delay={i * 0.1}>
                <div className="p-8 md:p-10">
                  <span className="display text-6xl text-brass">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="display mt-5 text-[clamp(1.9rem,3vw,2.6rem)] leading-tight text-teal">{s.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{s.text}</p>
                </div>
              </SpotCard>
            ))}
          </div>
        </div>
      </section>

      {/* Fourteen samskaras — a path of life that lights up as you scroll */}
      <section className="grain jali relative overflow-hidden bg-teal-deep py-20 text-pearl md:py-28">
        <Mandala className="pointer-events-none absolute -right-48 top-24 h-[640px] w-[640px] opacity-[0.18]" />
        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-[1fr_1.5fr] md:px-10">
          <div className="md:sticky md:top-32 md:self-start">
            <Eyebrow light>The Vedic Samskaras</Eyebrow>
            <RevealLines lines={['Fourteen rites,', <em key="j" className="text-brass">one life.</em>]} className="display mt-5 text-[clamp(2.5rem,5vw,4.75rem)] text-pearl" />
            <p data-reveal className="mt-6 max-w-sm leading-relaxed text-pearl/72">From conception to the last rites, and the remembrance of ancestors — each samskara sanctifies a turning point.</p>
          </div>

          <ol ref={path} className="relative">
            <span aria-hidden className="absolute bottom-4 left-[1.15rem] top-4 w-px bg-pearl/15" />
            <span aria-hidden className="tl-fill absolute bottom-4 left-[1.15rem] top-4 w-px origin-top bg-brass" />
            {samskaras.map((s, i) => (
              <li key={s.name} data-reveal="left" className="group relative flex items-center gap-6 py-4">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brass/60 bg-teal-deep text-xs font-bold text-brass transition-all duration-500 group-hover:scale-110 group-hover:bg-brass group-hover:text-teal-deep">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-pearl/10 pb-4 transition-transform duration-500 ease-[var(--ease-silk)] group-hover:translate-x-2">
                  <h3 className="display text-[1.75rem] leading-none text-pearl md:text-[2.1rem]">{s.name}</h3>
                  <p className="text-sm text-pearl/65">{s.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:grid-cols-2 md:px-10">
          <div data-reveal="mask" className="overflow-hidden rounded-3xl">
            <Photo src="/img/vedic-study/yajna-preparation.jpg" alt="Students preparing offerings for a yajna" ratio={0.85} widths={[640, 1024, 1400]} width={1024} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
          </div>
          <div>
            <Eyebrow>Community service</Eyebrow>
            <RevealLines lines={['Service beyond', <em key="s" className="text-[#8a6f3c]">the campus.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,4rem)] text-teal" />
            <div className="mt-8">
              <ChipCloud items={communityService} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <ContactActions label="Call us to your home, office or event" />
        </div>
      </section>

      <MoreServices current="samskaras-yajnas" />
    </>
  )
}