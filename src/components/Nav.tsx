"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const leftLinks = [
  { label: "作品", href: "#works" },
  { label: "關於", href: "#about" },
];

const rightLinks = [
  { label: "課程", href: "#courses" },
  { label: "聯絡", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="px-8 md:px-12 flex items-center justify-between md:justify-center relative">
        {/* Left links - desktop */}
        <ul className="hidden md:flex gap-10 list-none absolute left-12">
          {leftLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[11px] tracking-[0.2em] uppercase text-text-secondary hover:text-text transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Center logo */}
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.25em] uppercase text-text"
        >
          Celsius Art
        </Link>

        {/* Right links - desktop */}
        <ul className="hidden md:flex gap-10 list-none absolute right-12">
          {rightLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[11px] tracking-[0.2em] uppercase text-text-secondary hover:text-text transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden absolute right-8 flex flex-col gap-1.5 cursor-pointer"
          aria-label="選單"
        >
          <span className={`block w-5 h-px bg-text transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-text transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-t border-border mt-4">
          <ul className="flex flex-col items-center gap-6 py-8 list-none">
            {allLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[12px] tracking-[0.2em] uppercase text-text-secondary hover:text-text transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
