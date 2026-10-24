/**
 * Education section content — Seekers, Students, Parents/Teachers/Leaders,
 * Blog, Videos and Podcasts. Programme text follows the official
 * bhaktivedantaeducation.com pages (audited October 2026), lightly tidied
 * for grammar. Blog stories are written from the school's own photo archive
 * and activities; edit or replace them freely.
 */

export type EduPage = { label: string; to: string; img: string; text: string; tag: string }

export const educationPages: EduPage[] = [
  { label: 'Seekers', to: '/seekers', img: '/img/festivals/jhulan-1.jpg', text: 'Spirituality for the modern age — talks, pilgrimages and residential camps.', tag: 'Spirituality' },
  { label: 'Students', to: '/student', img: '/img/academic-study/academic-study.jpg', text: 'Five Shiksha stages and five streams of training that shape a whole person.', tag: 'Five stages' },
  { label: 'Parents · Teachers · Leaders', to: '/parent-teacher-leaders', img: '/img/vedic-study/yajna-preparation.jpg', text: 'Anubhuti immersion, teacher training, parenting and leadership courses.', tag: 'Courses & training' },
  { label: 'Blog', to: '/blog', img: '/img/sports/dhavaleshwar-trek-2.jpg', text: 'Stories and reflections from life on the Dalimb campus.', tag: 'Stories' },
  { label: 'Videos', to: '/videos', img: '/img/talentshow/drama3.jpg', text: 'Lectures, seminars and campus films from our two channels.', tag: 'Lectures & films' },
  { label: 'Podcasts', to: '/podcasts', img: '/img/education/podcast.jpg', text: 'Conversations on parenting, education and applied spirituality.', tag: 'Conversations' },
]

/* ── Shared ─────────────────────────────────────────────────── */

export const pilgrimagePlaces = [
  'Bhor',
  'Kolhapur',
  'Pandharpur',
  'Nashik',
  'Panhala',
  'ISKCON Rajgad',
  'Dehu',
  'Bhuleshwar',
  'ISKCON NVCC',
  'Balaji Mahanatya Drama',
  'ISKCON Juhu',
  'ISKCON Mayapur',
  'Jagannath Puri Yatra',
  'Baramati',
]

export type Video = { id: string; title: string; text: string; tag: string }

export const videos: Video[] = [
  {
    id: '_LfogT7CQ-o',
    title: 'Art of Parenting — San Jose',
    text: 'A lecture on raising children with values, presence and devotion, delivered to families in San Jose, California.',
    tag: 'Parenting',
  },
  {
    id: 'fmX96VrFsEc',
    title: 'Spirituality for the Modern Age',
    text: 'How timeless Vedic wisdom answers the stress, distraction and restlessness of modern life.',
    tag: 'Seekers',
  },
  {
    id: '14vo3NrKexc',
    title: 'Applied Spirituality',
    text: 'Bringing the Bhagavad-gita off the bookshelf and into work, relationships and everyday decisions.',
    tag: 'Seekers',
  },
]

export const channels = [
  {
    name: 'Bhaktivedanta Education',
    handle: '@bhaktivedanta_education',
    href: 'https://www.youtube.com/@bhaktivedanta_education',
    text: 'Campus life, Gurukula programmes, festivals and talks for parents and educators.',
    img: '/img/festivals/festival2.jpg',
  },
  {
    name: 'Lotus Voice Videos',
    handle: '@LotusVoiceVideos',
    href: 'https://www.youtube.com/@LotusVoiceVideos',
    text: 'Lectures and seminars on applied spirituality, leadership and the art of parenting.',
    img: '/img/education/podcast.jpg',
  },
]

/* ── Seekers ────────────────────────────────────────────────── */

export const seekerPaths = [
  {
    title: 'Spirituality for the Modern Age',
    text: 'Talks and seminars that make the Bhagavad-gita practical — for students, professionals and families who want depth without leaving the world.',
    img: '/img/inspiration/6.jpg',
    to: '/videos',
    cta: 'Watch the talks',
  },
  {
    title: 'Spiritual Pilgrimage',
    text: 'Guided yatras to sacred places of Maharashtra and beyond — adventure treks, temple visits, kirtan and the stories that bring each place to life.',
    img: '/img/education/pilgrimage.jpg',
    to: '/parent-teacher-leaders',
    cta: 'See the yatras',
  },
  {
    title: 'Residential Camps',
    text: 'An immersive overnight experience in the idyllic Sahyadri mountains and the Gurukula culture. Learn the process of education, culture building and spiritual nourishment — and take home a kit for effective homeschooling.',
    img: '/img/sports/dhavaleshwar-trek-3.jpg',
    to: '/camp-workshop',
    cta: 'Camps & workshops',
  },
]

