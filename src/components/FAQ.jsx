import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/siteData';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQ({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '920px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', margin: '0 auto 3.5rem' }}
        >
          <span className="badge badge-accent" style={{ marginBottom: '0.85rem' }}>
            Got Questions?
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.04em' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Everything you need to know about partnering with BHX Media for video production and channel scaling.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: isOpen ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                  boxShadow: isOpen ? '0 4px 20px rgba(255, 77, 46, 0.1)' : 'var(--shadow-subtle)',
                  overflow: 'hidden',
                  transition: 'border 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <HelpCircle size={20} style={{ color: isOpen ? 'var(--accent-primary)' : 'var(--text-muted)', flexShrink: 0 }} />
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--accent-light)' : 'var(--bg-secondary)',
                      color: isOpen ? 'var(--accent-primary)' : 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div
                        style={{
                          padding: '0 1.5rem 1.5rem 3.4rem',
                          fontSize: '1rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.65,
                          borderTop: '1px solid var(--border-subtle)',
                          paddingTop: '1.1rem',
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Bottom Direct Producer Contact Box */}
        <div
          style={{
            marginTop: '3.5rem',
            textAlign: 'center',
            backgroundColor: 'var(--bg-secondary)',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 0.25rem 0', color: 'var(--text-primary)' }}>
              Still have a specific question about your channel?
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
              Speak directly with our senior creative lead in a 1-on-1 strategy session.
            </p>
          </div>

          <button onClick={onOpenBooking} className="btn btn-primary">
            <MessageCircle size={16} />
            <span>Ask a Creative Producer</span>
          </button>
        </div>
      </div>
    </section>
  );
}
