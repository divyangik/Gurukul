import { createFileRoute } from '@tanstack/react-router'
import { PageHero, ComingSoon } from '@/components/ui'

export const Route = createFileRoute('/keynote-speech')({
  head: () => ({
    meta: [
      { title: 'Keynote Speech — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Keynote Speech at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'Keynote Speech — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Keynote Speech at Bhaktivedanta Gurukula, Dalimb, Pune.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero eyebrow="Bhaktivedanta Gurukula" title={['Keynote Speech']} />
      <ComingSoon what="Keynote Speech" />
    </>
  )
}
