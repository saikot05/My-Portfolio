import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
    title: "Md Saikot Islam | Aspiring Full Stack Developer",
    description:
        "Portfolio of Md Saikot Islam — a passionate CSE student and aspiring Full Stack Developer from Bangladesh. Explore projects, skills, and experience in web development.",
    keywords: [
        "Md Saikot Islam",
        "portfolio",
        "web developer",
        "full stack developer",
        "React",
        "Next.js",
        "Bangladesh",
    ],
    authors: [{ name: "Md Saikot Islam" }],
    openGraph: {
        title: "Md Saikot Islam | Aspiring Full Stack Developer",
        description:
            "Explore the portfolio of Md Saikot Islam — projects, skills, and experience in modern web development.",
        type: "website",
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