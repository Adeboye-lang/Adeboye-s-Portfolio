import portfolio from '../assets/Projects/portfolio.png';
import jaanmak from '../assets/Projects/jaanmak.png';
import soke from '../assets/Projects/soke.png';
import maisonaiym from '../assets/Projects/maisonaiym1.png';
import intercessor from '../assets/Projects/intercessor1.png';


export const HERO_CONTENT = `I am a full-stack software engineer who builds high-performance, production-grade web and mobile platforms — from luxury e-commerce storefronts and community hubs to distributed systems serving tens of thousands of concurrent users. My core stack spans React, Next.js, TypeScript, Node.js, and PostgreSQL, with deep work in Stripe, AI/LLM integration, authentication, and cloud deployment on Vercel and AWS.
Over the past five years I have shipped MERN and Next.js platforms that have processed 50,000+ transactions, cut end-to-end latency by 65%, and held 99.9% uptime under real production load. I am equally comfortable architecting the system, owning the database schema, hardening the API, and crafting the pixel-perfect interface — and I increasingly bring AI-driven workflows into the products I build to push them further than a traditional stack alone can reach.`;

export const ABOUT_TEXT = `I am a full-stack software engineer who treats every product as a system to be engineered end to end — from database schema and API design through to the last interaction on the frontend. I have shipped production platforms across luxury e-commerce, faith-based community tools, digital agency sites, and multi-tenant marketplaces, and I take ownership of architecture, performance, and user experience as a single responsibility rather than three separate ones.
My core stack is Next.js, React, TypeScript, Node.js, and PostgreSQL, with strong experience integrating Stripe, Resend, NextAuth, JWT, Prisma, and AI/LLM workflows. I care about the parts users never see — clean data models, predictable APIs, careful error handling, secure auth, and observability — because that is what keeps the parts they do see fast, reliable, and trustworthy.
I am happiest building things that have to actually work: real payments, real users, real edge cases. I collaborate well with founders and product teams, translate fuzzy requirements into concrete systems, and ship.`;

export const EXPERIENCES = [
    {
        year: "2021 - Present",
        role: 'Software Engineer',
        company: 'Freelancer',
        description: 'Designed and implemented scalable, distributed systems serving 10,000+ concurrent users leveraging horizontal scaling, fault tolerance, and redundancy while delivering production grade e-commerce platforms on React, Node.js, and MongoDB that processed 50,000+ transactions in under 90 days. Led system architecture and API design to enable multitenant onboarding and cut operational costs by 30%, and drove a 65% reduction in end-to-end latency (3.2s → 1.1s) through optimized query planning, Redis caching, CDN integration, and asynchronous processing. Engineered a custom load balancing solution with automated failover that improved request latency by 40%, and maintained 99.9% uptime through Docker and Kubernetes deployments, CI/ CD pipelines, and robust logging and monitoring. Consistently partnered with product managers and remote stakeholders to translate ambiguous requirements into scalable, on-schedule technical solutions.',
        technologies: ['React', 'Node.js', 'JavaScript', 'CSS', 'HTML']
    },
    {
        year: '2022 - 2023',
        role: 'Software Engineer',
        company: 'Bingham University',
        description: 'Created a Network Load Balancing System using Round-Robin Algorithm, which improved the performance and reliability of the university\'s network infrastructure. Developed a web application for managing student records, enhancing data accessibility and user experience.',
        technologies: ['Networking', 'Load Balancing', 'JavaScript', 'React', 'Node.js']
    },
    {
        year: '2020 - 2022',
        role: 'Front-End Engineer',
        company: 'HIRE',
        description: 'Develop mobile applications using Flutter and Dart, focusing on creating intuitive user interfaces and seamless user experiences. Collaborated with cross-functional teams to deliver high-quality mobile applications on time, ensuring adherence to best practices in mobile development, including performance optimization and responsive design.',
        technologies: ['Flutter', 'Dart', 'Firebase', 'Mobile Development', 'UI/UX Design']
    },
];

