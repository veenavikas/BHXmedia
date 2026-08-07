import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Sparkles, ArrowRight, Star, Eye, Film, ShieldCheck, Activity } from 'lucide-react';

export default function Hero({ onOpenBooking, onSelectWork, onCursorVideoEnter, onCursorLeave }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // 3D Tilt Perspective tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeaveContainer = () => {
    mouseX.set(0);
    mouseY.set(0);
    onCursorLeave();
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Staggered word animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 35, rotateX: -30 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="section bg-micro-grid" style={{ paddingTop: '3.5rem', paddingBottom: '6rem', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Top Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}
        >
          <div
            className="badge badge-accent"
            style={{
              padding: '0.45rem 1.25rem',
              fontSize: '0.82rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              boxShadow: '0 4px 15px rgba(255, 77, 46, 0.14)',
            }}
          >
            <Sparkles size={14} />
            <span>Independent Creative Agency & Commercial Video Studio</span>
          </div>
        </motion.div>

        {/* Hero Kinetic Typography Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ textAlign: 'center', maxWidth: '1040px', margin: '0 auto', perspective: 1000 }}
        >
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              letterSpacing: '-0.04em',
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: '1.5rem',
              color: 'var(--text-primary)',
            }}
          >
            <motion.span variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.3em' }}>We</motion.span>
            <motion.span variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.3em' }}>create</motion.span>
            <motion.span variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.3em' }}>campaigns</motion.span>
            <motion.span variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.3em' }}>&</motion.span>
            <motion.span variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.3em' }}>content</motion.span>
            <motion.span variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.3em' }}>that</motion.span>
            <motion.span variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.3em' }}>make</motion.span>
            <motion.span variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.3em' }}>brands</motion.span>{' '}
            <motion.span variants={wordVariants} className="editorial-accent" style={{ display: 'inline-block' }}>
              unmissable
            </motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: 'var(--text-secondary)',
              maxWidth: '780px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.55,
              fontWeight: 400,
            }}
          >
            From Netflix-level promotional series shoots & TV commercial spots to high-octane creator series and viral brand campaigns. We conceive, shoot, and produce video assets that move culture.
          </motion.p>

          {/* Call to Action Group */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '3.75rem',
            }}
          >
            <button onClick={onOpenBooking} className="btn btn-primary btn-lg">
              <span>Start a Campaign</span>
              <ArrowRight size={18} />
            </button>

            <button onClick={onSelectWork} className="btn btn-secondary btn-lg">
              <Film size={18} />
              <span>Explore Featured Campaigns</span>
            </button>
          </motion.div>
        </motion.div>

        {/* 3D Interactive Tilt Showreel Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ perspective: 1200, maxWidth: '1040px', margin: '0 auto 4rem' }}
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeaveContainer}
            onMouseEnter={() => onCursorVideoEnter("WATCH REEL")}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: '#FFFFFF',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Studio MacOS Window Controls */}
            <div className="studio-window-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="studio-dot" style={{ backgroundColor: '#FF5F56' }} />
                <span className="studio-dot" style={{ backgroundColor: '#FFBD2E' }} />
                <span className="studio-dot" style={{ backgroundColor: '#27C93F' }} />
              </div>

              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                BHX Media — Commercial & Creative Campaign Reel 2026
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#22C55E', fontWeight: 800 }}>
                <Activity size={14} />
                <span>RED 8K RAW</span>
              </div>
            </div>

            {/* Video Canvas */}
            <div style={{ position: 'relative', aspectRatio: '16/9', backgroundColor: '#111111', overflow: 'hidden' }}>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=80"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
              </video>

              {/* Overlay Controls */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.2) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.25rem 1.5rem',
                  color: '#FFFFFF',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      backdropFilter: 'blur(10px)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      letterSpacing: '0.04em',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF4D2E' }} />
                    REC 00:14:20:08
                  </div>

                  <button
                    onClick={toggleMute}
                    style={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#FFFFFF',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
                      BHX Commercial & Series Reel
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                      Featuring TV ad campaigns, series promos & creator original shows
                    </p>
                  </div>

                  <button
                    onClick={togglePlay}
                    style={{
                      backgroundColor: 'var(--accent-primary)',
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '0.75rem 1.35rem',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      boxShadow: '0 4px 18px rgba(255, 77, 46, 0.45)',
                    }}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} fill="white" />}
                    <span>{isPlaying ? 'Pause' : 'Play Campaign Reel'}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust & Verified Metrics Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
            flexWrap: 'wrap',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ display: 'flex', color: '#FFB800' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#FFB800" stroke="#FFB800" />
              ))}
            </div>
            <span style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              4.9/5 Rating
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>(150+ brand campaigns)</span>
          </div>

          <div style={{ height: '20px', width: '1px', backgroundColor: 'var(--border-subtle)' }} className="divider-desktop" />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Eye size={18} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              50M+ Organic Views
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Generated</span>
          </div>

          <div style={{ height: '20px', width: '1px', backgroundColor: 'var(--border-subtle)' }} className="divider-desktop" />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShieldCheck size={18} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              100% Retainer Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
