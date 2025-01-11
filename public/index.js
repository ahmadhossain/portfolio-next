import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  astha,
  carrent,
  jobit,
  tripguide,
  threejs,
  pokemon,
  wpcab,
  pizza,
  popcorn,
  shoe,
  kabirhat,
  edoctor,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Full Stack Web Developer',
    icon: web,
  },
]

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Software Engineer (Intern)',
    company_name: 'Astha IT',
    icon: astha,
    iconBg: '#383E56',
    date: 'November 2023 - March 2024',
    points: [
      'Designed and implemented the Log-in, Registration, Sidebar, and Branch Pictures with drag-and-drop features in Restora app.',
      'Enabling e-commerce capabilities with optimized performance and advanced functionality by integrating third-party APIs.',
      'Acquired proficiency in DevOps, OOP, SDLC, and Git',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Pokemon',
    description:
      'Enabling e-commerce capabilities with optimized performance and advanced functionality by integrating third-party APIs.',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'react-query',
        color: 'green-text-gradient',
      },
      {
        name: 'zustand',
        color: 'pink-text-gradient',
      },
    ],
    image: pokemon,
    source_code_link: 'https://mypokemoncard.netlify.app/',
  },
  {
    name: 'WORLD PEACE CONVENING ASSOCIATION BANGLADESH (WPCAB)',
    description:
      'Registering new member, authentication, and admin dashboard with advanced filtering, developed server-side APIs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'pink-text-gradient',
      },
    ],
    image: wpcab,
    source_code_link: 'https://wpcab.vercel.app/',
  },
  {
    name: 'E-DOCTOR',
    description:
      'Implemented live video consultation, chat system, blog, search and filtering, admin verification, and authentication and authorization systems.',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'pink-text-gradient',
      },
      {
        name: 'prisma',
        color: 'blue-text-gradient',
      },
    ],
    image: edoctor,
    source_code_link: 'https://github.com/ahmadhossain/e-doctor-next',
  },
  {
    name: 'Shoe Store',
    description:
      'Worked on product list, product, cart features. Integrated third-party API.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'zustand',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: shoe,
    source_code_link: 'https://shoe-shore.vercel.app/',
  },
  {
    name: 'POPCORN',
    description:
      'Worked on movie search and rating. Integrated third-party API.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: popcorn,
    source_code_link: 'https://popcorn-ksjn4k3eu-guruahmad.vercel.app/',
  },
  {
    name: 'FAST REACT PIZZA',
    description:
      'Worked on menu, cart, order features. Integrated third-party API.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux-toolkit',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: pizza,
    source_code_link: 'https://fast-react-pizza-rose.vercel.app/',
  },
  {
    name: 'Kabirhtat Agro',
    description: 'Worked on product list, product features.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: kabirhat,
    source_code_link: 'https://www.kabirhatagro.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }
