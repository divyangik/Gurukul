/**
 * People of Bhaktivedanta Gurukula — governing body, teachers, coaches,
 * alumni, volunteers and parent testimonials. Text is verbatim from the
 * official website; only obvious typographic slips are tidied (see
 * `reviewNote` fields, surfaced to the institution for approval).
 */

export type Person = {
  name: string
  role?: string
  img: string
  bio: string[]
  reviewNote?: string
}

export const governingBody: Person[] = [
  {
    name: 'Bāla Govinda Dāsa',
    role: 'Director, Bhaktivedanta Gurukula · Chairman, Balaji Empowerment Services Trust',
    img: '/img/teachers/bal-govinda-das.jpg',
    bio: [
      'Bāla Govinda Dāsa (B.E.Mech, M.Ed.) is an experienced educator and coach with a professional experience in these fields spanning over 27 years. He joined ISKCON in 1996 and is deeply involved in spiritual activism. He has founded and managed 12 leadership training communities. He is dedicated to empowering a broad range of individuals including children, youth, parents, and educators, primarily through spiritual and educational projects.',
      'His professional journey includes significant roles such as the Director of Bhaktivedanta Gurukula and the Chairman of Balaji Empowerment Services Trust. He has also served as a Project Engineer at Tata Technologies and Vice President of ISKCON Pune, where he managed complex projects and collaborated with various stakeholders to translate requirements into high-level products and services.',
      'His educational expertise is further highlighted through his ongoing roles at ISKCON GBC College and Bhaktivedanta Education, where he conducts leadership training, curriculum development, coaching, and strategic implementation. His work emphasizes team building, training and mentoring, and designing educational systems and resources.',
    ],
  },
  {
    name: 'Mala Bajaj',
    role: 'Trustee',
    img: '/img/teachers/mala2.jpg',
    bio: [
      'Mala Bajaj, a distinguished trustee, is a woman of grace. She plays a pivotal role both as a homemaker and as a trusted advisor to her husband in his real estate business ventures. Known for her compassion and generosity, she provides unwavering support to the less fortunate and ensures the well-being of those under her care. Deeply spiritual and a devoted lover of Bharatiya Sanskriti, she embodies the values of tradition, kindness, and elegance in all aspects of her life.',
    ],
  },
]

