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
    content: "Grovia transformed our marketing approach. The precision targeting and data-driven strategies delivered a 320% ROI in just three months.",
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
    content: "Working with Grovia was a game-changer. Their innovative approach helped us achieve record-breaking Q4 results.",
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
    content: "The level of sophistication in their campaign strategies is exceptional.",
    rating: 5,
    results: [
      { label: "User Acquisition", value: "280%" },
      { label: "Brand Awareness", value: "210%" },
      { label: "CLV", value: "45%" }
    ]
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Marketing Director, CloudScale",
    company: "CloudScale",
    content: "From strategy to execution, every detail was handled with expertise.",
    rating: 5,
    results: [
      { label: "Market Share", value: "155%" },
      { label: "Satisfaction", value: "98%" },
      { label: "Efficiency", value: "60%" }
    ]
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Founder, InnovateAI",
    company: "InnovateAI",
    content: "Adscalfy's data-first approach delivered insights we never considered.",
    rating: 5,
    results: [
      { label: "Series A", value: "100%" },
      { label: "Partner Growth", value: "220%" },
      { label: "Adoption", value: "190%" }
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
          size={16}
          className={i < rating ? 'fill-emerald-400 text-emerald-400' : 'fill-gray-700 text-gray-700'}
        />
      ))}
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black py-12 md:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-xs md:text-sm font-medium tracking-wider">TRUSTED BY INDUSTRY LEADERS</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                TESTIMONIALS
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto px-4">
              What our clients say about working with us
            </p>
          </motion.div>

          {/* Counter */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-900/70 backdrop-blur-md rounded-2xl border border-gray-800">
              <span className="text-emerald-400 font-mono text-xl font-semibold">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <div className="w-px h-5 bg-gray-700" />
              <span className="text-gray-500 text-sm">
                OF {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Swiper */}
          <motion.div variants={itemVariants} className="relative px-2 md:px-8">
            <Swiper
              modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
              effect={'coverflow'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 80,
                modifier: 2.2,
                slideShadows: false,
              }}
              spaceBetween={15}
              slidesPerView={1.1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 4500,
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
                320: { 
                  slidesPerView: 1.05, 
                  spaceBetween: 10 
                },
                480: { 
                  slidesPerView: 1.1, 
                  spaceBetween: 15 
                },
                640: { 
                  slidesPerView: 1.2, 
                  spaceBetween: 20 
                },
                768: { 
                  slidesPerView: 1.4, 
                  spaceBetween: 25 
                },
                1024: { 
                  slidesPerView: 1.7, 
                  spaceBetween: 35 
                },
                1280: { 
                  slidesPerView: 2, 
                  spaceBetween: 40 
                }
              }}
              className="pb-12"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-emerald-500/50 rounded-3xl overflow-hidden h-full transition-all duration-300 shadow-xl">
                    <div className="p-5 md:p-8 lg:p-10">
                      {/* Client Info */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xl font-bold">
                              {testimonial.company.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                              {testimonial.name}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base mt-0.5">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <StarRating rating={testimonial.rating} />
                      </div>

                      {/* Quote */}
                      <div className="mb-8">
                        <Quote className="w-7 h-7 md:w-9 md:h-9 text-emerald-400/30 mb-4" />
                        <p className="text-gray-300 text-[15px] md:text-base leading-relaxed">
                          "{testimonial.content}"
                        </p>
                      </div>

                      {/* Results */}
                      <div className="grid grid-cols-3 gap-3 md:gap-4 pt-6 border-t border-gray-800">
                        {testimonial.results.map((result, i) => (
                          <div key={i} className="text-center bg-gray-950/50 rounded-2xl py-3 px-2">
                            <p className="text-lg md:text-2xl font-bold text-emerald-400">{result.value}</p>
                            <p className="text-[10px] md:text-xs text-gray-500 mt-1 leading-tight">{result.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="flex items-center justify-center gap-6 md:gap-8 mt-8 md:mt-12">
              <button className="swiper-button-prev-custom group">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-gray-900 border border-gray-700 flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                  <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-emerald-400" />
                </div>
              </button>

              <div className="swiper-pagination-custom" />

              <button className="swiper-button-next-custom group">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-gray-900 border border-gray-700 flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-400" />
                </div>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Global Swiper Styles */}
      <style jsx global>{`
        .swiper {
          padding: 10px 0 !important;
        }
        
        .swiper-slide {
          transition: transform 0.4s ease !important;
        }
        
        .swiper-slide-active {
          transform: scale(1.03) !important;
        }

        .swiper-pagination-custom {
          display: flex;
          gap: 6px;
          justify-content: center;
          margin-top: 10px;
        }
        
        .swiper-pagination-bullet {
          width: 7px !important;
          height: 7px !important;
          background: #374151 !important;
          opacity: 0.6;
        }
        
        .swiper-pagination-bullet-active {
          background: #10b981 !important;
          opacity: 1;
          width: 24px !important;
          border-radius: 9999px;
        }

        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </div>
  );
}