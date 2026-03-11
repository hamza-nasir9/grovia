// components/ImportantClients.js
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import img_two from '@/assets/img_five.jpeg';
import img_three from '@/assets/img_three.jpeg';
import img_four from '@/assets/img_four.jpeg';
import img_one from '@/assets/isaac.jpg';
import Link from 'next/link';

const caseStudies = [
  {
    brand: "ojea",
    description: "From Clicks to Conversions: Elevating Ojea with Meta, Google & Snapchat Ads",
    subtext: "How our integrated approach transformed Ojea's digital trajectory.",
    stats: [
      { value: "85%", label: "Increased in conversion rate" },
      { value: "65%", label: "Increased in ROI" },
    ],
    image: img_one,
    bgColor: "from-green-900/80 to-black/90",
  },
  {
    brand: "freefly",
    description: "Transforming Free Fly's digital marketing strategy to dominate the premium apparel market with targeted campaigns and innovative approaches",
    subtext: "freefly's Multi-Platform Journey to Success",
    stats: [
      { value: "55%", label: "Increased in conversion rate" },
      { value: "35%", label: "Increased in ROI" },
    ],
    image: img_three,
    bgColor: "from-black/90 to-green-950/80",
  },
  {
    brand: "tulips",
    description: "Bringing traditional textile business into digital age with modern e-commerce solutions",
    subtext: "Scaling tulips's digital presence with localized strategies",
    stats: [
      { value: "120%", label: "Increase in engagement" },
      { value: "75%", label: "Higher CTR" },
    ],
    image: img_two,
    bgColor: "from-gray-900 to-black",
  },
  {
    brand: "blackbieger",
    description: "Building digital credibility and trust for footwear products through strategic marketing.",
    subtext: "Unified brand voice across 200+ franchise locations",
    stats: [
      { value: "95%", label: "Brand consistency" },
      { value: "40%", label: "Cost reduction" },
    ],
    image: img_four,
    bgColor: "from-green-950 to-black",
  },
];

