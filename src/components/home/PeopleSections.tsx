import { useState } from 'react'
import { Quote } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { Eyebrow, RevealLines } from '@/components/ui'
import { alumni, governingBody, teachers, testimonials, volunteers } from '@/content/people'

/** Three-line preview that opens to the full text; the button keeps keyboard and screen-reader users in the loop. */
function ReadMore({ paragraphs, className = '', buttonClass = '' }: { paragraphs: string[]; className?: string; buttonClass?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={className}>
      <div className={open ? 'space-y-3' : 'line-clamp-3'}>
        {(open ? paragraphs : paragraphs.slice(0, 1)).map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className={`mt-2 text-xs font-bold underline underline-offset-4 ${buttonClass}`}>
        {open ? 'Show less' : 'Read more'}
      </button>
    </div>
  )
}

/** The Director already has his own card above, so he is not repeated in the grid. */
const educators = teachers.filter((t) => !governingBody.some((g) => g.img === t.img))

const teacherTones = [
  { bg: '#123f43', text: '#f5f0e7' },
  { bg: '#e6dccb', text: '#123f43' },
  { bg: '#6c2c3c', text: '#f5f0e7' },
]

/** Alumni and parent cards: strong colours, none of them white or the section's own background. */
const quoteTones = ['#6c2c3c', '#1f6a6e', '#8a5a26', '#31507a', '#4d3a66']

/* ── Team: governing body, teachers and volunteers ────────────── */
export function TeamSection() {
  return (
    <section id="team" aria-labelledby="team-title" className="bg-pearl py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <Eyebrow>Our Team</Eyebrow>
            <RevealLines lines={['The hands that', <em key="g" className="text-[#8a6f3c]">guide them.</em>]} className="display mt-5 text-[clamp(2.5rem,5vw,4.5rem)] text-teal" />
          </div>
          <p data-reveal className="max-w-xl leading-relaxed text-muted md:justify-self-end">
            Educators, engineers, architects and devotees — a team that blends professional excellence with spiritual depth to nurture every student.
          </p>
        </div>

        {/* Governing body */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {governingBody.map((p, i) => (
            <article key={p.name} data-reveal style={{ ['--d' as string]: `${i * 0.12}s` }} className="grid gap-6 rounded-3xl border border-teal/15 bg-sand/50 p-7 sm:grid-cols-[10rem_1fr] md:p-9">
              <div className="w-40 overflow-hidden rounded-2xl sm:w-auto">
                <Photo src={p.img} alt={`Portrait of ${p.name}`} ratio={1.2} position="top" width={400} widths={[300, 500]} sizes="(min-width: 768px) 12rem, 60vw" className="aspect-[5/6] w-full object-cover" style={{ objectPosition: 'center 20%' }} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-medium text-teal">{p.name}</h3>
                {p.role && <p className="eyebrow mt-2 !text-[0.62rem] text-[#8a6f3c]">{p.role}</p>}
                <p className="mt-4 text-sm leading-relaxed text-muted">{p.bio[0]}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Teachers — compact arch portraits on coloured cards */}
        <div className="mt-20">
          <div className="flex items-center gap-4">
            <h3 className="font-display text-3xl font-medium text-teal md:text-4xl">Our educators</h3>
            <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-brass to-transparent" />
          </div>
          <div className="mt-8 grid grid-cols-2 items-start gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {educators.map((t, i) => {
              const tone = teacherTones[i % teacherTones.length]
              return (
                <article
                  key={t.name}
                  data-reveal
                  style={{ ['--d' as string]: `${(i % 4) * 0.08}s`, backgroundColor: tone.bg, color: tone.text }}
                  className="group flex flex-col items-center rounded-[1.75rem] px-4 pb-6 pt-7 text-center transition-transform duration-500 ease-[var(--ease-silk)] hover:-translate-y-1.5 sm:px-5"
                >
                  <div className="relative">
                    <span aria-hidden className="absolute -inset-1.5 rounded-t-full rounded-b-3xl border border-current opacity-30 transition-opacity duration-500 group-hover:opacity-70" />
                    <div className="relative h-36 w-28 overflow-hidden rounded-t-full rounded-b-2xl sm:h-40 sm:w-32">
                      <Photo src={t.img} alt={`Portrait of ${t.name}`} ratio={1.25} position="top" width={320} widths={[240, 400]} sizes="8rem" className="h-full w-full object-cover" style={{ objectPosition: 'center 18%' }} />
                    </div>
                  </div>
                  <h4 className="mt-5 font-display text-xl font-medium leading-tight">{t.name}</h4>
                  <ReadMore paragraphs={t.bio} className="mt-2 text-[0.82rem] leading-relaxed" buttonClass="opacity-90 hover:opacity-100" />
                </article>
              )
            })}
          </div>
        </div>

        {/* Volunteers */}
        <div className="mt-20 border-t border-teal/15 pt-14">
          <Eyebrow className="text-[#8a6f3c]">Volunteers & Well-wishers</Eyebrow>
          <div className="mt-8 grid items-start gap-8 md:grid-cols-3">
            {volunteers.map((v, i) => (
              <article key={v.name} data-reveal style={{ ['--d' as string]: `${i * 0.12}s` }} className="flex gap-5">
                <Photo src={v.img} alt={`Portrait of ${v.name}`} ratio={1} width={200} widths={[160, 320]} sizes="6rem" className="h-20 w-20 shrink-0 rounded-full object-cover" />
                <div>
                  <h3 className="font-display text-lg font-medium text-teal">{v.name}</h3>
                  {v.role && <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#8a6f3c]">{v.role}</p>}
                  <ReadMore paragraphs={v.bio} className="mt-2 text-sm leading-relaxed text-muted" buttonClass="text-[#8a6f3c] hover:text-teal" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Notable alumni ───────────────────────────────────────────── */
export function AlumniSection() {
  return (
    <section id="alumni" aria-labelledby="alumni-title" className="grain relative bg-slate py-24 text-pearl md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <Eyebrow light>Notable Alumni</Eyebrow>
            <RevealLines lines={['Where life', <em key="t" className="text-brass-soft">takes them.</em>]} className="display mt-5 text-[clamp(2.5rem,5vw,4.5rem)]" />
          </div>
          <p data-reveal className="max-w-xl leading-relaxed text-pearl/70 md:justify-self-end">
            From universities in America to the Academy in Mayapur — our alumni carry the Gurukula's values into the world.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {alumni.map((a, i) => (
            <figure
              key={a.name}
              data-reveal
              style={{ ['--d' as string]: `${(i % 3) * 0.12}s`, backgroundColor: quoteTones[i % quoteTones.length] }}
              className="flex flex-col rounded-3xl border border-pearl/20 p-7 text-pearl shadow-[0_24px_50px_-28px_rgba(0,0,0,0.6)] md:p-8"
            >
              <Quote className="h-7 w-7 text-brass-soft" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-pearl/90">
                <p>{a.quote[0]}</p>
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-pearl/25 pt-6">
                <Photo src={a.img} alt={`Portrait of ${a.name}`} ratio={1} width={160} widths={[120, 240]} sizes="3.5rem" className="h-14 w-14 rounded-full border-2 border-brass-soft/70 object-cover" />
                <div>
                  <p className="font-display text-lg font-medium text-pearl">{a.name}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-pearl/75">{a.path}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Parent testimonials ──────────────────────────────────────── */
export function TestimonialsSection() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-sand py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="text-center">
          <Eyebrow className="justify-center text-[#8a6f3c]">Testimonials</Eyebrow>
          <RevealLines lines={['In the words of', <em key="p" className="text-[#8a6f3c]">our parents.</em>]} className="display mx-auto mt-5 max-w-3xl text-[clamp(2.5rem,5vw,4.5rem)] text-teal" />
        </div>

        <div className="mt-20 columns-1 gap-x-6 md:columns-2 xl:columns-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              data-reveal
              style={{ ['--d' as string]: `${(i % 3) * 0.1}s`, backgroundColor: quoteTones[(i + 1) % quoteTones.length] }}
              className="relative mb-10 break-inside-avoid overflow-hidden rounded-3xl rounded-tr-[4.5rem] px-7 pb-8 pt-16 text-pearl md:px-8"
            >
              <Quote aria-hidden="true" className="absolute -right-3 -top-3 h-28 w-28 rotate-12 text-pearl/10" />
              <figcaption className="absolute left-7 top-5 flex items-center gap-3 md:left-8">
                <Photo src={t.img} alt={`Portrait of ${t.name}`} ratio={1} width={160} widths={[120, 240]} sizes="3.5rem" className="h-14 w-14 rounded-full border-2 border-brass-soft object-cover" />
                <div>
                  <p className="font-display text-lg font-medium leading-tight">{t.name}</p>
                  <p className="mt-0.5 text-xs text-pearl/75">{t.relation}</p>
                </div>
              </figcaption>
              <blockquote className="relative mt-8 text-[0.95rem] leading-relaxed text-pearl/90">
                <p>“{t.quote}”</p>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}