export const teachers: Person[] = [
  {
    name: 'HG Bal Govind Das',
    img: '/img/teachers/bal-govinda-das.jpg',
    bio: [
      'Bāla Govinda Dāsa (B.E. Mech, M.Ed.) is an educator and coach with 27+ years of experience. Joining ISKCON in 1996, he has founded 12 leadership training communities and empowers children, youth, parents, and educators through spiritual and educational initiatives. He has served as Director of Bhaktivedanta Gurukula, Vice President of ISKCON Pune, and Chairman of Balaji Empowerment Services Trust, excelling in leadership training, curriculum development, and strategic implementation.',
    ],
  },
  {
    name: 'HG Radhika Caran Renu Dasi',
    img: '/img/teachers/radhika.jpg',
    bio: [
      'Radhika caranrenu dasi is an architect and educationist. She has done her masters in urban and regional planning from university of Queensland, Australia. She has also done Master in Education from SNDT University. Bachelors in architecture and also Bachelors in Education from Pune University. She also is a visiting faculty at the Brick school of architecture and Bharti Vidyapeeth college of Architecture. She has also been teaching and helping in managing the Bhaktivedanta Gurukula at Dalimb.',
    ],
  },
  {
    name: 'Yogesh Ingle',
    img: '/img/teachers/yogesh-ingle.jpg',
    bio: [
      'He holds a Bachelor’s degree in Electrical Engineering, as well as a Bachelor’s in Education, demonstrating his strong foundation in both technical and pedagogical fields. In addition to his academic achievements, Yogesh has been an active member of the spiritual community since 2018, joining the International Society for Krishna Consciousness (ISKCON) and serving at the Gurukula for the past three years. This experience has honed his skills in leadership, community engagement, and spiritual practice.',
    ],
  },
  {
    name: 'Ganesh Jadhav',
    img: '/img/teachers/ganesh-sir.jpg',
    bio: [
      'He holds a diploma in mechanical, demonstrating his strong foundation in both technical and pedagogical fields. In addition to his academic achievements, Ganesh has been an active member of the spiritual community since 2019, joining the International Society for Krishna Consciousness (ISKCON) and serving at the Gurukula for the past two years. This experience has honed his skills in Goshala, farming, leadership, community engagement, and spiritual practice.',
    ],
  },
  {
    name: 'Ashok Thombare',
    img: '/img/teachers/ashok-thombare.jpg',
    bio: [
      'Ashok Dattatraya Thombare is a dedicated educator with a Bachelor’s degree in Civil Engineering and extensive teaching experience. Since 2020, he has been actively serving at Bhaktivedanta Gurukula, which emphasizes holistic development through spiritual and academic education. He is involved in teaching, guiding, mentoring students of different grades. Ashok prioritizes moral and ethical values in his teaching, promoting a balanced approach to life. His unique blend of technical knowledge and spiritual insight creates a meaningful learning experience for students of diverse backgrounds.',
    ],
  },
  {
    name: 'Dhirendra Jagtap',
    img: '/img/teachers/dhirendra-jagtap.jpg',
    bio: [
      'An Electrical engineer, worked for almost 20 years in MNCs like Thermax Ltd. and Tata Honeywell Automation India Pvt. Ltd. in Projects and Design. At the peak of his career, switched to his own preference as an entrepreneur in Financial Planning and Investment Consultant. He was a visiting lecturer in Bharti Vidyapeeth teaching Financial Management to MBA students. Currently serving as teacher in Bhaktivedanta Gurukula for 6th Standard students.',
    ],
  },
  {
    name: 'HG Parameshwar Hriday Das',
    img: '/img/teachers/hg-parameshwar-hriday-das.jpg',
    bio: [
      'HG Parameshwar Hriday Das has over 25 years of experience in the IT industry, holding various roles from development to release management and quality assurance. For the past 7 years, he has been actively involved with ISKCON. In addition to his professional role, he teaches computer applications to students in grades 8, 9, and 10 at Gurukul. He is also deeply connected to the Gurukula community, as his son, Om, has been a student there for the past 5 years.',
    ],
  },
  {
    name: 'HG Gita Upasana Devi Dasi',
    img: '/img/teachers/geeta.jpg',
    bio: [
      'Gita Upasana Devi Dasi is working as a software engineer in a multinational company with about 25 years of experience. She is practicing Krishna Consciousness since 2016 and conducts Srimad Bhagavatam classes for children for last 4 years.',
    ],
  },
  {
    name: 'Vedantee Keshav Pandit',
    img: '/img/teachers/vedanti.jpg',
    bio: [
      'Vedantee Keshav Pandit completed B. com. from Pune University. Has a Diploma in Fashion Designing from IITC, Pune. She is excellent at many art forms like jewellery design, dress design, flower decoration, knitting and crochet design. Currently she is a Teacher at Bhaktivedanta Gurukula, Dalimb.',
    ],
  },
]

export type Alumnus = {
  name: string
  path: string
  img: string
  quote: string[]
  reviewNote?: string
}

