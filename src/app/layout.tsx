"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen">
        {/* Navigation */}
        <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-cyan-400 transform rotate-45"></div>
            <Link
              href="/"
              className="text-xl font-semibold hover:text-cyan-400 transition-colors"
            >
              Ayo Lawal
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActive("/") ? "text-cyan-400" : "hover:text-cyan-400"
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`transition-colors ${
                isActive("/projects") ? "text-cyan-400" : "hover:text-cyan-400"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${
                isActive("/about") ? "text-cyan-400" : "hover:text-cyan-400"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`transition-colors ${
                isActive("/contact") ? "text-cyan-400" : "hover:text-cyan-400"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/taofiklawal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/princebounce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </nav>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="px-6 py-8 bg-gray-800 text-center text-gray-400 text-sm border-t border-gray-700">
          <div className="max-w-6xl mx-auto">
            <p>© 2024 Ayo Lawal. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
