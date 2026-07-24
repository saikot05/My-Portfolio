# 🚀 Developer Portfolio | Md Saikot Islam

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/cloud/atlas)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> A modern, high-performance, glassmorphic developer portfolio website built with Next.js 16 App Router, React 19, Mongoose, MongoDB Atlas, and Tailwind CSS. Features dynamic project loading, automatic image link resolution, interactive skill rings, dark/light theme switching, and real email form delivery.

🌐 **Live Demo:** [https://saikot-portfolio.vercel.app](https://saikot-portfolio.vercel.app)

---

## 🌟 Key Highlights & Features

- **⚡ Next.js 16 App Router & Serverless DB Pooling**: Built with `dbConnect.js` connection caching for serverless execution and instant page load times.
- **📂 100% Dynamic MongoDB Atlas Integration**: Fetches live projects directly from MongoDB Atlas (`portfolio_db` -> `projects`), with dynamic category filters, search input matching, key metrics chips, and expandable glassmorphic modals.
- **🖼️ Automatic ImgBB Link Resolver**: Integrated `imageResolver.js` automatically extracts raw `.png`/`.jpg` direct URLs from OpenGraph metadata on ImgBB page links.
- **🖼️ Edge-to-Edge Full-Width Image Cards**: Cards crop out Shots.so inner canvas padding cleanly with `scale-110` hover zoom effects.
- **📄 Instant Resume Downloading**: Direct static serving of `public/resume.pdf` with client-side fallback link handling for seamless 1-click downloads.
- **📊 Graphical Interactive Skills Matrix**: 6 resume-aligned categories featuring animated circular SVG radial progress meters.
- **📬 Real Web3Forms Contact Form**: Form validation, dynamic loading button state, auto-reset, and email alerts via Web3Forms API.
- **🌙 Dark & Light Theme System**: Integrated `next-themes` provider supporting system preferences with smooth class-based transitions.
- **🚫 Custom 404 & Global Loading UI**: Custom 404 Not Found page (`src/app/not-found.js`) and viewport loader (`src/app/loading.js`).

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework & Core** | Next.js 16.2.6 (App Router), React 19.2.4 |
| **Database & ODM** | MongoDB Atlas, Mongoose 8.1.0 |
| **Styling & Components** | Tailwind CSS v4, HeroUI, DaisyUI, Glassmorphic CSS Utilities |
| **Animations** | Framer Motion 12.38.0 |
| **Icons** | React Icons (FontAwesome / SimpleIcons), Lucide React |
| **Email API** | Web3Forms REST API |
| **Theme Management** | next-themes 0.4.6 |

---

## 📁 Project Structure

```text
c:\Programming Hero\Projects\My Portfolio\
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── projects/
│   │   │       └── route.js              # GET API route for MongoDB Atlas projects
│   │   ├── projects/
│   │   │   └── [id]/
│   │   │       ├── page.js               # Dynamic server page querying MongoDB Atlas
│   │   │       └── ProjectDetailClient.js# Client component for project detail views
│   │   ├── layout.js                     # Root layout with fonts, OG metadata & SEO
│   │   ├── page.js                       # Main portfolio homepage
│   │   ├── not-found.js                  # Custom 404 page
│   │   └── loading.js                    # Global App Router viewport loader
│   ├── components/
│   │   ├── Navbar.js                     # Navigation bar with theme toggle & mobile drawer
│   │   ├── Hero.js                       # Hero section with typewriter & resume download
│   │   ├── About.js                      # About me story & Hobbies card grid
│   │   ├── Skills.js                     # Categorized skill cards with animated SVG rings
│   │   ├── Education.js                  # Academic background timeline
│   │   ├── Experience.js                 # Experience timeline
│   │   ├── Projects.js                   # Dynamic Projects grid with live search & modal
│   │   ├── ProjectsSkeleton.js           # Shimmer glassmorphic skeleton loader
│   │   ├── Contact.js                    # Web3Forms contact form & status feedback UI
│   │   └── Footer.js                     # Footer with social links hub
│   ├── lib/
│   │   ├── dbConnect.js                  # Serverless Mongoose connection pool
│   │   └── imageResolver.js              # ImgBB direct link OpenGraph extractor
│   └── models/
│       └── Project.js                    # Mongoose Project Schema Model
├── public/                               # Static resume PDF and profile images
├── package.json                          # Project dependencies
└── README.md                             # Repository documentation
```

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) v18.0.0 or higher
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) Cluster

### 2. Environment Setup
Create a `.env` file in the root directory:

```env
CLIENT_URL=http://localhost:3000
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxx.mongodb.net/portfolio_db?retryWrites=true&w=majority
```

### 3. Installation

```bash
# Clone repository
git clone https://github.com/saikot05/My-Portfolio.git
cd My-Portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 👨‍💻 Author Information

**Md Saikot Islam**  
*CSE Undergraduate at Rajshahi University of Engineering & Technology (RUET)*  
*Full Stack Web Developer (MERN & Next.js)*

- **Email:** saikotislam08@gmail.com
- **Phone / WhatsApp:** +880 1733176698
- **GitHub:** [@saikot05](https://github.com/saikot05)
- **LinkedIn:** [Saikot Islam](https://www.linkedin.com/in/saikot-islam49/)
- **Location:** Rajshahi, Bangladesh

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
