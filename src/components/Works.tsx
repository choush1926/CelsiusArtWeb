"use client";

import Image from "next/image";
import { useState } from "react";

const works = [
  { tag: "油畫", title: "叼草兔子", description: "棕色兔子叼著草莖的寫實油畫，筆觸細膩", src: "/works/oil-painting/20221121_123839.jpg" },
  { tag: "羊毛氈", title: "藍眼貓咪", description: "白色貓咪藍眼粉鼻，灰色條紋點綴", src: "/works/wool-felt/20220426_101631.jpg" },
  { tag: "色鉛筆", title: "異色瞳貓", description: "藍琥珀異色瞳小貓，好奇仰望", src: "/works/colored-pencil/20220809_220746.jpg" },
  { tag: "油畫", title: "雪夜狐狸", description: "橘色狐狸仰望星空的冬夜場景，冷暖色對比", src: "/works/oil-painting/20230126_144649.jpg" },
  { tag: "羊毛氈", title: "花園白貓", description: "藍眼白色長毛貓與粉紅花朵的戶外場景", src: "/works/wool-felt/20220918_123542.jpg" },
  { tag: "色鉛筆", title: "捲毛貴賓", description: "棕色捲毛犬伸舌微笑，玫瑰花裝飾", src: "/works/colored-pencil/20220903_182545.jpg" },
  { tag: "羊毛氈", title: "柴犬散步", description: "橘棕柴犬坐在公園木椅上，舌頭微伸", src: "/works/wool-felt/20220918_125044.jpg" },
  { tag: "色鉛筆", title: "微笑柯基", description: "橘白柯基伸舌微笑，毛髮層次豐富", src: "/works/colored-pencil/20250202_001016.jpg" },
  { tag: "羊毛氈", title: "森林小鹿框", description: "小鹿立體像框，苔蘚與小花環繞", src: "/works/wool-felt/20221016_090103.jpg" },
  { tag: "色鉛筆", title: "下午茶貓咪", description: "長毛貓配玫瑰茶具與馬卡龍，精緻構圖", src: "/works/colored-pencil/20250214_161130.jpg" },
  { tag: "羊毛氈", title: "貓咪肉球", description: "咖啡色貓掌造型，粉紅肉球，禮盒包裝", src: "/works/wool-felt/20220106_133605.jpg" },
  { tag: "色鉛筆", title: "雙貓肖像", description: "兩隻虎斑幼貓特寫，綠眼與藍眼", src: "/works/colored-pencil/20250130_223422.jpg" },
  { tag: "羊毛氈", title: "趴趴小狗", description: "米色小狗趴臥姿勢，藍灰圍巾點綴", src: "/works/wool-felt/20220206_065251.jpg" },
  { tag: "色鉛筆", title: "側躺布偶貓", description: "灰白長毛布偶貓，藍眼側躺慵懶", src: "/works/colored-pencil/20250128_202032.jpg" },
  { tag: "羊毛氈", title: "灰紋長毛貓", description: "白底灰紋坐姿長毛貓，細膩毛髮質感", src: "/works/wool-felt/20220409_155554.jpg" },
  { tag: "色鉛筆", title: "虎斑小貓", description: "灰白虎斑幼貓，大眼圓潤可愛", src: "/works/colored-pencil/20211014_052338.jpg" },
  { tag: "羊毛氈", title: "棕色兔子", description: "坐姿兔子搭配仙人掌小盆栽，療癒風", src: "/works/wool-felt/20221101_221631.jpg" },
  { tag: "色鉛筆", title: "棕灰幼貓", description: "棕灰色幼貓頭部特寫，黃綠色眼睛", src: "/works/colored-pencil/20211025_213751.jpg" },
  { tag: "羊毛氈", title: "聖誕花圈", description: "雪人與小鹿的聖誕花圈，松果肉桂裝飾", src: "/works/wool-felt/20221112_143750.jpg" },
  { tag: "色鉛筆", title: "蓬鬆長毛貓", description: "灰褐長毛貓，毛髮蓬鬆柔軟", src: "/works/colored-pencil/20211031_170300.jpg" },
  { tag: "羊毛氈", title: "聖誕襪小狗", description: "棕色捲毛小狗坐在紅色聖誕襪中", src: "/works/wool-felt/20221119_175156.jpg" },
  { tag: "色鉛筆", title: "蝴蝶結小貓", description: "白色小貓繫藍色蝴蝶結，粉色調", src: "/works/colored-pencil/20220518_135444.jpg" },
  { tag: "羊毛氈", title: "站立馬匹", description: "棕色馬匹站立於苔蘚木托盤上", src: "/works/wool-felt/20221206_150741.jpg" },
  { tag: "色鉛筆", title: "躲貓貓幼貓", description: "棕灰幼貓探頭好奇的模樣", src: "/works/colored-pencil/20220526_120523.jpg" },
  { tag: "羊毛氈", title: "貓掌鑰匙圈", description: "五款不同花色的貓掌鑰匙圈組合", src: "/works/wool-felt/20221207_101832.jpg" },
  { tag: "色鉛筆", title: "虎斑貓框畫", description: "灰色虎斑貓正面特寫，白色木框裝裱", src: "/works/colored-pencil/20220619_103227.jpg" },
  { tag: "色鉛筆", title: "蹲坐兔子", description: "淺咖啡色兔子蹲坐，黑眼圓潤", src: "/works/colored-pencil/20220628_192444.jpg" },
  { tag: "色鉛筆", title: "虎斑幼貓", description: "灰色虎斑幼貓特寫，黃綠色大眼", src: "/works/colored-pencil/20220726_141853.jpg" },
  { tag: "色鉛筆", title: "橘色小貓", description: "側躺橘貓，藍色眼睛清澈動人", src: "/works/colored-pencil/20220803_132430.jpg" },
  { tag: "色鉛筆", title: "碎花蝴蝶結貓", description: "灰色小貓配粉色碎花蝴蝶結", src: "/works/colored-pencil/20220816_121019.jpg" },
  { tag: "色鉛筆", title: "橘棕蓬鬆貓", description: "橘棕白色長毛貓，圓滾滾身形", src: "/works/colored-pencil/20220822_144639.jpg" },
  { tag: "色鉛筆", title: "藍眼長毛貓", description: "白灰長毛貓，藍眼粉鼻，寫實風格", src: "/works/colored-pencil/20220904_133350.jpg" },
  { tag: "色鉛筆", title: "臘腸狗", description: "深棕臘腸犬配愛心蝴蝶結髮飾", src: "/works/colored-pencil/20220904_133552.jpg" },
  { tag: "色鉛筆", title: "白色長毛幼貓", description: "藍眼白色長毛小貓，搭配花朵裝飾", src: "/works/colored-pencil/20220917_124631.jpg" },
  { tag: "色鉛筆", title: "繡球花貓", description: "橘白貓咪配紫色繡球花，金框裝裱", src: "/works/colored-pencil/20220921_195220.jpg" },
  { tag: "色鉛筆", title: "交疊前爪小貓", description: "灰色條紋小貓前爪交疊，溫柔表情", src: "/works/colored-pencil/20221017_092148.jpg" },
  { tag: "色鉛筆", title: "柴犬肖像", description: "淺棕白色小狗，立耳粉鼻，溫和神情", src: "/works/colored-pencil/20230403_205215.jpg" },
  { tag: "色鉛筆", title: "籃中虎斑貓", description: "虎斑貓從編織籃中探出頭，黃綠眼睛", src: "/works/colored-pencil/20230411_160140.jpg" },
];

