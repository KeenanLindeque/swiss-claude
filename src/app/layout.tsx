import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swiss Hospitality — Independent Quality Assessment",
  description:
    "Swiss Hospitality Company delivers independent quality assessment, experience auditing, recognition, and hospitality intelligence for hotels and operators worldwide.",
  keywords: [
    "hospitality",
    "quality assessment",
    "mystery guest",
    "hotel audit",
    "Swiss hospitality",
    "service excellence",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg-dark text-snow">
        {children}
      </body>
    </html>
  );
}
