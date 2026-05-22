const projects = [{
    id: "drivefleet",
    title: "DriveFleet Rental Club",
    shortDesc: "A premium car rental platform with seamless booking, inventory management, and user authentication.",
    description: "DriveFleet is a comprehensive car rental solution designed for ease of use and premium experience. Users can explore a variety of vehicles, manage bookings, and list their own cars. The platform includes a robust backend for managing inventory, user roles, and rental status.",
    image: "https://i.ibb.co.com/JjVKXjPy/Screenshot-2026-05-22-203110.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    liveLink: "https://drivefleet-client-iota.vercel.app/",
    githubLink: "https://github.com/saikot05/drivefleet-server",
    challenges: [
        "Integrating real-time booking availability across the user and admin views.",
        "Designing a secure authentication system that handles both renters and car owners.",
        "Managing complex search and filtering logic for vehicle categories.",
    ],
    improvements: [
        "Implement real-time payment processing using Stripe or SSLCommerz.",
        "Add a review and rating system for rented vehicles.",
        "Integrate interactive maps for pickup and drop-off locations.",
        "Develop a dedicated admin panel for detailed analytical insights.",
    ],
},
{
    id: "suncart-ecommerce",
    title: "SunCart E-Commerce",
    shortDesc: "A modern, summer-themed e-commerce platform with authentication, cart, and profile management.",
    description: "SunCart is a complete summer-themed e-commerce web application. It features a robust authentication system using BetterAuth (Email/Password & Google OAuth), a product browsing interface, and a protected checkout flow. Built with Next.js, it provides a seamless shopping experience for seasonal items like accessories and apparel.",
    image: "https://i.ibb.co.com/mrcdYxTX/Screenshot-2026-05-12-155508-Copy.png",
    techStack: ["Next.js", "React", "BetterAuth", "MongoDB", "Tailwind CSS", "DaisyUI"],
    liveLink: "https://sun-cart-8l8y.vercel.app/",
    githubLink: "https://github.com/saikot05/sun-cart",
    challenges: [
        "Implementing secure authentication with both email and Google OAuth using BetterAuth.",
        "Creating protected routes for product details that handle post-login redirects effectively.",
        "Managing complex state across the application for the shopping cart and user profile updates.",
    ],
    improvements: [
        "Integrate a payment gateway (e.g., Stripe) to handle real transactions.",
        "Implement a full-featured admin dashboard for product and order management.",
        "Add advanced search and filtering functionality based on category and price range.",
        "Incorporate user reviews and a rating system for products.",
    ],
},
];

export default projects;