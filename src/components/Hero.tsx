export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — 未來放作品照片，目前用優雅的暖色底 */}
      <div className="absolute inset-0 bg-bg-secondary">
        {/* 裝飾性幾何線條，營造藝術感 */}
        <svg
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-30"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="600" cy="400" r="250" fill="none" stroke="#b5aea4" strokeWidth="0.5" />
          <circle cx="600" cy="400" r="180" fill="none" stroke="#b5aea4" strokeWidth="0.3" />
          <circle cx="600" cy="400" r="110" fill="none" stroke="#b5aea4" strokeWidth="0.3" />
          <line x1="0" y1="400" x2="1200" y2="400" stroke="#b5aea4" strokeWidth="0.3" />
          <line x1="600" y1="0" x2="600" y2="800" stroke="#b5aea4" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-2xl">
        <p className="text-[11px] tracking-[0.3em] uppercase text-text-tertiary mb-8 animate-fade-in-up">
          跨媒材藝術創作
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.15] mb-8 animate-fade-in-up animation-delay-200">
          物質的<em className="italic">詩意</em>
        </h1>
        <p className="text-sm md:text-base leading-[2] text-text-secondary max-w-md mx-auto animate-fade-in-up animation-delay-400">
          橫跨油畫、裝置、陶藝與羊毛氈
          <br />
          關注物質與空間之間的臨界狀態
        </p>
        <div className="mt-12 animate-fade-in-up animation-delay-600">
          <a
            href="#works"
            className="inline-block text-[11px] tracking-[0.25em] uppercase border-b border-text-secondary pb-1 text-text-secondary hover:text-text hover:border-text transition-colors duration-300"
          >
            探索作品
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-text-tertiary" />
      </div>
    </section>
  );
}
