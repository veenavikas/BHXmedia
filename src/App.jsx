import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [activeView, setActiveView] = useState('home'); // 'home' | 'services' | 'work' | 'pricing' | 'about' | 'contact'
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'hover' | 'video'
  const [cursorText, setCursorText] = useState('');

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  const handleCursorEnter = () => setCursorState('hover');
  const handleCursorLeave = () => {
    setCursorState('default');
    setCursorText('');
  };

  const handleCursorVideoEnter = (text = 'PLAY REEL') => {
    setCursorState('video');
    setCursorText(text);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', position: 'relative' }}>
      {/* Global Interactive Custom Magnetic Cursor */}
      <CustomCursor cursorState={cursorState} cursorText={cursorText} />

      {/* Floating Centered Glass Pill Navbar */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenBooking={handleOpenBooking}
        onCursorEnter={handleCursorEnter}
        onCursorLeave={handleCursorLeave}
      />

      {/* Main Dynamic View Content */}
      <main>
        {activeView === 'home' && (
          <>
            <Hero
              onOpenBooking={handleOpenBooking}
              onSelectWork={() => {
                const element = document.querySelector('#work');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              onCursorVideoEnter={handleCursorVideoEnter}
              onCursorLeave={handleCursorLeave}
            />
            <Marquee />
            <Services onOpenBooking={handleOpenBooking} />
            <Process onOpenBooking={handleOpenBooking} />
            <Portfolio
              onOpenBooking={handleOpenBooking}
              onCursorVideoEnter={handleCursorVideoEnter}
              onCursorLeave={handleCursorLeave}
            />
            <Stats />
            <Testimonials />
            <Pricing
              onOpenBooking={handleOpenBooking}
              onCursorEnter={handleCursorEnter}
              onCursorLeave={handleCursorLeave}
            />
            <FAQ onOpenBooking={handleOpenBooking} />
            <CtaBanner onOpenBooking={handleOpenBooking} />
          </>
        )}

        {activeView === 'services' && (
          <>
            <Services onOpenBooking={handleOpenBooking} />
            <Process onOpenBooking={handleOpenBooking} />
            <CtaBanner onOpenBooking={handleOpenBooking} />
          </>
        )}

        {activeView === 'work' && (
          <>
            <Portfolio
              onOpenBooking={handleOpenBooking}
              onCursorVideoEnter={handleCursorVideoEnter}
              onCursorLeave={handleCursorLeave}
            />
            <CtaBanner onOpenBooking={handleOpenBooking} />
          </>
        )}

        {activeView === 'pricing' && (
          <>
            <Pricing
              onOpenBooking={handleOpenBooking}
              onCursorEnter={handleCursorEnter}
              onCursorLeave={handleCursorLeave}
            />
            <FAQ onOpenBooking={handleOpenBooking} />
            <CtaBanner onOpenBooking={handleOpenBooking} />
          </>
        )}

        {activeView === 'about' && (
          <>
            <AboutView onOpenBooking={handleOpenBooking} />
            <CtaBanner onOpenBooking={handleOpenBooking} />
          </>
        )}

        {activeView === 'contact' && (
          <>
            <ContactView onOpenBooking={handleOpenBooking} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveView={setActiveView}
        onOpenBooking={handleOpenBooking}
      />

      {/* Interactive Call Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
