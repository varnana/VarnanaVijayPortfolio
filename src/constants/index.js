import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  mysql,
  git,
  html,
  vscode,
  microsoft_excel,
  eclipse,
  sapabap,
  sapbtp,
  project2,
  project3,
  emeLogo,
  genzeeLogo,
  pacelabLogo,
  youtubeclone,
  airbnbclone,
  spotifyclone,
  plant,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "SAP ABAP Developer", icon: backend },
  { title: "Cloud Integration Engineer", icon: web },
  { title: "Database Engineer", icon: mobile },
  { title: "System Design Enthusiast", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "MySQL", icon: mysql },
  { name: "SAP ABAP", icon: sapabap },
  { name: "SAP BTP", icon: sapbtp },
  { name: "Microsoft Excel", icon: microsoft_excel },
  { name: "Eclipse IDE", icon: eclipse },
  { name: "VS Code", icon: vscode },
];

const experiences = [
  {
    title: "SAP ABAP Training",
    company_name: "EME Education Center, Kochi",
    icon: emeLogo,
    iconBg: "#383E56",
    date: "June 2025 – Present",
    company_link: "https://emeeducation.com/",
    points: [
      "Currently undergoing SAP ABAP training focused on cloud backend development.",
      "Hands-on experience using Eclipse IDE, ABAP editor, and Microsoft Excel tools.",
      "Learning report creation, modularization, and performance tuning in ABAP.",
      "Preparing for Microsoft Excel certification exam.",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company_name: "Genzee Technologies, Kochi",
    icon: genzeeLogo,
    iconBg: "#E6DEDD",
    date: "July 2024",
    company_link: "https://genzeetechnologies.in/",
    points: [
      "Studied cybersecurity principles, malware analysis, and ethical hacking basics.",
      "Explored penetration testing frameworks and data security protocols.",
      "Understood risk mitigation strategies in modern IT systems.",
      "Hands-on exposure to secure system environments.",
    ],
  },
  {
    title: "Python Development Intern",
    company_name: "Pace Lab, Kochi",
    icon: pacelabLogo,
    iconBg: "#383E56",
    date: "May 2023",
    points: [
      "Completed 14-day internship focused on Python development basics.",
      "Developed small backend tools using core Python logic and file handling.",
      "Gained confidence in syntax, loops, and modular programming.",
      "Worked on real-time exercises like calculators and data processors.",
    ],
  },
];

const projects = [
  {
    name: "NutriVision",
    description:
      "AI-powered health tool that predicts vitamin deficiencies from facial images using webcam input. Built with advanced CNN models like ResNet and DenseNet to analyze skin, lips, tongue, and eyes. Focuses on preventive care by providing instant feedback and nutritional suggestions. Demonstrates strong computer vision integration in health tech. Ideal use-case for non-invasive diagnostics in early screening.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "CNN", color: "green-text-gradient" },
      { name: "Image-Processing", color: "pink-text-gradient" },
      
    ],
    image: project2,
    source_code_link: "https://github.com/Abhi-sys511/NutriVision",
  },
  {
    name: "CampusTrace",
    description:
      "Lost & found platform tailored for academic campuses. Offers user and admin portals with item tracking, claim verification, and notifications. Enhances transparency, reduces misplacement rate, and ensures data privacy. Built for community trust with real-time moderation. Peer-reviewed and conference-published project with practical value.",
    tags: [
      { name: "Web-app", color: "blue-text-gradient" },
      { name: "Privacy", color: "green-text-gradient" },
      { name: "Security", color: "pink-text-gradient" },
      { name: "Python", color: "orange-text-gradient" },
      { name: "PHP", color: "green-text-gradient" },
      { name: "MySQL", color: "blue-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/Abhi-sys511/CampusTrace",
  },
  {
    name: "Airbnb Console Clone",
    description:
      "A terminal-based Airbnb experience reimagined using pure Python and file-based storage. Simulates listing, booking, and user account management with structured menus and logic. Great for beginners aiming to understand core CRUD operations and backend flow. Strengthens CLI app design without relying on UI. Perfect demonstration of modular design in console-based apps.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Console-UI", color: "green-text-gradient" },
      { name: "Booking-flow", color: "orange-text-gradient" },
      { name: "React-App", color: "blue-text-gradient" },
    ],
    image: airbnbclone,
    source_code_link: "https://github.com/Abhi-sys511/Airbnb-Clone",
  },
  {
    name: "YouTube Clone",
    description:
      "Frontend clone of YouTube using React and Tailwind CSS. Features dynamic video feed via RapidAPI, search suggestions, responsive design, and category filters. Mimics YouTube’s layout including sidebar, video grid, and player screen. Great demonstration of modern UI practices and API integration.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Rapid-API", color: "green-text-gradient" },
      { name: "Youtube-API", color: "pink-text-gradient" },
    ],
    image: youtubeclone,
    source_code_link: "https://github.com/Abhi-sys511/YouTube-Clone",
  },
  {
    name: "Spotify Clone",
    description:
      "Spotify-like frontend project with React and Tailwind CSS. Includes album grid, playlist preview, audio controls, and smooth hover effects. Designed for responsive layout and sleek transitions. Highlights UI design strength and attention to modern component structuring.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwindcss", color: "green-text-gradient" },
      { name: "Music-UI", color: "pink-text-gradient" },
    ],
    image: spotifyclone,
    source_code_link: "https://github.com/Abhi-sys511/spotify-clone",
  },
  {
    name: "Plant Disease Detection",
    description:
      "Deep learning web tool to identify plant diseases from leaf images. Built with CNNs for real-time classification. Provides instant feedback and remedies for farmers. Optimized for rural usability with a simple UI. Empowers agriculture with AI for crop health and yield improvement.",
    tags: [
      { name: "CNN", color: "blue-text-gradient" },
      { name: "Plant-AI", color: "green-text-gradient" },
      { name: "Vision-Model", color: "pink-text-gradient" },
    ],
    image: plant,
    source_code_link:
      "https://github.com/Abhi-sys511/plant-disease-detection-web-app",
  },
];

const publicationAndResume = {
  publication: {
    title: "📄 Published Conference Paper: CampusTrace",
    description:
      "CampusTrace transforms the systems of lost and found items in campus environments by improving the process of reporting lost or found items and ensures the proper returns of the item to its rightful owners. The system encourages cooperation, protects privacy, and improves recovery through a user-friendly experience.",
    link: "https://irojournals.com/tcsst/article/view/6/2/6",
  },
  resume: {
    title: "📂 Download My Resume",
    link: "/abhiram_resume.pdf",
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  publicationAndResume,
};
