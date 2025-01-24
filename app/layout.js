import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BlogMania",
  description: "A modern blog and application platform built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {/* Main Content */}
        <main className="min-h-screen bg-gray-100">{children}</main>

        {/* Footer
        <footer className="bg-gray-800 text-white py-4">
          <div className="max-w-7xl mx-auto text-center">
            <p>
              © {new Date().getFullYear()} YourAppName. All rights reserved.
            </p>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
