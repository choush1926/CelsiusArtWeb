const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Threads", href: "#" },
  { label: "聯絡合作", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-8 md:px-12 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-tertiary">
      <span>© 2025 Sam · 林山姆</span>
      <div className="flex gap-8">
        {socialLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="hover:text-text transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
