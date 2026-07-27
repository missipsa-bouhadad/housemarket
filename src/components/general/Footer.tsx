"use client"

import Link from 'next/link';
import Image from "next/image";
import { navLinks } from '../navbar/Navbar';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="flex flex-col max-w-7xl mx-auto items-center justify-between px-6 lg:flex-row">
        {/* icon */}
        <Link
          href={"/"}
          className="relative z-10 h-15 w-22 ml-3 overflow-hidden transition-all duration-300"
        >
          <Image
            src="/images/icon.png"
            alt="Logo"
            fill
            className="object-cover"
          />
        </Link>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-28">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `${item.toLowerCase()}`}
              className="text-primary/90 font-semibold text-sm inline-block bg-white/90"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* copyright */}
        <p className="text-sm text-primary">
          &copy; 2026 House Market
        </p>
      </div>
    </footer>
  );
}
