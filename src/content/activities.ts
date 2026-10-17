/**
 * Activities page content, from the official bhaktivedantaeducation.com
 * Activities section and the photo archives supplied by the school.
 */

export type ActivityGroup = {
  id: string
  title: string
  text: string
  images: { src: string; alt: string }[]
}

export const activityGroups: ActivityGroup[] = [
  {
    id: 'adventure',
    title: 'Trekking & Adventure',
    text: 'Regular treks to the Sahyadri hills — including the Dhavaleshwar trek — build endurance, courage and camaraderie. Students learn to read nature, carry their own gear and look out for one another on the trail.',
    images: [
      { src: '/img/activities/trekking.jpg', alt: 'Gurukula students together on a hilltop during a trek' },
      { src: '/img/sports/dhavaleshwar-trek.jpg', alt: 'Students climbing towards Dhavaleshwar temple' },
      { src: '/img/sports/dhavaleshwar-trek-1.jpg', alt: 'Trekkers resting on the Dhavaleshwar trail' },
      { src: '/img/sports/dhavaleshwar-trek-2.jpg', alt: 'Students on the ridge during the Dhavaleshwar trek' },
      { src: '/img/sports/dhavaleshwar-trek-3.jpg', alt: 'Group of students at the Dhavaleshwar summit' },
    ],
  },
  {
    id: 'sports-yoga',
    title: 'Sports & Yoga',
    text: 'Daily physical culture keeps the body strong and the mind fresh. Students practise yoga asanas in the morning and enjoy games on the campus sports ground in the evening.',
    images: [
      { src: '/img/sports/yoga.jpg', alt: 'Students practising yoga asanas together' },
      { src: '/img/campus/sports-ground/sports.jpg', alt: 'Students playing on the Gurukula sports ground' },
    ],
  },
  {
    id: 'arts',
    title: 'Drama, Music & Talent Shows',
    text: 'From mridanga and kirtan to theatrical productions of the great epics, students perform regularly. Talent shows give every child a stage to discover and present their gifts.',
    images: [
      { src: '/img/talentshow/talent-show1.jpg', alt: 'Students performing at the Gurukula talent show' },
      { src: '/img/talentshow/drama2.jpg', alt: 'Students in costume during a drama performance' },
      { src: '/img/talentshow/drama3.jpg', alt: 'A scene from the students’ theatrical production' },
      { src: '/img/talentshow/student-playing-mridanga.jpg', alt: 'A student playing mridanga' },
      { src: '/img/talentshow/student-presentations.jpg', alt: 'Students giving presentations on stage' },
    ],
  },
  {
    id: 'festivals',
    title: 'Festivals & Deity Worship',
    text: 'The festival calendar — Janmashtami, Jhulan Yatra, Gaura Purnima and more — fills the year with colour and devotion. Students take part in deity worship, decoration, cooking and kirtan.',
    images: [
      { src: '/img/festivals/festival1.jpg', alt: 'Students celebrating a festival at the Gurukula' },
      { src: '/img/festivals/festival2.jpg', alt: 'Festival celebrations with the students' },
      { src: '/img/festivals/jhulan-1.jpg', alt: 'Jhulan Yatra swing festival celebration' },
      { src: '/img/festivals/deity-worship.jpg', alt: 'Students engaged in deity worship' },
      { src: '/img/festivals/deity-worship-2.jpg', alt: 'Offering worship to the deities' },
      { src: '/img/festivals/deity-worship-3.jpg', alt: 'Deity worship ceremony at the Gurukula' },
      { src: '/img/festivals/deity-worship-5.jpg', alt: 'Students during a worship ceremony' },
      { src: '/img/festivals/deity-photo-2.jpg', alt: 'The presiding deities of the Gurukula' },
    ],
  },
  {
    id: 'yajna',
    title: 'Yajna & Vedic Rituals',
    text: 'Students learn to prepare and perform yajnas — the ancient fire sacrifices of the Vedic tradition — understanding both the procedure and the philosophy behind it.',
    images: [
      { src: '/img/vedic-study/yajna-3.jpg', alt: 'Students performing a yajna fire ceremony' },
      { src: '/img/vedic-study/yajna-preparation.jpg', alt: 'Preparing offerings for the yajna' },
    ],
  },
  {
    id: 'goshala',
    title: 'Goshala & Cow Care',
    text: 'The campus goshala teaches students go-seva — the care of cows — a cornerstone of Vedic agrarian life. Feeding, grooming and caring for the cows nurtures gentleness and responsibility.',
    images: [
      { src: '/img/campus/goshala/whatsapp-image-2025-02-05-at-3.46.54-am.jpg', alt: 'Cows at the Gurukula goshala' },
    ],
  },
]
