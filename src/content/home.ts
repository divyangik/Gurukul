/**
 * Homepage content, verbatim from the official website's homepage
 * (About Us, Vision, Mission, History, Facts & Figures, Inspiration).
 */

export const hero = {
  taglines: [
    'Truth, Tradition, Transformation',
    'Education, Devotion, Culture - A Brighter Future',
    'Change the world through wisdom and service',
  ],
}

export const about =
  'Discover an exceptional residential school where academic excellence meets holistic development. Our institution fosters a nurturing environment, blending modern education with time-honored values. Students are encouraged to explore their passions, develop leadership skills, and cultivate a strong sense of community. With state-of-the-art facilities, experienced faculty, and personalized attention, we ensure each child’s unique potential is realized. We believe in preparing students not just for exams, but for life—instilling integrity, creativity, and a global perspective. Join us in shaping future leaders who are well-rounded, confident, and ready to make a positive impact on the world.'

export const vision =
  'We empower our members to lead a Krishna conscious way of life and to perform welfare activities for the benefit of others with their life, wealth, intelligence and words.'

export const mission = [
  'This Bhagavata Gurukula is a learning hub that serves the wider community. It will provide a sacred space for educational, cultural activities and services inspired by the teachings of Bhagavad Gita and Srimad Bhagavatam.',
  'We cultivate individuals who are well-versed in Indian culture and receive systematic training in the knowledge, skills, and values from a curriculum that integrates teachings from the Bhagavat, Pancharatra, Vedic, and contemporary education. We ensure that graduates are well-prepared for practical life and equipped to make meaningful contributions to society. They practice and promote a simpler, more natural way of living. We help our members develop a deeper connection with each other and their spiritual source.',
  'Additionally, we aim to foster a spirit of community edification and upliftment, guided by the principles of the Sankirtan movement. We plan to initiate similar educational projects wherever possible. We produce educational and cultural content in various formats, such as audio, video, text, and online courses, to reach a broader audience.',
]

export const history =
  'Bhaktivedanta Gurukula was founded by a team of dedicated teachers in the year 2017. Their goal is to create an integrated learning community which specializes in offering pathways to maximise human potential, satisfaction and wellbeing. Evolution of an individual leads to evolution of his/her contribution which eventually leads to evolution of abundance or prosperity. The Bhagavad Gita gives natural art of work (yogaḥ karmasu kauśalam). By practising these principles, one receives opulence abundance and loving harmonious relationships. Based on teachings of HDG Srila Prabhupada, Founder of ISKCON, they envisioned to create perfect ladies and gentlemen who are competent and devoted, and can lead and inspire others.'

export const facts = [
  {
    figure: '10,000',
    unit: 'students trained',
    title: 'Youth Empowerment programs',
    text: '10 youth training ashramas across India and 10,000 students trained till date in various courses.',
  },
  {
    figure: '2014',
    unit: 'Pune',
    title: 'Bhaktivedanta Vidyashrama',
    text: 'Bhaktivedanta Vidyashrama (Pune) started in 2014, It had 7 batches of total 78 students (boys and girls) and 8 teachers. It is functional as a perfect support school to date.',
  },
  {
    figure: '50',
    unit: 'students · 10 teachers',
    title: 'Bhaktivedanta Gurukula',
    text: 'Bhaktivedanta Gurukula was started with 5 students in 2017 at Shikrapur, Pune, eventually shifted to Uruli Kanchan. Now it has 50 students and 10 teachers.',
  },
]

export type TimelineEvent = {
  year: string
  title: string
  event: string
  text?: string
  img: string
}

/** Srila Prabhupada timeline from the "Inspiration" section of the official site. */
export const prabhupadaTimeline: TimelineEvent[] = [
  { year: '1896', title: 'Early Life', event: 'Birth in Calcutta, India', text: 'Born Abhay Charan De on September 1st in a Vaishnava family.', img: '/img/inspiration/1.jpg' },
  { year: '1922', title: 'Meeting His Spiritual Master', event: 'Met Bhaktisiddhanta Sarasvati Thakura', text: 'First meeting with his guru, who instructed him to spread Krishna consciousness in the Western world.', img: '/img/inspiration/2.jpg' },
  { year: '1932', title: 'Receiving Diksha (Initiation)', event: 'Initiated as a disciple', text: 'Received formal initiation from Srila Bhaktisiddhanta Sarasvati Thakur in Allahabad, India.', img: '/img/inspiration/3.jpg' },
  { year: '1935', title: 'Receiving Instruction', event: 'Received instruction from his Spiritual master', text: 'Instructed by his spiritual master on publishing books and constructing temples.', img: '/img/inspiration/4.jpg' },
  { year: '1939', title: 'Bhaktivedanta Title', event: 'Honoured with the title “Bhaktivedanta”', text: 'Honoured with the title “Bhaktivedanta” by the society of Gaudiya Vaishnavas.', img: '/img/inspiration/5.jpg' },
  { year: '1944', title: 'Writing and Establishing Back to Godhead Magazine', event: 'Launched Back to Godhead magazine', text: 'Began publishing this magazine to promote Vaishnavism and Krishna consciousness.', img: '/img/inspiration/6.jpg' },
  { year: '1953', title: 'Started League of Devotees', event: 'Started League of Devotees in Jhansi', img: '/img/inspiration/7.jpg' },
  { year: '1959', title: 'Renunciation (Sannyasa)', event: 'Took Sannyasa', text: 'Accepted the renounced order of life and became Swami A. C. Bhaktivedanta.', img: '/img/inspiration/8.jpg' },
  { year: '1965', title: 'Arrival in America', event: 'Journey to America on the Jaladuta', text: 'Arrived in New York after a perilous journey, at age 69, with just a few books and little money.', img: '/img/inspiration/9.jpg' },
  { year: '1966', title: 'Establishing ISKCON', event: 'Founded ISKCON', text: 'Formed the International Society for Krishna Consciousness (ISKCON) to spread Krishna’s teachings globally.', img: '/img/inspiration/10.jpg' },
  { year: '1968', title: 'Publishing Bhagavad-gita As It Is', event: 'Published Bhagavad-gita As It Is', text: 'One of his most important works, translated and commented on the Bhagavad-gita with a focus on devotional service.', img: '/img/inspiration/11.jpg' },
  { year: '1967–1976', title: 'Ratha Yatra in Western World', event: 'Organized the first Ratha Yatra in San Francisco and later globally', text: 'Spread the famous chariot festival, traditionally celebrated in Puri, to the Western world.', img: '/img/inspiration/12.jpg' },
  { year: '1970s', title: 'Establishing Temples Globally', event: 'Built major ISKCON temples worldwide', text: 'Opened 108 temples worldwide, including in places like Los Angeles, London, Vrindavan, and Mayapur.', img: '/img/inspiration/13.jpg' },
  { year: '1977', title: 'Final Years and Legacy', event: 'Passing in Vrindavan', text: 'Left his body in Vrindavan on November 14th, leaving behind a global spiritual movement.', img: '/img/inspiration/14.jpg' },
]
