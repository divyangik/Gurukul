import { useEffect, useRef, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react'
import { navGroups } from '@/content/site'

export function LotusMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M24 8c4.5 5 6.5 10 6.5 15S28 33 24 38c-4-5-6.5-10-6.5-15S19.5 13 24 8Z" />
      <path d="M24 38c-5-1-11-4.5-14-11 4-1.5 9-.5 12.5 2.5" />
      <path d="M24 38c5-1 11-4.5 14-11-4-1.5-9-.5-12.5 2.5" />
      <path d="M24 38c-7 0-14-2-18-7" opacity=".6" />
      <path d="M24 38c7 0 14-2 18-7" opacity=".6" />
      <path d="M14 42h20" />
    </svg>
  )
}

export function Wordmark({ light = true }: { light?: boolean }) {
  return (
    <span className={`flex items-center gap-3 ${light ? 'text-pearl' : 'text-teal'}`}>
      <LotusMark className="h-9 w-9 text-brass" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.45rem] font-semibold tracking-tight">Bhaktivedanta</span>
        <span className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.34em] opacity-75">Gurukula · Education</span>
      </span>
    </span>
  )
}

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const [scrolled, setScrolled] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpenGroup(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenGroup(null)
        setMobileOpen(false)
      }
    }
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenGroup(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  const groupActive = (label: string) =>
    navGroups.find((g) => g.label === label)?.links.some((l) => !l.hash && l.to !== '/' && pathname === l.to)

  const solid = scrolled || openGroup !== null

  return (
    <>
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500 ${
        solid ? 'bg-teal/95 py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md' : 'bg-transparent py-5'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brass focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-teal-deep"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 md:px-10">
        <Link to="/" aria-label="Bhaktivedanta Gurukula — home" className="shrink-0">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navGroups.map((group) => {
              const open = openGroup === group.label
              const active = groupActive(group.label)
              return (
                <li key={group.label} className="relative" onMouseEnter={() => setOpenGroup(group.label)} onMouseLeave={() => setOpenGroup(null)}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`menu-${group.label}`}
                    onClick={() => setOpenGroup(open ? null : group.label)}
                    className="group relative flex items-center gap-1.5 px-4 py-2 text-[0.82rem] font-semibold tracking-wide text-pearl/90 transition-colors hover:text-pearl"
                  >
                    {group.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-500 ${open ? 'rotate-180' : ''}`} aria-hidden />
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-brass transition-transform duration-500 ${
                        active || open ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </button>
                  <div
                    id={`menu-${group.label}`}
                    className={`absolute left-1/2 top-full pt-4 transition-all duration-500 ${
                      open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
                    } -translate-x-1/2`}
                  >
                    <div className="w-[min(560px,80vw)] overflow-hidden rounded-2xl border border-brass/25 bg-teal-deep/98 shadow-2xl">
                      <div className="grid grid-cols-[1fr_1.4fr]">
                        <div className="jali relative border-r border-brass/20 p-6">
                          <p className="eyebrow text-brass">{group.label}</p>
                          <p className="mt-3 font-display text-xl leading-snug text-pearl">{group.intro}</p>
                        </div>
                        <ul className="p-3">
                          {group.links.map((link, i) => {
                            const current = !link.hash && pathname === link.to
                            return (
                              <li key={link.label} style={{ transitionDelay: open ? `${i * 30}ms` : '0ms' }} className={`transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}>
                                <Link
                                  to={link.to}
                                  hash={link.hash}
                                  aria-current={current ? 'page' : undefined}
                                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-[0.9rem] transition-colors hover:bg-pearl/8 focus-visible:bg-pearl/8 ${
                                    current ? 'text-brass' : 'text-pearl/85 hover:text-pearl'
                                  }`}
                                >
                                  {link.label}
                                  {current && <span className="h-1.5 w-1.5 rotate-45 bg-brass" aria-hidden />}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
            <li>
              <Link
                to="/donation"
                className="relative px-4 py-2 text-[0.82rem] font-semibold tracking-wide text-pearl/90 hover:text-pearl"
                activeProps={{ className: 'text-brass' }}
              >
                Donate
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/book-visit" className="btn btn-brass hidden !px-5 !py-3 sm:inline-flex">
            Book a Visit <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-pearl/30 text-pearl lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>
    </header>
    <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  )
}

function MobileMenu({ open, onClose, pathname }: { open: boolean; onClose: () => void; pathname: string }) {
  const [expanded, setExpanded] = useState<string | null>('Gurukula')
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (open) closeRef.current?.focus()
  }, [open])

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className={`jali fixed inset-0 z-[70] flex flex-col bg-teal-deep transition-[opacity,visibility] duration-500 lg:hidden ${
        open ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div className="flex items-center justify-between px-5 py-5">
        <Wordmark />
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-pearl/30 text-pearl"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>
      <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-10">
        <ul className="divide-y divide-pearl/10 border-y border-pearl/10">
          {navGroups.map((group, gi) => {
            const isOpen = expanded === group.label
            return (
              <li
                key={group.label}
                className={`transition-all duration-700 ${open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                style={{ transitionDelay: open ? `${120 + gi * 70}ms` : '0ms' }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setExpanded(isOpen ? null : group.label)}
                  className="flex w-full items-center justify-between py-5 text-left font-display text-3xl text-pearl"
                >
                  {group.label}
                  <ChevronDown className={`h-5 w-5 text-brass transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} aria-hidden />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <ul className="overflow-hidden">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          hash={link.hash}
                          onClick={onClose}
                          tabIndex={isOpen ? 0 : -1}
                          className={`block py-2.5 pl-1 text-base ${!link.hash && pathname === link.to ? 'text-brass' : 'text-pearl/80'}`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li className="h-4" />
                  </ul>
                </div>
              </li>
            )
          })}
          <li className={`transition-all duration-700 ${open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} style={{ transitionDelay: open ? '420ms' : '0ms' }}>
            <Link to="/donation" onClick={onClose} className="block py-5 font-display text-3xl text-pearl">
              Donate
            </Link>
          </li>
        </ul>
        <Link to="/book-visit" onClick={onClose} className="btn btn-brass mt-8 w-full justify-center">
          Book a Visit <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
        </Link>
      </nav>
    </div>
  )
}
