import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from "next";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "NPCN - Connecting World",
  description: "NPCN provides premium connectivity solutions and services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.variable} bg-white text-secondary-800 dark:bg-secondary-900 dark:text-white overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
