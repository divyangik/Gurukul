import { Link } from '@tanstack/react-router'
import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react'
import { contact, footerAbout, navGroups, social } from '@/content/site'
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

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4">
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
                  {group.label === 'Products' && (
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
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {social.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-pearl/75 hover:text-brass">
                  {s.label} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
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
