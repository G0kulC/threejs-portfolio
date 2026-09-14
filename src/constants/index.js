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
  employee_of_the_year,
  retail_sales_forecasting,
  health_diet_ai,
  jobai_agent,
  fruit_freshness_classifier,
  ai_call_agent,
  ai_qa_agent,
  docscope_ai,
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
  current_company: "KG Invicta Services (KGiS)",
  description:
    "I’m an AI Engineer and Data Scientist focused on building intelligent systems that solve real-world problems and automate manual work. My experience includes Generative AI, RAG, Agentic AI, AI Automation, Machine Learning, Python, FastAPI, and Django, along with cloud and database technologies such as AWS, Docker, PostgreSQL, and MongoDB. I enjoy building end-to-end solutions — from AI models and LLM integrations to APIs, automation workflows, and production deployment.",
  email: "gggokul865@gmail.com",
  linkedin: "https://www.linkedin.com/in/gokul-dev/",
  github: "https://github.com/G0kulC",
  github_username: "G0kulC",
  resume_link: "https://drive.usercontent.google.com/u/0/uc?id=1jyE77t3ZGrazCT-URS7vfr_ID6xjRZ_k&export=download", //remove params Ex: ?view=preview and last /
};

const services = [
  {
    title: "Data Scientist",
    icon: software,
  },
  {
    title: "AI Engineer",
    icon: python,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "GenAI Specialist",
    icon: web,
  },
];

