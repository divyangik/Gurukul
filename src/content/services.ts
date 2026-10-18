/**
 * Services of Bhaktivedanta Gurukula — content taken from the official
 * bhaktivedantaeducation.com Services pages (audited October 2026).
 * Nothing here is invented: where the old site had no detail (e.g. prices,
 * course lists) the pages say so honestly.
 */

export type ServiceSlug =
  | 'coaching'
  | 'consulting'
  | 'membership'
  | 'camp-workshop'
  | 'courses-certifications'
  | 'samskaras-yajnas'
  | 'career'
  | 'keynote-speech'

export type ServiceSummary = {
  slug: ServiceSlug
  to: `/${ServiceSlug}`
  index: string
  title: string
  short: string
  summary: string
  for: string
  img: string
  imgAlt: string
}

export const services: ServiceSummary[] = [
  {
    slug: 'coaching',
    to: '/coaching',
    index: '01',
    title: 'Coaching',
    short: 'Align work, family and spirit.',
    summary: 'Residential and online coaching for students, parents and teachers — personal vision, relationships, parenting, career and spiritual life, in one balanced path.',
    for: 'Students · Parents · Teachers',
    img: '/img/talentshow/student-presentations.jpg',
    imgAlt: 'Students giving presentations at the Gurukula',
  },
  {
    slug: 'consulting',
    to: '/consulting',
    index: '02',
    title: 'Consulting',
    short: 'Build values-based schools.',
    summary: 'Training, curriculum and roadmaps for gurukulas, support schools, homeschool groups and secular schools that share universal values.',
    for: 'Educators · Schools · Homeschoolers',
    img: '/img/academic-study/academic-study-1.jpg',
    imgAlt: 'Students at their academic studies',
  },
  {
    slug: 'membership',
    to: '/membership',
    index: '03',
    title: 'Membership',
    short: 'A library and a community.',
    summary: 'Curriculum, manuals, lesson plans, assessments and a parents’ sangha — for a small yearly donation.',
    for: 'Parents · Teachers',
    img: '/img/festivals/festival1.jpg',
    imgAlt: 'A festival celebration at the Gurukula',
  },
  {
    slug: 'camp-workshop',
    to: '/camp-workshop',
    index: '04',
    title: 'Camps & Workshops',
    short: 'Live the Gurukula for a weekend.',
    summary: 'Orientation, winter and summer camps for children, immersive weekends for parents and educators, and workshops on demand — with lodging and boarding.',
    for: 'Children · Parents · Educators',
    img: '/img/sports/dhavaleshwar-trek-1.jpg',
    imgAlt: 'Children on a trek near Dhavaleshwar',
  },
  {
    slug: 'courses-certifications',
    to: '/courses-certifications',
    index: '05',
    title: 'Courses & Certifications',
    short: 'Structured learning, opening soon.',
    summary: 'Our course and certification programmes are being prepared. Talks and classes are already shared on our YouTube channels.',
    for: 'Seekers · Educators',
    img: '/img/academic-study/academic-study-2.jpg',
    imgAlt: 'Students in a classroom session',
  },
  {
    slug: 'samskaras-yajnas',
    to: '/samskaras-yajnas',
    index: '06',
    title: 'Samskaras, Yajnas & Pujas',
    short: 'Sacred rites, done properly.',
    summary: 'Harinam sankirtan at your home or event, śrāddha, yajna-puja vidhi, and the Vedic samskaras that mark the journey of life.',
    for: 'Families · Offices · Events',
    img: '/img/vedic-study/yajna-3.jpg',
    imgAlt: 'A yajna in progress at the Gurukula',
  },
  {
    slug: 'career',
    to: '/career',
    index: '07',
    title: 'Jobs & Career',
    short: 'Teach. Mentor. Serve.',
    summary: 'Join a residential Krishna-conscious community as a teacher, residential mentor or member of the administrative team.',
    for: 'Educators · Professionals',
    img: '/img/slider/slider-2.jpg',
    imgAlt: 'The Gurukula community together',
  },
  {
    slug: 'keynote-speech',
    to: '/keynote-speech',
    index: '08',
    title: 'Keynote Speech',
    short: 'Invite HG Bal Govind Prabhu.',
    summary: 'Keynotes on education, leadership and parenting for institutions, universities and gatherings.',
    for: 'Institutions · Universities',
    img: '/img/slider/slider-1.jpg',
    imgAlt: 'Students and teachers of the Gurukula',
  },
]

export const serviceBySlug = (slug: ServiceSlug) => services.find((s) => s.slug === slug)!

/** Services shown as "continue exploring" on each page (excludes the current one). */
export const otherServices = (slug: ServiceSlug) => services.filter((s) => s.slug !== slug)

/* ── Coaching ─────────────────────────────────────────────────── */

export const coachingAreas = ['Soul alignment', 'Work', 'Healing', 'Spirituality', 'Relationships', 'Finances', 'Parenting', 'Career']

