// components/OurStageProcess.jsx
'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const processSteps = [
    {
        step: "Step 01",
        title: "Understanding Your Business",
        description: "First, we take the time to understand your business, goals, and target audience. We analyze your market, study your competitors, and identify opportunities to create a strong foundation for success.",
    },
    {
        step: "Step 02",
        title: "Creating a Winning Strategy",
        description: "Based on our research, we develop a custom strategy tailored to your needs. We outline the best marketing channels, content plans, and growth tactics to help you attract more customers and achieve measurable results.",
    },
    {
        step: "Step 03",
        title: "Execution & Ongoing Improvement",
        description: "Once the plan is ready, our team gets to work! We build, launch, and optimize your website, ads, and social media campaigns. We also track performance, making continuous improvements to ensure maximum success.",
    },
];

export default function OurStageProcess() {
    const containerRef = useRef(null);

    return (
        <section 
            ref={containerRef}
            className="py-20 md:py-32 bg-black text-white relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
                
                <motion.div 
                    animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.03, 0.05, 0.03]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-20 left-10 w-[400px] h-[400px] bg-gradient-to-r from-green-900/10 to-emerald-900/5 rounded-full blur-3xl"
                ></motion.div>
                
                <motion.div 
                    animate={{ 
                        scale: [1.1, 1, 1.1],
                        opacity: [0.05, 0.03, 0.05]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-l from-emerald-900/15 to-green-900/10 rounded-full blur-3xl"
                ></motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
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
                            HOW WE WORK
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6"
                    >
                        Our Stage{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">
                            Process
                        </span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
                    >
                        A simple yet powerful approach to transforming your digital presence
                    </motion.p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.7, 
                                delay: index * 0.15,
                                type: "spring",
                                stiffness: 100
                            }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="relative group"
                        >
                            {/* Step Number */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10"
                            >
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl shadow-green-500/30">
                                        {index + 1}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card */}
                            <div className={`
                                relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-md 
                                rounded-3xl border border-green-500/20 p-8
                                transition-all duration-500 group-hover:border-green-500/40 
                                group-hover:shadow-2xl group-hover:shadow-green-900/30
                                h-full pt-10
                            `}>
                                {/* Step Label */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="mb-6"
                                >
                                    <div className="inline-block px-4 py-2 bg-green-900/20 rounded-full border border-green-500/30">
                                        <span className="text-green-400 font-medium tracking-wider text-sm">
                                            {step.step}
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Title */}
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight"
                                >
                                    {step.title}
                                </motion.h3>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-gray-300 text-base md:text-lg leading-relaxed mb-8"
                                >
                                    {step.description}
                                </motion.p>

                                {/* NEW: Features List (Progress Bar ki jagah) */}
                                {/* <div className="mb-6">
                                    <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-3">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Key Focus Areas
                                    </div>
                                    <div className="space-y-2">
                                        {index === 0 && (
                                            <>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-sm text-gray-300">Market Analysis</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-sm text-gray-300">Competitor Research</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-sm text-gray-300">Audience Insights</span>
                                                </div>
                                            </>
                                        )}
                                        {index === 1 && (
                                            <>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-sm text-gray-300">Channel Strategy</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-sm text-gray-300">Content Planning</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-sm text-gray-300">KPI Setting</span>
                                                </div>
                                            </>
                                        )}
                                        {index === 2 && (
                                            <>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-sm text-gray-300">Campaign Launch</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-sm text-gray-300">Performance Tracking</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-sm text-gray-300">Continuous Optimization</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div> */}

                                {/* NEW: Stats Card (Bottom Section) */}
                                {/* <div className="mt-6 pt-6 border-t border-green-500/10">
                                    <div className="flex items-center justify-between">
                                        <div className="text-left">
                                            <div className="text-xs text-gray-500">Duration</div>
                                            <div className="text-green-400 font-medium">
                                                {index === 0 ? "1-2 Weeks" : index === 1 ? "2-3 Weeks" : "Ongoing"}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs text-gray-500">Deliverables</div>
                                            <div className="text-white font-medium">
                                                {index === 0 ? "Research Report" : index === 1 ? "Strategy Plan" : "Live Results"}
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-green-500/30 rounded-tl-3xl group-hover:border-green-500/60 transition-all duration-500"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-green-500/30 rounded-tr-3xl group-hover:border-green-500/60 transition-all duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-green-500/30 rounded-bl-3xl group-hover:border-green-500/60 transition-all duration-500"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-green-500/30 rounded-br-3xl group-hover:border-green-500/60 transition-all duration-500"></div>
                                
                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green-500/20 transition-all duration-500 pointer-events-none"></div>
                            </div>

                            {/* Mobile Arrow */}
                            {index < processSteps.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    viewport={{ once: true }}
                                    className="md:hidden flex justify-center my-8"
                                >
                                    <motion.div
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="text-green-400 text-3xl"
                                    >
                                        ↓
                                    </motion.div>
                                </motion.div>
                            )}

                            {/* Desktop Connection Line */}
                            {index < processSteps.length - 1 && (
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-green-500/40 to-emerald-500/20 origin-left"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}