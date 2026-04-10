const works = [
  {
    tag: "裝置藝術",
    title: "本無風",
    meta: "互動裝置 · 2024",
    bg: "#d4cec8",
    svg: (
      <>
        <rect x="60" y="60" width="180" height="180" fill="none" stroke="#a09890" strokeWidth="0.6" />
        <rect x="80" y="80" width="140" height="140" fill="#b8b0a8" opacity="0.5" />
        <line x1="60" y1="150" x2="240" y2="150" stroke="#a09890" strokeWidth="0.5" />
        <line x1="150" y1="60" x2="150" y2="240" stroke="#a09890" strokeWidth="0.5" />
        <circle cx="150" cy="150" r="40" fill="#8c847c" opacity="0.4" />
      </>
    ),
  },
  {
    tag: "油畫",
    title: "浮游之二",
    meta: "100号 油彩 · 2024",
    bg: "#e2d9d0",
    svg: (
      <>
        <path d="M50,250 Q100,80 150,200 Q200,80 250,250" fill="none" stroke="#9a8f85" strokeWidth="1.5" />
        <path d="M70,250 Q120,100 150,210 Q180,100 230,250" fill="none" stroke="#9a8f85" strokeWidth="0.8" opacity="0.5" />
        <circle cx="150" cy="130" r="30" fill="#c4b8ad" opacity="0.6" />
        <ellipse cx="150" cy="260" rx="60" ry="10" fill="#b0a89e" opacity="0.3" />
      </>
    ),
  },
  {
    tag: "陶藝",
    title: "臨界距離",
    meta: "陶土、鋁線 · 2023",
    bg: "#cdc5be",
    svg: (
      <>
        <path d="M80,220 Q150,60 220,220" fill="#b5ada5" opacity="0.7" />
        <path d="M100,220 Q150,90 200,220" fill="#9e9189" opacity="0.5" />
        <line x1="80" y1="220" x2="220" y2="220" stroke="#8c847c" strokeWidth="0.8" />
        <circle cx="150" cy="140" r="8" fill="#7a7268" opacity="0.8" />
      </>
    ),
  },
  {
    tag: "羊毛氈",
    title: "觸感記憶",
    meta: "羊毛氈 · 2024",
    bg: "#e8e0d8",
    svg: (
      <>
        <circle cx="150" cy="150" r="80" fill="none" stroke="#a8a098" strokeWidth="0.6" />
        <path d="M90,150 Q150,90 210,150 Q150,210 90,150" fill="#c0b8b0" opacity="0.6" />
        <circle cx="150" cy="150" r="20" fill="#9e9890" opacity="0.8" />
      </>
    ),
  },
  {
    tag: "影像",
    title: "九宮格",
    meta: "錄像裝置 · 2024",
    bg: "#d8d2ca",
    svg: (
      <>
        <rect x="50" y="100" width="200" height="120" fill="none" stroke="#a8a098" strokeWidth="0.6" />
        <line x1="50" y1="130" x2="250" y2="130" stroke="#a8a098" strokeWidth="0.4" />
        <line x1="50" y1="160" x2="250" y2="160" stroke="#a8a098" strokeWidth="0.4" />
        <line x1="50" y1="190" x2="250" y2="190" stroke="#a8a098" strokeWidth="0.4" />
        <line x1="120" y1="100" x2="120" y2="220" stroke="#a8a098" strokeWidth="0.4" />
        <line x1="180" y1="100" x2="180" y2="220" stroke="#a8a098" strokeWidth="0.4" />
        <rect x="128" y="108" width="44" height="44" fill="#9e9890" opacity="0.5" />
      </>
    ),
  },
  {
    tag: "裝置藝術",
    title: "臨界距離 II",
    meta: "感測器、鋁線 · 2023",
    bg: "#ddd6ce",
    svg: (
      <>
        <path d="M50,150 C80,100 120,200 150,150 C180,100 220,200 250,150" fill="none" stroke="#a0988e" strokeWidth="1.2" />
        <path d="M50,170 C80,120 120,220 150,170 C180,120 220,220 250,170" fill="none" stroke="#a0988e" strokeWidth="0.6" opacity="0.5" />
        <path d="M50,130 C80,80 120,180 150,130 C180,80 220,180 250,130" fill="none" stroke="#a0988e" strokeWidth="0.6" opacity="0.5" />
      </>
    ),
  },
];

export default function Works() {
  return (
    <section id="works" className="px-8 md:px-12 py-16 border-t border-border">
      {/* Section Header */}
      <div className="flex justify-between items-baseline mb-10">
        <h2 className="font-serif text-[28px] font-light">近期作品</h2>
        <a
          href="#"
          className="text-[11px] tracking-[0.12em] uppercase text-text-secondary border-b border-border-secondary pb-px hover:text-text transition-colors duration-300 cursor-pointer"
        >
          全部作品 →
        </a>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5px] bg-border">
        {works.map((work) => (
          <div
            key={work.title}
            className="bg-bg aspect-square relative overflow-hidden cursor-pointer group"
          >
            <svg
              viewBox="0 0 300 300"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full block"
            >
              <rect width="300" height="300" fill={work.bg} />
              {work.svg}
            </svg>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-92 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="inline-block self-start text-[10px] tracking-[0.1em] uppercase border border-border-secondary px-2 py-0.5 rounded-sm text-text-secondary mb-1.5">
                {work.tag}
              </span>
              <div className="font-serif text-base font-light mb-1">
                {work.title}
              </div>
              <div className="text-[11px] text-text-secondary">{work.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
