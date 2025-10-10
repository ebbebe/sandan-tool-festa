import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EventInfo from '@/components/EventInfo';
import EventCards from '@/components/EventCards';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import SeminarPopup from '@/components/SeminarPopup';
import ItpPopup from '@/components/ItpPopup';
import KicoxPopup from '@/components/KicoxPopup';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Header />
      <main className="pt-[85px]">
        <HeroSection />
        <EventInfo />
        <EventCards />
        <Partners />
      </main>
      <Footer />
      <SeminarPopup />
      <ItpPopup />
      <KicoxPopup />
    </div>
  );
}
