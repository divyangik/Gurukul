import { createFileRoute } from '@tanstack/react-router'
import { PageHero, ComingSoon } from '@/components/ui'

export const Route = createFileRoute('/samskaras-yajnas')({
  head: () => ({
    meta: [
      { title: 'Samskaras Yajnas — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Samskaras Yajnas at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'Samskaras Yajnas — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Samskaras Yajnas at Bhaktivedanta Gurukula, Dalimb, Pune.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero eyebrow="Bhaktivedanta Gurukula" title={['Samskaras Yajnas']} />
      <ComingSoon what="Samskaras Yajnas" />
    </>
  )
}
