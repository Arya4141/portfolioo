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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
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
    title: "Social Media Influencer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Choco Chip Developer",
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Aura Wheel Ventures",
    company_name: "Description:",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Bike Rental System",
    points: [
      "Our Bike Rental System offers hassle-free urban mobility, allowing you to effortlessly rent bikes.",
      "Affordable rates, convenient booking, flexible terms and sustainability make users two-wheeled adventure a reality.",
      "In this site, users can  rent bikes for personal use or list their bikes to generate income.",
      "Embrace the freedom of the ride and explore the world on a motorbike with our reliable and convinient  Motorbike Rental System.",
    ],
  },
  {
    title: "Finovo",
    company_name: "Description:",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Stock Marketing Site",
    points: [
      "Finovo's cutting-edge website offers hassle-free experience, making finance management breeze. ",
      "Users can effectively access real-time financial data, conducte in-depth market analysis, and receive valuable stock-related news updates.",
      "Under this platform, user can enter there profit and loss and can make there income graph.",
      "Data and news is fetched through certain API's that allows user to maintain his profile.",
    ],
  },
  {
    title: "Food Delivery Site",
    company_name: "Description:",
    icon: shopify,
    iconBg: "#383E56",
    date: "Food Delivery Site",
    points: [
      "A web application designed to enable users to order food and conveniently track their orders.",
      "This platform helps users to browse restaurant menus and make secure online payments",
      "I created this user-centric food delivery site as a frontend developer, showcasing skills in design, interactivity, and responsive development.",
      "The website is visually appealing and modern design, combined with version control.",
    ],
  },
  {
    title: "INSTAGRAM_LIVE",
    company_name: "Description:",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Fully functional Instagram clone",
    points: [
      " Leveraging my expertise, I have designed and built a responsive and visually authentic clone. ",
      "Users could upload photos, apply filters, write captions, like, comment, and follow other users, mirroring the core functionalities of Instagram.",
      "Real-time updates and notifications were incorporated for an immersive experience.",
      "The platform is integrated with a third-party API for all functionalities to achieve feature parity.   ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "CODEHELP certified in FULL-STACK DEVELOPER" ,
    name: "Love Babbar",
    designation: "Founder of",
    company: "      CODEHELP",
  },
  {
    testimonial:
      "Infosys SPRINGBOARD Certified",
    name: "INFOSYS",
    designation: "",
    company: "",
  },
  {
    testimonial:
      "Coding Ninjas certified in Data Structures",
    name: "Coding Ninjas",
    designation: "",
    company: "",
  },
];

const projects = [
  {
    name: "AuraWheel Ventures",
    description:
      "A comprehensive bike booking platform that allows users to book rental bikes and also list there bikes for booking, choose from a wide selection, book your ride effortlessly.  ",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Arya4141",
  },
  {
    name: "FINOVO",
    description:
      "Web application that enables users to search for Stock market analytics, view updates on stock prices, track trends, make informed decisions and enhance financial experience. ",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Arya4141/FINOVO.git",
  },
  {
    name: "Food Delivery Site ",
    description:
      "Experience food delivery like never before! Our website, offers user-friendly platform for ordering your favorite dishes. Explore menus, place orders, and track deliveries effortlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Arya4141/Food-Delivery-Website",
  },
];

export { services, technologies, experiences, testimonials, projects };
