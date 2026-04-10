"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "作品", href: "#works" },
  { label: "關於", href: "#about" },
  { label: "課程", href: "#courses" },
  { label: "聯絡", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-6 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <Link
        href="/"
        className="font-serif text-xl font-light tracking-[0.15em] text-text"
      >
        SAM · 林山姆
      </Link>

      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="text-xs tracking-[0.12em] uppercase text-text-secondary hover:text-text transition-colors duration-300"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
