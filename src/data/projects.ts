export interface Project {
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
}

// Replace these with your real projects — title, a couple sentences on what
// it does and your role, the tech used, and links to the repo / live demo.
export const projects: Project[] = [
  {
    title: 'Alexa Flower Botique Shop',
    description:
      'Built a flower shop website using React, TypeScript, and Vite. Implemented responsive design and integrated with a backend API for product management.',
    tech: ['React', 'TypeScript', 'Vite'],
    repoUrl: 'https://github.com/soberDevEddie/alexa-website.git',
    liveUrl: 'https://alexa-website-silk.vercel.app/',
  },
  {
    title: "Alex's Hair Studio",
    description: 'Developed a hair studio website with React, TypeScript, and Vite. Focused on creating an intuitive user interface and seamless navigation for clients.',
    tech: ['React', 'TypeScript', 'Vite', 'Bootstrap'],
    repoUrl: 'https://github.com/soberDevEddie/AlexHairStudio.git',
    liveUrl: 'https://alexhairstudio-beta.vercel.app/',
  },
  {
    title: 'FlashStudy',
    description:
      'Simple CRUD flashcard app built with NextJS and MongoDB. Implemented user authentication and a RESTful API for managing flashcards.',
    tech: ['NextJS', 'MongoDB', 'Tailwind CSS'],
    repoUrl: 'https://github.com/soberDevEddie/flashcards.git',
    liveUrl: 'https://flash-cards-orcin-nine.vercel.app/login',
  },
  {
    title: 'Netflix Clone',
    description: 'A Netflix clone built with React and the TMDB API. Implemented features such as movie browsing, search functionality, and responsive design.',
    tech: ['React', 'Tailwind CSS', 'TMDB API'],
    repoUrl: 'https://github.com/soberDevEddie/netflixReactApp.git',
    liveUrl: 'https://reelreact.netlify.app/',
  },
];