export const coachingOfferings = [
  {
    title: 'Discover Your Self',
    text: 'Develop a personal vision and an action plan through group or individual coaching sessions.',
    action: 'Book by email',
    kind: 'email' as const,
  },
  {
    title: 'Find Your Community',
    text: 'A monthly on-campus gathering for like-minded people, access to the blogs to learn from the sages, and a yearly coaching retreat.',
    action: 'Join on WhatsApp',
    kind: 'whatsapp' as const,
  },
]

export type Coach = { name: string; role: string; img: string; text: string }

export const coaches: Coach[] = [
  {
    name: 'Bāla Govinda Dāsa',
    role: 'Educator & coach · Director, Bhaktivedanta Gurukula',
    img: '/img/teachers/bal-govinda-das.jpg',
    text: '27+ years of experience. Founder and manager of 12 leadership training communities, and chairman of Balaji Empowerment Services Trust. Former Project Engineer at Tata Technologies and Vice President of ISKCON Pune. Teaches at ISKCON GBC College and Bhaktivedanta Education.',
  },
  {
    name: 'Radhika Caran Renu Dāsī',
    role: 'Architect & educationist',
    img: '/img/teachers/radhika.jpg',
    text: 'Degrees in urban planning, education and architecture. Visiting faculty at two architecture colleges. Teaches and helps manage Bhaktivedanta Gurukula at Dalimb.',
  },
  {
    name: 'HG Parameshwar Hriday Dās',
    role: 'IT professional · Teacher',
    img: '/img/teachers/hg-parameshwar-hriday-das.jpg',
    text: '25+ years in IT across development, release management and QA. Active with ISKCON for 7 years and teaches computer applications at the Gurukula, where his son is a student.',
  },
  {
    name: 'Gita Upāsanā Devī Dāsī',
    role: 'Software engineer · Bhāgavatam teacher',
    img: '/img/teachers/geeta.jpg',
    text: 'About 25 years as a software engineer, practising Krishna consciousness since 2016. Has taught Śrīmad-Bhāgavatam classes to children for four years.',
  },
  {
    name: 'Jay Gehlot',
    role: 'Technology leader · Youth & corporate trainer',
    img: '/img/teachers/jay-gehlot.jpg',
    text: 'Co-founder and board member of Prachetas Foundation (food and education). Software Development Manager at Veritas with 34 US patents. Leads career and lifestyle courses for youth and corporate employees.',
  },
  {
    name: 'Shweta Gehlot',
    role: 'Preacher & counselor',
    img: '/img/teachers/shweta-gehlot.jpg',
    text: 'Has worked in multinational companies and holds two patents. Guides grihastha families and teaches value education and shloka memorisation to children.',
  },
]

/* ── Consulting ───────────────────────────────────────────────── */

export const consultingProjects = ['Gurukulas', 'Support schools', 'Homeschool programmes', 'Secular schools with universal values']

export const holisticServices = [
  'Personal and professional development programmes for parents and educators',
  'Training in siddhānta (Vedic thought) and culture (Bhāratīya sanskṛti)',
  'Teacher and school-administrator training and certification',
  'Roadmaps for guiding students towards spiritual and personal success',
  'Curriculum development, user manuals and resources',
]

export const partnerSteps = [
  {
    title: 'Initial coaching',
    meta: '60 minutes',
    text: 'A personalised session to define learning outcomes in knowledge, skills and values, and to create a tailored learning plan.',
  },
  {
    title: 'Live sessions',
    meta: '2 hours · every two weeks',
    text: 'Live Q&A sessions with real-time support and feedback.',
  },
  {
    title: 'On-demand learning',
    meta: 'Available 24/7',
    text: 'Asynchronous materials and a resource library you can use at your own pace.',
  },
  {
    title: 'Teacher community',
    meta: 'Telegram group',
    text: 'A support group where teachers learn from and encourage one another.',
  },
  {
    title: 'Institutional implementation support',
    meta: 'For schools',
    text: 'Hands-on help for schools putting the training into practice.',
  },
  {
    title: 'Annual retreat',
    meta: 'First three days of Kartik',
    text: 'A family retreat at Bhaktivedanta Gurukula, Uruli Kanchan, Pune (October–November).',
  },
]

/* ── Membership ───────────────────────────────────────────────── */

export const membershipBenefits = [
  { title: 'Curriculum', text: 'Access to the Gurukula curriculum.' },
  { title: 'User manuals', text: 'Manuals to put the curriculum into practice.' },
  { title: 'Lesson plans', text: 'Ready lesson plans for parents and teachers.' },
  { title: 'Assessments', text: 'Assessments to follow a learner’s progress.' },
  { title: 'Study & teaching resources', text: 'Resources for studying and for teaching.' },
  { title: 'Parents’ sangha', text: 'A parents’ association to learn and grow together.' },
]

/* ── Camps & workshops ────────────────────────────────────────── */

export type Camp = { title: string; for: string; when: string; time?: string; text: string }

