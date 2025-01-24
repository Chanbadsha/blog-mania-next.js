import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

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
        {/* Navigation Bar */}
        <header className="bg-gray-800">
          <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto text-white">
            {/* Header Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="YourAppName Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-2 text-lg font-bold">BlogMania</span>
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex space-x-8">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:underline">
                  Register
                </Link>
              </li>
            </ul>

            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">
              Get Started
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-screen bg-gray-100">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4">
          <div className="max-w-7xl mx-auto text-center">
            <p>
              © {new Date().getFullYear()} YourAppName. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
