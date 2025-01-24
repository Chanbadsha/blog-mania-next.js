import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div>
      {/* Navigation Bar */}
      <header className="bg-gray-800">
        <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto text-white">
          {/* Header Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="BlogMania Logo"
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
            {user ? (
              <>
                <li>
                  <Link href="/profile" className="hover:underline">
                    Profile
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/api/auth/register" className="hover:underline">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          {user ? (
            <>
              <LogoutLink>Log out</LogoutLink>
            </>
          ) : (
            <>
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">
                Get Started
              </button>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
