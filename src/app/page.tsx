import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import AiChat from "@/components/AiChat";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Works />
        <AiChat />
      </main>
      <Footer />
    </>
  );
}