const awards = [
  {
    title: "Employee of the Year",
    company_name: "Dotworld Technologies Pvt Ltd",
    location: "Coimbatore",
    type: "ANNUAL EXCELLENCE",
    summary:
      "Honoured as Employee of the Year 2025 at Dotworld Technologies for mastering new AI tools, accelerating delivery timelines, and engineering high-impact production solutions.",
    points: [
      "Honoured as Employee of the Year 2025 at Dotworld Technologies Pvt Ltd.",
      "Recognized for mastering new AI tools, accelerating delivery timelines, and transforming complex obstacles into scalable production systems.",
      "Demonstrated consistent discipline, high-impact technical execution, and dedication.",
      "Celebrated during Foundation Day Awards 2025.",
    ],
    year_of_award: "2025",
    image: employee_of_the_year,
    post_link:
      "https://www.linkedin.com/posts/gokul-dev_dotworld-employeeoftheyear-software-activity-7398707561878843392-IXIG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtv5X8BNwu98s9p-aHqB31di90C6E_jikc",
  },
  {
    title: "Best Team of the Year",
    company_name: "Dotworld Technologies",
    location: "Coimbatore",
    type: "TEAM AWARD",
    summary:
      "Recognized as Best Team of the Year 2024 for relentless pursuit of engineering excellence, collaboration, and impactful problem-solving alongside Ramesh Baskaran.",
    points: [
      "Awarded 'Best Team of the Year' for outstanding collaboration, technical synergy, and dedication.",
      "Partnered with core teammates including Ramesh Baskaran to deliver mission-critical milestones.",
      "Celebrates the collective efforts, problem-solving sessions, and shared technical vision of a high-performing engineering group.",
    ],
    year_of_award: "2024",
    image: best_teamof_year,
    post_link:
      "https://www.linkedin.com/posts/gokul-dev_teamwork-gratitude-success-activity-7262193842446057476-XDBC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtv5X8BNwu98s9p-aHqB31di90C6E_jikc",
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
    title: "Data Scientist",
    company_name: "KG Invicta Services (KGiS)",
    link: "https://www.kinvicta.com/",
    date: "Apr 2026 – Present · Coimbatore",
    current: true,
    points: [
      "Developing AI-powered applications using Python, LLMs, RAG, and Agentic AI.",
      "Building intelligent chatbots with LLM integration, knowledge retrieval, and contextual responses.",
      "Designing AI-driven automation solutions to reduce manual effort and streamline business workflows.",
      "Developing Machine Learning and Deep Learning solutions for real-world applications.",
      "Building end-to-end AI systems by integrating APIs, automation platforms, backend services, AWS, Docker, and MongoDB.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Dotworld Technologies Pvt Ltd",
    icon: dotworld,
    link: "https://dotworld.in/",
    iconBg: "#383E56",
    date: "Aug 2025 – Mar 2026 · Coimbatore",
    points: [
      "Developed scalable backend applications and high-performance REST APIs using Python, FastAPI, Django, and PostgreSQL.",
      "Optimized APIs and backend workflows, improving application responsiveness by 50%.",
      "Developed and supported microservices-based architectures for scalable applications.",
      "Automated WordPress content management through REST APIs, reducing repetitive manual work.",
      "Built automated testing workflows using Selenium and Robot Framework.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Dotworld Technologies Pvt Ltd",
    icon: dotworld,
    link: "https://dotworld.in/",
    iconBg: "#383E56",
    date: "Aug 2023 – Aug 2025 · Coimbatore",
    points: [
      "Developed scalable web applications and backend services using Python, FastAPI, Django, and PostgreSQL.",
      "Designed and optimized RESTful APIs for efficient system integration and data exchange.",
      "Contributed to microservices architecture, backend development, and workflow automation.",
      "Automated content management processes using the WordPress REST API.",
      "Received client and management recognition for automation initiatives that improved operational efficiency.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Accent Techno Soft",
    icon: accenttechnosoft,
    link: "https://www.accenttechnosoft.com/",
    iconBg: "#E6DEDD",
    date: "Jan 2023 – Mar 2023 · Coimbatore",
    points: [
      "Developed full-stack web applications using Python, Django, HTML, CSS, and JavaScript.",
      "Built and integrated REST APIs connecting frontend and backend systems.",
      "Delivered a crowdfunding platform with user authentication and secure payment integration.",
      "Collaborated with cross-functional teams to improve application functionality and deployment.",
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

const productionProjects = [
  {
    name: "AI Call Agent",
    category_number: "01",
    category: "VOICE / CALL AGENTS",
    subtitle: "AGENTIC AI & VOICE AUTOMATION",
    role: "Full Maintainer · End-to-End AI Workflow & Backend",
    company: "KG Invicta Services",
    status: "Active Production",
    description:
      "Real-time AI voice agents for handling dynamic conversations, with configurable personas, knowledge, memory, workflows, and tool/API interactions.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "llms", color: "pink-text-gradient" },
      { name: "real-time voice", color: "green-text-gradient" },
      { name: "rag", color: "orange-text-gradient" },
      { name: "memory", color: "blue-text-gradient" },
      { name: "agents", color: "pink-text-gradient" },
    ],
    image: ai_call_agent,
    project_date: "2025-01-01T10:00:00Z",
  },
  {
    name: "QA Agent",
    category_number: "02",
    category: "AI QA AGENT",
    subtitle: "AGENTIC AI & AUTOMATED QA",
    role: "Full Maintainer · End-to-End AI Workflow & Backend",
    company: "KG Invicta Services",
    status: "Active Production",
    description:
      "An agentic AI system that evaluates conversations, analyzes agent performance, and generates automated quality assessments and insights.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "llms", color: "pink-text-gradient" },
      { name: "agentic ai", color: "green-text-gradient" },
      { name: "evaluation", color: "orange-text-gradient" },
      { name: "analytics", color: "blue-text-gradient" },
    ],
    image: ai_qa_agent,
    project_date: "2025-03-01T10:00:00Z",
  },
  {
    name: "DOCSCOPE",
    category_number: "03",
    category: "DOCUMENT INTELLIGENCE & AI",
    subtitle: "DOCUMENT INTELLIGENCE & AI",
    role: "Full Maintainer · End-to-End AI Workflow & Backend",
    company: "KG Invicta Services",
    status: "Active Production",
    description:
      "An AI document-processing pipeline combining OCR, document classification, layout analysis, extraction, and structured processing.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "ocr", color: "orange-text-gradient" },
      { name: "computer vision", color: "green-text-gradient" },
      { name: "llms", color: "pink-text-gradient" },
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "document ai", color: "green-text-gradient" },
    ],
    image: docscope_ai,
    project_date: "2025-02-01T10:00:00Z",
  },
];

const gitProjects = [
  {
    name: "Retail Sales Forecasting",
    category_number: "04",
    category: "TIME-SERIES & MACHINE LEARNING",
    subtitle: "MACHINE LEARNING & FORECASTING",
    description:
      "End-to-end machine learning pipeline for retail sales forecasting using XGBoost, LSTM, and Optuna hyperparameter tuning. Features time-series analysis, seasonality decomposition, and an interactive dashboard for sales trend visualization.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "xgboost", color: "green-text-gradient" },
      { name: "lstm", color: "pink-text-gradient" },
      { name: "time-series", color: "blue-text-gradient" },
      { name: "pandas", color: "green-text-gradient" },
    ],
    image: retail_sales_forecasting,
    source_code_link: "https://github.com/G0kulC/retail-sales-forecasting",
    project_date: "2025-08-01T10:00:00Z",
  },
  {
    name: "HealthDiet AI",
    category_number: "05",
    category: "GENERATIVE AI & RAG",
    subtitle: "GENERATIVE AI & RAG",
    description:
      "An AI-powered health and diet assistant that provides personalized meal plans, nutritional analysis, and diet recommendations using LLMs and RAG. Integrates calorie tracking, macro breakdown, and real-time AI health coaching.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "llms", color: "pink-text-gradient" },
      { name: "rag", color: "green-text-gradient" },
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "generative ai", color: "pink-text-gradient" },
    ],
    image: health_diet_ai,
    source_code_link: "https://github.com/G0kulC/HealthDietAI",
    project_date: "2025-10-01T10:00:00Z",
  },
  {
    name: "JobAI Agent",
    category_number: "06",
    category: "AGENTIC AI & AUTOMATION",
    subtitle: "AGENTIC AI & AUTOMATION",
    description:
      "An autonomous AI job search agent that automates job discovery, resume tailoring, ATS scoring, and application tracking. Uses LLM-powered resume analysis, job matching algorithms, and an AI interview preparation assistant.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "agentic ai", color: "pink-text-gradient" },
      { name: "llms", color: "green-text-gradient" },
      { name: "automation", color: "blue-text-gradient" },
      { name: "rag", color: "pink-text-gradient" },
    ],
    image: jobai_agent,
    source_code_link: "https://github.com/G0kulC/jobai-agent",
    project_date: "2025-12-01T10:00:00Z",
  },
  {
    name: "Fruit Freshness Classifier",
    category_number: "07",
    category: "COMPUTER VISION & ML",
    subtitle: "COMPUTER VISION & TRANSFER LEARNING",
    description:
      "Automated fruit grading system using Transfer Learning (CNN with ResNet backbone) and K-Nearest Neighbors. Features image preprocessing, model comparison, confidence scoring, and a SQLite-based prediction history for batch inference.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "cnn", color: "orange-text-gradient" },
      { name: "transfer learning", color: "green-text-gradient" },
      { name: "knn", color: "pink-text-gradient" },
      { name: "computer vision", color: "blue-text-gradient" },
    ],
    image: fruit_freshness_classifier,
    source_code_link: "https://github.com/G0kulC/fruit-freshness-classifier-cnn-knn",
    project_date: "2025-06-01T10:00:00Z",
  },
];

const projects = [...productionProjects, ...gitProjects];

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
  productionProjects,
  gitProjects,
  socialLinks,
  personalDetails,
};
