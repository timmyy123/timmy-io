import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Viewport } from 'next';
import { Analytics } from "@vercel/analytics/react"
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timmy Qian | Full Stack Developer",
  description: "Full Stack Developer specializing in web and mobile applications. Proficient in React, Next.js, React Native, and modern JavaScript frameworks.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js", "Mobile Developer", "Web Developer", "Timmy Qian"],
  authors: [{ name: "Timmy Qian" }],
  openGraph: {
    title: "Timmy Qian | Full Stack Developer",
    description: "Full Stack Developer specializing in web and mobile applications",
    url: "https://timmy-io.vercel.app",
    siteName: "Timmy Qian Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
