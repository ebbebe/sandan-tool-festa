import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EventInfo from '@/components/EventInfo';
import EventCards from '@/components/EventCards';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

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
    </div>
  );
}
