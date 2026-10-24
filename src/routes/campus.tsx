import type { CSSProperties, PointerEvent as ReactPointerEvent, ReactNode } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, ChefHat, Flame, Home, Leaf, MapPin, Trophy, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { ActivityGallery, TiltTile } from '@/components/TiltGallery'
import { WordMarquee } from '@/components/education'
import {
  BouncingBall,
  ButterflyScene,
  EmberScene,
  GrassScene,
  HomeGlow,
  LetterScene,
  TrackScene,
} from '@/components/campus/CampusScenes'
import { AdmissionsCTA, Eyebrow, RevealLines, useLightbox, type GalleryImage } from '@/components/ui'
import { contact } from '@/content/site'

type Space = {
  id: string
  title: string
  text: string
  images: GalleryImage[]
  Icon: LucideIcon
  chips: string[]
  tone: 'dark' | 'sand' | 'deep' | 'pearl'
  landscapeSingle?: boolean
}

const spaces: Space[] = [
  {
    id: 'temple',
    title: 'The Temple',
    text: 'The heart of the campus. Every day begins and ends here — mangala-arati before dawn, darshan and kirtan through the day, and evening arati as the sun sets over the fields.',
    images: [
      { src: '/img/daily-schedule/temple-sankirtan.jpg', alt: 'Students at morning sankirtan in the Gurukula temple' },
      { src: '/img/festivals/deity-photo-2.jpg', alt: 'The presiding deities of the Gurukula temple' },
    ],
    Icon: Flame,
    chips: ['Mangala-arati', 'Darshan', 'Kirtan', 'Evening arati'],
    tone: 'dark',
  },
  {
    id: 'classrooms',
    title: 'Classrooms',
    text: 'Simple, light-filled learning spaces where students study the modern academic curriculum alongside Vedic texts — seated close to their teachers, in the gurukula tradition.',
    images: [
      { src: '/img/academic-study/academic-study.jpg', alt: 'Gurukula students studying on floor mats in a classroom with a teacher' },
      { src: '/img/academic-study/academic-study-1.jpg', alt: 'A wider view of students studying in the classroom' },
      { src: '/img/academic-study/academic-study-2.jpg', alt: 'Students reading and writing with a teacher nearby' },
    ],
    Icon: BookOpen,
    chips: ['Modern curriculum', 'Vedic texts', 'Close to teachers'],
    tone: 'sand',
  },
  {
    id: 'sports-ground',
    title: 'Sports Ground',
    text: 'Open grounds for kabaddi, kho-kho, football and athletics — where the evening games hour keeps bodies strong and spirits high.',
    images: [{ src: '/img/campus/sports-ground/sports.jpg', alt: 'Students playing on the Gurukula sports ground' }],
    Icon: Trophy,
    chips: ['Kabaddi', 'Kho-kho', 'Football', 'Athletics'],
    tone: 'deep',
    landscapeSingle: true,
  },
  {
    id: 'goshala',
    title: 'Goshala',
    text: 'Home to the campus cows, the goshala is where students learn go-seva — feeding, grooming and caring for the cows as part of daily life.',
    images: [{ src: '/img/campus/goshala/whatsapp-image-2025-02-05-at-3.46.54-am.jpg', alt: 'Cows at the Gurukula goshala' }],
    Icon: Leaf,
    chips: ['Feeding', 'Grooming', 'Caring'],
    tone: 'pearl',
  },
]

const residentialImage: GalleryImage = { src: '/img/slider/slider-2.jpg', alt: 'Students on the Gurukula campus' }

const allImages: GalleryImage[] = [...spaces.flatMap((s) => s.images), residentialImage]

const pad = (n: number) => String(n).padStart(2, '0')
const d = (s: number) => ({ ['--d' as string]: `${s}s` }) as CSSProperties

