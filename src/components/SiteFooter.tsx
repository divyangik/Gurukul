import { Link } from '@tanstack/react-router'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { contact, footerAbout, navGroups, social } from '@/content/site'

function SocialIcon({ label }: { label: string }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: 'h-[18px] w-[18px]',
    'aria-hidden': true,
  }
  if (label.startsWith('Facebook'))
    return (
      <svg {...common}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  if (label.startsWith('Instagram'))
    return (
      <svg {...common}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  return (
    <svg {...common}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  )
}
import { Wordmark } from './SiteNav'

export function SiteFooter() {
  return (
    <footer className="jali relative overflow-hidden bg-teal-deep text-pearl">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Wordmark />
            <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-pearl/75">{footerAbout}</p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a href={contact.whatsappUrl} className="link-sweep inline-flex items-center gap-3 text-pearl/90">
                  <MessageCircle className="h-4 w-4 text-brass" aria-hidden /> WhatsApp {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="link-sweep inline-flex items-center gap-3 text-pearl/90">
                  <Mail className="h-4 w-4 text-brass" aria-hidden /> {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="link-sweep inline-flex items-center gap-3 text-pearl/90">
                  <MapPin className="h-4 w-4 text-brass" aria-hidden /> {contact.location}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {navGroups.map((group) => (
              <div key={group.label}>
                <p className="eyebrow text-brass">{group.label}</p>
                <ul className="mt-5 space-y-2.5">
                  {group.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} hash={l.hash} className="link-sweep text-sm text-pearl/75 hover:text-pearl">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                  {group.label === 'Services' && (
                    <li>
                      <Link to="/donation" className="link-sweep text-sm text-pearl/75 hover:text-pearl">
                        Donate
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="brass-rule mt-20 opacity-60" />

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="font-display text-4xl leading-none text-pearl md:text-6xl">
            Truth, Tradition, <em className="text-brass">Transformation.</em>
          </p>
          <ul className="flex flex-wrap gap-3">
            {social.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-pearl/25 text-pearl/80 transition-all duration-500 hover:-translate-y-0.5 hover:border-brass hover:bg-brass/10 hover:text-brass focus-visible:border-brass focus-visible:text-brass"
                >
                  <SocialIcon label={s.label} />
                  <span className="sr-only">{s.label} (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-pearl/10 pt-6 text-xs text-pearl/55 sm:flex-row sm:justify-between">
          <p>Copyright © Bhaktivedanta Gurukula. All Rights Reserved.</p>
          <p>Dalimb, Uruli Kanchan · Pune · Maharashtra</p>
        </div>
      </div>
    </footer>
  )
}