export const alumni: Alumnus[] = [
  {
    name: 'Rishi Mundada',
    path: 'Master’s at the University of Illinois, Urbana-Champaign (UIUC), USA',
    img: '/img/alumni/rishi-mundada.jpg',
    quote: [
      'Hare Krishna! I am Rishi Mundada, currently pursuing my Master’s at the University of Illinois, Urbana-Champaign (UIUC), USA. My journey has been deeply shaped by the teachings of HG Bal Govind Prabhu, who inspired me from a young age during the Vaishnav Sadachar classes. His unwavering dedication has been instrumental in helping me cultivate a strong spiritual foundation while excelling academically.',
      'Under his guidance, I learned to balance my material and spiritual responsibilities. I am forever grateful to him for being my mentor, and friend, helping me navigate life’s challenges with clarity and purpose.',
    ],
  },
  {
    name: 'Rishit Keshari',
    path: 'Engineering, Pune Vidyarthi Griha College of Engineering and Technology',
    img: '/img/alumni/rishit-keshari.jpg',
    quote: [
      'My journey at Bhaktivedanta Gurukula was more than just an education—it was a life-changing experience that shaped my heart and mind. In the quiet, nurturing environment, I learned not just discipline and knowledge, but how to live with purpose and compassion. Those values became my strength as I entered my first year of engineering at Pune Vidyarthi Griha College of Engineering and Technology.',
      'The perseverance, patience, and teamwork I developed at the gurukula now guide me through every challenge. Bhaktivedanta Gurukula gave me more than skills—it gave me the courage to face life with integrity and a deep sense of fulfillment.',
    ],
  },
  {
    name: 'Vishnu Pradeep',
    path: 'Final-year architecture student, Manipal School of Architecture and Planning',
    img: '/img/alumni/vishnu-pradeep.jpg',
    quote: [
      'Ever since I was 11, the guidance I’ve received from Bal Govind Prabhuji and the Gurukula has had a huge impact on my growth and Krishna consciousness. He’s helped me develop a balanced mindset and a grounded approach to handling life’s ups and downs. In a world that often feels chaotic, this grounding in spiritual purpose has been priceless.',
      'It’s given me the clarity to approach life with both joy and calm. Thanks to these teachings, I’ve learned how to balance my spiritual journey with achieving material goals, finding inner peace and sharing that happiness with others.',
    ],
    reviewNote: 'The original quote is signed “Vishnu Pangadan” while the profile is titled “Vishnu Pradeep”. Please confirm the correct name.',
  },
  {
    name: 'Yogeshwar Keshav Das',
    path: 'Bhaktivedanta Academy, Mayapur',
    img: '/img/testimonials/yogeshwar-keshav-das.jpg',
    quote: [
      'Mentoring from Bala Govinda Prabhuji has been a cornerstone of my Krishna Consciousness journey since childhood. His dedication to bringing children in the Pune congregation together for training was extraordinary, sparking my devotion from an early age. Learning Vedic hymns and Bhagavad Gita verses became a meaningful way to connect with our heritage.',
      'At 11, with his encouragement, I joined the Bhaktivedanta Academy in Mayapur, a life-changing decision that deepened my spirituality and transformed my outlook on life. His guidance helped me balance academics with devotion, preparing me for life’s challenges. Even today, his teachings continue to inspire and shape every aspect of my life.',
    ],
  },
  {
    name: 'Chinmay Kesharwani',
    path: 'Alumnus, Bhaktivedanta Gurukula',
    img: '/img/alumni/chinmay-kesharwani.jpg',
    quote: [
      'My time at Gurukula was a profound journey of self-discovery and transformation. Under the loving guidance of my guru, I learned to weave together the threads of spirituality and daily life. Each lesson was infused with deep wisdom, helping me understand that true fulfillment comes from balancing both realms.',
      'My guru’s unwavering support and teachings instilled in me the courage to face life’s challenges with grace and resilience. Through meditation, reflection, and daily practices, I found inner peace and purpose. This sacred experience not only shaped my spiritual identity but also filled my heart with gratitude, inspiring me to live a life of harmony and devotion.',
    ],
  },
]

