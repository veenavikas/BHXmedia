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
import WhatsAppButton from './components/WhatsAppButton';
import MeetPage from './components/MeetPage';

export default function App() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentView, setCurrentView] = useState(() => {
    const p = window.location.pathname.toLowerCase();
    const h = window.location.hash.toLowerCase();
    return p === '/meet' || p === '/meet/' || h === '#meet' ? 'meet' : 'home';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const p = window.location.pathname.toLowerCase();
      const h = window.location.hash.toLowerCase();
      if (p === '/meet' || p === '/meet/' || h === '#meet') {
        setCurrentView('meet');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (currentView === 'home' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
    }
  }, [currentView]);

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToMeet = () => {
    window.history.pushState({}, '', '/meet');
    setCurrentView('meet');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'meet') {
    return <MeetPage onBackToHome={navigateToHome} />;
  }

  return (
    <div>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />
      <OutputSection />
      <Services />
      <ModelSection />
      <WhoSection />
      <WorkSection onOpenVideo={(videoObj) => setActiveVideo(videoObj)} />
      <RatesSection onOpenBooking={() => setIsBookingOpen(true)} />
      <FAQSection />
      <FinalSection onOpenBooking={() => setIsBookingOpen(true)} />
      <Footer />

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <WhatsAppButton />
    </div>
  );
}


