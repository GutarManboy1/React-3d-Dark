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
  alc,
  devs,
  ecc,
  goldware,
  robinson,
  wagon,
  
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

// import { alc, devs, ecc, goldware, robinson, wagon } from "../assets/company";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer, kinda",
    icon: backend,
  },
  {
    title: "Content Creator, getting there",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "UI/UX Designer & Frontend Development",
    company_name: "Robinson Consulting",
    icon: robinson,
    iconBg: "#383E56",
    date: "September 2024 - January 2025",
    points: [
      "Developing UI/UX design and front-end development using Javascript, React and other related technologies.",
      "Collaborating with a small team of designers and developers to create unique and interesting projects.",
      "Implementing modern design patterns and best practices.",
      "Participating in team building actvities and contributing to the development of projects.",
    ],
  },
  {
    title: "Web Development",
    company_name: "Goldware Park",
    icon: goldware,
    iconBg: "#E6DEDD",
    date: "July 2024 - August 2024",
    points: [
      "Developing websites using Wordpress.",
      "Working on mobile applications using React Native and Typescript.",
      "Implementing interesting designs and features to enhance user experience.",
      "Participating in devleopment of projects on a strict schedule.",
    ],
  },
  {
    title: "Web Development Education",
    company_name: "Le Wagon Bootcamp",
    icon: wagon,
    iconBg: "#383E56",
    date: "January 2024 - March 2024",
    points: [
      "Developing web applications using Ruby, Ruby on Rails,  Javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create unique and interesting projects.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "100 Devs",
    icon: devs,
    iconBg: "#E6DEDD",
    date: "January 2023 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Designing and developing software solutions to meet specific business and user needs.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Debugging and troubleshooting issues, ensuring the overall functionality, security and performance of the software.",
    ],
  },
  {
    title: "English Instructor",
    company_name: "ALC",
    icon: alc,
    iconBg: "#383E56",
    date: "March 2018 - October 2023",
    points: [
      "Working as a college English instructor required a deep understanding for the academic and intellectual development of my students, as well as a commitment to nuturing critical thinking and analytical skills through literature and language studies",
      "Imparting knowledge but also inspiring a love for lifelong learning, encouraging students to explore diverese perspectives and engage in meaningful discourse.",
      "Contributing to a dynamic academic community, participating in scholarly activities, research, and staying abreast of evolving educational methodologies to enhance the overall learning experience.",
    ],
  },
  {
    title: "English Instructor",
    company_name: "ECC",
    icon: ecc,
    iconBg: "#E6DEDD",
    date: "April 2010 - Present",
    points: [
      "Fostering a positive and inclusive learning environment, where students felt comfortable expressing themselves and taking risks with language.",
      "Adapting my teaching methods and maintaining a flexibility to cater to various learning styles, technological advancements, to ensure relevance.",
      "Asessing my students' progress thoughtfully and providing constructive feedback as well as guiding them towards improvements while acknowledging their achievements, while fostering a growth mindset in language acquistion.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Glenn proved me wrong.",
    name: "Nobu Hatano",
    designation: "Owner",
    company: "Hatano Yakitori",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Glenn does.",
    name: "Shin Watanabe",
    designation: "Owner",
    company: "Barber King",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Glenn optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Yuto Ciggy",
    designation: "Owner",
    company: "Waru",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Story Time",
    description:
      "An AI text and image generated app where users can choose their own adventure through genre, language difficulty level(based on the CEFL structure), and length. Created with the ChatGPT api to generate text and the DallE api; built upon Ruby on Rails. Once created a user can begin their own adventure whilst keeping track of the vocabulary by creating flashcards. Learners can pause and resume their story whenever they like by looking into their library.",
    tags: [
      {
        name: "ruby",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "heroku",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/GutarManboy1/story-time",
  },
  {
    name: "Dice House",
    description:
      "A full stack app built upon Ruby on Rails with Javascript, that allows users to rent games and post their own games to be lent.",
    tags: [
      {
        name: "ruby",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "heroku",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/GutarManboy1/rails-board-game-rentals",
  },
  {
    name: "React Movies",
    description:
      "React app built with Javascript with a backend created in appwrite. Users can search for movies and see the most popular movies according to the TMDB API.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/GutarManboy1/React-Movies",
  },
  {
    name: "3D Portfolio",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/GutarManboy1/3DPortfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
