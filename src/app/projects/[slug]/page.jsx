// app/projects/[id]/page.js
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  FaArrowLeft,
  FaRocket,
  FaChartLine,
  FaLightbulb,
  FaCheckCircle,
  FaGlobe,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaIndustry,
  FaArrowUp,
  FaShareAlt,
  FaDownload,
  FaChevronRight,
  FaStar
} from 'react-icons/fa';
import { FiTrendingUp, FiTarget, FiUsers, FiDollarSign } from 'react-icons/fi';
// Projects Data Array (6 Projects)
const projectsData = [
  {
    id: "ojea",
    title: "Ojea",
    tagline: "From Clicks to Conversions: Elevating Ojea with Meta, Google & Snapchat Ads",
    category: "E-commerce",
    industry: "Skin Care",
    location: "United State",
    duration: "6 Months",
    year: "2024",
    heroStats: [
      { value: "350%", label: "Revenue Growth", icon: <FiTrendingUp /> },
      { value: "8.2x", label: "ROAS", icon: <FiDollarSign /> },
      { value: "42%", label: "Conversion Rate", icon: <FiTarget /> },
      { value: "1200+", label: "New Customers", icon: <FiUsers /> }
    ],
    overview: "Russet redefined luxury men's jewelry in United State through a comprehensive digital transformation. We implemented a multi-platform strategy that turned social engagement into sustainable revenue.",
    challenge: "Despite strong brand recognition, Russet struggled with converting online engagement into sales. Their digital presence lacked strategic direction and measurable ROI.",
    solution: "We deployed an integrated marketing ecosystem combining Meta, Google, and Snapchat ads with advanced analytics, audience segmentation, and conversion optimization.",
    approach: [
      { title: "Strategy Development", description: "Comprehensive market analysis and competitive positioning", icon: "🎯" },
      { title: "Multi-Platform Campaigns", description: "Meta for awareness, Google for intent, Snapchat for youth engagement", icon: "📱" },
      { title: "Audience Segmentation", description: "High-value customer profiling and personalized targeting", icon: "👥" },
      { title: "Conversion Optimization", description: "A/B testing, landing page optimization, and funnel refinement", icon: "📊" }
    ],
    results: [
      { metric: "Monthly Revenue", before: "$15K", after: "$67.5K", growth: "350%" },
      { metric: "Customer Acquisition", before: "85/month", after: "1200+", growth: "1312%" },
      { metric: "Website Traffic", before: "8.2K", after: "34.4K", growth: "320%" },
      { metric: "Social Engagement", before: "2.4%", after: "8.7%", growth: "263%" }
    ],
    technologies: [
      { name: "Meta Ads Manager", color: "from-blue-500 to-blue-700" },
      { name: "Google Analytics 4", color: "from-orange-500 to-red-500" },
      { name: "Snapchat Ads", color: "from-yellow-400 to-yellow-600" },
      { name: "Shopify Plus", color: "from-green-500 to-emerald-700" },
      { name: "Hotjar", color: "from-purple-500 to-pink-600" },
      { name: "Klaviyo", color: "from-teal-500 to-cyan-600" }
    ],
    testimonial: {
      quote: "The team at Grovia Studio transformed our digital presence completely. Their data-driven approach delivered results we never thought possible.",
      author: "Ahmed Khan",
      position: "CEO, Russet Jewelry",
      avatar: "RK"
    },
    colors: {
      primary: "from-green-500 to-emerald-600",
      secondary: "from-emerald-400 to-green-500",
      accent: "from-lime-400 to-green-400"
    },
    gradient: "bg-gradient-to-br from-gray-900 via-black to-emerald-900/20"
  },
  {
     id: "freefly",
    title: "Free Fly",
    tagline: "Revolutionizing Digital Presence for Premium Apparel Brand",
    category: "Fashion",
    industry: "Apparel",
    location: "United State",
    duration: "8 Months",
    year: "2023",
    heroStats: [
      { value: "280%", label: "Online Sales", icon: <FiTrendingUp /> },
      { value: "450%", label: "Brand Awareness", icon: <FiTarget /> },
      { value: "65%", label: "Social Engagement", icon: <FiUsers /> },
      { value: "22%", label: "Market Share", icon: <FiDollarSign /> }
    ],
    overview: "Transformed Jockey's digital marketing strategy to dominate the premium innerwear market with targeted campaigns and innovative approaches.",
    challenge: "Need to modernize digital presence, increase direct-to-consumer sales, and compete with emerging digital-first brands.",
    solution: "Complete digital overhaul with focus on performance marketing, brand storytelling, and omnichannel customer experience.",
    approach: [
      { title: "Brand Positioning", description: "Repositioning in digital space as premium lifestyle brand", icon: "⭐" },
      { title: "Omnichannel Strategy", description: "Seamless integration of online and offline customer journeys", icon: "🔄" },
      { title: "Influencer Marketing", description: "Strategic partnerships with fashion influencers", icon: "📣" },
      { title: "Retargeting Funnels", description: "Advanced retargeting sequences for abandoned carts", icon: "🎯" }
    ],
    results: [
      { metric: "E-commerce Revenue", before: "$45K", after: "$171K", growth: "280%" },
      { metric: "Social Followers", before: "25K", after: "112.5K", growth: "350%" },
      { metric: "Email Subscribers", before: "8K", after: "36K", growth: "350%" },
      { metric: "Mobile Conversions", before: "18%", after: "45%", growth: "150%" }
    ],
    technologies: [
      { name: "Instagram Shopping", color: "from-pink-500 to-purple-600" },
      { name: "Google Shopping Ads", color: "from-blue-500 to-cyan-600" },
      { name: "Klaviyo", color: "from-teal-500 to-emerald-600" },
      { name: "Shopify Plus", color: "from-green-500 to-green-700" },
      { name: "TikTok Ads", color: "from-black to-gray-800" },
      { name: "Youtube Ads", color: "from-red-500 to-red-700" }
    ],
    testimonial: {
      quote: "Grovia Studio helped us achieve digital excellence. Their strategic approach increased our online sales by 280% in just 8 months.",
      author: "Sarah Johnson",
      position: "Digital Marketing Head, Jockey",
      avatar: "SJ"
    },
    colors: {
      primary: "from-blue-500 to-cyan-600",
      secondary: "from-cyan-400 to-blue-500",
      accent: "from-sky-400 to-blue-400"
    },
    gradient: "bg-gradient-to-br from-gray-900 via-black to-blue-900/20"
  },
  {
    id: "tulips",
    title: "Tulips",
    tagline: "Digital Transformation for Traditional Textile Business",
    category: "E-commerce",
    industry: "Textile",
    location: "Global",
    duration: "1 Year",
    year: "2023",
    heroStats: [
      { value: "410%", label: "Revenue Growth", icon: <FiTrendingUp /> },
      { value: "320%", label: "Website Traffic", icon: <FiTarget /> },
      { value: "35%", label: "Average Order Value", icon: <FiUsers /> },
      { value: "48%", label: "Repeat Customers", icon: <FiDollarSign /> }
    ],
    overview: "Bringing traditional textile business into digital age with modern e-commerce solutions and integrated digital marketing strategy.",
    challenge: "Traditional family business with strong offline presence but struggling with online sales and digital customer acquisition.",
    solution: "Complete e-commerce setup with customized digital marketing strategy targeting wedding planners, designers, and retail customers.",
    approach: [
      { title: "E-commerce Development", description: "Custom Shopify store with fabric visualization tools", icon: "🛒" },
      { title: "Content Strategy", description: "Educational content about fabrics and textiles", icon: "📝" },
      { title: "B2B Lead Generation", description: "Targeting wedding planners and fashion designers", icon: "💼" },
      { title: "WhatsApp Commerce", description: "Integrated WhatsApp ordering system", icon: "💬" }
    ],
    results: [
      { metric: "Online Revenue", before: "$8K", after: "$40.8K", growth: "410%" },
      { metric: "Monthly Orders", before: "45", after: "216", growth: "380%" },
      { metric: "B2B Clients", before: "12", after: "58", growth: "383%" },
      { metric: "International Orders", before: "0%", after: "35%", growth: "∞" }
    ],
    technologies: [
      { name: "Shopify", color: "from-green-500 to-emerald-700" },
      { name: "WhatsApp Business API", color: "from-green-600 to-green-800" },
      { name: "Google My Business", color: "from-blue-500 to-blue-700" },
      { name: "Facebook Marketplace", color: "from-blue-600 to-blue-800" },
      { name: "Email Marketing", color: "from-orange-500 to-red-600" },
      { name: "SEO Optimization", color: "from-purple-500 to-pink-600" }
    ],
    testimonial: {
      quote: "As a traditional business, we were hesitant about digital transformation. Grovia Studio made it seamless and profitable.",
      author: "Ali Raza",
      position: "Owner, Shaad Fabrics",
      avatar: "AR"
    },
    colors: {
      primary: "from-purple-500 to-pink-600",
      secondary: "from-pink-400 to-purple-500",
      accent: "from-fuchsia-400 to-pink-400"
    },
    gradient: "bg-gradient-to-br from-gray-900 via-black to-purple-900/20"
  },
  {
     id: "blackbieger",
    title: "Black Bieger",
    tagline: "Footwear Marketing Excellence in Digital Space",
    category: "Footwear",
    industry: "Fashion",
    location: "United State",
    duration: "7 Months",
    year: "2024",
    heroStats: [
      { value: "600%", label: "User Growth", icon: <FiTrendingUp /> },
      { value: "15K+", label: "Active Users", icon: <FiTarget /> },
      { value: "4.8/5", label: "Customer Rating", icon: <FiUsers /> },
      { value: "$2.5M", label: "ARR", icon: <FiDollarSign /> }
    ],
    overview: "Launch and scale of AI-powered SaaS product with comprehensive go-to-market strategy and user acquisition funnel.",
    challenge: "Highly competitive SaaS market with low conversion rates and high customer acquisition costs.",
    solution: "Data-driven product-led growth strategy with focus on user onboarding, retention, and viral marketing.",
    approach: [
      { title: "Product-Led Growth", description: "Freemium model with seamless onboarding", icon: "🚀" },
      { title: "Content Marketing", description: "Technical blog posts and tutorials", icon: "📚" },
      { title: "Community Building", description: "Developer community and Discord channel", icon: "👨‍💻" },
      { title: "Enterprise Sales", description: "Targeted outreach to enterprise clients", icon: "🏢" }
    ],
    results: [
      { metric: "Monthly Active Users", before: "0", after: "15,000+", growth: "∞" },
      { metric: "Conversion Rate", before: "1.2%", after: "8.7%", growth: "625%" },
      { metric: "Customer LTV", before: "$120", after: "$850", growth: "608%" },
      { metric: "Churn Rate", before: "12%", after: "3.2%", growth: "-73%" }
    ],
    technologies: [
      { name: "HubSpot", color: "from-orange-500 to-red-600" },
      { name: "Intercom", color: "from-blue-500 to-blue-700" },
      { name: "Google Cloud", color: "from-blue-400 to-blue-600" },
      { name: "Segment", color: "from-purple-500 to-purple-700" },
      { name: "Amplitude", color: "from-green-500 to-green-700" },
      { name: "Stripe", color: "from-blue-600 to-indigo-700" }
    ],
    testimonial: {
      quote: "Grovia Studio's growth strategy helped us achieve 600% user growth in just one year. Their SaaS expertise is unparalleled.",
      author: "Michael Chen",
      position: "CEO, Tech Innovators",
      avatar: "MC"
    },
    colors: {
      primary: "from-orange-500 to-red-600",
      secondary: "from-red-400 to-orange-500",
      accent: "from-amber-400 to-orange-400"
    },
    gradient: "bg-gradient-to-br from-gray-900 via-black to-orange-900/20"
  },
  {
    id: "faster",
    title: "Faster",
    tagline: "Scaling Apparel Business with Digital Solutions",
    category: "Apparel",
    industry: "Fashion",
    location: "United State",
    duration: "6 Months",
    year: "2023",
    heroStats: [
      { value: "520%", label: "Sales Growth", icon: <FiTrendingUp /> },
      { value: "85%", label: "Brand Recall", icon: <FiTarget /> },
      { value: "10K+", label: "Social Advocacy", icon: <FiUsers /> },
      { value: "4.9/5", label: "Trust Score", icon: <FiDollarSign /> }
    ],
    overview: "Building a sustainable consumer brand with authentic storytelling and eco-conscious marketing strategies.",
    challenge: "Establishing brand credibility in crowded sustainable products market with skeptical consumers.",
    solution: "Authentic brand storytelling, influencer partnerships with eco-activists, and transparent supply chain communication.",
    approach: [
      { title: "Brand Storytelling", description: "Authentic narratives about sustainability impact", icon: "📖" },
      { title: "Influencer Collaboration", description: "Partnerships with eco-conscious creators", icon: "🤝" },
      { title: "Community Engagement", description: "Building loyal customer community", icon: "👥" },
      { title: "Retail Expansion", description: "Strategic placement in eco-friendly stores", icon: "🏪" }
    ],
    results: [
      { metric: "Retail Presence", before: "5 stores", after: "85 stores", growth: "1600%" },
      { metric: "Social Media Reach", before: "2K", after: "250K", growth: "12400%" },
      { metric: "Repeat Purchase Rate", before: "15%", after: "68%", growth: "353%" },
      { metric: "B2B Partnerships", before: "3", after: "42", growth: "1300%" }
    ],
    technologies: [
      { name: "Canva", color: "from-blue-400 to-purple-600" },
      { name: "Later", color: "from-pink-500 to-rose-600" },
      { name: "Klaviyo", color: "from-teal-500 to-emerald-600" },
      { name: "Growave", color: "from-purple-500 to-pink-600" },
      { name: "Yotpo", color: "from-blue-500 to-blue-700" },
      { name: "Instagram Reels", color: "from-pink-600 to-purple-700" }
    ],
    testimonial: {
      quote: "Grovia Studio helped us build a brand that people believe in. Our sales grew 520% while staying true to our sustainable values.",
      author: "Emma Wilson",
      position: "Founder, Eco Fresh",
      avatar: "EW"
    },
    colors: {
      primary: "from-teal-500 to-emerald-600",
      secondary: "from-emerald-400 to-teal-500",
      accent: "from-green-400 to-teal-400"
    },
    gradient: "bg-gradient-to-br from-gray-900 via-black to-teal-900/20"
  },
  {
    id: "tiffany",
    title: "Tiffany&Co",
    tagline: "Premium diamonds & fine jewelry, made to shine everyday.",
    category: "Jwellery",
    industry: "Fashion",
    location: "United State",
    duration: "9 Months",
    year: "2024",
    heroStats: [
      { value: "420%", label: "App Downloads", icon: <FiTrendingUp /> },
      { value: "92%", label: "User Retention", icon: <FiTarget /> },
      { value: "25K+", label: "Active Members", icon: <FiUsers /> },
      { value: "4.7/5", label: "App Store Rating", icon: <FiDollarSign /> }
    ],
    overview: "Launch and scaling of digital fitness platform with personalized workout plans and community features.",
    challenge: "High competition in fitness app market with low user retention and engagement rates.",
    solution: "Gamified fitness experience, personalized AI workout plans, and strong community building features.",
    approach: [
      { title: "App Store Optimization", description: "Strategic ASO for fitness category", icon: "📱" },
      { title: "Influencer Marketing", description: "Fitness influencer takeovers and challenges", icon: "💪" },
      { title: "Referral Program", description: "Viral referral system with rewards", icon: "🎁" },
      { title: "Corporate Partnerships", description: "B2B partnerships with companies", icon: "🏢" }
    ],
    results: [
      { metric: "Monthly Active Users", before: "0", after: "25,000+", growth: "∞" },
      { metric: "Subscription Revenue", before: "$0", after: "$125K/month", growth: "∞" },
      { metric: "User Engagement", before: "2.1 min/day", after: "28 min/day", growth: "1233%" },
      { metric: "App Store Ranking", before: "#1500", after: "#12 Fitness", growth: "Top 20" }
    ],
    technologies: [
      { name: "Firebase", color: "from-yellow-500 to-orange-600" },
      { name: "RevenueCat", color: "from-purple-500 to-pink-600" },
      { name: "Braze", color: "from-blue-500 to-cyan-600" },
      { name: "Appsflyer", color: "from-blue-600 to-blue-800" },
      { name: "Branch", color: "from-green-500 to-green-700" },
      { name: "OneSignal", color: "from-blue-400 to-blue-600" }
    ],
    testimonial: {
      quote: "Grovia Studio's app launch strategy helped us achieve 25,000+ active users in just 7 months. Their fitness tech expertise was invaluable.",
      author: "David Miller",
      position: "Co-Founder, Fitness Plus",
      avatar: "DM"
    },
    colors: {
      primary: "from-red-500 to-orange-600",
      secondary: "from-orange-400 to-red-500",
      accent: "from-amber-400 to-red-400"
    },
    gradient: "bg-gradient-to-br from-gray-900 via-black to-red-900/20"
  }
];
export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug;

  console.log(slug)
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Manual scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if in view
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });

  // Find project
  const project = projectsData.find(p => p.id === slug);
  console.log(project)
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/ShowProjects" className="text-green-400 hover:text-green-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Animation variants
  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 150, 0],
            rotate: [360, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/5 to-green-500/5 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-green-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/projects"
              className="group flex items-center gap-3 text-green-400 hover:text-green-300 transition-all"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Case Studies</span>
            </Link>

            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                <FaShareAlt />
                <span className="hidden sm:inline">Share</span>
              </button>
              <button className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                <FaDownload />
                <span className="hidden sm:inline">PDF</span>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className={`absolute inset-0 ${project.gradient} opacity-50`} />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-green-900/30 backdrop-blur-sm rounded-full border border-green-500/30"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 font-medium">CASE STUDY • {project.year}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 bg-clip-text text-transparent">
              {project.title}
            </span>
            <br />
            <span className="text-white/90">Transformation</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/80 max-w-4xl mb-12"
          >
            {project.tagline}
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          >
            {project.heroStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-green-900/30 hover:border-green-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-green-400 text-xl">
                    {stat.icon}
                  </div>
                  <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${project.colors.primary} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                </div>
                <div className="text-white/70 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { icon: <FaMapMarkerAlt />, label: "Location", value: project.location },
              { icon: <FaCalendarAlt />, label: "Duration", value: project.duration },
              { icon: <FaIndustry />, label: "Industry", value: project.industry },
              { icon: <FaGlobe />, label: "Category", value: project.category }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-green-400">{item.icon}</div>
                  <div className="text-white/70 text-sm">{item.label}</div>
                </div>
                <div className="text-white font-medium">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-green-400 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-green-500/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Project <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Overview</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {project.overview}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaRocket className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Strategic Approach</h4>
                    <p className="text-white/70">Data-driven methodology with measurable KPIs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaChartLine className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Performance Focus</h4>
                    <p className="text-white/70">Continuous optimization based on real-time analytics</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge & Solution Cards */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="bg-gradient-to-br from-gray-900/50 to-black p-6 rounded-2xl border border-red-500/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-900/30 flex items-center justify-center">
                    <span className="text-xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">The Challenge</h3>
                </div>
                <p className="text-white/80">{project.challenge}</p>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="bg-gradient-to-br from-gray-900/50 to-black p-6 rounded-2xl border border-green-500/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-900/30 flex items-center justify-center">
                    <span className="text-xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Solution</h3>
                </div>
                <p className="text-white/80">{project.solution}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Methodology</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              A step-by-step approach that ensured success at every stage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.approach.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                <div className="relative bg-gradient-to-br from-gray-900/50 to-black rounded-2xl p-6 border border-white/10 group-hover:border-green-500/50 transition-all h-full">
                  <div className="text-3xl mb-4">{step.icon}</div>
                  <div className="text-2xl mb-2 font-bold text-white">{index + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Measurable <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Quantifiable impact that transformed the business
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Results Table */}
            <div className="space-y-6">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{result.metric}</h4>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-white/60">Before: {result.before}</span>
                        <FaChevronRight className="text-green-400" />
                        <span className="text-white">After: {result.after}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.colors.primary} text-white font-bold`}>
                      {result.growth}
                    </div>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Technologies & Platforms</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-br ${tech.color} rounded-xl p-4 text-center`}
                  >
                    <div className="text-white font-medium">{tech.name}</div>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 bg-gradient-to-br from-gray-900/50 to-black rounded-2xl p-6 border border-green-900/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                    {project.testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{project.testimonial.author}</h4>
                    <p className="text-green-400 text-sm">{project.testimonial.position}</p>
                  </div>
                </div>
                <p className="text-white/80 italic">"{project.testimonial.quote}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/50 to-black rounded-3xl p-8 md:p-12 border border-green-900/30"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Your Business</span>?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can achieve similar results for your brand
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-green-500/30 transition-all"
              >
                Start Your Project
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border border-green-500/30 text-green-400 font-bold rounded-full hover:bg-green-900/20 transition-all"
              >
                Book a Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 z-50 origin-left"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Back to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: scrollProgress > 0.1 ? 1 : 0,
          scale: scrollProgress > 0.1 ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/30 z-40"
      >
        <FaArrowUp />
      </motion.button>
    </main>
  );
}