export default function ImportantClients() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #00FF88 1px, transparent 1px),
                           linear-gradient(to bottom, #00FF88 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-900/30 border border-green-500/30 rounded-full mb-6 backdrop-blur-sm">
            <div className="w-6 h-px bg-green-500" />
            <span className="text-green-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
              Case Studies
            </span>
            <div className="w-6 h-px bg-green-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            IMPROVEMENT OF{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              CLIENTS STORES
            </span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Real results from real brands. See how we've transformed digital presence
            and driven measurable growth for franchises worldwide.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {caseStudies.map((study, index) => (
            <ClientCard key={index} study={study} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 md:mt-24">
          <button className="group relative px-8 sm:px-12 py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105 active:scale-95 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Link href={'/ShowProjects'}>  <span className="relative z-10 flex items-center justify-center gap-2">
              View All Case Studies
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span></Link>
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-green-400/50 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ClientCard({ study, index }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  let animationFrameId = null;
  let cursorX = 0;
  let cursorY = 0;
  let targetX = 0;
  let targetY = 0;

  // Animation function WITHOUT ROTATION
  const animateCursor = () => {
    if (!isHovered || !cardRef.current || !glowRef.current || !cursorRef.current) {
      return;
    }

    // Smooth interpolation
    cursorX += (targetX - cursorX) * 0.3;
    cursorY += (targetY - cursorY) * 0.3;

    // Get card boundaries to prevent overflow
    const cardRect = cardRef.current.getBoundingClientRect();
    const cursorSize = 64; // w-16 = 64px
    const glowSize = 200; // w-[200px] = 200px
    const cursorRadius = cursorSize / 2;
    const glowRadius = glowSize / 2;

    // Calculate safe positions (keep within card bounds)
    const safeCursorX = Math.max(cursorRadius, Math.min(cursorX, cardRect.width - cursorRadius));
    const safeCursorY = Math.max(cursorRadius, Math.min(cursorY, cardRect.height - cursorRadius));
    const safeGlowX = Math.max(glowRadius, Math.min(cursorX, cardRect.width - glowRadius));
    const safeGlowY = Math.max(glowRadius, Math.min(cursorY, cardRect.height - glowRadius));

    // Update glow position (stay within card)
    if (glowRef.current) {
      glowRef.current.style.left = `${safeGlowX - glowRadius}px`;
      glowRef.current.style.top = `${safeGlowY - glowRadius}px`;
      glowRef.current.style.transform = 'none'; // No rotation
    }

    // Update cursor position (stay within card)
    if (cursorRef.current) {
      cursorRef.current.style.left = `${safeCursorX - cursorRadius}px`;
      cursorRef.current.style.top = `${safeCursorY - cursorRadius}px`;
      cursorRef.current.style.transform = 'none'; // NO ROTATION
    }

    // Continue animation
    animationFrameId = requestAnimationFrame(animateCursor);
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current || !isHovered) return;

    const rect = cardRef.current.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;

    // Start animation if not already running
    if (!animationFrameId) {
      cursorX = targetX;
      cursorY = targetY;

      // Set initial positions
      if (glowRef.current && cursorRef.current) {
        const cursorSize = 64;
        const glowSize = 200;
        const cursorRadius = cursorSize / 2;
        const glowRadius = glowSize / 2;

        // Keep within bounds from the start
        const safeCursorX = Math.max(cursorRadius, Math.min(targetX, rect.width - cursorRadius));
        const safeCursorY = Math.max(cursorRadius, Math.min(targetY, rect.height - cursorRadius));
        const safeGlowX = Math.max(glowRadius, Math.min(targetX, rect.width - glowRadius));
        const safeGlowY = Math.max(glowRadius, Math.min(targetY, rect.height - glowRadius));

        glowRef.current.style.left = `${safeGlowX - glowRadius}px`;
        glowRef.current.style.top = `${safeGlowY - glowRadius}px`;
        cursorRef.current.style.left = `${safeCursorX - cursorRadius}px`;
        cursorRef.current.style.top = `${safeCursorY - cursorRadius}px`;
      }

      animationFrameId = requestAnimationFrame(animateCursor);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      cursorX = rect.width / 2;
      cursorY = rect.height / 2;
      targetX = cursorX;
      targetY = cursorY;

      // Instantly show cursor within bounds
      if (glowRef.current && cursorRef.current) {
        const cursorSize = 64;
        const glowSize = 200;
        const cursorRadius = cursorSize / 2;
        const glowRadius = glowSize / 2;

        // Center position, within bounds
        const safeCursorX = Math.max(cursorRadius, Math.min(cursorX, rect.width - cursorRadius));
        const safeCursorY = Math.max(cursorRadius, Math.min(cursorY, rect.height - cursorRadius));
        const safeGlowX = Math.max(glowRadius, Math.min(cursorX, rect.width - glowRadius));
        const safeGlowY = Math.max(glowRadius, Math.min(cursorY, rect.height - glowRadius));

        glowRef.current.style.left = `${safeGlowX - glowRadius}px`;
        glowRef.current.style.top = `${safeGlowY - glowRadius}px`;
        glowRef.current.style.opacity = '1';

        cursorRef.current.style.left = `${safeCursorX - cursorRadius}px`;
        cursorRef.current.style.top = `${safeCursorY - cursorRadius}px`;
        cursorRef.current.style.opacity = '1';
        cursorRef.current.style.transform = 'scale(1)';
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    // Instantly hide cursor
    if (glowRef.current && cursorRef.current) {
      glowRef.current.style.opacity = '0';
      cursorRef.current.style.opacity = '0';
      cursorRef.current.style.transform = 'scale(0.8)';
    }
  };

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
      style={{ transformOrigin: 'center' }}
    >
      {/* Custom Cursor Elements WITH OVERFLOW HIDDEN */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl z-20 pointer-events-none">
        {/* Glow Effect - CONTAINED WITHIN CARD */}
        <div
          ref={glowRef}
          className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl"
          style={{
            left: '0px',
            top: '0px',
            opacity: 0,
            transition: 'opacity 150ms'
          }}
        />

        {/* VIEW Circle - CONTAINED WITHIN CARD, NO ROTATION */}
        <div
          ref={cursorRef}
          className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xs border-2 border-green-400/70 shadow-2xl"
          style={{
            left: '0px',
            top: '0px',
            opacity: 0,
            transform: 'scale(0.8)',
            transition: 'opacity 150ms, transform 150ms'
          }}
        >
          VIEW
        </div>
      </div>

      {/* Main Card WITH OVERFLOW HIDDEN */}
      <Link href={`/projects/${study.brand}`}>
        <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-gray-800 bg-gradient-to-br ${study.bgColor} h-full transition-all duration-300`}>

          {/* Hover Overlay Effect */}
          <div
            className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-200"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.15) 0%, transparent 50%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />

          {/* Mockup Image */}
          <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

            {typeof study.image === 'string' && study.image.includes('placeholder') ? (
              <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="text-center">
                  <div className="text-green-500 font-bold text-3xl md:text-4xl mb-2">
                    {study.brand}
                  </div>
                  <div className="text-gray-400 text-sm">Case Study Mockup</div>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={study.image}
                  alt={`${study.brand} Case Study`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}

            <div className="absolute bottom-6 left-6 right-6 z-20">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {study.brand}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-white group-hover:text-green-300 transition-colors duration-200">
              {study.description}
            </h4>

            <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-200">
              {study.subtext}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
              {study.stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-green-500/30 transition-all duration-200"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2 group-hover:text-gray-300 transition-colors duration-200">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-green-900/30 text-green-300 font-medium text-sm sm:text-base backdrop-blur-sm border border-green-500/30 hover:bg-green-800/40 hover:border-green-400/50 transition-all duration-200">
              VIEW CASE STUDY →
            </button>
          </div>
        </div>
      </Link>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </div>
  );
}