'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CheckCircle, Star, TrendingUp, Users, Target, ChevronDown, X, Menu } from 'lucide-react';

export default function ReviewsSection() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const allReviews = [
    {
      id: 1,
      client: "Jockey",
      logo: "J",
      review: "Adscality played a pivotal role in enhancing our digital presence. Their expertise in performance marketing and strategic ad placements led to a significant increase in our online sales.",
      rating: 5
    },
    {
      id: 2,
      client: "Shaad Fabrics",
      logo: "SF",
      review: "Before partnering with Adscality, we struggled with optimizing our online sales funnel. Their team restructured our Meta and Google Ads strategy, which resulted in a drastic improvement.",
      rating: 5
    },
    {
      id: 3,
      client: "Jenpharm",
      logo: "JP",
      review: "As a brand in the pharmaceutical and skincare industry, finding the right marketing approach was challenging. Adscality's innovative ad creatives helped us achieve remarkable growth.",
      rating: 5
    },
    {
      id: 4,
      client: "Faster",
      logo: "F",
      review: "We wanted to scale our online sales while maintaining profitability, and Adscality delivered beyond expectations. Their strategic ad campaigns helped us grow our revenue significantly.",
      rating: 5
    },
    {
      id: 5,
      client: "TechCorp",
      logo: "TC",
      review: "Working with Adscality transformed our digital marketing strategy. Their data-driven approach increased our conversion rates by 300% in just 3 months.",
      rating: 5
    },
    {
      id: 6,
      client: "StyleHub",
      logo: "SH",
      review: "The team at Adscality understood our fashion brand perfectly. Their creative campaigns helped us reach a wider audience and boost sales by 150%.",
      rating: 5
    },
    {
      id: 7,
      client: "FoodieDelight",
      logo: "FD",
      review: "As a food delivery service, Adscality's hyper-local targeting strategies helped us dominate the market. Our orders increased by 400% in 6 months.",
      rating: 5
    },
    {
      id: 8,
      client: "EduTech Pro",
      logo: "ET",
      review: "Adscality's educational marketing approach helped us connect with the right audience. Student enrollment increased by 250% through their targeted campaigns.",
      rating: 5
    }
  ];

  // Debugging
  console.log("showAllReviews state:", showAllReviews);
  console.log("Total reviews:", allReviews.length);
  console.log("Showing reviews:", showAllReviews ? allReviews.length : 4);

  // Only show 4 reviews initially, then show all when clicked
  const displayedReviews = showAllReviews ? allReviews : allReviews.slice(0, 4);

  const handleShowMore = () => {
    console.log("Button clicked! Current state:", showAllReviews);
    setShowAllReviews(!showAllReviews);
  };

  // Handle scroll for navbar animation
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Show navbar when scrolling up, hide when at top
      if (window.scrollY > 300) {
        setIsNavbarVisible(true);
      } else if (window.scrollY < 50) {
        setIsNavbarVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar Animation Variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Navbar */}
     
      {/* Banner - Now below navbar */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-green-900/10 to-black">
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
          />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-900/30 rounded-full border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">SUCCESS STORIES</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
              Success Stories
            </span>
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Discover how leading brands transformed their digital presence and achieved remarkable growth with our data-driven strategies.
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: <TrendingUp size={28} />, value: "4.8x", label: "Average Growth", color: "from-green-500 to-emerald-500" },
              { icon: <Users size={28} />, value: "200+", label: "Happy Clients", color: "from-emerald-500 to-green-600" },
              { icon: <Target size={28} />, value: "98%", label: "Success Rate", color: "from-green-600 to-emerald-600" },
              { icon: <Star size={28} />, value: "4.9/5", label: "Satisfaction", color: "from-emerald-600 to-green-700" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-xl shadow-green-500/20 group-hover:shadow-green-500/40 transition-shadow`}>
                  <div className="text-white">{stat.icon}</div>
                </div>
                <span className="text-3xl font-bold text-white block mb-1">{stat.value}</span>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

        
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-500"></div>
              <span className="text-green-400 font-medium">TESTIMONIALS</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Voices of <span className="text-green-500">Success</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Real feedback from industry leaders who transformed their business with our solutions
            </p>
          </motion.div>

          {/* Reviews Grid */}
          <motion.div
            key={showAllReviews ? 'all-reviews' : 'partial-reviews'} // Yeh add kiya hai - important!
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: false, amount: 0.1 }} // once false kar diya
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {displayedReviews.map((review) => (
              <motion.div
                key={review.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group"
              >
                {/* Client Header */}
                <div className="flex items-start mb-8">
                  <motion.div 
                    whileHover={{ rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-6 shadow-lg shadow-green-500/20"
                  >
                    {review.logo}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{review.client}</h3>
                      <CheckCircle className="text-green-500" size={24} />
                    </div>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={20}
                          className={i < review.rating ? "fill-green-500 text-green-500" : "fill-gray-700 text-gray-700"}
                        />
                      ))}
                      <span className="text-green-400 ml-2 font-bold">{review.rating}.0</span>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative">
                  <div className="absolute -top-6 -left-6 text-6xl text-green-500/10 font-serif">"</div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {review.review}
                  </p>
                  <div className="absolute -bottom-6 -right-6 text-6xl text-green-500/10 font-serif rotate-180">"</div>
                </div>

                {/* Quote Line */}
                <div className="mt-8 pt-6 border-t border-gray-800 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full"></div>
                  <div className="text-green-400/50 text-sm text-center">
                    Verified Client • Success Story
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Show More/Less Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={handleShowMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-green-900/30 to-black border border-green-500/30 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 mx-auto hover:border-green-500/60 transition-all"
            >
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                {showAllReviews ? 'Show Less Reviews' : `Load More Success Stories (${allReviews.length - 4} more)`}
              </span>
              <motion.div
                animate={{ rotate: showAllReviews ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-green-400 group-hover:translate-y-1 transition-transform" />
              </motion.div>
            </motion.button>
            
            <div className="mt-4">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-green-400 text-sm font-medium">
                    {displayedReviews.length} of {allReviews.length} reviews shown
                  </span>
                </div>
              </div>
              <p className="text-gray-500 mt-2 text-sm">
                Click to {showAllReviews ? 'show less' : 'view all'} success stories
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-black to-black"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-900/20 to-black border border-green-500/20 rounded-3xl p-12 backdrop-blur-sm"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-900/30 rounded-full border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">READY TO JOIN?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Write Your <span className="text-green-400">Success Story</span>?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Join our family of 200+ satisfied clients and experience transformational growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-green-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-green-500/30 text-green-400 font-bold px-8 py-4 rounded-full hover:bg-green-900/20 transition-all duration-300"
              >
                View All Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

     
    </main>
  );
}