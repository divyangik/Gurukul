import { useEffect, useRef, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, Check, Copy, Flame, GraduationCap, Mail, MessageCircle, Minus, Plus, Trash2, UtensilsCrossed, X } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ChipCloud, Mandala, SpotCard } from '@/components/services'
import { Eyebrow, PageHero, RevealLines } from '@/components/ui'
import { contact } from '@/content/site'
import { serviceHead } from '@/content/services'

export const Route = createFileRoute('/donation')({
  head: () => ({
    ...serviceHead('Donation', 'Support Bhaktivedanta Gurukula by sponsoring a student, annadaan, scriptures or vigraha seva — or give in kind, with your time or your talent.', '/donation'),
  }),
  component: Page,
})

/* Amounts and wording are taken from the official Donation page. */
type Accent = 'brass' | 'saffron'
type CashItem = { id: string; title: string; period: string; amount: number; Icon: LucideIcon; accent: Accent }

/** Two accent colours: antique brass and a warm saffron. (Class names are written out in full so Tailwind can see them.) */
const accents: Record<Accent, { label: string; border: string; wash: string; icon: string; pill: string; bar: string; plus: string }> = {
  brass: { label: 'text-brass', border: 'border-brass', wash: 'bg-brass/10', icon: 'bg-brass/15 text-brass', pill: 'bg-brass text-teal-deep', bar: 'bg-brass', plus: 'bg-brass text-teal-deep' },
  saffron: { label: 'text-[#f2a877]', border: 'border-[#e8894a]', wash: 'bg-[#e8894a]/10', icon: 'bg-[#e8894a]/15 text-[#f2a877]', pill: 'bg-[#e8894a] text-teal-deep', bar: 'bg-[#e8894a]', plus: 'bg-[#e8894a] text-teal-deep' },
}

const cashItems: CashItem[] = [
  { id: 'student-month', title: 'Sponsor a student', period: '1 month', amount: 10000, Icon: GraduationCap, accent: 'brass' },
  { id: 'student-year', title: 'Sponsor a student', period: '1 year', amount: 120000, Icon: GraduationCap, accent: 'brass' },
  { id: 'anna-day', title: 'Annadaan', period: '1 day', amount: 6000, Icon: UtensilsCrossed, accent: 'saffron' },
  { id: 'anna-month', title: 'Annadaan', period: '1 month', amount: 180000, Icon: UtensilsCrossed, accent: 'saffron' },
  { id: 'sastra', title: 'Sastra Daan', period: 'Sacred books', amount: 500, Icon: BookOpen, accent: 'brass' },
  { id: 'vigraha', title: 'Vigraha Seva', period: 'Deity service', amount: 15000, Icon: Flame, accent: 'saffron' },
]

const quickAmounts = [500, 1000, 2500, 5000, 10000]

const kindItems = [
  { title: 'Educational materials', note: 'Books and stationery', amount: '₹3,00,000 per year' },
  { title: 'Sponsor a teacher', note: 'Support a teacher’s service', amount: '₹20,000 per month' },
]

const otherKind = ['Fruits', 'Grocery', 'Stationery', 'Musical instruments']
const timeTalent = ['Organising and hosting events', 'Book distribution']
const teach = ['Live workshops', 'Online workshops']

const inr = (n: number) => '₹' + n.toLocaleString('en-IN')

/** Number that glides to its new value. */
function AnimatedNumber({ value }: { value: number }) {
  const [shown, setShown] = useState(value)
  const from = useRef(value)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(value)
      from.current = value
      return
    }
    const start = performance.now()
    const a = from.current
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 700)
      const v = Math.round(a + (value - a) * (1 - Math.pow(1 - p, 4)))
      setShown(v)
      from.current = v
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value])
  return <>{inr(shown)}</>
}

