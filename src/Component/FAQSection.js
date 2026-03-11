// components/FAQSection.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaPlus, FaMinus, FaQuestionCircle, FaRocket, FaGlobe, FaChartLine, FaUsers, FaCogs, FaSearch } from 'react-icons/fa';

const faqItems = [
    {
        question: "How can Grovia help my business grow online?",
        answer: "Grovia provides comprehensive digital marketing solutions including SEO, social media marketing, performance marketing, and website development. We create customized strategies tailored to your business goals, target audience, and industry to drive measurable growth and increase your online presence.",
        icon: <FaRocket className="w-6 h-6" />,
        category: "Growth"
    },
    {
        question: "How long does it take for Grovia to develop a website?",
        answer: "Website development timelines vary based on complexity and requirements. A basic website typically takes 2-3 weeks, while more complex e-commerce or custom web applications can take 4-8 weeks. We provide detailed project timelines during our initial consultation.",
        icon: <FaGlobe className="w-6 h-6" />,
        category: "Development"
    },
    {
        question: "What is Performance Marketing, and how does Grovia use it?",
        answer: "Performance Marketing is a results-driven approach where you pay only for specific actions like clicks, leads, or sales. We use data-driven strategies across Google Ads, social media ads, and retargeting campaigns to maximize ROI and ensure every dollar spent delivers measurable results.",
        icon: <FaChartLine className="w-6 h-6" />,
        category: "Marketing"
    },
    {
        question: "How does Grovia improve social media presence through SMM?",
        answer: "We develop comprehensive social media strategies including content creation, community management, influencer collaborations, and paid advertising. Our approach focuses on building authentic engagement, increasing brand awareness, and driving conversions across all major social platforms.",
        icon: <FaUsers className="w-6 h-6" />,
        category: "Social Media"
    },
    {
        question: "What is SEO, and why is it important for my website?",
        answer: "SEO (Search Engine Optimization) is the process of improving your website's visibility in search engines. It's crucial because it drives organic traffic, builds credibility, and generates quality leads. We use on-page optimization, technical SEO, and content strategy to improve your search rankings.",
        icon: <FaSearch className="w-6 h-6" />,
        category: "SEO"
    },
    {
        question: "Does Grovia provide ongoing website maintenance and support?",
        answer: "Yes, we offer comprehensive maintenance packages including regular updates, security monitoring, performance optimization, and technical support. Our maintenance plans ensure your website remains secure, fast, and up-to-date with the latest technologies.",
        icon: <FaCogs className="w-6 h-6" />,
        category: "Support"
    },
    {
        question: "How much do Grovia's services cost?",
        answer: "Our pricing is customized based on your specific needs, project scope, and business goals. We offer flexible packages and transparent pricing models. Contact us for a free consultation and personalized quote tailored to your requirements.",
        icon: <FaQuestionCircle className="w-6 h-6" />,
        category: "General"
    }
];

const categories = ["All", "Growth", "Development", "Marketing", "Social Media", "SEO", "Support"];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const filteredFAQs = activeCategory === "All" 
        ? faqItems 
        : faqItems.filter(item => item.category === activeCategory);

    return (
        <section className="py-20 md:py-32 bg-black text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
                
                <motion.div 
                    animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.03, 0.05, 0.03]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-r from-green-900/10 to-emerald-900/5 rounded-full blur-3xl"
                ></motion.div>
                
                <motion.div 
                    animate={{ 
                        scale: [1.1, 1, 1.1],
                        opacity: [0.05, 0.03, 0.05]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-gradient-to-l from-emerald-900/15 to-green-900/10 rounded-full blur-3xl"
                ></motion.div>
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.01]" style={{
                    backgroundImage: `linear-gradient(90deg, rgba(34,197,94,0.05) 1px, transparent 1px),
                                      linear-gradient(0deg, rgba(34,197,94,0.05) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-900/30 to-emerald-900/20 backdrop-blur-md rounded-full border border-green-500/30 mb-8"
                    >
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-medium tracking-wider">
                            FAQ
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6"
                    >
                        Frequently Asked{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">
                            Questions
                        </span>
                    </motion.h2>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <div className="text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Got Questions?
                            </h3>
                            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto mb-4 rounded-full"></div>
                            <p className="text-gray-300 text-lg md:text-xl">
                                We've Got Answers!
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeCategory === category
                                    ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg shadow-green-500/30'
                                    : 'bg-gray-900/50 text-gray-400 border border-green-500/20 hover:border-green-500/40 hover:text-green-300'
                            }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto">
                    {filteredFAQs.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="mb-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.005 }}
                                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-md rounded-2xl border border-green-500/20 overflow-hidden group hover:border-green-500/40 transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-start justify-between hover:bg-gray-800/20 transition-colors"
                                >
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <div className="p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 group-hover:border-green-500/50 transition-colors">
                                            <div className="text-green-400">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="px-3 py-1 bg-green-900/30 text-green-300 text-xs rounded-full border border-green-500/30">
                                                    {item.category}
                                                </span>
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold text-white pr-8">
                                                {item.question}
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="ml-4 text-green-400 text-xl flex-shrink-0"
                                    >
                                        {openIndex === index ? (
                                            <FaMinus className="w-6 h-6" />
                                        ) : (
                                            <FaPlus className="w-6 h-6" />
                                        )}
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2 border-t border-green-500/20">
                                                <div className="pl-14 md:pl-20">
                                                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                                        {item.answer}
                                                    </p>
                                                    
                                                    {/* Additional Info */}
                                                    <div className="mt-6 pt-6 border-t border-green-500/10">
                                                        <div className="flex flex-wrap gap-3">
                                                            <span className="px-3 py-1.5 text-sm bg-green-900/20 text-green-300 rounded-full border border-green-500/20">
                                                                Expert Answer
                                                            </span>
                                                            <span className="px-3 py-1.5 text-sm bg-gray-800/30 text-gray-400 rounded-full border border-gray-700/30">
                                                                Updated Recently
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/10 backdrop-blur-md rounded-3xl border border-green-500/30 p-8 md:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { value: "100+", label: "Happy Clients" },
                                { value: "500+", label: "Projects Completed" },
                                { value: "24/7", label: "Support Available" },
                                { value: "98%", label: "Satisfaction Rate" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                    className="text-center p-4"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{stat.value}</div>
                                    <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div> */}
                {/* </motion.div> */}

                {/* CTA Section */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 md:mt-24"
                >
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            Still Have Questions?
                        </h3>
                        
                        <p className="text-gray-400 mb-8">
                            Can't find what you're looking for? Our team is here to help you 24/7.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300"
                            >
                                Contact Our Team
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-green-500/50 text-green-400 font-bold rounded-full hover:bg-green-500/10 transition-all duration-300"
                            >
                                Schedule a Call
                            </motion.button>
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
}