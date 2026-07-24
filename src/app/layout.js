import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: {
    default: "Md Saikot Islam | Full Stack Developer Portfolio",
    template: "%s | Md Saikot Islam",
  },
  description:
    "Portfolio of Md Saikot Islam — a passionate CSE student at RUET and Full Stack Developer from Bangladesh. Explore full stack web projects, technical skills, and software engineering experience.",
  keywords: [
    "Md Saikot Islam",
    "Md Saikot Islam Portfolio",
    "Full Stack Developer",
    "Web Developer Bangladesh",
    "RUET CSE",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Tailwind CSS",
    "JavaScript Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Md Saikot Islam", url: "https://saikot-portfolio.vercel.app" }],
  creator: "Md Saikot Islam",
  publisher: "Md Saikot Islam",
  metadataBase: new URL("https://saikot-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Md Saikot Islam | Full Stack Developer Portfolio",
    description:
      "Explore the modern web portfolio of Md Saikot Islam — featuring full-stack applications, interactive UI components, algorithms, and software development experience.",
    url: "https://saikot-portfolio.vercel.app",
    siteName: "Md Saikot Islam Portfolio",
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Md Saikot Islam - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Saikot Islam | Full Stack Developer Portfolio",
    description:
      "Explore full stack web projects, frontend engineering skills, and technical experience of Md Saikot Islam.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}