export const PROJECTS = [
    {
        title: 'Maison AIYM — Luxury Tanning E-Commerce',
        image: maisonaiym,
        description:
            'A fully custom-built e-commerce platform for a UK luxury beauty brand. Engineered a Next.js + TypeScript storefront with product spotlight, variant selection, and a persistent cart, integrated with Stripe Checkout and webhook-driven order creation backed by PostgreSQL. Built a complete customer account system covering orders, saved addresses, and preferences, plus transactional emails (order confirmation, dispatch, refund, and review requests) via Resend. Delivered a JWT-protected admin panel on a dedicated subdomain (admin.maisonaiym.com) for orders, customers, inventory, returns with real Stripe refunds, newsletter, and analytics. Fully mobile responsive with GDPR-compliant cookie consent, deployed on Vercel.',
        technologies: ['Next.js', 'TypeScript', 'React', 'PostgreSQL', 'Tailwind CSS', 'Stripe API', 'Resend', 'JWT Auth', 'REST APIs', 'Vercel'],
        link: "https://maisonaiym.com",
        category: "Full Stack",
        status: "Live"
    },
    {
        title: 'Intercessor — Christian Content & Community Platform',
        image: intercessor,
        description:
            'A fully custom-built resource discovery and community platform. Engineered a dynamic content hub for browsing and viewing music, podcasts, recommended books, and biblical character studies, alongside an interactive event board with Google Maps integration for precise location mapping. Built a secure, bespoke admin CMS for managing platform content, spotlight features, and dynamic site-wide page content, backed by a custom JWT-based authentication flow using NextAuth and bcryptjs. Automated platform communications via SMTP through Nodemailer, and delivered a highly responsive layout with Tailwind CSS v4 and fluid micro-interactions powered by Framer Motion.',
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'NextAuth', 'Framer Motion', 'Google Maps API', 'Nodemailer', 'bcryptjs'],
        link: "https://intercessor.uk",
        category: "Full Stack",
        status: "Live"
    },
    {
        title: 'JAANMAK',
        image: jaanmak,
        description:
            'I architected and built the entire application using the MERN stack (MongoDB, Express.js, React, and Node.js), ensuring high performance and scalability across the platform. On the frontend, I developed a visually polished and fully responsive interface using React 19 and TypeScript, leveraging Tailwind CSS v4 for modern styling and Framer Motion to create smooth, engaging user interactions. For state management, I implemented Zustand to efficiently handle complex global states, including shopping cart updates, authentication status, and wishlist synchronization. On the backend, I designed and deployed a secure RESTful API with Node.js and Express, implementing robust user authentication using JWT and Bcrypt, while enforcing best security practices such as Helmet, rate limiting, and data sanitization.',
        technologies: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Zustand', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt'],
        link: "https://www.jaanmak.com",
        category: "Full Stack",
        status: "Live"
    },
    {
        title: 'Soke Digital Agency Platform',
        image: soke,
        description:
            'Architected a high-performance React application with TypeScript and Tailwind CSS, featuring a custom-built secure Admin Dashboard powered by Firebase for real-time content management of blogs and portfolios. Developed an automated lead generation and booking system integrated with EmailJS, utilizing parallel workflows for instant client and admin notifications. Enhanced user engagement and retention through advanced, GPU-accelerated animations and page transitions using Framer Motion, delivering a scalable, mobile-first experience with optimization for SEO and performance.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'EmailJS', 'Framer Motion', 'SEO'],
        link: "https://www.sokedigital.com",
        category: "Full Stack",
        status: "Live"
    },
    {
        title: 'Hyper-Tech Portfolio',
        image: portfolio,
        description:
            'A fully immersive, sci-fi inspired developer portfolio featuring a holographic hero section, terminal-style console, and interactive circuit board dividers. Built with React and Framer Motion, it includes a custom tactical cursor, system load animations, and a seamless responsive design that mimics a high-tech operating system.',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
        category: "Frontend",
        status: "Live"
    },
];

export const CONTACT = {
    address: 'Abuja, Nigeria',
    phoneNo: '+234 7054255572',
    email: 'Boyebello@gmail.com'
};

