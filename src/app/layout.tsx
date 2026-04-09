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
  title: "Bishwajit Garai | Backend & AI Systems Architect",
  description: "Digital Command Center of Bishwajit Garai - Architecting scalable APIs and autonomous AI pipelines.",
  keywords: ["Backend Developer", "GenAI Architect", "RAG Systems", "Next.js", "FastAPI", "Python Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#00FF9D] selection:bg-[#00FF9D] selection:text-black">
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div className="scanline animate-scanline"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