const categories = ["全部", "色鉛筆", "羊毛氈", "油畫"];

export default function Works() {
  const [active, setActive] = useState("全部");

  const filtered =
    active === "全部" ? works : works.filter((w) => w.tag === active);

  return (
    <section id="works" className="px-8 md:px-12 py-24">
      {/* Section Header */}
      <div className="flex justify-between items-baseline mb-10">
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-text-tertiary mb-3">
            Selected Works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            近期作品
          </h2>
        </div>
        <a
          href="/works"
          className="text-[11px] tracking-[0.15em] uppercase text-text-secondary border-b border-border-secondary pb-1 hover:text-text hover:border-text transition-colors duration-300 cursor-pointer"
        >
          全部作品
        </a>
      </div>

      {/* Category Tags */}
      <div className="flex gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-[11px] tracking-[0.12em] px-4 py-1.5 border transition-all duration-300 cursor-pointer ${
              active === cat
                ? "border-text text-text bg-text/[0.03]"
                : "border-border-secondary text-text-tertiary hover:text-text hover:border-text"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border">
        {filtered.map((work) => (
          <div
            key={work.src}
            className="bg-bg aspect-square relative overflow-hidden cursor-pointer group"
          >
            {/* Image with warm tone → full color transition */}
            <div className="absolute inset-0 artwork-warm">
              <Image
                src={work.src}
                alt={work.description}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Info overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <span className="inline-block text-[10px] tracking-[0.15em] uppercase text-white/70 mb-1">
                {work.tag}
              </span>
              <div className="font-serif text-base font-light text-white mb-1">
                {work.title}
              </div>
              <div className="text-[11px] text-white/60 leading-relaxed">
                {work.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
