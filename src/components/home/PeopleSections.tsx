import { Quote } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { Eyebrow, RevealLines } from '@/components/ui'
import { alumni, governingBody, teachers, testimonials, volunteers } from '@/content/people'

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
              <div className="overflow-hidden rounded-2xl">
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

        {/* Teachers */}
        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((t, i) => (
            <article key={t.name} data-reveal style={{ ['--d' as string]: `${(i % 3) * 0.1}s` }} className="group">
              <div className="overflow-hidden rounded-2xl">
                <Photo src={t.img} alt={`Portrait of ${t.name}`} ratio={1.15} position="top" width={600} widths={[400, 700]} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="aspect-[6/7] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{ objectPosition: 'center 20%' }} />
              </div>
              <h3 className="mt-5 font-display text-xl font-medium text-teal">{t.name}</h3>
              <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-muted">{t.bio[0]}</p>
            </article>
          ))}
        </div>

        {/* Volunteers */}
        <div className="mt-20 border-t border-teal/15 pt-14">
          <Eyebrow className="text-[#8a6f3c]">Volunteers & Well-wishers</Eyebrow>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {volunteers.map((v, i) => (
              <article key={v.name} data-reveal style={{ ['--d' as string]: `${i * 0.12}s` }} className="flex gap-5">
                <Photo src={v.img} alt={`Portrait of ${v.name}`} ratio={1} width={200} widths={[160, 320]} sizes="6rem" className="h-20 w-20 shrink-0 rounded-full object-cover" />
                <div>
                  <h3 className="font-display text-lg font-medium text-teal">{v.name}</h3>
                  {v.role && <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#8a6f3c]">{v.role}</p>}
                  <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-muted">{v.bio[0]}</p>
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
            <figure key={a.name} data-reveal style={{ ['--d' as string]: `${(i % 3) * 0.12}s` }} className="flex flex-col rounded-3xl border border-pearl/10 bg-teal-deep/60 p-7 md:p-8">
              <Quote className="h-6 w-6 text-brass" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-pearl/80">
                <p>{a.quote[0]}</p>
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-pearl/10 pt-6">
                <Photo src={a.img} alt={`Portrait of ${a.name}`} ratio={1} width={160} widths={[120, 240]} sizes="3.5rem" className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="font-display text-lg font-medium text-brass-soft">{a.name}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-pearl/55">{a.path}</p>
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
          <Eyebrow className="text-[#8a6f3c]">Testimonials</Eyebrow>
          <RevealLines lines={['In the words of', <em key="p" className="text-[#8a6f3c]">our parents.</em>]} className="display mx-auto mt-5 max-w-3xl text-[clamp(2.5rem,5vw,4.5rem)] text-teal" />
        </div>

        <div className="mt-16 columns-1 gap-6 md:columns-2 xl:columns-3">
          {testimonials.map((t, i) => (
            <figure key={t.name} data-reveal style={{ ['--d' as string]: `${(i % 3) * 0.1}s` }} className="mb-6 break-inside-avoid rounded-3xl border border-teal/10 bg-pearl p-7 shadow-sm md:p-8">
              <blockquote className="text-[0.95rem] leading-relaxed text-muted">
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-teal/10 pt-5">
                <Photo src={t.img} alt={`Portrait of ${t.name}`} ratio={1} width={160} widths={[120, 240]} sizes="3rem" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-display text-lg font-medium text-teal">{t.name}</p>
                  <p className="mt-0.5 text-xs text-muted">{t.relation}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
