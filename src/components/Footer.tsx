const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Threads", href: "#" },
];

export default function Footer() {
  return (
    <footer className="px-8 md:px-12 py-16 text-center">
      <div className="mb-6">
        <span className="font-serif text-sm tracking-[0.25em] uppercase text-text">
          Celsius Art
        </span>
      </div>
      <div className="flex justify-center gap-8 mb-8">
        {socialLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-[11px] tracking-[0.15em] uppercase text-text-tertiary hover:text-text transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </div>
      <div className="w-12 h-px bg-border mx-auto mb-6" />
      <span className="text-[10px] tracking-[0.1em] text-text-tertiary">
        © 2025 Celsius Art
      </span>
    </footer>
  );
}
