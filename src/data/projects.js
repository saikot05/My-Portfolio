const projects = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    shortDesc: "A modern, responsive portfolio built with Next.js, Tailwind CSS, and HeroUI.",
    description:
      "My personal portfolio website showcasing my projects, skills, and experience. Originally built with plain HTML/CSS/JS, then rebuilt from scratch using Next.js App Router with Tailwind CSS, DaisyUI, and HeroUI components for a premium, modern look. Features smooth animations, responsive design, and optimized performance.",
    image: "/images/projects/portfolio.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "DaisyUI", "HeroUI", "Framer Motion"],
    liveLink: "#",
    githubLink: "https://github.com/saikot05/My-Portfolio",
    challenges: [
      "Migrating from a static HTML site to a full Next.js application while preserving content and improving the design.",
      "Implementing smooth scroll-triggered animations without impacting page performance.",
      "Creating a fully responsive layout that looks great on all devices from mobile to ultrawide.",
    ],
    improvements: [
      "Add a blog section to share technical articles and learning experiences.",
      "Implement a CMS for easy content updates without code changes.",
      "Add dark/light theme toggle with system preference detection.",
      "Integrate EmailJS or a backend service for the contact form.",
    ],
  },
  {
    id: "suncart-ecommerce",
    title: "SunCart E-Commerce",
    shortDesc: "A full-featured e-commerce platform with authentication, cart, and checkout.",
    description:
      "SunCart is a full-stack e-commerce web application built with Next.js. It features user authentication, product browsing with categories and search, a shopping cart system, and a complete checkout flow. The app uses a modern UI with responsive design and integrates with a backend API for product data and order management.",
    image: "/images/projects/suncart.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB", "Firebase Auth"],
    liveLink: "#",
    githubLink: "#",
    challenges: [
      "Building a secure authentication system with protected routes and session management.",
      "Implementing real-time cart state management across multiple components and pages.",
      "Handling complex product filtering, sorting, and search functionality with good UX.",
    ],
    improvements: [
      "Add payment gateway integration (Stripe/SSLCommerz) for real transactions.",
      "Implement order tracking and delivery status updates.",
      "Add product reviews and rating system.",
      "Build an admin dashboard for inventory and order management.",
    ],
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    shortDesc: "A beautiful weather application with real-time data and forecasts.",
    description:
      "A weather dashboard application that displays current weather conditions and forecasts for any city worldwide. Built with React and styled with a clean, modern UI. Features include city search, current temperature, humidity, wind speed, weather conditions with icons, and a 5-day forecast view. The app fetches real-time data from a weather API.",
    image: "/images/projects/weather.png",
    techStack: ["React", "JavaScript", "CSS3", "OpenWeather API", "Axios"],
    liveLink: "#",
    githubLink: "#",
    challenges: [
      "Handling asynchronous API calls with proper loading and error states.",
      "Designing an intuitive UI that displays complex weather data in an easy-to-read format.",
      "Implementing geolocation to auto-detect the user's city on first visit.",
    ],
    improvements: [
      "Add weather maps with interactive visualization.",
      "Implement weather alerts and notifications for severe conditions.",
      "Add historical weather data comparison charts.",
      "Support multiple saved locations with a favorites system.",
    ],
  },
];

export default projects;