/* ── Students ───────────────────────────────────────────────── */

export type Stage = { name: string; subtitle: string; summary: string; img: string; outcomes: string[] }

export const shikshaStages: Stage[] = [
  {
    name: 'Shraddhavan',
    subtitle: 'Pravesh · Entry',
    summary: 'Faith is planted. The child learns to trust the teacher, follow the daily programme and care for the campus.',
    img: '/img/daily-schedule/temple-sankirtan.jpg',
    outcomes: [
      "Trusts the teacher's intentions and instructions and participates actively in school activities.",
      'Sees Srila Prabhupada as the pre-eminent shiksha guru and can briefly tell who he is and what he did.',
      'Chants 1–4 rounds of the Hare Krishna mahamantra daily and keeps focus during kirtan.',
      'Hears attentively, does not interrupt teachers or seniors, and asks permission to speak.',
      'Follows temple etiquette, is punctual and present when greeting the deities.',
      'Knows the alphabet and numbers in English and Hindi and completes the prescribed study quota.',
      'Keeps dress, utensils, eating place and study space clean.',
      'Memorises mantras for tilak, mangalacarana and prasadam prayers, and assists in cleaning, cooking and serving.',
    ],
  },
  {
    name: 'Saadhak',
    subtitle: 'Prarambh · Beginning',
    summary: 'Practice deepens. Appreciation, enthusiasm and understanding grow alongside responsibility in service.',
    img: '/img/festivals/deity-worship-3.jpg',
    outcomes: [
      "Appreciates the teacher's qualities and services, praises friends, and studies the lives of the acaryas.",
      'Chants 8 rounds daily with focus and joins kirtans with enthusiasm.',
      'Asks questions in a submissive spirit and can explain what has been heard and read.',
      'Learns about the prominent dhamas and sees the Gurukula itself as a dhama.',
      'Serves tulsi, backs up the deity department, and makes garlands and wicks.',
      'Memorises mantras for preaching, vyakarana and mathematics and can interpret texts independently.',
      'Serves prasadam with proper mood and care and learns atithi satkar — honouring guests.',
      'Understands the 16 anarthas and sincerely tries to avoid dhama aparadha.',
    ],
  },
  {
    name: 'Upanayana',
    subtitle: 'Prabhupada Ashray · Shelter',
    summary: 'Maturity in sadhana. The student takes shelter of Srila Prabhupada and begins to lead by example.',
    img: '/img/vedic-study/yajna-3.jpg',
    outcomes: [
      'Chants 16 rounds and understands chanting as the most serious spiritual commitment of life.',
      'Connects every subject with Krishna consciousness — the meaning of bhakti anucana.',
      'Knows the pastimes of the Lord in Vrindavan, Navadvip and Puri and can share their meaning.',
      'Prepares personal offerings for the deities — prayers, kirtans, foodstuffs, decoration and flowers.',
      'Reads, writes and discusses Krishna conscious topics daily, without being pushed.',
      'Performs yajnas, pujas and vidhis with expertise.',
      'Teaches others Vaishnava etiquette and represents the teachers and Gurukula properly.',
      'Can help run projects such as a gurukula, temple, farm community, deity department or school.',
    ],
  },
  {
    name: 'Upashastri',
    subtitle: 'Guru Ashray · Guidance',
    summary: 'The student becomes a guide — advising, teaching and engaging others with maturity and conviction.',
    img: '/img/talentshow/student-presentations.jpg',
    outcomes: [
      'Gives advice, teaches and engages others with maturity.',
      'Chants 16 rounds and can convince and encourage others to chant.',
      'Leads others on pilgrimage in the holy dhams and shares devotion with them.',
      'Internalises the mood of Srila Prabhupada and commits to his mission.',
      'Displays high Vaishnava character, with a solid, broad-minded understanding of siddhanta.',
      'Honourably represents Srila Prabhupada’s movement as a learned person in various forums.',
      'Can set up and run devotee care systems and give seminars on them.',
      'Prepared for the top rungs of leadership — as educator, trainer of leaders, or in the secular world.',
    ],
  },
  {
    name: 'Shastri',
    subtitle: 'Servant Leader',
    summary: 'The culmination of the journey: a servant leader, fixed in character and dedicated to the welfare of others.',
    img: '/img/inspiration/13.jpg',
    outcomes: ['Detailed outcomes for this stage are being finalised by the academic council and will be published soon.'],
  },
]

