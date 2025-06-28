import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Cathrine Nayrouz.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Ontario based <strong className="text-stone-100">Computer Science MSc Graduate</strong>, currently working
        at <strong className="text-stone-100">WDG Public Health</strong> helping automate and modernize various projects, namely the well water pipeline.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me in <strong className="text-stone-100">reading, crocheting, cooking</strong>,
        plucking my <strong className="text-stone-100">Oud</strong>, or exploring the beautiful{' '}
        <strong className="text-stone-100">trails of Ontario</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a person who seeks value and meaning in their work, which is why I gravitate towards working in the public sector. Every day working at WDGPH has been fulfilling and meaningful. Feeling the work being done matters and contributes to a greater puzzle that benefits the community is a key part of why I enjoy working at WDGPH.`,
  aboutItems: [
    {label: 'Location', text: 'Guelph, ON', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Egyptian', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading, Music, Crocheting', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Guelph', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'WDGPH', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Arabic',
        level: 10,
      },
      {
        name: 'French',
        level: 2,
      },
    ],
  },
  {
    name: 'Languages',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'R',
        level: 8,
      },
      {
        name: 'SQL',
        level: 9,
      },
    ],
  },
  {
    name: 'Positon Relevant Skills',
    skills: [
      {
        name: 'Docker',
        level: 9,
      },
      {
        name: 'Kubernetes',
        level: 6,
      },
      {
        name: 'Pipelines',
        level: 8,
      },
    ],
  },
  {
    name: 'Position Relevant Experience',
    skills: [
      {
        name: 'Data Governance',
        level: 9,
      },
      {
        name: 'Ethical/ AI',
        level: 10,
      },
      {
        name: 'Responsible AI',
        level: 10,
      },
    ],
  },
];


/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2025',
    location: 'University of Guelph',
    title: 'Masters of Science',
    content: <p>Masters in Computer Science, for thesis on lower motor neuron disease modelling in simulated limb muscles</p>,
  },
  {
    date: '2021',
    location: 'Bachelors of Science',
    title: 'BSc.in Computer Science',
    content: <p>BSc.in Computer Science, with an area of application in Philosophy, and Psychology Brain and Cognition.</p>,
  },
];
export const experience: TimelineItem[] = [
  {
    date: 'May 2025 - Present',
    location: 'WDG Public Health',
    title: 'Data Science Intern',
    content: (
      <p>
        Using Python or R to design and implement solutions that integrate and strengthen public health information systems regarding well water in the community through 
        well-governed data principles and rigorous quality practices
      </p>
    ),
  },
  {
    date: 'July 2024 - Present',
    location: 'CAN2oNET Collaboration Research Project with the ADC and Dr. Wagner-Riddle at University of Guelph',
    title: 'Data Manager',
    content: (
      <p>
       Design and implement a data pipeline, and data governance system for a Canada wide research group collecting big data for soil analysis and 
       nitrogen dioxide emissions research.

      </p>
    ),
  },
  {
    date: 'Sept 2024 - Dec 2024',
    location: 'CARE-AI',
    title: 'Curriculum Writing',
    content: (
      <p>
        Helped write and design an AI curriculum to help inform industry professionals about AI topics, and responsible AI
      </p>
    ),
  },
  {
    date: 'Sept 2019- Dec 2020',
    location: 'Linamar',
    title: 'Research Associate',
    content: (
      <p>
        Data collection, analysis, and clean up. Using predictive modelling on high frequency data to predict tool life.
      </p>
    ),
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};


/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/CatPierre'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/cathrine-n-42409392/'},
];