export const Route = createFileRoute('/campus')({
  head: () => ({
    meta: [
      { title: 'Campus — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'The five-acre residential campus of Bhaktivedanta Gurukula at Dalimb, Uruli Kanchan, Pune — temple, classrooms, sports ground and goshala.' },
      { property: 'og:title', content: 'Campus — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'The five-acre residential campus of Bhaktivedanta Gurukula at Dalimb, Uruli Kanchan, Pune.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://gurukula-digital-twin.lovable.app/campus' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: 'https://gurukula-digital-twin.lovable.app/campus' }],
  }),
  component: Page,
})

function Page() {
  const { open, node } = useLightbox(allImages)
  let cursor = 0

  return (
    <>
      <CampusHero />

      {/* Ribbon of the places on campus */}
      <div className="border-y border-brass/20 bg-teal-deep py-2 text-pearl" aria-hidden>
        <WordMarquee light speed={55} words={['Temple', 'Classrooms', 'Sports Ground', 'Goshala', 'Home']} />
      </div>

      <WhereWeAre />

      {spaces.map((space, si) => {
        const start = cursor
        cursor += space.images.length
        return <SpaceSection key={space.id} space={space} index={si} start={start} onOpen={open} />
      })}

      <Residential index={spaces.length} imageIndex={cursor} onOpen={open} />

      <AdmissionsCTA title={['Come and', 'see it yourself.']} />
      {node}
    </>
  )
}

/* ── Hero ────────────────────────────────────────────────────── */

const heroLinks: { id: string; label: string; Icon: LucideIcon }[] = [
  { id: 'temple', label: 'Temple', Icon: Flame },
  { id: 'classrooms', label: 'Classrooms', Icon: BookOpen },
  { id: 'sports-ground', label: 'Sports Ground', Icon: Trophy },
  { id: 'goshala', label: 'Goshala', Icon: Leaf },
  { id: 'residential-life', label: 'Residential Life', Icon: Home },
  { id: 'where', label: 'Find Us', Icon: MapPin },
]

function CampusHero() {
  const move = (e: ReactPointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    e.currentTarget.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }

  return (
    <section onPointerMove={move} className="cp-hero grain relative isolate flex min-h-[88svh] items-end overflow-hidden bg-teal text-pearl">
      <div className="absolute inset-0 -z-10">
        <div data-parallax="0.16" className="absolute inset-[-8%_0]">
          <div className="cp-hero__layer h-full w-full">
            <Photo
              src="/img/campus/sports-ground/sports.jpg"
              alt="Students on the Bhaktivedanta Gurukula campus grounds"
              priority
              widths={[640, 1024, 1600, 2200]}
              width={1600}
              className="kenburns h-full w-full object-cover"
              style={{ objectPosition: 'center 45%' }}
            />
          </div>
        </div>
        {/* Light overlays: only the text side, the bottom edge and the navbar strip are darkened */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/80 via-teal-deep/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-teal-deep/65 to-transparent" />
      </div>

      <div className="cp-hero__ring pointer-events-none absolute -right-28 top-24 -z-0 hidden md:block" aria-hidden>
        <div className="spin-slow h-[520px] w-[520px] rounded-full border border-dashed border-brass/35" />
        <div className="absolute inset-12 rounded-full border border-brass/25" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 pb-14 pt-36 md:px-10 md:pb-20">
        <Eyebrow light>Dalimb · Uruli Kanchan · Pune</Eyebrow>
        <RevealLines as="h1" lines={['The Campus']} className="display mt-6 text-[clamp(3.25rem,9vw,8rem)] text-pearl" />
        <div data-reveal style={d(0.3)} className="mt-6 max-w-xl text-lg leading-relaxed text-pearl/90">
          Five acres of open sky, fields and quiet — a residential campus designed for simple living and deep learning, an hour from Pune city.
        </div>

        <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Jump to a place on campus">
          {heroLinks.map(({ id, label, Icon }, i) => (
            <li key={id} data-reveal style={d(0.45 + i * 0.07)}>
              <a
                href={`#${id}`}
                className="inline-flex items-center gap-2 rounded-full border border-pearl/30 bg-teal-deep/45 px-4 py-2 text-[0.8rem] font-semibold tracking-wide text-pearl backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-brass hover:bg-brass hover:text-teal-deep focus-visible:border-brass focus-visible:bg-brass focus-visible:text-teal-deep"
              >
                <Icon className="h-4 w-4" aria-hidden />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── Where we are ────────────────────────────────────────────── */

function WhereWeAre() {
  return (
    <section id="where" className="relative isolate overflow-hidden bg-pearl py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:grid-cols-[1.05fr_1fr] md:px-10">
        <div>
          <Eyebrow>Where We Are</Eyebrow>
          <RevealLines lines={['Away from the noise,', <em key="c" className="text-[#8a6f3c]">  close to nature.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
          <span data-reveal="rule" className="mt-6 block h-px w-24 bg-brass" aria-hidden />
          <p data-reveal className="mt-6 max-w-xl leading-relaxed text-muted">
            The Gurukula sits in the village of Dalimb near Uruli Kanchan, surrounded by farmland and open hills. The setting is deliberate: clean air, home-grown food, and the unhurried pace of village life.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="What surrounds the campus">
            {['Farmland', 'Open hills', 'Clean air', 'Home-grown food'].map((c, i) => (
              <li key={c} data-reveal="scale" style={d(0.1 + i * 0.08)} className="cp-chip cp-chip--light">
                {c}
              </li>
            ))}
          </ul>
          <a data-reveal href={contact.mapsUrl} target="_blank" rel="noreferrer" className="link-sweep mt-8 inline-block font-semibold text-teal">
            Find us on Google Maps →
          </a>
        </div>

        <div data-reveal="blur" className="cp-scene-card cp-scene-card--map">
          <iframe
            title="Map showing the location of Bhaktivedanta Gurukula, Dalimb, Pune"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7376160871595!2d74.15979157465054!3d18.450218671320574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e16bee602e41%3A0xdd184365a21bd798!2sBhaktivedanta%20Gurukula%20Pune!5e0!3m2!1sen!2sin!4v1792333741897!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  )
}

/* ── One campus space ────────────────────────────────────────── */

const toneClass: Record<Space['tone'], string> = {
  dark: 'grain bg-slate text-pearl',
  sand: 'bg-sand',
  deep: 'grain bg-teal-deep text-pearl',
  pearl: 'bg-pearl',
}

function Ambient({ id }: { id: string }): ReactNode {
  switch (id) {
    case 'temple':
      return <EmberScene />
    case 'classrooms':
      return <LetterScene />
    case 'sports-ground':
      return <TrackScene />
    case 'goshala':
      return (
        <>
          <ButterflyScene />
          <GrassScene />
        </>
      )
    default:
      return null
  }
}

function SpaceSection({ space, index, start, onOpen }: { space: Space; index: number; start: number; onOpen: (i: number) => void }) {
  const dark = space.tone === 'dark' || space.tone === 'deep'
  const { Icon } = space
  const grass = space.id === 'goshala'

  return (
    <section id={space.id} aria-label={space.title} className={`${toneClass[space.tone]} relative isolate overflow-hidden py-20 md:py-28 ${grass ? 'pb-36 md:pb-48' : ''}`}>
      {dark && (
        <>
          <div className="drift pointer-events-none absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-brass/10 blur-3xl" aria-hidden />
          <div className="drift pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-brass/10 blur-3xl" style={{ animationDelay: '-6s' }} aria-hidden />
        </>
      )}
      <Ambient id={space.id} />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10">
        <span className="act-num pointer-events-none absolute right-5 top-[-1.5rem] md:right-10" data-parallax="0.3" aria-hidden>
          {pad(index + 1)}
        </span>

        <div className="relative grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="act-badge pulse-ring" aria-hidden>
                <Icon className="h-5 w-5" />
              </span>
              <Eyebrow light={dark}>
                {pad(index + 1)} · {space.title.replace(/^The /, '')}
              </Eyebrow>
            </div>
            <RevealLines lines={[space.title]} className={`display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] ${dark ? 'text-pearl' : 'text-teal'}`} />
            <span data-reveal="rule" className="mt-5 block h-px w-24 bg-brass" aria-hidden />
          </div>
          <div>
            <p data-reveal className={`max-w-xl leading-relaxed md:justify-self-end ${dark ? 'text-pearl/70' : 'text-muted'}`}>
              {space.text}
            </p>
            <ul className="mt-6 flex flex-wrap items-center gap-2.5" aria-label={`${space.title} — what happens here`}>
              {space.chips.map((c, i) => (
                <li key={c} data-reveal="scale" style={d(0.1 + i * 0.08)} className={`cp-chip ${dark ? 'cp-chip--dark' : 'cp-chip--light'}`}>
                  {c}
                </li>
              ))}
              {space.id === 'sports-ground' && (
                <li aria-hidden className="ml-2">
                  <BouncingBall />
                </li>
              )}
              {space.id === 'temple' && (
                <li aria-hidden className="eq ml-1 flex h-6 items-end gap-1 text-brass">
                  <span />
                  <span />
                  <span />
                  <span />
                </li>
              )}
            </ul>
          </div>
        </div>

        <ActivityGallery images={space.images} start={start} onOpen={onOpen} landscapeSingle={space.landscapeSingle} />
      </div>
    </section>
  )
}

/* ── Residential life ────────────────────────────────────────── */

const homeCards: { Icon: LucideIcon; title: string; text: string }[] = [
  { Icon: Home, title: 'Live together', text: 'Ashram-style accommodation, shared by all.' },
  { Icon: ChefHat, title: 'Cook & serve', text: 'Prasadam made and served together.' },
  { Icon: Users, title: 'One family', text: 'Growing up under the care of their teachers.' },
]

function Residential({ index, imageIndex, onOpen }: { index: number; imageIndex: number; onOpen: (i: number) => void }) {
  return (
    <section id="residential-life" className="grain relative isolate overflow-hidden bg-slate py-20 text-pearl md:py-28">
      <HomeGlow />
      <div className="drift pointer-events-none absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-brass/10 blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:grid-cols-[1.1fr_1fr] md:px-10">
        <div>
          <div className="flex items-center gap-4">
            <span className="act-badge pulse-ring" aria-hidden>
              <Home className="h-5 w-5" />
            </span>
            <Eyebrow light>{pad(index + 1)} · Residential Life</Eyebrow>
          </div>
          <RevealLines lines={['A home,', <em key="h" className="text-brass-soft">not a hostel.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-pearl" />
          <span data-reveal="rule" className="mt-5 block h-px w-24 bg-brass" aria-hidden />
          <p data-reveal className="mt-6 max-w-lg leading-relaxed text-pearl/70">
            Students live together in ashram-style accommodation, cook and serve prasadam together, and grow up as one family under the care of their teachers — the way a gurukula has always been.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {homeCards.map(({ Icon, title, text }, i) => (
              <li key={title} data-reveal="scale" style={d(0.1 + i * 0.12)} className="cp-home-card">
                <span className="cp-home-card__icon" style={{ animationDelay: `${-i * 1.1}s` }}>
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-3 font-semibold text-pearl">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-pearl/65">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          <div data-reveal="scale" style={{ width: 'clamp(230px, 34vw, 380px)' }}>
            <TiltTile image={residentialImage} onOpen={() => onOpen(imageIndex)} variant="polaroid" ar="4 / 3" rotate={-3} />
          </div>
        </div>
      </div>
    </section>
  )
}