import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
      {/* Background — 全螢幕作品圖 */}
      <div className="absolute inset-0">
        <Image
          src="/works/oil-painting/20230126_144649.jpg"
          alt="雪夜狐狸 — 油畫"
          fill
          priority
          sizes="100vw"
          className="object-cover artwork-warm"
        />
        {/* 漸層暗化，下方深、上方透 — 讓文字可讀 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/30" />
      </div>

      {/* Content — 左下對齊，呼吸感 */}
      <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 max-w-3xl">
        <p className="text-[11px] tracking-[0.3em] uppercase text-white/70 mb-6 animate-fade-in-up">
          Celsius Art — Spring Collection
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.1] text-white mb-8 animate-fade-in-up animation-delay-200">
          物質的<em className="italic">詩意</em>
        </h1>
        <p className="text-[13px] md:text-base leading-[2] text-white/85 max-w-md mb-10 animate-fade-in-up animation-delay-400">
          橫跨油畫、裝置、陶藝與羊毛氈
          <br />
          關注物質與空間之間的臨界狀態
        </p>
        <div className="flex gap-6 animate-fade-in-up animation-delay-600">
          <a
            href="#works"
            className="inline-block text-[11px] tracking-[0.25em] uppercase border-b border-white/70 pb-1 text-white hover:border-white transition-colors duration-300"
          >
            探索作品
          </a>
          <a
            href="#courses"
            className="inline-block text-[11px] tracking-[0.25em] uppercase border-b border-white/40 pb-1 text-white/80 hover:text-white hover:border-white transition-colors duration-300"
          >
            預約課程
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/60" />
      </div>
    </section>
  );
}
