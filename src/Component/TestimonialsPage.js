// src/Component/TestimonialsPage.js
"use client";

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Star, ChevronRight, ChevronLeft, Quote, Sparkles, TrendingUp } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "CTO, TechCorp Inc.",
    company: "TechCorp",
    content: "Grovia transformed our marketing approach. The precision targeting and data-driven strategies delivered a 320% ROI in just three months. Their team's expertise is unmatched.",
    rating: 5,
    results: [
      { label: "ROI Increase", value: "320%" },
      { label: "Lead Growth", value: "185%" },
      { label: "Cost Reduction", value: "42%" }
    ]
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "VP Marketing, Finova",
    company: "Finova",
    content: "Working with Grovia was a game-changer. Their innovative approach to performance marketing helped us achieve record-breaking Q4 results. The analytics insights were invaluable.",
    rating: 5,
    results: [
      { label: "Revenue Growth", value: "240%" },
      { label: "Engagement", value: "175%" },
      { label: "Conversion", value: "68%" }
    ]
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "CEO, DataSphere",
    company: "DataSphere",
    content: "The level of sophistication in their campaign strategies is exceptional. Adscalfy's team operates with precision and creativity that's rare in the industry.",
    rating: 5,
    results: [
      { label: "User Acquisition", value: "280%" },
      { label: "Brand Awareness", value: "210%" },
      { label: "Customer Lifetime Value", value: "45%" }
    ]
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Marketing Director, CloudScale",
    company: "CloudScale",
    content: "From strategy to execution, every detail was handled with expertise. Our market position improved dramatically within the first quarter of partnership.",
    rating: 5,
    results: [
      { label: "Market Share", value: "155%" },
      { label: "Customer Satisfaction", value: "98%" },
      { label: "Operational Efficiency", value: "60%" }
    ]
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Founder, InnovateAI",
    company: "InnovateAI",
    content: "Adscalfy's data-first approach delivered insights we never considered. The campaign optimization was surgical in precision. Highly recommended for tech companies.",
    rating: 5,
    results: [
      { label: "Series A Success", value: "100%" },
      { label: "Partner Growth", value: "220%" },
      { label: "Platform Adoption", value: "190%" }
    ]
  }
];

export default function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < rating ? 'fill-emerald-400 text-emerald-400' : 'fill-gray-800 text-gray-800'}
        />
      ))}
    </div>
  );

  const ResultCard = ({ label, value }) => (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-emerald-900/30 rounded-xl p-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-emerald-500/10 rounded-lg">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
        </div>
        <div>
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="text-sm text-gray-400">{label}</p>
        </div>
      </div>
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black relative overflow-hidden py-20"
    >
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium tracking-wider">TRUSTED BY INDUSTRY LEADERS</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                TESTIMONIALS
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover why leading companies choose Grovia for transformative digital marketing solutions
            </p>
          </motion.div>

          {/* Stats Overview */}
          {/* <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
          >
            <ResultCard label="Average ROI" value="285%" />
            <ResultCard label="Client Retention" value="98%" />
            <ResultCard label="Campaign Success" value="99%" />
            <ResultCard label="Industry Awards" value="24" />
          </motion.div> */}

          {/* Slider */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-800">
                <span className="text-emerald-400 font-mono text-lg">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <div className="w-px h-4 bg-gray-700" />
                <span className="text-gray-400">
                  {String(testimonials.length).padStart(2, '0')} testimonials
                </span>
              </div>
            </div>

            <div className="relative px-4">
              <Swiper
                modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
                effect={'coverflow'}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                  slideShadows: true
                }}
                spaceBetween={20}
                slidesPerView={1.2}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination-custom',
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                breakpoints={{
                  640: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 1.8,
                    spaceBetween: 40,
                  },
                  1280: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  }
                }}
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="bg-gradient-to-b from-gray-900 to-black border-2 border-gray-800 rounded-3xl overflow-hidden h-full transition-all duration-300 hover:border-emerald-500">
                      <div className="p-6 md:p-8">
                        {/* Client Info */}
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <div className="flex items-center gap-4 mb-3">
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center">
                                <span className="text-white text-lg font-bold">
                                  {testimonial.company.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                                <p className="text-gray-400 text-sm">{testimonial.role}</p>
                              </div>
                            </div>
                            <StarRating rating={testimonial.rating} />
                          </div>
                          <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                            <span className="text-emerald-400 text-xs font-semibold">Featured</span>
                          </div>
                        </div>

                        {/* Quote */}
                        <div className="mb-6">
                          <Quote className="w-8 h-8 text-emerald-400/20 mb-4" />
                          <p className="text-gray-300 leading-relaxed">
                            {testimonial.content}
                          </p>
                        </div>

                        {/* Results */}
                        <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-800">
                          {testimonial.results.map((result, i) => (
                            <div key={i} className="text-center">
                              <p className="text-xl font-bold text-white">{result.value}</p>
                              <p className="text-xs text-gray-400">{result.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-8 mt-12">
                <button className="swiper-button-prev-custom group">
                  <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-emerald-500 transition-all">
                    <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-emerald-400" />
                  </div>
                </button>

                <div className="swiper-pagination-custom" />

                <button className="swiper-button-next-custom group">
                  <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-emerald-500 transition-all">
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-400" />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Simple CSS */}
      <style jsx global>{`
        .swiper {
          padding: 20px 0 !important;
        }
        
        .swiper-slide {
          transition: transform 0.3s ease !important;
        }
        
        .swiper-slide-active {
          transform: scale(1.05) !important;
        }
        
        .swiper-pagination-custom {
          display: flex;
          gap: 8px;
          justify-content: center;
        }
        
        .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background: #374151 !important;
          opacity: 0.5;
        }
        
        .swiper-pagination-bullet-active {
          background: #10b981 !important;
          opacity: 1;
        }
        
        /* Hide default Swiper navigation */
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </div>
  );
}