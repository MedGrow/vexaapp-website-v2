import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RoiStrip from '@/components/RoiStrip';
import FeatureShowcase from '@/components/FeatureShowcase';
import HowItWorks from '@/components/HowItWorks';
import BuiltFor from '@/components/BuiltFor';
import BookingSection from '@/components/BookingSection';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import ScrollMascot from '@/components/ScrollMascot';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="relative">
        <ScrollMascot />
        <RoiStrip />
        <FeatureShowcase />
        <HowItWorks />
        <BuiltFor />
        <BookingSection />
      </div>
      <Faq />
      <Footer />
    </main>
  );
}
