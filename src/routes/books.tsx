import { createFileRoute } from '@tanstack/react-router'
import { PageHero, ComingSoon } from '@/components/ui'

export const Route = createFileRoute('/books')({
  head: () => ({
    meta: [
      { title: 'Books — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Books at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'Books — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Books at Bhaktivedanta Gurukula, Dalimb, Pune.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero eyebrow="Bhaktivedanta Gurukula" title={['Books']} />
      <ComingSoon what="Books" />
    </>
  )
}
