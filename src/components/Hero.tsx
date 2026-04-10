export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh]">
      {/* Left: Text */}
      <div className="flex flex-col justify-center px-8 md:px-12 py-20 md:border-r border-border">
        <p className="text-[11px] tracking-[0.2em] uppercase text-text-tertiary mb-6 animate-fade-in-up">
          藝術家 · 教育者 · 創作者
        </p>
        <h1 className="font-serif text-5xl md:text-6xl font-light leading-[1.1] mb-6 animate-fade-in-up animation-delay-200">
          物質
          <br />
          的<em className="italic text-text-secondary">詩意</em>
        </h1>
        <p className="text-sm leading-[1.8] text-text-secondary max-w-[340px] animate-fade-in-up animation-delay-400">
          橫跨油畫、裝置、陶藝與羊毛氈的跨媒材創作。
          <br />
          關注物質與空間之間的臨界狀態。
        </p>
      </div>

      {/* Right: Hero Image Placeholder */}
      <div className="bg-bg-secondary relative overflow-hidden flex items-center justify-center">
        <svg
          viewBox="0 0 500 400"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <rect width="500" height="400" fill="#e8e4de" />
          <circle
            cx="250"
            cy="180"
            r="120"
            fill="none"
            stroke="#b5aea4"
            strokeWidth="0.8"
          />
          <circle
            cx="250"
            cy="180"
            r="90"
            fill="none"
            stroke="#b5aea4"
            strokeWidth="0.5"
          />
          <circle
            cx="250"
            cy="180"
            r="60"
            fill="none"
            stroke="#b5aea4"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="180"
            x2="500"
            y2="180"
            stroke="#b5aea4"
            strokeWidth="0.4"
          />
          <line
            x1="250"
            y1="0"
            x2="250"
            y2="400"
            stroke="#b5aea4"
            strokeWidth="0.4"
          />
          <ellipse
            cx="250"
            cy="280"
            rx="80"
            ry="20"
            fill="#c5bdb5"
            opacity="0.5"
          />
          <path
            d="M200,180 Q250,80 300,180 Q250,280 200,180"
            fill="#9e9189"
            opacity="0.6"
          />
          <text
            x="250"
            y="370"
            textAnchor="middle"
            fontFamily="serif"
            fontSize="11"
            fill="#8c857d"
            letterSpacing="4"
          >
            本無風 · 2024
          </text>
        </svg>
      </div>
    </section>
  );
}
