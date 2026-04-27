import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import SeriesGrid from "@/components/SeriesGrid";
import Works from "@/components/Works";
import AiChat from "@/components/AiChat";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <Reveal>
          <StorySection
            id="about"
            eyebrow="The Practice"
            title={
              <>
                跨媒材的<em className="italic">凝視</em>
              </>
            }
            description="從油畫、羊毛氈到色鉛筆，每一種媒材都是一種觀看世界的方式。Celsius 的創作關注物質與空間之間的臨界狀態 — 柔軟與堅硬、瞬間與永恆。"
            imageSrc="/works/wool-felt/20220918_123542.jpg"
            imageAlt="花園白貓 — 羊毛氈"
            cta={{ label: "了解創作", href: "#about" }}
          />
        </Reveal>

        <Reveal>
          <SeriesGrid />
        </Reveal>

        <Reveal>
          <StorySection
            id="courses"
            eyebrow="The Atelier"
            title={
              <>
                在<em className="italic">喃喃</em>遇見藝術
              </>
            }
            description="工作室是創作之外的另一個現場 — 在這裡，學員親手嘗試各種媒材，與 Celsius 一起完成一件屬於自己的作品。從一日體驗到系列課程，皆可預約。"
            imageSrc="/works/colored-pencil/20250130_223422.jpg"
            imageAlt="雙貓肖像 — 色鉛筆"
            cta={{ label: "預約課程", href: "#courses" }}
            reverse
          />
        </Reveal>

        <Reveal>
          <Works />
        </Reveal>
      </main>
      <AiChat />
      <Footer />
    </>
  );
}