export const volunteers: Person[] = [
  {
    name: 'Atul Rahate',
    role: 'Parent & volunteer, Uruli Kanchan',
    img: '/img/volunteers/atul-rahate.png',
    bio: [
      'Hare Krishna. My name is Atul Rahate, I live in Uruli Kanchan. I work as a technician in Technic India Limited. My children Himanshu and Daksha are the students in Bhaktivedanta Gurukula. I am very happy with the education and spiritual environment they are getting. I offer many voluntary services in BVG. Thank you for the service opportunity. Hare Krishna!!',
    ],
  },
  {
    name: 'Vidya Rahate',
    role: 'Kitchen service, Uruli Kanchan',
    img: '/img/volunteers/vidya-rahate.png',
    bio: [
      'Hare Krishna. My name is Vidya Rahate, I live in Uruli Kanchan. I offer services in kitchen. I also help in grinding of wheat flour, making rotis and any other service available. I am very happy with the spiritual environment. Hare Krishna!!',
    ],
  },
  {
    name: 'Sunny Tanna',
    role: 'Grocery supplier, Uruli Kanchan',
    img: '/img/volunteers/sunny-tanna.png',
    bio: [
      'Myself Sunny Tanna, I run Grocery Business in Uruli Kanchan. I provide necessary grocery at subsidized rate in gurukul. I also help in receiving parcels sent by parents for the students in gurukula and handing the same to Gurukula. The spiritual teachings of HG Bal Govind Prabhuji give an inspiration to move forward in spiritual life so as a gesture of gratitude I am doing this service. Although the debts for one guiding on the path can never be paid but still whatever small service I could do, I try to do.',
    ],
  },
]

export type Testimonial = {
  name: string
  relation: string
  img: string
  quote: string
  reviewNote?: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sony Gupta',
    relation: 'Mother of Keshav Gupta',
    img: '/img/testimonials/sony-gupta.jpg',
    quote:
      'Bhaktivedanta Gurukula is an incredible place for children, offering a balanced and nurturing environment. The thoughtfully timed morning program ensures the kids aren’t rushed, and Radhika Caranrenu Mataji’s loving care as Gurumata brings a special, motherly touch. Parents can visit their children monthly and stay connected through weekly video calls and daily Zoom sessions, fostering strong communication. Homemade snacks bring a comforting sense of home, while turn-wise seva opportunities teach …',
    reviewNote: 'This testimonial ends mid-sentence on the original website. Please supply the complete text.',
  },
  {
    name: 'Neha Agrawal',
    relation: 'Mother of Veerpratap (10th std)',
    img: '/img/testimonials/neha-agrawal.jpg',
    quote:
      'I discovered this Gurukula through a friend’s recommendation, and I’m incredibly grateful for it. What I cherish most about this institution is its serene natural setting combined with a deep spiritual atmosphere. The discipline instilled here is exemplary, and the teaching methods are exceptional, focusing on balancing spiritual and material aspects of life. Witnessing my son’s transformation has been remarkable—he’s grown more spiritual, humble, disciplined, and independent. I wholeheartedly encourage anyone seeking such growth to consider this Gurukul.',
  },
  {
    name: 'Kishor Kanchan',
    relation: 'Father of Krushnang (8th std)',
    img: '/img/testimonials/kishor.jpg',
    quote:
      'One day while driving along BVG Road, I spotted the “Bhakti Vedanta Gurukul” sign. Curious, I turned in. Shri Balgovind Prabhuji warmly welcomed me and explained their unique teaching methods. That moment, I knew this was the place for my son, Krushnang. Though it was his first time away from home, he quickly adapted. Today, he cherishes both his native home and his new family at the gurukul.',
  },
  {
    name: 'Rasika Priti Devi',
    relation: 'Mother of Krishnakirtan (4th std)',
    img: '/img/testimonials/rashika.jpg',
    quote:
      'We appreciate the systematic structure and the balance between education and scriptural studies. The delayed mangal arti for children helps them transition smoothly to waking up early. Additionally, the emphasis on providing healthy food options for the well-being of the kids is commendable. The Gurukula environment is nurturing and supports their overall development. Personalized attention by prabhuji is also one of the key strengths.',
  },
  {
    name: 'Mrs Madhavi Swami',
    relation: 'Mother of Saishankar (7th std)',
    img: '/img/testimonials/madhavi.jpg',
    quote:
      'We found this Gurukula through a devotee and my counselor, and it has been a blessing! The morning arati, bhajan kirtan, delicious prasadam, and the opportunity for seva have all been wonderful. The Gurukula instills excellent values and discipline in children. I’ve seen amazing changes in my son – he’s more helpful at home, his temper is in control, and his behavior and attitude have improved greatly. I encourage everyone to join ISKCON, become a devotee, and consider enrolling their children in this Gurukula!',
    reviewNote: 'On the original website the sentences of this testimonial were jumbled together. The order shown here was rebuilt from those same words. Please confirm it.',
  },
  {
    name: 'Raghu and Hemalatha',
    relation: 'Parents of Krishna Chaitanya',
    img: '/img/testimonials/krishna-chaitanya.jpg',
    quote:
      'We are so grateful to see our son thrive at Bhaktivedanta Gurukul. In just a month, he has become more cultured, devotional, disciplined, and obedient. This transformation is thanks to the love, guidance, and encouragement he receives from the Gurukul. We’re thrilled to have made this decision and are proud to see our son in such a positive environment under the leadership of Sri Bal Govind Prabhuji. If you have dreams for your child’s future, join Bhaktivedanta Gurukula to make them a reality!',
  },
]

