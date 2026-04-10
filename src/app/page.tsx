import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
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
          <Works />
        </Reveal>
        <Reveal>
          <AiChat />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
