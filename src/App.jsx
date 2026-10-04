import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import StudioLandingPage from './components/StudioLandingPage';
import BriefView from './components/BriefView';
import WorkView from './components/WorkView';
import AboutView from './components/AboutView';
import BlogView from './components/BlogView';
import BlogPostView from './components/BlogPostView';
import ThankYouView from './components/ThankYouView';
import PrivacyView from './components/PrivacyView';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import MeetPage from './components/MeetPage';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname.toLowerCase();
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname.toLowerCase());
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path.toLowerCase());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route matching logic
  const renderContent = () => {
    const path = currentPath.replace(/\/$/, '') || '/';

    // Google Meet Page
    if (path === '/meet' || path === '#meet') {
      return <MeetPage onBackToHome={() => navigateTo('/')} />;
    }

    // Brief Form Page
    if (path === '/brief') {
      return <BriefView onNavigate={navigateTo} />;
    }

    // Thank You Page
    if (path === '/thank-you') {
      return <ThankYouView onNavigate={navigateTo} onOpenBooking={() => setIsBookingOpen(true)} />;
    }

    // Privacy Policy Page
    if (path === '/privacy') {
      return <PrivacyView />;
    }

    // Work Page
    if (path === '/work') {
      return <WorkView onNavigate={navigateTo} onOpenBooking={() => setIsBookingOpen(true)} />;
    }

    // About Page
    if (path === '/about') {
      return <AboutView onNavigate={navigateTo} onOpenBooking={() => setIsBookingOpen(true)} />;
    }

    // Insights Blog List & Posts
    if (path === '/insights') {
      return <BlogView onNavigate={navigateTo} onSelectPost={(slug) => navigateTo(`/insights/${slug}`)} />;
    }

    if (path.startsWith('/insights/')) {
      const slug = path.replace('/insights/', '');
      return <BlogPostView postSlug={slug} onNavigate={navigateTo} onBack={() => navigateTo('/insights')} onOpenBooking={() => setIsBookingOpen(true)} />;
    }

    // Studio Landing Pages
    if (path.startsWith('/studios/')) {
      const studioId = path.replace('/studios/', '');
      return <StudioLandingPage studioId={studioId} onNavigate={navigateTo} onOpenBooking={() => setIsBookingOpen(true)} />;
    }

    // Default Home View
    return (
      <HomeView 
        onNavigate={navigateTo} 
        onOpenBooking={() => setIsBookingOpen(true)} 
      />
    );
  };

  // Hide standard header/footer on studio landing pages (since studio pages have logo-only header and custom footer)
  const isStudioPage = currentPath.startsWith('/studios/') || currentPath === '/meet';

  return (
    <div style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      {!isStudioPage && (
        <Navbar 
          currentPath={currentPath} 
          onNavigate={navigateTo} 
          onOpenBooking={() => setIsBookingOpen(true)} 
        />
      )}

      <main>
        {renderContent()}
      </main>

      {!isStudioPage && (
        <Footer onNavigate={navigateTo} />
      )}

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