export const trainingTypes = [
  {
    title: 'Ashrama & Adhyatma Shiksha',
    text: 'Krishna conscious training including the morning programme, Bhakti Shastri, Vaishnava sadachara, deity worship, yajna and preaching.',
    img: '/img/festivals/deity-worship.jpg',
  },
  {
    title: 'Veda & Varna Shiksha',
    text: 'Teaching and training — according to inclination, capacity and talent — from among the 14 books of Vedic knowledge and the 64 arts.',
    img: '/img/education/scripture-study.jpg',
  },
  {
    title: 'Life Skills & Panchakosha Vikas',
    text: 'Basic farming and go-seva, martial arts, cooking, communication, leadership, yoga, music, finance management, swimming, taalim and budgeting.',
    img: '/img/campus/goshala/whatsapp-image-2025-02-05-at-3.46.54-am.jpg',
  },
  {
    title: 'Academic Excellence',
    text: 'Fostering a love for learning, assessing knowledge, skills and values, and teaching the study skills that lead to academic excellence.',
    img: '/img/academic-study/academic-study-2.jpg',
  },
  {
    title: 'Social Awareness & Resilience',
    text: 'Making children capable of responding to societal challenges — media, politics, violence, peer pressure and addictions.',
    img: '/img/talentshow/student-playing-mridanga.jpg',
  },
]

export const studentGallery = [
  { src: '/img/academic-study/academic-study-1.jpg', alt: 'Students studying together in a Gurukula classroom' },
  { src: '/img/sports/yoga.jpg', alt: 'Morning yoga practice on campus' },
  { src: '/img/talentshow/drama2.jpg', alt: 'Students performing a drama on stage' },
  { src: '/img/vedic-study/yajna-preparation.jpg', alt: 'Students preparing for a yajna' },
  { src: '/img/activities/trekking.jpg', alt: 'Students on a Sahyadri trek' },
  { src: '/img/festivals/festival1.jpg', alt: 'Festival celebration at the Gurukula' },
  { src: '/img/campus/sports-ground/sports.jpg', alt: 'Evening games on the sports ground' },
  { src: '/img/talentshow/talent-show1.jpg', alt: 'Talent show at the Gurukula' },
]

/* ── Parents / Teachers / Leaders ───────────────────────────── */

export const anubhuti = {
  title: 'Anubhuti',
  tagline: 'Experience the joy of learning at Bhaktivedanta Gurukula',
  paragraphs: [
    'Step into the transformative world of Bhaktivedanta Gurukula, where education transcends the classroom. Our experiential learning programme invites parents and teachers to immerse themselves in a vibrant, hands-on exploration of holistic education.',
    'Experience a day in the life of a Gurukula student — engaging lessons, character-building activities, Art of Parenting and Art of Teaching workshops, and soul-enriching devotional practices. Observe how our trained educators guide children through collaboration, critical thinking and practical application.',
    'Parents witness the nurturing care extended to students, while teachers gain inspiration to implement techniques that foster holistic growth — and see how the Gurukula equips children to thrive in both spiritual and material pursuits.',
  ],
  highlights: ['A day in the life of a student', 'Art of Parenting workshop', 'Art of Teaching workshop', 'Devotional practices', 'Residential immersion'],
}

export const adultProgrammes = [
  {
    title: 'Teacher Training',
    audience: 'For educators',
    text: 'Equips educators with tools to inspire and nurture students through Vedic principles. Combining modern pedagogy with Vedic wisdom, the training focuses on effective teaching methods, classroom management and personal development.',
    img: '/img/education/teacher-training.jpg',
  },
  {
    title: 'Parenting & Homeschoolers’ Course',
    audience: 'For families',
    text: 'Empowers families to create a Krishna conscious, value-based learning environment. Practical guidance, panchakosha vikas insights and interactive sessions help parents build character, academic excellence and spiritual growth at home.',
    img: '/img/education/parenting.jpg',
  },
  {
    title: 'Leadership Training Course',
    audience: 'For leaders',
    text: 'Cultivates future leaders grounded in 16 principles of leadership and management. Interactive workshops, practical exercises and spiritual guidance develop decision-making, teamwork and self-discipline.',
    img: '/img/teachers/bal-govinda-das.jpg',
  },
  {
    title: 'Online Course',
    audience: 'Coming soon',
    text: 'Timeless Vedic education brought to your home. Designed for parents of students aged 9–15, integrating Krishna conscious teachings with practical life skills, guided by expert teachers.',
    img: '/img/academic-study/academic-study-1.jpg',
  },
]

