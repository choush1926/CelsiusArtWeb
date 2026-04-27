"use client";

import { useState } from "react";

const columns = [
  {
    title: "作品",
    links: [
      { label: "色鉛筆", href: "#works" },
      { label: "羊毛氈", href: "#works" },
      { label: "油畫", href: "#works" },
      { label: "全部作品", href: "#works" },
    ],
  },
  {
    title: "課程",
    links: [
      { label: "一日體驗", href: "#courses" },
      { label: "系列課程", href: "#courses" },
      { label: "客製預約", href: "#courses" },
    ],
  },
  {
    title: "故事",
    links: [
      { label: "關於 Celsius", href: "#about" },
      { label: "創作理念", href: "#about" },
      { label: "工作室", href: "#about" },
    ],
  },
  {
    title: "聯絡",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Threads", href: "#" },
      { label: "Email", href: "mailto:hello@celsiusart.com" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: 接 newsletter 訂閱 API
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-bg-secondary border-t border-border mt-12">
      <div className="max-w-6xl mx-auto px-8 md:px-12 py-16 md:py-20">
        {/* Top: brand + newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 border-b border-border">
          <div>
            <h3 className="font-serif text-2xl tracking-[0.2em] uppercase text-text mb-4">
              Celsius Art
            </h3>
            <p className="text-[13px] leading-[2] text-text-secondary max-w-md">
              跨媒材藝術創作 — 物質的詩意。<br />
              關注物質與空間之間的臨界狀態。
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-text-tertiary mb-4">
              Newsletter
            </p>
            <p className="text-[13px] leading-[1.8] text-text-secondary mb-5">
              收到新作品、課程開放與展覽訊息。
            </p>
            {submitted ? (
              <p className="text-[12px] text-text-secondary italic">
                已收到，感謝你 ✦
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 border-b border-border-secondary bg-transparent px-1 py-2 text-[13px] outline-none focus:border-text transition-colors"
                />
                <button
                  type="submit"
                  className="text-[10px] tracking-[0.25em] uppercase border-b border-text-secondary pb-2 text-text-secondary hover:text-text hover:border-text transition-colors cursor-pointer"
                >
                  訂閱
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mid: link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[10px] tracking-[0.3em] uppercase text-text-tertiary mb-5">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3 list-none">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[12px] text-text-secondary hover:text-text transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="text-[10px] tracking-[0.15em] text-text-tertiary">
            © 2025 Celsius Art. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] tracking-[0.15em] text-text-tertiary hover:text-text transition-colors">
              隱私權政策
            </a>
            <a href="#" className="text-[10px] tracking-[0.15em] text-text-tertiary hover:text-text transition-colors">
              使用條款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
