import {
  python,
  backend,
  software,
  web,
  javascript,
  django,
  reactjs,
  tailwind,
  nodejs,
  postgresql,
  git,
  docker,
  fastapi,
  dotworld,
  accenttechnosoft,
  novitech,
  crowdfunding,
  quora_project,
  portfoliomailer,
  threejs_portfolio,
  portfolio_cms,
  backenkarchitecture,
  blog_web,
  threejs,
  mysql,
  elonmusk,
  apj_kalam,
  sundarpichai,
  linkedin,
  github_icon,
  gmail,
  instagram,
  best_teamof_year,
  givicert,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Career",
  },
  {
    id: "awards",
    title: "Awards",
  },
  {
    id: "tech",
    title: "Technologies",
  },
  {
    id: "projects",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const personalDetails = {
  name: "Gokul C",
  full_name: "Gokul Chandrasekaran",
  roles: ["AI Engineer", "Data Scientist"],
  current_title: "AI Engineer & Data Scientist",
  current_company: "KG Invicta Services",
  description:
    "I’m Gokul Chandrasekaran, an AI Engineer & Data Scientist at KG Invicta Services. My foundation is in Python, backend systems, and building software that solves real problems. Today, I bring that engineering mindset to the intersection of data and artificial intelligence.",
  email: "gggokul865@gmail.com",
  linkedin: "https://www.linkedin.com/in/gokul-dev/",
  github: "https://github.com/G0kulC",
  github_username: "G0kulC",
  resume_link: "https://drive.usercontent.google.com/u/0/uc?id=1ujBXNrzEFgDJYZE8zGM_GVJwiux8viRv", //remove params Ex: ?view=preview and last /
  fav_emoji: "💜",
};

const services = [
  {
    title: "Software Developer",
    icon: software,
  },
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const awards = [
  {
    title: "Best Team of the Year",
    company_name: "DotWorld Technologies",
    location: "Coimbatore",
    points: [
      "Awarded 'Best Team of the Year' for outstanding collaboration and dedication.",
      "Recognized for driving impactful results through teamwork and innovation.",
      "Celebrates the collective efforts of a talented and driven group.",
      "Grateful to my team and company for their support and inspiration.",
    ],
    year_of_award: "2024",
    image: best_teamof_year,
  },
  // Python Programming – GUVI (Google for Education Partner, ISO 9001-27001 Certified)
  {
    title: "Python Programming",
    company_name: "GUVI (ISO 9001-27001 Certified)",
    location: "Coimbatore",
    points: [
      "Gokul C is awarded the certificate of achievement for completing Python Programming.",
      "Covered topics include data structures, algorithms, and OOP.",
      "Certificate recognizes dedication, commitment, and expertise.",
      "Part of ongoing efforts to enhance programming skills for career growth.",
    ],
    year_of_award: "2022",
    image: givicert,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },

  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "AI Engineer & Data Scientist",
    company_name: "KG Invicta Services",
    date: "Current",
    current: true,
    points: ["Working at the intersection of AI engineering and data science, with a foundation in Python and backend development."],
  },
  {
    title: "Software Developer",
    company_name: "DotWorld Technologies",
    icon: dotworld,
    link: "https://dotworld.in/",
    iconBg: "#383E56",
    date: "Joined August 2023 · Previous role",
    points: [
      "API Optimization: Designed and optimized APIs using FastAPI and PostgreSQL, boosting application responsiveness by 50%.",
      "Microservices Development: Spearheaded the creation of scalable microservices architecture, enhancing modularity across projects.",
      "Automation: Automated WordPress content management via the REST API, streamlining workflows and reducing manual effort.",
      "Recognition and Expertise: Earned client and management accolades for innovative automation solutions; proficient in Selenium and Robot Framework for testing efficiency.",
    ],
  },
  {
    title: " Full Stack Developer (Intern)",
    company_name: "Accent Techno Soft",
    icon: accenttechnosoft,
    link: "https://www.accenttechnosoft.com/",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2023",
    points: [
      "Built responsive, user-friendly interfaces using HTML, CSS, JavaScript, and Python (Django).",
      "Integrated robust RESTful APIs, boosting system performance and enabling seamless interaction between the frontend and backend.",
      "Developed a full-stack crowdfunding platform with features like user authentication and secure payment integration.",
    ],
  },
  {
    title: "Junior Python Developer (Intern)",
    company_name: "Novi-Tech Pvt Ltd",
    icon: novitech,
    link: "https://novitechrd.com/",
    iconBg: "#383E56",
    date: "Oct 2021 - Dec 2021",
    points: [
      "Successfully completed a 3-month internship as a Junior Python Developer at Novi-Tech Pvt Ltd.",
      "Developed Python-based applications using OpenCV, reducing image processing time.",
      "Gained hands-on coding experience with real-time image analysis and Python programming.",
      "Explored deep learning and machine learning concepts for AI-based project contributions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "All Birds find shelter during a rain.But Eagle avoids rain by flying above the Clouds.Problems are common, but attitude makes the difference!",
    name: "APJ Abdul Kalam",
    designation: "Former Prime Minister",
    company: "India",
    image: apj_kalam,
  },
  {
    testimonial:
      "As a leader, It is important to not just see your own success, but focus on the success of others. ",
    name: "Sundar Pichai",
    designation: "CEO",
    company: "Google Inc.",
    image: sundarpichai,
  },
  {
    testimonial:
      "I think that's the single best piece of advice: constantly think about how you could be doing things better and questioning yourself.",
    name: "Elon Musk",
    designation: "CEO",
    company: "Tesla and SpaceX",
    image: elonmusk,
  },
];

const projects = [
  {
    name: "Portfolio CMS",
    description:
      "Portfolio CMS is a powerful backend system built with Django that allows users to easily manage their personal portfolios. It is designed to provide RESTful API endpoints for handling various aspects of a portfolio, such as projects, skills, experience, education, blogs, testimonials, and more. The system uses JWT authentication to secure user data, ensuring privacy and security.Portfolio CMS is designed to integrate seamlessly with modern frontend frameworks like Next.js, giving users the flexibility to present their portfolios in a customized manner.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "restframework",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio_cms,
    source_code_link: "https://github.com/G0kulC/portfolio_cms",
    project_live_link: "https://portfolio-cms-jqgh.onrender.com/",
    project_date: "2024-10-23T17:00:00Z",
  },
  {
    name: "PortfolioMailer-Backend",
    description:
      "PortfolioMailer-Backend is a FastAPI-based backend service designed to handle contact form submissions from a portfolio website. This backend accepts user input (name, email, and message) via a POST request, sends an email notification to a specified recipient, and responds to the client asynchronously. This service is containerized with Docker for easy deployment.",
    tags: [
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "smtp",
        color: "green-text-gradient",
      },
    ],
    image: portfoliomailer,
    source_code_link: "https://github.com/G0kulC/portfoliomailer-backend",
    project_live_link: "https://portfoliomailer-backend.onrender.com/",
    project_date: "2024-11-09T17:00:00Z",
  },
  {
    name: "Backend Architecture",
    description:
      "Welcome to the FastAPI Backend Architecture repository! This project showcases a structured and scalable backend architecture built using FastAPI, a modern web framework for building APIs with Python 3.10.The repository follows best practices for organizing a backend project, incorporating key components such as routers, models, schemas, and services to maintain scalability, maintainability, and ease of testing.",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "sqlalchemy",
        color: "pink-text-gradient",
      },
    ],
    image: backenkarchitecture,
    source_code_link: "https://github.com/G0kulC/fastapi-backend",
    project_date: "2024-10-23T17:00:00Z",
  },
  {
    name: "Personal Portfolio",
    description:
      "This is my personal interactive portfolio, built to display my projects in an engaging and visually appealing environment. Developed with Three.js, it allows users to explore my work through smooth animations and responsive design.",
    tags: [
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: threejs_portfolio,
    source_code_link: "https://github.com/G0kulC/threejs-portfolio",
    project_date: "2023-12-13T17:00:00Z",
  },
  {
    name: "Crowd Funding",
    description:
      "Crowd Funding is an online platform that enables users to create and fund campaigns for their favorite projects.The project involved developing user-friendly interfaces and managing userauthentication for seamless crowdfunding operations.",
    tags: [
      {
        name: "django",
        color: "pink-text-gradient",
      },
      {
        name: "numpy",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
    ],
    image: crowdfunding,
    source_code_link: "https://github.com/G0kulC/CrowdFunding",
    project_date: "2024-09-03T17:00:00Z",
  },
  {
    name: "Quzi[Quora-Inspired]",
    description:
      "Quzi simplifies knowledge exchange users register, explore questions, contribute answers fostering a dynamic community. It offers a seamless and responsive experience for both desktop and mobile users.With user interactivity and authentication.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: quora_project,
    source_code_link: "https://github.com/G0kulC/Quora-Clone",
    project_date: "2023-07-23T17:00:00Z",
  },
  {
    name: "Blog App",
    description:
      "Web application that allows users to create, read, update, and delete blog posts. It also includes features such as user authentication, comment posting, and user profile management.With user interactivity and authentication.",
    tags: [
      {
        name: "django",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "JQuery",
        color: "pink-text-gradient",
      },
    ],
    image: blog_web,
    project_date: "2023-04-23T17:00:00Z",
  },
];

const socialLinks = [
  {
    username: "gokul_dev",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/gokul-dev",
    image: linkedin,
  },
  {
    username: "Gokul C",
    platform: "Github",
    url: "https://github.com/G0kulC",
    image: github_icon,
  },
  {
    username: "gggokul865@gmail.com",
    platform: "Email",
    url: "mailto:gggokul865@gmail.com",
    image: gmail,
  },
  {
    username: "dev._gokul",
    platform: "Instagram",
    url: "https://www.instagram.com/dev._gokul/",
    image: instagram,
  },
];

export {
  awards,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialLinks,
  personalDetails,
};
