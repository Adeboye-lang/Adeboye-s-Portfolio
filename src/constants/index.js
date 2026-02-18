import portfolio from '../assets/Projects/portfolio.png';
import jaanmak from '../assets/Projects/jaanmak.png';
import soke from '../assets/Projects/soke.png';


export const HERO_CONTENT = `I am a passionate software engineer with a focus on building scalable and efficient web applications and mobile applications. I have a strong background in JavaScript, React, and Node.js, and I love tackling complex problems with elegant solutions.
I am always eager to learn new technologies and improve my skills. I believe in the power of collaboration and enjoy working in teams to create innovative products that make a difference. and with 5 years experience in the industry, I have honed my skills in full-stack development, cloud computing, and DevOps practices.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software engineer with a passion for creating innovative solutions. With a strong foundation in computer science and extensive experience in full-stack development, I thrive on tackling complex challenges and delivering high-quality software products.
My expertise lies in designing and implementing scalable web applications, leveraging modern technologies such as React, Node.js, and cloud platforms. I am committed to continuous learning and staying up-to-date with industry trends to ensure that I can provide the best solutions for my clients`;

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

