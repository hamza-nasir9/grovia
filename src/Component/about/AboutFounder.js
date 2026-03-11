// components/AboutFounder.jsx
'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';
import { useState } from 'react';
import founder from '@/assets/founder.png';
import Image from 'next/image';

export default function AboutFounder() {
    const [activeAccolade, setActiveAccolade] = useState(null);

    const accolades = [
        {
            icon: <FaLightbulb className="w-8 h-8" />,
            title: "Visionary Thinker",
            description: "Transforming digital landscapes with innovative strategies"
        },
        {
            icon: <FaChartLine className="w-8 h-8" />,
            title: "Results Driven",
            description: "Consistently delivering measurable ROI for clients"
        },
        {
            icon: <FaUsers className="w-8 h-8" />,
            title: "Empathetic Leader",
            description: "Building teams that thrive on collaboration and growth"
        },
        {
            icon: <FaTrophy className="w-8 h-8" />,
            title: "Industry Pioneer",
            description: "Setting new standards in digital marketing excellence"
        },
    ];

    const stats = [
        { value: "10+", label: "Years Experience" },
        { value: "500+", label: "Projects Delivered" },
        { value: "200+", label: "Happy Clients" },
        { value: "15+", label: "Industry Awards" },
    ];

    return (
        <section className="py-20 md:py-32 bg-black text-white relative overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient mesh */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

                {/* Animated orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-green-900/10 to-emerald-900/5 rounded-full blur-3xl"
                ></motion.div>

                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.15, 0.1, 0.15]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-gradient-to-l from-emerald-900/15 to-green-900/10 rounded-full blur-3xl"
                ></motion.div>

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px),
                            linear-gradient(0deg, rgba(34,197,94,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-900/30 to-emerald-900/20 backdrop-blur-md rounded-full border border-green-500/30 mb-8"
                    >
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-medium tracking-wider">
                            BEHIND THE VISION
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
                    >
                        Meet The{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-400 to-green-300">
                            Founder
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
                    >
                        The visionary behind Grovia's success story
                    </motion.p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column - Founder Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Founder Name & Title */}
                        <div className="mb-8">
                            <h3 className="text-3xl md:text-4xl font-bold mb-2">
                                <span className="text-white">Smith</span>{' '}
                                <span className="text-green-400">Janson</span>
                            </h3>
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
                                <span className="text-gray-400 text-lg">Founder & CEO</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p className="text-lg">
                                With a <span className="text-green-400 font-semibold">strategic mindset</span> and a passion for digital innovation, Shahbaz Fayyaz has redefined how brands establish, grow, and succeed online.
                            </p>

                            <p className="text-lg">
                                His expertise in <span className="text-green-400">performance marketing</span>, <span className="text-green-400">SEO</span>, <span className="text-green-400">social media marketing</span>, and <span className="text-green-400">website development</span> has shaped Grovia into a trusted name in the digital marketing industry.
                            </p>

                            <p className="text-lg">
                                With years of experience in digital marketing, Shahbaz Fayyaz has been instrumental in shaping Grovia's growth and success. His passion for <span className="text-green-400">innovation</span>, strategic execution, and client-centric solutions has established the agency as a trusted partner for businesses looking to scale.
                            </p>
                        </div>


                        {/* Accolades Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {accolades.map((accolade, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        scale: 1.05,
                                        borderColor: 'rgba(34, 197, 94, 0.4)',
                                        backgroundColor: 'rgba(34, 197, 94, 0.1)'
                                    }}
                                    onMouseEnter={() => setActiveAccolade(index)}
                                    onMouseLeave={() => setActiveAccolade(null)}
                                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl border border-green-500/20 p-4 text-center cursor-pointer transition-all duration-300"
                                >
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <div className="text-green-400 mb-3">
                                            {accolade.icon}
                                        </div>
                                        <h4 className="font-bold text-white mb-2">{accolade.title}</h4>
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                                opacity: activeAccolade === index ? 1 : 0,
                                                height: activeAccolade === index ? 'auto' : 0
                                            }}
                                            className="text-sm text-gray-400 overflow-hidden"
                                        >
                                            {accolade.description}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Founder Image & Accolades */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Image Container */}
                        {/* // Assuming 'founder' is a valid image URL or import */}

                        {/* import Image from 'next/image'; */}

                        {/* // Agar aapke pass image URL hai */}
                        <div className="relative mb-12">
                            <div className="relative rounded-3xl overflow-hidden">
                                {/* Glow border effect */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-emerald-400/10 to-green-500/20 rounded-3xl blur-xl opacity-50"></div>

                                {/* Main image container */}
                                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border-2 border-green-500/30">
                                    <div className="aspect-[3/4] relative">

                                        {/* NEXT.JS IMAGE COMPONENT */}
                                        <Image
                                            src={founder}
                                            alt="Shahbaz Fayyaz - Founder & CEO"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 400px"
                                            priority
                                        />

                                        {/* Overlay gradient for better text visibility */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                        {/* Content overlay */}
                                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end p-8">
                                            <div className="text-center">
                                                {/* Founder initials as fallback */}
                                                {/* <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/20 border-4 border-green-500/40 flex items-center justify-center text-5xl font-bold text-green-300 backdrop-blur-md">
                                                    SF
                                                </div> */}
                                                {/* <div className="text-white text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">Shahbaz Fayyaz</div>
                                                <div className="text-gray-300 text-lg md:text-xl">Founder & CEO</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Position badge */}
                            {/* <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                                <div className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-full shadow-2xl shadow-green-500/30">
                                    Visionary Leader
                                </div>
                            </div> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}