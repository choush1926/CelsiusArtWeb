import Image from "next/image";

const series = [
  {
    label: "色鉛筆",
    en: "Colored Pencil",
    description: "細膩筆觸下的毛髮與光影",
    src: "/works/colored-pencil/20250214_161130.jpg",
    href: "#works",
  },
  {
    label: "羊毛氈",
    en: "Wool Felt",
    description: "立體可觸的柔軟質地",
    src: "/works/wool-felt/20221112_143750.jpg",
    href: "#works",
  },
  {
    label: "油畫",
    en: "Oil Painting",
    description: "時間沉澱的色層與筆觸",
    src: "/works/oil-painting/20221121_123839.jpg",
    href: "#works",
  },
];

export default function SeriesGrid() {
  return (
    <section className="px-8 md:px-12 py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-text-tertiary mb-4">
            Collections
          </p>
          <h2 className="font-serif text-3xl md:text-[40px] font-light leading-[1.25]">
            三種媒材，三種凝視
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {series.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="group relative aspect-[3/4] overflow-hidden bg-bg cursor-pointer"
            >
              <Image
                src={s.src}
                alt={s.label}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover artwork-warm transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* 漸層暗化，文字疊在底部 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              {/* Label */}
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="text-[10px] tracking-[0.25em] uppercase text-white/70 mb-3">
                  {s.en}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">
                  {s.label}
                </h3>
                <p className="text-[12px] leading-[1.7] text-white/75 mb-5">
                  {s.description}
                </p>
                <span className="inline-block text-[10px] tracking-[0.25em] uppercase border-b border-white/60 pb-0.5 group-hover:border-white transition-colors duration-300">
                  探索系列
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
