// src/components/Navbar.js - Simple Bouncing Circle Only
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function PremiumNavbar() {
  const router = useRouter();
  const pathname = usePathname();
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
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'Case Studies', path: '/ShowProjects' },
    { name: 'REVIEWS', path: '/reviews' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PRICING', path: '/pricing' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl py-3 border-b border-emerald-900/20 shadow-lg' 
        : 'bg-gradient-to-b from-black/70 to-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo with Simple Bouncing Circle */}
          <Link href="/" className="flex items-center gap-1 group">
            {/* Simple Bouncing Circle */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Small Bouncing Circle */}
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-green-500" />
              
              {/* Shadow/Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-emerald-400 blur-sm"
              />
            </motion.div>
            
            {/* Grovia Text */}
            <div className="relative">
              <h1 className="text-2xl md:text-3xl font-bold text-emerald-400">Grovia</h1>
              {/* <p className="text-[10px] text-white font-medium tracking-[0.3em] mt-1">STUDIO</p> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative font-medium transition-colors ${
                  pathname === item.path 
                    ? 'text-emerald-400 font-semibold' 
                    : 'text-gray-300 hover:text-emerald-300'
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.span 
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400 rounded-full"
                  />
                )}
              </Link>
            ))}
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 text-sm font-medium cursor-pointer text-white bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
              onClick={() => router.push('/contact')}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-4 border-t border-emerald-900/20 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  pathname === item.path 
                    ? 'bg-emerald-500/20 text-emerald-400' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <button
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium"
              onClick={() => {
                router.push('/contact');
                setIsOpen(false);
              }}
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}