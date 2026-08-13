import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import QuoteBlock from './components/QuoteBlock';
import OfferLadder from './components/OfferLadder';
import EngagementsSection from './components/EngagementsSection';
import SelectedWorkTeaser from './components/SelectedWorkTeaser';
import WhyMeSection from './components/WhyMeSection';
import DifferentiationSection from './components/DifferentiationSection';
import Portfolio from './components/Portfolio';
import BlogView from './components/BlogView';
import BlogPostView from './components/BlogPostView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [activeBlogSlug, setActiveBlogSlug] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [cursorState, setCursorState] = useState('default');
  const [cursorText, setCursorText] = useState('');

  // Synchronize state with URL pathname on load and popstate
  useEffect(() => {
    const syncRouteFromUrl = () => {
      const path = window.location.pathname;
      if (path.startsWith('/blog/')) {
        const slug = path.replace('/blog/', '');
        setActiveView('blog');
        setActiveBlogSlug(slug);
      } else if (path === '/blog') {
        setActiveView('blog');
        setActiveBlogSlug(null);
      } else if (path === '/work') {
        setActiveView('work');
        setActiveBlogSlug(null);
      } else if (path === '/about') {
        setActiveView('about');
        setActiveBlogSlug(null);
      } else if (path === '/contact') {
        setActiveView('contact');
        setActiveBlogSlug(null);
      } else {
        setActiveView('home');
        setActiveBlogSlug(null);
      }
    };

    syncRouteFromUrl();
    window.addEventListener('popstate', syncRouteFromUrl);
    return () => window.removeEventListener('popstate', syncRouteFromUrl);
  }, []);

  const navigateTo = (view, blogSlug = null) => {
    setActiveView(view);
    setActiveBlogSlug(blogSlug);

    let path = '/';
    if (view === 'work') path = '/work';
    else if (view === 'blog') path = blogSlug ? `/blog/${blogSlug}` : '/blog';
    else if (view === 'about') path = '/about';
    else if (view === 'contact') path = '/contact';

    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  const handleCursorVideoEnter = (text = 'PLAY') => {
    setCursorState('video');
    setCursorText(text);
  };

  const handleCursorLeave = () => {
    setCursorState('default');
    setCursorText('');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--paper)', color: 'var(--ink)', position: 'relative' }}>
      
      {/* Custom Interactive 3D Cursor */}
      <CustomCursor cursorState={cursorState} cursorText={cursorText} />

      {/* Floating Modern Header */}
      <Navbar
        activeView={activeView}
        setActiveView={(view) => navigateTo(view, null)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Dynamic View Content */}
      <main>
        {activeView === 'home' && (
          <>
            <Hero onOpenBooking={handleOpenBooking} />
            <ProblemSection />
            <QuoteBlock />
            <OfferLadder />
            <EngagementsSection onOpenBooking={handleOpenBooking} />
            <SelectedWorkTeaser 
              onSelectWork={() => navigateTo('work')} 
              onCursorVideoEnter={handleCursorVideoEnter}
              onCursorLeave={handleCursorLeave}
            />
            <WhyMeSection />
            <DifferentiationSection />
          </>
        )}

        {activeView === 'work' && (
          <Portfolio 
            onOpenBooking={handleOpenBooking}
            onCursorVideoEnter={handleCursorVideoEnter}
            onCursorLeave={handleCursorLeave}
          />
        )}

        {activeView === 'blog' && (
          activeBlogSlug ? (
            <BlogPostView 
              postSlug={activeBlogSlug} 
              onBack={() => navigateTo('blog', null)}
              onOpenBooking={handleOpenBooking}
            />
          ) : (
            <BlogView 
              onSelectPost={(slug) => navigateTo('blog', slug)}
              onOpenBooking={handleOpenBooking}
            />
          )
        )}

        {activeView === 'about' && (
          <AboutView onOpenBooking={handleOpenBooking} />
        )}

        {activeView === 'contact' && (
          <ContactView onOpenBooking={handleOpenBooking} />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveView={(view) => navigateTo(view, null)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Booking Calendar Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />

    </div>
  );
}
