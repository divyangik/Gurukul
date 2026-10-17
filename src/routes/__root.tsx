import { HeadContent, Link, Outlet, Scripts, createRootRouteWithContext } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SiteNav } from '@/components/SiteNav'
import { SiteFooter } from '@/components/SiteFooter'
import { MotionDirector } from '@/components/MotionDirector'

import appCss from '../styles.css?url'

const siteName = 'Bhaktivedanta Gurukula — Where Wisdom Guides the Next Generation'
const siteDescription =
  'A residential Gurukula at Dalimb, Uruli Kanchan (Pune) blending modern academics with Vedic education, spiritual practice and practical life skills, inspired by the teachings of Srila Prabhupada.'

/** Enables scroll-reveal styles only when JS runs and motion is welcome. Falls back to fully visible content. */
const motionBootstrap = `(function(){try{var d=document.documentElement;if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('motion');setTimeout(function(){if(!window.__gkMotion){d.classList.remove('motion')}},4000)}}catch(e){}})();`

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteName },
      { name: 'description', content: siteDescription },
      { name: 'theme-color', content: '#123F43' },
      { property: 'og:title', content: siteName },
      { property: 'og:description', content: siteDescription },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.png', type: 'image/png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@400;500;600;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBootstrap }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootLayout() {
  const { queryClient } = Route.useRouteContext()
  return (
    <QueryClientProvider client={queryClient}>
      <SiteNav />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
      <MotionDirector />
    </QueryClientProvider>
  )
}

function NotFound() {
  return (
    <section className="jali flex min-h-[80svh] items-center bg-teal text-pearl">
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-32 md:px-10">
        <p className="eyebrow text-brass">Page not found</p>
        <h1 className="display mt-6 text-[clamp(3rem,8vw,7rem)]">
          This path has
          <br />
          <em className="text-brass">not been walked.</em>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-pearl/75">The page you were looking for has moved or no longer exists.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/" className="btn btn-brass">
            Return home
          </Link>
          <Link to="/book-visit" className="btn btn-ghost-light">
            Book a visit
          </Link>
        </div>
      </div>
    </section>
  )
}
