/**
 * Global site information. All values are taken from the official
 * bhaktivedantaeducation.com website (audited October 2026).
 */

export const contact = {
  whatsapp: '+917770055500',
  whatsappDisplay: '+91 77700 55500',
  whatsappUrl: 'https://wa.me/+917770055500',
  phoneUrl: 'tel:+917770055500',
  email: 'educationbhaktivedanta@gmail.com',
  location: 'Dalimb, Uruli Kanchan, Pune, Maharashtra',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bhaktivedanta+Gurukula+Dalimb+Uruli+Kanchan',
  admissionForm: 'https://forms.gle/hqTS136CKdcMNKLU9',
}

export const social = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/14TK6xgqbM/' },
  { label: 'Instagram', href: 'https://www.instagram.com/bhaktivedanta_education' },
  { label: 'YouTube · Bhaktivedanta Education', href: 'https://www.youtube.com/@bhaktivedanta_education' },
  { label: 'YouTube · Lotus Voice Videos', href: 'https://www.youtube.com/@LotusVoiceVideos' },
]

export const footerAbout =
  'Bhaktivedanta Gurukula was founded in 2017 in Pune, by HG Bāla Govind Dāsa inspired by the teachings of His Divine Grace Abhayacharanaravinda Bhaktivedanta Swami Srila Prabhupada, the founder Ācarya of ISKCON. The vision is to create a well-rounded learning - practice environment and sustainable Krishna conscious community. Our goal is to nurture individuals of strong character and practical competence who can take on leadership roles and positively influence society.'

export type NavLink = { label: string; to: string; hash?: string; note?: string }
export type NavGroup = { label: string; intro: string; links: NavLink[] }

export const navGroups: NavGroup[] = [
  {
    label: 'Gurukula',
    intro: 'Life, learning and community at Dalimb, Uruli Kanchan.',
    links: [
      { label: 'About Us', to: '/', hash: 'about' },
      { label: 'Inspiration', to: '/', hash: 'inspiration' },
      { label: 'Team', to: '/', hash: 'team' },
      { label: 'Notable Alumni', to: '/', hash: 'alumni' },
      { label: 'Testimonials', to: '/', hash: 'testimonials' },
      { label: 'Activities', to: '/activities' },
      { label: 'Campus', to: '/campus' },
      { label: 'Lifestyle Training', to: '/lifestyle-training' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    label: 'Education',
    intro: 'Pathways for seekers, students, parents, teachers and leaders.',
    links: [
      { label: 'Seekers', to: '/seekers' },
      { label: 'Students', to: '/student' },
      { label: 'Parents / Teachers / Leaders', to: '/parent-teacher-leaders' },
      { label: 'Blog', to: '/blog' },
      { label: 'Videos', to: '/videos' },
      { label: 'Podcasts', to: '/podcasts' },
    ],
  },
  {
    label: 'Services',
    intro: 'Guidance, training and sacred services offered by the Gurukula.',
    links: [
      { label: 'All Services', to: '/services' },
      { label: 'Coaching', to: '/coaching' },
      { label: 'Consulting', to: '/consulting' },
      { label: 'Membership', to: '/membership' },
      { label: 'Camps / Workshops', to: '/camp-workshop' },
      { label: 'Courses and Certifications', to: '/courses-certifications' },
      { label: 'Samskaras & Yajnas/Pujas', to: '/samskaras-yajnas' },
      { label: 'Jobs and Career', to: '/career' },
      { label: 'Keynote Speech', to: '/keynote-speech' },
    ],
  },
  {
    label: 'Products',
    intro: 'Books and resources from Bhaktivedanta Education.',
    links: [
      { label: 'Shop', to: '/shop' },
      { label: 'Books', to: '/books' },
    ],
  },
]