import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OutputSection from './components/OutputSection';
import Services from './components/Services';
import ModelSection from './components/ModelSection';
import WhoSection from './components/WhoSection';
import WorkSection from './components/WorkSection';
import RatesSection from './components/RatesSection';
import FAQSection from './components/FAQSection';
import FinalSection from './components/FinalSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import BookingModal from './components/BookingModal';

export default function App() {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('in');
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('.rv').forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      document.querySelectorAll('.rv').forEach((el) => el.classList.add('in'));
    }
  }, []);

  return (
    <div>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />
      <OutputSection />
      <Services />
      <ModelSection />
      <WhoSection />
      <WorkSection onOpenVideo={(id) => setActiveVideoId(id)} />
      <RatesSection onOpenBooking={() => setIsBookingOpen(true)} />
      <FAQSection />
      <FinalSection onOpenBooking={() => setIsBookingOpen(true)} />
      <Footer />

      <VideoModal videoId={activeVideoId} onClose={() => setActiveVideoId(null)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
