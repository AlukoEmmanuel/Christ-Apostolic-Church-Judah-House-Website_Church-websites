'use client';

import Link from 'next/link';
import Image from 'next/image';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaHandHoldingHeart } from 'react-icons/fa';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/sermons', label: 'Sermons' },
    { href: '/events', label: 'Events' },
    { href: '/ministries', label: 'Ministries' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <m.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Church Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <span className={`text-xl font-serif font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>
                CAJAH
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium hover:text-primary transition-colors ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <m.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/donate"
                  className="bg-primary text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-primary-dark transition-colors"
                >
                  <FaHandHoldingHeart className="text-lg" />
                  <span>Donate</span>
                </Link>
              </m.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 transition-all ${
                    scrolled ? 'bg-gray-700' : 'bg-white'
                  } transform origin-left ${isOpen ? 'rotate-45 translate-x-px' : ''}`}
                />
                <span
                  className={`w-full h-0.5 transition-all ${
                    scrolled ? 'bg-gray-700' : 'bg-white'
                  } ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                />
                <span
                  className={`w-full h-0.5 transition-all ${
                    scrolled ? 'bg-gray-700' : 'bg-white'
                  } transform origin-left ${isOpen ? '-rotate-45 translate-x-px' : ''}`}
                />
              </div>
            </button>
          </nav>

          {/* Mobile Menu */}
          <m.div
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-lg"
          >
            <div className="py-4 px-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <m.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pt-4"
              >
                <Link
                  href="/donate"
                  className="bg-primary text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-primary-dark transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <FaHandHoldingHeart className="text-lg" />
                  <span>Support Our Ministry</span>
                </Link>
              </m.div>
            </div>
          </m.div>
        </div>
      </m.header>
    </LazyMotion>
  );
} 