import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../data/siteData';
import VideoModal from './VideoModal';
import { Play, Eye, Clock, Smartphone, Video, Sparkles, Award } from 'lucide-react';

export default function Portfolio({ onOpenBooking, onCursorVideoEnter, onCursorLeave }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['All', 'Series Promos', 'Brand Campaigns', 'Original Vlogs', 'Podcasts'];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className="section bg-micro-grid" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}
        >
          <span className="badge badge-accent" style={{ marginBottom: '0.85rem' }}>
            Featured Agency Campaigns
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.8rem)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.04em' }}>
            Work That Moves <span className="editorial-accent">Culture & Revenue</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            From Netflix series promos and commercial TV spots to high-impact brand launches and creator original series.
          </p>
        </motion.div>

        {/* Filter Category Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  position: 'relative',
                  padding: '0.65rem 1.45rem',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  border: isActive ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                  backgroundColor: isActive ? 'var(--accent-primary)' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                  boxShadow: isActive ? '0 4px 15px rgba(255, 77, 46, 0.25)' : '0 2px 6px rgba(0,0,0,0.03)',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Masonry & Vertical Phone Cards */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              const isVertical = item.format === '9:16';
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => setSelectedVideo(item)}
                  onMouseEnter={() => onCursorVideoEnter(isVertical ? 'WATCH TEASER' : 'WATCH CAMPAIGN')}
                  onMouseLeave={onCursorLeave}
                  className="card-light"
                  style={{
                    cursor: 'pointer',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-xl)',
                  }}
                >
                  {/* Media Frame */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: isVertical ? '9/14' : '16/10',
                      backgroundColor: '#111111',
                      overflow: 'hidden',
                    }}
                  >
                    {isVertical && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '10px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '80px',
                          height: '18px',
                          backgroundColor: '#000000',
                          borderRadius: '12px',
                          zIndex: 5,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1A1A1A' }} />
                      </div>
                    )}

                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                      className="portfolio-img"
                    />

                    {/* Format & Duration Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '0.85rem',
                        right: '0.85rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        color: '#FFFFFF',
                        backdropFilter: 'blur(8px)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        border: '1px solid rgba(255,255,255,0.2)',
                        zIndex: 4,
                      }}
                    >
                      {isVertical ? <Smartphone size={13} /> : <Video size={13} />}
                      <span>{item.duration}</span>
                    </div>

                    {/* Hover Play Button Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(17, 17, 17, 0.35)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: 6,
                      }}
                      className="hover-overlay"
                    >
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-primary)',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 8px 24px rgba(255, 77, 46, 0.45)',
                        }}
                      >
                        <Play size={26} fill="white" style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                        <span className="badge badge-accent" style={{ fontSize: '0.75rem' }}>{item.category}</span>
                        <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Eye size={13} /> {item.views}
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.55rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                        {item.title}
                      </h3>

                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {item.summary}
                      </p>
                    </div>

                    {/* Result Pills */}
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                      {item.results.slice(0, 2).map((res, idx) => (
                        <span key={idx} style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)', backgroundColor: 'var(--accent-light)', padding: '0.25rem 0.6rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Award size={12} /> {res}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Lightbox Modal */}
      {selectedVideo && (
        <VideoModal
          item={selectedVideo}
          onClose={() => setSelectedVideo(null)}
          onOpenBooking={onOpenBooking}
        />
      )}

      <style>{`
        .card-light:hover .portfolio-img {
          transform: scale(1.05);
        }
        .card-light:hover .hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