export const camps: Camp[] = [
  {
    title: '3-Day Orientation Camp',
    for: 'Children aged 8–11 applying to the Gurukula',
    when: 'On demand · 1 Dec – 28 Feb',
    text: 'A short residential stay to experience gurukula life before joining.',
  },
  {
    title: 'Winter Camp for Children',
    for: 'Children',
    when: 'Winter',
    time: 'Saturday 9 AM – Sunday 6 PM',
    text: 'Children experience Vedic culture by living on the Gurukula campus at Uruli Kanchan.',
  },
  {
    title: 'Summer Camp for Children',
    for: 'Homeschoolers & educators',
    when: 'First weekend of February',
    time: 'Saturday 9 AM – Sunday 6 PM',
    text: 'A weekend of learning, play and practice on campus.',
  },
  {
    title: 'Winter Camp for Parents & Educators',
    for: 'Parents & educators',
    when: 'First weekend of Kartik · Oct–Nov',
    time: 'Saturday 9 AM – Sunday 6 PM',
    text: 'Immersive learning for those raising and teaching the next generation.',
  },
]

export const weekendWorkshops = [
  'Satvik cooking and eating',
  'Lifestyle management',
  'Building family vision and culture',
  'Effective communication with children',
  'Panch kosh vikas — holistic development',
  'Art of parenting',
  'Art of teaching',
  'Art of coaching',
]

/* ── Samskaras, yajnas & pujas ────────────────────────────────── */

export const sacredServices = [
  {
    title: 'Harinam Sankirtan',
    text: 'Congregational chanting of the holy names. Call us to your home, office or events.',
  },
  {
    title: 'Śrāddha',
    text: 'A Vedic ceremony honouring ancestors, supporting family unity, spiritual connection and ancestral blessings.',
  },
  {
    title: 'Yajna-puja Vidhi',
    text: 'Yajna (fire rituals), puja and Vedic rites performed to purify the environment and support spiritual growth.',
  },
]

export const samskaras = [
  { name: 'Garbhādhāna', note: 'Conception' },
  { name: 'Puṁsavana', note: 'Rite during pregnancy' },
  { name: 'Sīmantonnayana', note: 'Blessing during pregnancy' },
  { name: 'Jātakarma', note: 'Birth ceremony' },
  { name: 'Nāmakaraṇa', note: 'Naming the child' },
  { name: 'Niṣkramaṇa', note: 'The baby’s first outing' },
  { name: 'Annaprāśana', note: 'First rice-eating ceremony' },
  { name: 'Upanayana', note: 'Sacred thread ceremony' },
  { name: 'Veda-adhyayana', note: 'Initiation into study' },
  { name: 'Keśānta', note: 'Hair-cutting ceremony' },
  { name: 'Vidyārambha', note: 'Beginning of formal education' },
  { name: 'Vivāha', note: 'Marriage' },
  { name: 'Antyeṣṭi', note: 'Last rites' },
  { name: 'Śrāddha', note: 'Ancestor worship' },
]

export const communityService = ['Svachh Bharat Abhiyan (cleanliness campaign)', 'Food distribution', 'Dindi Seva', 'Sacred literature distribution', 'Value education in schools']

/* ── Careers ──────────────────────────────────────────────────── */

export const careerReasons = [
  { title: 'Holistic education', text: 'Academics are woven together with spiritual and personal development.' },
  { title: 'Community of devotion', text: 'A Krishna-conscious community that supports your personal and spiritual growth.' },
  { title: 'Regulated spiritual practice', text: 'A sattvic campus — no meat, fish, eggs, onion, garlic, tea, coffee, intoxicants or gambling — with morning sadhana from 6 to 9 AM.' },
  { title: 'Growth for you too', text: 'Ongoing training and opportunities for professional and personal development.' },
  { title: 'A like-minded team', text: 'Colleagues who share your spiritual and educational values.' },
]

export const openings = [
  { title: 'Teachers', text: 'Primary and secondary levels — teach academics and foster spiritual growth.' },
  { title: 'Residential mentors', text: 'Guide students academically and spiritually in daily life.' },
  { title: 'Administrative staff', text: 'Support the smooth daily operation of the Gurukula.' },
  { title: 'Other roles', text: 'Support staff and specialised positions open from time to time.' },
]

/* ── Keynote ──────────────────────────────────────────────────── */

export const keynoteTalks = [
  { title: 'Talk at MIT Peace University Induction Program', where: 'Induction programme' },
  { title: 'Principles of Excellence', where: 'Teenagers Get-together, Atlanta' },
]

export const keynoteTopics = ['Education', 'Leadership', 'Parenting']

/* ── SEO head helper shared by the Services routes ───────────── */

const origin = 'https://gurukula-digital-twin.lovable.app'

export function serviceHead(title: string, description: string, path: string) {
  const full = `${title} — Bhaktivedanta Gurukula`
  return {
    meta: [
      { title: full },
      { name: 'description', content: description },
      { property: 'og:title', content: full },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${origin}${path}` },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: `${origin}${path}` }],
  }
}