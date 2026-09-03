import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import IntroSection from "@/components/IntroSection"; // hidden for now — layout decisions pending
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <IntroSection /> */}
      <MainContent />
      <Footer />
    </main>
  );
}
