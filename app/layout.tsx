import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),
  alternates: {
    canonical: "https://your-domain.vercel.app",
  },

  title: {
    default: "Jamshidbek Shokirov",
    template: "%s | Jamshidbek Shokirov",
  },

  description:
    "AI & Machine Learning Developer specializing in Python, FastAPI, PyTorch, Scikit-learn, Data Science and Deep Learning.",

  keywords: [
    "Jamshidbek Shokirov",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Python",
    "FastAPI",
    "PyTorch",
    "Scikit-learn",
    "Data Science",
    "Portfolio",
    "Next.js",
  ],

  authors: [
    {
      name: "Jamshidbek Shokirov",
    },
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Jamshidbek Shokirov",

    title: "Jamshidbek Shokirov | AI & Machine Learning Developer",

    description:
      "Portfolio of Jamshidbek Shokirov showcasing AI, Machine Learning, Deep Learning and Data Science projects.",

    url: "https://your-domain.vercel.app",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jamshidbek Shokirov",
    description:
      "AI & Machine Learning Developer Portfolio",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}