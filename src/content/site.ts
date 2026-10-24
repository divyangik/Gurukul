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

/** Google Maps embed of the campus — shared by the Campus and Book a Visit pages. */
export const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7376160871595!2d74.15979157465054!3d18.450218671320574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e16bee602e41%3A0xdd184365a21bd798!2sBhaktivedanta%20Gurukula%20Pune!5e0!3m2!1sen!2sin!4v1792333741897!5m2!1sen!2sin'

export type NavLink = { label: string; to: string; hash?: string; note?: string }
/** `to` is where the top-level label itself leads (Home → /, Education → /education, Services → /services). */
export type NavGroup = { label: string; to: string; eyebrow?: string; intro: string; image?: { src: string; alt: string }; links: NavLink[] }
export const navGroups: NavGroup[] = [
  {
    label: 'Home',
    to: '/',
    eyebrow: 'Gurukula',
    intro: 'Life, learning and community at Dalimb, Uruli Kanchan.',
    image: { src: '/img/slider/slider-1.jpg', alt: 'Gurukula students smiling together with their arms around each other.' },
    links: [
      { label: 'About Us', to: '/', hash: 'about' },
      { label: 'Activities', to: '/activities' },
      { label: 'Campus', to: '/campus' },
      { label: 'Lifestyle Training', to: '/lifestyle-training' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    label: 'Education',
    to: '/education',
    eyebrow: 'Learn',
    intro: 'Pathways for seekers, students, parents, teachers and leaders.',
    image: { src: '/img/academic-study/academic-study-1.jpg', alt: 'Students studying with their teacher at the Gurukula.' },
    links: [
      { label: 'Overview', to: '/education' },
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
    to: '/services',
    eyebrow: 'Serve',
    intro: 'Guidance, training and sacred services offered by the Gurukula.',
    image: { src: '/img/festivals/deity-worship-3.jpg', alt: 'Worship at the Gurukula temple.' },
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
  }
]