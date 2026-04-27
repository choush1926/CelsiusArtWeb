"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type SubItem = { label: string; href: string };
type NavItem = { label: string; href: string; subItems?: SubItem[] };

const leftLinks: NavItem[] = [
  {
    label: "作品",
    href: "#works",
    subItems: [
      { label: "色鉛筆", href: "#works" },
      { label: "羊毛氈", href: "#works" },
      { label: "油畫", href: "#works" },
      { label: "全部作品", href: "#works" },
    ],
  },
  {
    label: "故事",
    href: "#about",
    subItems: [
      { label: "關於 Celsius", href: "#about" },
      { label: "創作理念", href: "#about" },
      { label: "工作室", href: "#about" },
    ],
  },
];

const rightLinks: NavItem[] = [
  {
    label: "課程",
    href: "#courses",
    subItems: [
      { label: "一日體驗", href: "#courses" },
      { label: "系列課程", href: "#courses" },
      { label: "客製預約", href: "#courses" },
    ],
  },
  { label: "聯絡", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const allLinks = [...leftLinks, ...rightLinks];

  const renderLink = (item: NavItem) => (
    <li
      key={item.label}
      onMouseEnter={() => item.subItems && setHoveredItem(item.label)}
      onMouseLeave={() => setHoveredItem(null)}
      className="relative"
    >
      <a
        href={item.href}
        className="text-[11px] tracking-[0.2em] uppercase text-text-secondary hover:text-text transition-colors duration-300"
      >
        {item.label}
      </a>
    </li>
  );

  const activeMega = leftLinks.concat(rightLinks).find((i) => i.label === hoveredItem);

  return (
    <nav
      onMouseLeave={() => setHoveredItem(null)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || hoveredItem
          ? "bg-bg/95 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="px-8 md:px-12 flex items-center justify-between md:justify-center relative">
        {/* Left links - desktop */}
        <ul className="hidden md:flex gap-10 list-none absolute left-12">
          {leftLinks.map(renderLink)}
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
          {rightLinks.map(renderLink)}
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

      {/* Mega menu (desktop) */}
      {activeMega?.subItems && (
        <div
          onMouseEnter={() => setHoveredItem(activeMega.label)}
          className="hidden md:block absolute left-0 right-0 top-full bg-bg/98 backdrop-blur-md border-b border-border"
        >
          <div className="max-w-5xl mx-auto px-12 py-10 flex justify-center gap-16">
            {activeMega.subItems.map((sub) => (
              <a
                key={sub.label}
                href={sub.href}
                onClick={() => setHoveredItem(null)}
                className="text-[12px] tracking-[0.18em] uppercase text-text-secondary hover:text-text transition-colors duration-300"
              >
                {sub.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-t border-border mt-4 max-h-[80vh] overflow-y-auto">
          <ul className="flex flex-col items-stretch py-6 list-none">
            {allLinks.map((item) => (
              <li key={item.label} className="px-8 py-3 border-b border-border last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[12px] tracking-[0.2em] uppercase text-text font-medium block mb-2"
                >
                  {item.label}
                </a>
                {item.subItems && (
                  <ul className="flex flex-col gap-2 list-none pl-2">
                    {item.subItems.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          onClick={() => setMenuOpen(false)}
                          className="text-[11px] tracking-[0.15em] uppercase text-text-tertiary hover:text-text transition-colors duration-300"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
