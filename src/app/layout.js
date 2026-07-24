import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: {
    default: "Md Saikot Islam | Full Stack Web Developer & CSE Student at RUET",
    template: "%s | Md Saikot Islam",
  },
  description:
    "Portfolio of Md Saikot Islam — Full Stack Web Developer and CSE Undergraduate at RUET, Bangladesh. Specializing in Next.js 16, React 19, Node.js, Express, MongoDB Atlas, and Competitive Programming.",
  keywords: [
    "Md Saikot Islam",
    "Md Saikot Islam Portfolio",
    "Full Stack Developer Bangladesh",
    "RUET CSE Developer",
    "Next.js 16 Developer",
    "React 19 Developer",
    "MERN Stack Engineer",
    "Codeforces Saikot",
    "LeetCode Saikot",
    "Rajshahi Software Engineer",
  ],
  authors: [{ name: "Md Saikot Islam", url: "https://saikot-portfolio.vercel.app" }],
  creator: "Md Saikot Islam",
  publisher: "Md Saikot Islam",
  metadataBase: new URL("https://saikot-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Md Saikot Islam — Full Stack Web Developer & CSE Student at RUET",
    description:
      "Explore the modern web portfolio of Md Saikot Islam — featuring 5+ live full-stack applications, system architecture visualizers, interactive CLI terminal, and algorithm metrics.",
    url: "https://saikot-portfolio.vercel.app",
    siteName: "Md Saikot Islam Portfolio",
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Md Saikot Islam - Full Stack Web Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Saikot Islam | Full Stack Web Developer & CSE Student at RUET",
    description:
      "Explore full-stack web projects, MERN engineering, and competitive programming metrics of Md Saikot Islam.",
    creator: "@saikot05",
    images: ["/images/profile.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Md Saikot Islam",
  "jobTitle": "Full Stack Web Developer",
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Rajshahi University of Engineering & Technology (RUET)",
    "alternateName": "RUET"
  },
  "url": "https://saikot-portfolio.vercel.app",
  "sameAs": [
    "https://github.com/saikot05",
    "https://www.linkedin.com/in/saikot-islam49/",
    "https://codeforces.com/profile/saikot_05",
    "https://www.codechef.com/users/saikot_05",
    "https://leetcode.com/u/saikot_049/",
    "https://x.com/saikot05",
    "https://www.facebook.com/saikot.islam.1466"
  ],
  "knowsAbout": [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "Competitive Programming",
    "C++",
    "JavaScript",
    "TypeScript"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPersonSchema) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}