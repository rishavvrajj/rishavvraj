import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rishav raj",
  description: "I design and code until problems make sense. From voice AI platforms to full-stack apps, I solve real problems for people—not just ship features. Early-stage founder thriving in fast-moving environments where the roadmap shifts and feedback is immediate.",
  keywords: [
    "Rishav Raj",
    "startup founder",
    "voice AI",
    "full-stack developer",
    "product designer",
    "React",
    "Next.js",
    "AI engineer",
    "early-stage founder"
  ],
  authors: [{ name: "Rishav Raj" }],
  category: "Technology",
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center justify-center">{children}</body>
    </html>
  );
}