export const openDay = {
  title: 'Annual Open Day',
  text: 'Experience the vibrant spirit of Bhaktivedanta Gurukula. Explore our blend of Vedic and modern education through interactive exhibits, cultural performances and student showcases. Meet our teachers, tour the campus, and discover how we nurture academic excellence, character and Krishna consciousness.',
  img: '/img/education/open-day.jpg',
}

/* ── Blog ───────────────────────────────────────────────────── */

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readMins: number
  img: string
  body: string[]
  gallery?: { src: string; alt: string }[]
}

export const posts: Post[] = [
  {
    slug: 'dhavaleshwar-trek',
    title: 'What a mountain teaches that a classroom cannot',
    excerpt: 'On the Dhavaleshwar trek, our students carried their own gear, waited for the slowest walker, and chanted their way to the summit.',
    category: 'Campus Life',
    date: '2026-09-14',
    readMins: 4,
    img: '/img/sports/dhavaleshwar-trek.jpg',
    body: [
      'There is a moment on every trek when the conversation stops. The path gets steep, the bags get heavy, and each student is left alone with their breath. That is usually when the real lesson begins.',
      'The Dhavaleshwar trek is one of the favourite outings of the year. Students rise before dawn, finish their morning programme and set out with water, prasadam and a first-aid kit they have packed themselves. The seniors walk at the back — a rule, not a suggestion — so that nobody is ever last alone.',
      'At the summit temple the group sits together for kirtan. Tired legs are forgotten. On the way down, the younger boys are already planning the next one.',
      'In the gurukula, adventure is not a break from education. Endurance, patience and looking out for one another are the very qualities we hope will carry our students through life.',
    ],
    gallery: [
      { src: '/img/sports/dhavaleshwar-trek-1.jpg', alt: 'Students resting on the trail' },
      { src: '/img/sports/dhavaleshwar-trek-2.jpg', alt: 'Students walking along the ridge' },
      { src: '/img/sports/dhavaleshwar-trek-3.jpg', alt: 'The group at the summit' },
    ],
  },
  {
    slug: 'jhulan-yatra',
    title: 'Swinging the Lord: Jhulan Yatra at the Gurukula',
    excerpt: 'Flowers, swings and five evenings of kirtan — how the students prepare for one of the sweetest festivals of the monsoon.',
    category: 'Festivals',
    date: '2026-08-22',
    readMins: 3,
    img: '/img/festivals/jhulan-1.jpg',
    body: [
      'Jhulan Yatra arrives with the monsoon. For five evenings the deities are placed on a decorated swing and gently rocked while the whole community sings.',
      'Preparation begins days earlier. Students string garlands, clean the temple hall and practise the bhajans they will lead. Each class takes responsibility for one evening of decoration — a friendly competition that produces astonishing results.',
      'Festivals are where gurukula education becomes visible. Art, music, cooking, organisation and devotion all meet in one place, and the students discover that service done together is the greatest joy of all.',
    ],
    gallery: [
      { src: '/img/festivals/festival1.jpg', alt: 'Festival celebration in the temple hall' },
      { src: '/img/festivals/deity-worship-5.jpg', alt: 'Deity worship during the festival' },
    ],
  },
  {
    slug: 'why-gurukula-today',
    title: 'Why a gurukula, today?',
    excerpt: 'Character before career is not a slogan. It is the oldest educational idea in India — and perhaps the most urgent one now.',
    category: 'Reflections',
    date: '2026-07-30',
    readMins: 5,
    img: '/img/academic-study/academic-study.jpg',
    body: [
      'Parents often ask whether a gurukula can prepare children for the modern world. Our answer is that the modern world needs exactly what a gurukula prepares.',
      'Information is everywhere. What is rare is the ability to focus, to keep a promise, to work with others and to stay steady under pressure. These are not subjects; they are habits, and habits are formed by a way of life.',
      'At Bhaktivedanta Gurukula, students follow the regular academic curriculum. Around it we build a day of sadhana, seva and study — the five streams of training that develop body, mind, intelligence and heart together.',
      'The result is not children who are cut off from the world, but young people who can engage with it confidently, without losing themselves.',
    ],
  },
  {
    slug: 'talent-show',
    title: 'Every child on stage',
    excerpt: 'Mridanga solos, Sanskrit recitations and a drama of the Ramayana — highlights from this year’s talent show.',
    category: 'Arts',
    date: '2026-06-18',
    readMins: 3,
    img: '/img/talentshow/talent-show1.jpg',
    body: [
      'The annual talent show has one rule: everybody performs. For some students that means a polished mridanga solo; for others it is the courage to recite a single verse in front of an audience.',
      'This year the senior students staged a drama from the Ramayana, building their own props and costumes over several weeks. The juniors sang, recited and, in one memorable act, demonstrated their newly learnt martial arts.',
      'Confidence grows when it is earned. A stage, a supportive audience and a little preparation can change how a child sees themselves.',
    ],
    gallery: [
      { src: '/img/talentshow/student-playing-mridanga.jpg', alt: 'A student playing the mridanga' },
      { src: '/img/talentshow/drama3.jpg', alt: 'Scene from the student drama' },
      { src: '/img/talentshow/student-presentations.jpg', alt: 'Student presentation' },
    ],
  },
  {
    slug: 'yajna-and-learning',
    title: 'Learning by fire: the yajna as a classroom',
    excerpt: 'Mantras, mathematics of the kunda, and the discipline of preparation — what students learn by performing a Vedic yajna.',
    category: 'Vedic Study',
    date: '2026-05-09',
    readMins: 4,
    img: '/img/vedic-study/yajna-3.jpg',
    body: [
      'A yajna looks simple from the outside: a fire, some grains, chanting. Inside it is an entire curriculum.',
      'Students learn the mantras and their meanings, the geometry of the fire pit, the preparation of ingredients and the order of the ceremony. They learn to sit still for long periods and to work as a team without speaking.',
      'Most of all, they learn that knowledge is meant to be offered. That idea, more than any single fact, is what we hope they carry home.',
    ],
    gallery: [{ src: '/img/vedic-study/yajna-preparation.jpg', alt: 'Students preparing for the yajna' }],
  },
  {
    slug: 'goshala-mornings',
    title: 'Mornings at the goshala',
    excerpt: 'Feeding, grooming and caring for the campus cows teaches gentleness, responsibility and a love for simple living.',
    category: 'Lifestyle',
    date: '2026-04-02',
    readMins: 2,
    img: '/img/campus/goshala/whatsapp-image-2025-02-05-at-3.46.54-am.jpg',
    body: [
      'After the morning programme, a small team of students walks to the goshala. There is fodder to carry, water to fill and, for the lucky ones, a calf to brush.',
      'Go-seva is part of the life-skills stream at the Gurukula. It teaches responsibility in the most direct way possible — the cows are waiting, whatever the weather.',
      'It also teaches tenderness. Students who are restless in the classroom often become remarkably calm among the animals.',
    ],
  },
]

export const postCategories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))]

/* ── Podcasts ───────────────────────────────────────────────── */

export const podcastSeries = [
  {
    title: 'The Art of Parenting',
    text: 'Raising children with values, presence and devotion — practical conversations for parents of every age group.',
    img: '/img/education/parenting.jpg',
    topics: ['Screen time and attention', 'Discipline with love', 'Homeschooling foundations'],
  },
  {
    title: 'Applied Spirituality',
    text: 'The Bhagavad-gita in the office, the kitchen and the commute — wisdom you can use the same day.',
    img: '/img/inspiration/6.jpg',
    topics: ['Stress and steadiness', 'Purpose and work', 'Relationships that last'],
  },
  {
    title: 'Gurukula Voices',
    text: 'Teachers, alumni and parents share their experience of gurukula life — the hard days and the beautiful ones.',
    img: '/img/talentshow/student-presentations.jpg',
    topics: ['A day in the ashram', 'Alumni journeys', 'What parents notice'],
  },
  {
    title: 'Leadership Dharma',
    text: 'The 16 principles of leadership and management, explored through scripture, history and real projects.',
    img: '/img/education/teacher-training.jpg',
    topics: ['Servant leadership', 'Building teams', 'Decisions under pressure'],
  },
]