function Page() {
  const [qty, setQty] = useState<Record<string, number>>({})
  const [custom, setCustom] = useState(0)
  const [copied, setCopied] = useState(false)

  const set = (id: string, n: number) => setQty((q) => ({ ...q, [id]: Number.isFinite(n) ? Math.max(0, Math.min(99, Math.floor(n))) : 0 }))
  const setCustomAmount = (n: number) => setCustom(Number.isFinite(n) ? Math.max(0, Math.min(10000000, Math.floor(n))) : 0)
  const chosen = cashItems.filter((i) => (qty[i.id] ?? 0) > 0)
  const itemsTotal = chosen.reduce((sum, i) => sum + i.amount * (qty[i.id] ?? 0), 0)
  const total = itemsTotal + custom
  const hasAny = chosen.length > 0 || custom > 0
  const clearAll = () => {
    setQty({})
    setCustom(0)
  }

  const lines = [...chosen.map((i) => `${qty[i.id]} × ${i.title} (${i.period}) = ${inr(i.amount * qty[i.id])}`), ...(custom > 0 ? [`Other contribution = ${inr(custom)}`] : [])]
  const message = hasAny
    ? `Hare Krishna! I would like to donate to Bhaktivedanta Gurukula:\n${lines.join('\n')}\nTotal: ${inr(total)}`
    : 'Hare Krishna! I would like to know more about donating to Bhaktivedanta Gurukula.'
  const whatsappHref = `${contact.whatsappUrl}?text=${encodeURIComponent(message)}`
  const mailHref = `mailto:${contact.email}?subject=${encodeURIComponent('Donation to Bhaktivedanta Gurukula')}&body=${encodeURIComponent(message + '\n\nTransaction details: ')}`

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.whatsapp)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      /* clipboard unavailable — the number is visible to copy by hand */
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Selfless service"
        title={['Give to', 'a gurukula.']}
        intro="We heartily invite you to be a part of this selfless service by your valuable contribution — in cash, in kind, or with your time and talent."
        image="/img/festivals/deity-worship-5.jpg"
        imageAlt="Worship at the Gurukula temple"
        position="center 40%"
      />

      {/* Facts from the official site */}
      <section className="bg-pearl">
        <div className="mx-auto grid max-w-[1440px] grid-cols-3 divide-x divide-teal/12 px-5 py-12 text-center md:px-10 md:py-16">
          {[
            { n: 50, l: 'students' },
            { n: 10, l: 'teachers' },
            { n: 5, l: 'acre campus' },
          ].map((f) => (
            <div key={f.l} data-reveal>
              <p className="display text-[clamp(2.5rem,7vw,5.5rem)] leading-none text-teal"><span data-count={f.n}>0</span></p>
              <p className="eyebrow mt-3 text-[#8a6f3c]">{f.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cash — interactive */}
      <section id="give" className="grain jali relative overflow-clip bg-teal-deep py-20 text-pearl md:py-28">
        <Mandala className="pointer-events-none absolute -right-48 -top-24 h-[640px] w-[640px] opacity-[0.18]" />
        <div className="drift pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-brass/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
          <Eyebrow light>Donate in cash</Eyebrow>
          <RevealLines lines={['Choose how', <em key="g" className="text-brass">you give.</em>]} className="display mt-5 text-[clamp(2.5rem,5.5vw,5rem)] text-pearl" />

          <p data-reveal className="mt-6 max-w-xl leading-relaxed text-pearl/70">
            Pick what you would like to give, set the quantity, and watch your total build up on the right. Then confirm with us on WhatsApp or email.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <ul className="grid gap-5 sm:grid-cols-2">
              {cashItems.map((item, i) => {
                const n = qty[item.id] ?? 0
                const c = accents[item.accent]
                return (
                  <li key={item.id} data-reveal style={{ ['--d' as string]: `${(i % 2) * 0.08}s` }}>
                    <div className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-500 md:p-7 ${n > 0 ? `${c.border} ${c.wash}` : 'border-pearl/15 bg-pearl/[0.04] hover:border-pearl/30'}`}>
                      <span className={`absolute inset-x-0 top-0 h-1 ${c.bar} ${n > 0 ? 'opacity-100' : 'opacity-50'}`} aria-hidden />
                      <div className="flex items-start justify-between gap-3">
                        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${c.icon}`} aria-hidden>
                          <item.Icon className="h-6 w-6" />
                        </span>
                        <span className={`rounded-full border border-current px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.16em] ${c.label}`}>{item.period}</span>
                      </div>
                      <h3 className="display mt-5 text-[1.85rem] leading-tight text-pearl">{item.title}</h3>
                      <p className={`display mt-1 text-3xl ${c.label}`}>{inr(item.amount)}</p>

                      <div className="mt-6 flex items-center justify-between gap-3 border-t border-pearl/12 pt-5">
                        <div className="flex items-center gap-2" role="group" aria-label={`Quantity: ${item.title}, ${item.period}`}>
                          <button type="button" onClick={() => set(item.id, n - 1)} disabled={n === 0} aria-label="Decrease" className="flex h-10 w-10 items-center justify-center rounded-full border border-pearl/30 transition hover:bg-pearl hover:text-teal-deep disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-pearl">
                            <Minus className="h-4 w-4" aria-hidden />
                          </button>
                          <input
                            inputMode="numeric"
                            aria-label={`Number of ${item.title} (${item.period})`}
                            value={n}
                            onChange={(e) => set(item.id, parseInt(e.target.value.replace(/\D/g, ''), 10))}
                            onFocus={(e) => e.currentTarget.select()}
                            className="h-10 w-12 rounded-lg border border-transparent bg-transparent text-center font-display text-2xl text-pearl outline-none focus:border-pearl/40"
                          />
                          <button type="button" onClick={() => set(item.id, n + 1)} aria-label="Increase" className={`flex h-10 w-10 items-center justify-center rounded-full transition hover:scale-110 ${c.plus}`}>
                            <Plus className="h-4 w-4" aria-hidden />
                          </button>
                        </div>
                        <p className={`text-right text-sm font-semibold transition-opacity duration-300 ${n > 0 ? 'opacity-100' : 'opacity-0'} ${c.label}`} aria-hidden={n === 0}>
                          = {inr(item.amount * n)}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>

            {/* Running total */}
            <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
              <div className="shine rounded-3xl border border-brass/40 bg-teal p-7 md:p-9">
                <div className="flex items-center justify-between">
                  <p className="eyebrow text-brass">Your contribution</p>
                  {hasAny && (
                    <button type="button" onClick={clearAll} className="flex items-center gap-1.5 text-xs font-semibold text-pearl/60 transition hover:text-pearl">
                      <Trash2 className="h-3.5 w-3.5" aria-hidden /> Clear all
                    </button>
                  )}
                </div>
                <p className="display mt-4 text-[clamp(3rem,6vw,4.5rem)] leading-none text-pearl" aria-live="polite">
                  <AnimatedNumber value={total} />
                </p>

                <ul className="mt-6 min-h-[3.5rem] space-y-2.5 border-t border-pearl/15 pt-5 text-sm text-pearl/75">
                  {!hasAny && <li>Add an item or an amount to see your total.</li>}
                  {chosen.map((i) => (
                    <li key={i.id} className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2">
                        <span className={`h-2 w-2 shrink-0 rotate-45 ${accents[i.accent].bar}`} aria-hidden />
                        {qty[i.id]} × {i.title} · {i.period}
                      </span>
                      <span className="flex items-center gap-2 text-pearl">
                        {inr(i.amount * qty[i.id])}
                        <button type="button" onClick={() => set(i.id, 0)} aria-label={`Remove ${i.title}, ${i.period}`} className="rounded-full p-1 text-pearl/50 transition hover:bg-pearl/10 hover:text-pearl">
                          <X className="h-3.5 w-3.5" aria-hidden />
                        </button>
                      </span>
                    </li>
                  ))}
                  {custom > 0 && (
                    <li className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 shrink-0 rotate-45 bg-pearl/70" aria-hidden /> Other contribution
                      </span>
                      <span className="flex items-center gap-2 text-pearl">
                        {inr(custom)}
                        <button type="button" onClick={() => setCustom(0)} aria-label="Remove other contribution" className="rounded-full p-1 text-pearl/50 transition hover:bg-pearl/10 hover:text-pearl">
                          <X className="h-3.5 w-3.5" aria-hidden />
                        </button>
                      </span>
                    </li>
                  )}
                </ul>

                {/* Any other amount */}
                <div className="mt-6 border-t border-pearl/15 pt-5">
                  <label htmlFor="custom-amount" className="eyebrow text-brass">Or give any amount</label>
                  <div className="mt-3 flex items-center rounded-xl border border-pearl/25 bg-teal-deep/60 px-4 focus-within:border-brass focus-within:ring-2 focus-within:ring-brass/30">
                    <span className="font-display text-2xl text-brass" aria-hidden>₹</span>
                    <input
                      id="custom-amount"
                      inputMode="numeric"
                      placeholder="Enter amount"
                      value={custom > 0 ? custom.toLocaleString('en-IN') : ''}
                      onChange={(e) => setCustomAmount(parseInt(e.target.value.replace(/\D/g, ''), 10))}
                      className="w-full bg-transparent px-3 py-3 text-lg text-pearl outline-none placeholder:text-pearl/35"
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Quick amounts">
                    {quickAmounts.map((q) => (
                      <button key={q} type="button" onClick={() => setCustomAmount(custom + q)} className="rounded-full border border-pearl/25 px-3.5 py-1.5 text-xs font-semibold text-pearl/85 transition hover:border-brass hover:bg-brass/15 hover:text-pearl">
                        + {inr(q)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3">
                  <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn-brass justify-center">
                    <MessageCircle className="h-4 w-4" aria-hidden /> Confirm on WhatsApp
                  </a>
                  <a href={mailHref} className="btn btn-ghost-light justify-center">
                    <Mail className="h-4 w-4" aria-hidden /> Confirm by email
                  </a>
                </div>
                <p className="mt-5 text-xs leading-relaxed text-pearl/60">This only prepares your message. Pay by GPay below, then send us the transaction details.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In kind */}
      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Eyebrow>Donate in kind</Eyebrow>
          <RevealLines lines={['What the Gurukula', <em key="n" className="text-[#8a6f3c]">needs every day.</em>]} className="display mt-5 text-[clamp(2.25rem,5vw,4.5rem)] text-teal" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {kindItems.map((k, i) => (
              <SpotCard key={k.title} delay={i * 0.1}>
                <div className="p-8 md:p-10">
                  <span className="display text-6xl text-brass">{`0${i + 1}`}</span>
                  <h3 className="display mt-4 text-[clamp(1.9rem,3vw,2.6rem)] text-teal">{k.title}</h3>
                  <p className="mt-2 text-muted">{k.note}</p>
                  <p className="display mt-6 text-3xl text-[#8a6f3c]">{k.amount}</p>
                </div>
              </SpotCard>
            ))}
          </div>
          <div className="mt-10">
            <p data-reveal className="eyebrow mb-4 text-[#8a6f3c]">Also gratefully received</p>
            <ChipCloud items={otherKind} />
          </div>
        </div>
      </section>

      {/* Time & talent */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-2 md:px-10">
          <div>
            <Eyebrow>Talent &amp; time</Eyebrow>
            <RevealLines lines={['Give your', <em key="h" className="text-[#8a6f3c]">hands.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,4rem)] text-teal" />
            <div className="mt-8">
              <ChipCloud items={timeTalent} />
            </div>
          </div>
          <div>
            <Eyebrow>Teach what you are good at</Eyebrow>
            <RevealLines lines={['Give your', <em key="s" className="text-[#8a6f3c]">skill.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,4rem)] text-teal" />
            <div className="mt-8">
              <ChipCloud items={teach} />
            </div>
          </div>
        </div>
      </section>

      {/* How to pay */}
      <section className="grain jali relative overflow-hidden bg-teal-deep py-20 text-pearl md:py-28">
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:grid-cols-[1fr_1fr] md:px-10">
          <div>
            <Eyebrow light>How to pay</Eyebrow>
            <RevealLines lines={['Pay by GPay,', <span key="t" className="text-flow">then tell us.</span>]} className="display mt-5 text-[clamp(2.5rem,5.5vw,5rem)] text-pearl" />
            <p data-reveal className="mt-6 max-w-md leading-relaxed text-pearl/72">
              Send your contribution through GPay, then email us the transaction details so we can acknowledge your gift. For any question, call or message us.
            </p>
          </div>
          <div data-reveal className="rounded-3xl border border-brass/40 bg-pearl/[0.05] p-8 md:p-10">
            <p className="eyebrow text-brass">GPay · WhatsApp · Phone</p>
            <p className="display mt-4 text-[clamp(2rem,4.5vw,3.5rem)] text-pearl">{contact.whatsappDisplay}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={copy} className="btn btn-brass">
                {copied ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
                <span aria-live="polite">{copied ? 'Copied' : 'Copy number'}</span>
              </button>
              <a href={contact.phoneUrl} className="btn btn-ghost-light">Call us</a>
            </div>
            <p className="mt-8 text-sm text-pearl/65">Send transaction details to</p>
            <a href={mailHref} className="link-sweep mt-1 inline-block break-all font-semibold text-pearl">{contact.email}</a>
          </div>
        </div>
      </section>
    </>
  )
}