export const coaches: Person[] = [
  { ...governingBody[0], name: 'Bala Govinda', role: undefined },
  { ...teachers[1], name: 'Radhika Charan Renu' },
  { ...teachers[6], name: 'Parameshwar Hriday Das' },
  { ...teachers[7], name: 'Gita Upasana Devi Dasi' },
  {
    name: 'Jay Gehlot',
    img: '/img/teachers/jay-gehlot.jpg',
    bio: [
      'Jai Gahlot is cofounder and board member of Prachetas Foundation- an NGO focusing on two basic needs of human beings- food and education. The NGO distributes free food to those in need and conducts upskilling seminars to students and professionals which help them develop their mindset and handle challenging situations in life.',
      'As a professional, Jai Gahlot works as Software Development Manager in Veritas, Pune where he with his team builds world’s no. 1 Enterprise Backup product- Veritas NetBackup. Prior to that, he has served as Principal Software Engineer in Veritas and Dell on flagship products of these companies in the areas of product delivery, architecture and innovation in system and kernel software. He did his Graduation BE (Computer Science) from Rajasthan University in 2005 and MTech in computer science from DAIICT (Dhirubhai Ambani Institute of ICT), Gandhinagar in 2007.',
      'He has 34 US Patents on his name and is an official mentor for Veritas and Dell employees to foster new inventions. Jai is an active member of Lotus Voice for last 10 years. He has been conducting various career counselling and lifestyle courses for youth like Discover Your Self, Positive Thinker, Joy of Stress, Lifestyle management to corporate employees, and value education in various schools in Pune. He has a 9 year old son, and in free time, he likes to study the practical applications of ancient literatures esp. Bhagavad Gita and Srimad Bhagavatam in the modern world. His hobbies are to listen to soulful music and visit places of historic importance. He hails from a small district Bikaner in the state of Rajasthan, India.',
    ],
    reviewNote: 'The heading reads “Jay Gehlot” while the biography uses “Jai Gahlot”. Please confirm the spelling.',
  },
  {
    name: 'Shweta Gehlot',
    img: '/img/teachers/shweta-gehlot.jpg',
    bio: [
      'Shweta Goyal is a preacher and a counselor. She hails from a small city Bulandshahr in UP. She did her graduation (B.Tech) from Uttar Pradesh (U.P.) and MTech in Computer Science from DAIICT (Dhirubhai Ambani Institute of ICT), Gandhinagar, Gujarat in 2007.',
      'She has worked for 7 years in multinational companies like Persistent and Symantec. She has filed 2 patents while working in Symantec. She left her job to take care of her son and home. She is an active preacher on spiritual subjects like Bhagwad Gita and Srimad Bhagwatam. She conducts regular classes on these spiritual subjects and also conducts spiritual seminars at various places.',
      'Currently she as a Counselor is guiding various grahastha families. She also conducts value education and shloka memorization classes for children. She conducts various dramas (writing script, audio recording, music and finally direction) on various festivals in ISKCON Pune. She has a 10 year old son. She likes to write on spiritual topics and composing songs. She has composed a couple of songs for the dramas she has conducted in the past.',
    ],
    reviewNote: 'The heading reads “Shweta Gehlot” while the biography uses “Shweta Goyal”. Please confirm the name.',
  },
]
