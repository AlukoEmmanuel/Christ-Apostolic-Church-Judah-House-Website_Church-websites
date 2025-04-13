'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { FaHandHoldingHeart, FaTimes } from 'react-icons/fa';

export default function FloatingDonateButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000);

    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-4"
      >
        <button
          onClick={() => setIsDismissed(true)}
          className="p-2 rounded-full bg-gray-800/20 hover:bg-gray-800/30 text-white backdrop-blur-sm transition-colors"
          aria-label="Close donation prompt"
        >
          <FaTimes className="w-4 h-4" />
        </button>
        <m.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute -top-12 right-0 w-48 p-2 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-sm text-gray-600 text-center">Support our ministry and make a difference</p>
          </div>
          <Link
            href="/donate"
            className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary-dark transition-all"
          >
            <FaHandHoldingHeart className="text-xl" />
            <span>Make a Donation</span>
          </Link>
        </m.div>
      </m.div>
    </LazyMotion>
  );
} 