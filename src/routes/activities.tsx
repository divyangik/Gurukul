import { createFileRoute } from '@tanstack/react-router'
import { Photo } from '@/components/Photo'
import { AdmissionsCTA, Eyebrow, GalleryTile, PageHero, RevealLines, useLightbox, type GalleryImage } from '@/components/ui'
import { activityGroups } from '@/content/activities'

const allImages: GalleryImage[] = activityGroups.flatMap((g) => g.images)

export const Route = createFileRoute('/activities')({
  head: () => ({
    meta: [
      { title: 'Activities — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Trekking, sports, yoga, drama, festivals, yajna and cow care — life beyond the classroom at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'Activities — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Trekking, sports, yoga, drama, festivals, yajna and cow care — life beyond the classroom at Bhaktivedanta Gurukula.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://gurukula-digital-twin.lovable.app/activities' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: 'https://gurukula-digital-twin.lovable.app/activities' }],
  }),
  component: Page,
})

function Page() {
  const { open, node } = useLightbox(allImages)
  let cursor = 0

  return (
    <>
      <PageHero
        eyebrow="Life at the Gurukula"
        title={['Activities']}
        intro="Learning here reaches far beyond the classroom — into the hills, onto the stage, around the sacred fire and into the goshala."
        image="/img/activities/trekking.jpg"
        imageAlt="Gurukula students together on a hilltop during a trek"
        position="center 30%"
      />

      {activityGroups.map((group, gi) => {
        const start = cursor
        cursor += group.images.length
        const dark = gi % 2 === 1
        return (
          <section key={group.id} aria-labelledby={`act-${group.id}`} className={`${dark ? 'grain relative bg-slate text-pearl' : gi === 0 ? 'bg-pearl' : 'bg-sand'} py-20 md:py-28`}>
            <div className="mx-auto max-w-[1440px] px-5 md:px-10">
              <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
                <div>
                  <Eyebrow light={dark}>{String(gi + 1).padStart(2, '0')} · {group.title.split(' & ')[0]}</Eyebrow>
                  <RevealLines lines={[group.title]} className={`display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] ${dark ? 'text-pearl' : 'text-teal'}`} />
                </div>
                <p data-reveal className={`max-w-xl leading-relaxed md:justify-self-end ${dark ? 'text-pearl/70' : 'text-muted'}`}>{group.text}</p>
              </div>

              <div className={`mt-12 grid gap-4 ${group.images.length === 1 ? 'md:grid-cols-2' : group.images.length === 2 ? 'md:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
                {group.images.map((img, i) => (
                  <GalleryTile
                    key={img.src}
                    image={img}
                    onOpen={() => open(start + i)}
                    ratio={1.4}
                    delay={i * 0.08}
                    className={group.images.length === 1 ? 'md:col-span-1' : ''}
                  />
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Daily rhythm strip */}
      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 md:grid-cols-2 md:px-10">
          <div>
            <Eyebrow>Every Day</Eyebrow>
            <RevealLines lines={['A rhythm of', <em key="s" className="text-[#8a6f3c]">study and sadhana.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            <p data-reveal className="mt-6 max-w-lg leading-relaxed text-muted">
              The day begins before sunrise in the temple with mangala-arati and sankirtan, flows through academic classes and Vedic study, and closes with evening arati — a rhythm that has formed character for centuries.
            </p>
          </div>
          <div data-reveal="mask" className="overflow-hidden rounded-3xl">
            <Photo src="/img/daily-schedule/temple-sankirtan.jpg" alt="Students at morning sankirtan in the temple" ratio={1.3} widths={[640, 1024, 1600]} width={1024} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <AdmissionsCTA />
      {node}
    </>
  )
}
