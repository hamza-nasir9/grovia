// components/PricingPage.jsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaCheck,
  FaTimes,
  FaRocket,
  FaChartLine,
  FaCrown,
  FaGlobe,
  FaSearch,
  FaHashtag,
  FaLayerGroup,
  FaClock,
  FaStar,
  FaCode,
  FaMobile,
  FaShieldAlt,
  FaSync
} from 'react-icons/fa';

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const services = {
    social: {
      name: "Marketing ",
      title: "Digital Marketing & Management",
      description: "Grow your brand presence across all social platforms",
      plans: [
        {
          name: "Basic",
          price: "$499",
          period: "/month",
          icon: <FaHashtag className="w-8 h-8" />,
          color: "from-green-500 to-emerald-400",
          features: [
            { text: "2 Platforms Management ", included: true },
            { text: "Meta & Tiktok", included: true },
            { text: "12 Posts Monthly", included: true },
            { text: "Basic Content Creation", included: true },
            { text: "Community Management", included: true },
            { text: "Monthly Analytics Report", included: true },
            { text: "Paid Campaign Management", included: false },
            { text: "Influencer Collaboration", included: false },
            { text: "Video Content Creation", included: false },
          ],
          popular: false
        },
        {
          name: "Intermediate",
          price: "$799",
          period: "/month",
          icon: <FaChartLine className="w-8 h-8" />,
          color: "from-emerald-400 to-green-300",
          features: [
            { text: "4 Platforms Management", included: true },
            { text: "Meta, Google, TikTok, Snapchat", included: true },
            { text: "24 Posts Monthly", included: true },
            { text: "Professional Content Creation", included: true },
            { text: "Active Community Engagement", included: true },
            { text: "Weekly Analytics Report", included: true },
            { text: "Meta Ads", included: true },
            { text: "Micro-Influencer Collaboration", included: true },
            { text: "Basic Video Content", included: false },
            { text: "Brand Positioning", included: false },
            { text: "Tiktok & Snapchat Paid Ads", included: false },
          ],
          popular: true
        },
        {
          name: "Advanced",
          price: "$1,299",
          period: "/month",
          icon: <FaCrown className="w-8 h-8" />,
          color: "from-green-600 to-emerald-500",
          features: [
            { text: "All Platform Management", included: true },
            { text: "All Platform Paid Ads", included: true },
            { text: "Unlimited Posts", included: true },
            { text: "Premium Content Creation", included: true },
            { text: "24/7 Community Management", included: true },
            { text: "Daily Analytics Reports", included: true },
            { text: "Advanced Paid Campaigns", included: true },
            { text: "Major Influencer Collaboration", included: true },
            { text: "Professional Video Content", included: true },
            { text: "Brand Positioning", included: true },
          ],
          popular: false
        }
      ]
    },
    web: {
      name: "Website ",
      title: "Website Design & Development",
      description: "Complete web solutions from simple sites to complex applications",
      plans: [
        {
          name: "Basic",
          price: "$399",
          period: "One Time",
          icon: <FaGlobe className="w-8 h-8" />,
          color: "from-green-500 to-emerald-400",
          features: [
            { text: "5 Pages Website", included: true },
            { text: "Responsive Design", included: true },
            { text: "Contact Form", included: true },
            { text: "Basic SEO Setup", included: true },
            { text: "1 Month Support", included: true },
            { text: "E-commerce Functionality", included: false },
            { text: "Custom Animations", included: false },
            { text: "Advanced Analytics", included: false },
          ],
          popular: false
        },
        {
          name: "Intermediate",
          price: "$749",
          period: "One Time",
          icon: <FaChartLine className="w-8 h-8" />,
          color: "from-emerald-400 to-green-300",
          features: [
            { text: "10 Pages Website", included: true },
            { text: "Fully Responsive", included: true },
            { text: "Advanced Contact Forms", included: true },
            { text: "On-page SEO", included: true },
            { text: "3 Months Support", included: true },
            { text: "Basic E-commerce", included: true },
            { text: "Custom Animations", included: true },
            { text: "Advanced Analytics", included: false },
          ],
          popular: true
        },
        {
          name: "Advanced",
          price: "$1,199",
          period: "One Time",
          icon: <FaCrown className="w-8 h-8" />,
          color: "from-green-600 to-emerald-500",
          features: [
            { text: "Unlimited Pages", included: true },
            { text: "Mobile-First Design", included: true },
            { text: "Advanced Integrations", included: true },
            { text: "Complete SEO Setup", included: true },
            { text: "6 Months Support", included: true },
            { text: "Full E-commerce", included: true },
            { text: "Advanced Animations", included: true },
            { text: "Complete Analytics", included: true },
          ],
          popular: false
        }
      ]
    },
    seo: {
      name: "SEO ",
      title: "SEO Services",
      description: "Rank higher on search engines with our proven SEO strategies",
      plans: [
        {
          name: "Basic",
          price: "$299",
          period: "/month",
          icon: <FaSearch className="w-8 h-8" />,
          color: "from-green-500 to-emerald-400",
          features: [
            { text: "Keyword Research (10 Keywords)", included: true },
            { text: "On-page SEO", included: true },
            { text: "Monthly SEO Report", included: true },
            { text: "Technical Audit", included: true },
            { text: "Google Analytics Setup", included: true },
            { text: "Backlink Building", included: false },
            { text: "Competitor Analysis", included: false },
            { text: "Content Optimization", included: false },
          ],
          popular: false
        },
        {
          name: "Intermediate",
          price: "$499",
          period: "/month",
          icon: <FaChartLine className="w-8 h-8" />,
          color: "from-emerald-400 to-green-300",
          features: [
            { text: "Keyword Research (30 Keywords)", included: true },
            { text: "Complete On-page SEO", included: true },
            { text: "Weekly SEO Reports", included: true },
            { text: "Advanced Technical SEO", included: true },
            { text: "Google Search Console", included: true },
            { text: "Basic Backlink Building", included: true },
            { text: "Competitor Analysis", included: true },
            { text: "Content Optimization", included: false },
          ],
          popular: true
        },
        {
          name: "Advanced",
          price: "$799",
          period: "/month",
          icon: <FaCrown className="w-8 h-8" />,
          color: "from-green-600 to-emerald-500",
          features: [
            { text: "Keyword Research (Unlimited)", included: true },
            { text: "Complete SEO Strategy", included: true },
            { text: "Daily Monitoring", included: true },
            { text: "Technical SEO Optimization", included: true },
            { text: "Advanced Analytics", included: true },
            { text: "Premium Backlink Building", included: true },
            { text: "Detailed Competitor Analysis", included: true },
            { text: "Full Content Optimization", included: true },
          ],
          popular: false
        }
      ]
    },
   
  };

  const serviceIcons = {
    web: <FaGlobe className="w-6 h-6" />,
    seo: <FaSearch className="w-6 h-6" />,
    social: <FaHashtag className="w-6 h-6" />
  };

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
              TRANSPARENT PRICING
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6"
          >
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">
              Perfect Plan
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Transparent pricing with no hidden fees. Select the plan that best fits your business needs.
          </motion.p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
        >
          {Object.entries(services).map(([key, service]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-3 ${activeTab === key
                  ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg shadow-green-500/30'
                  : 'bg-gray-900/50 text-gray-400 border border-green-500/20 hover:border-green-500/40 hover:text-green-300'
                }`}
            >
              <div className={activeTab === key ? 'text-white' : 'text-green-400'}>
                {serviceIcons[key]}
              </div>
              {service.name.split(' ')[0]}
            </motion.button>
          ))}
        </motion.div>

        {/* Service Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {services[activeTab].title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {services[activeTab].description}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {services[activeTab].plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
              className="relative group"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-full shadow-lg shadow-green-500/30 flex items-center gap-2">
                    <FaStar className="w-4 h-4" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Pricing Card */}
              <div className={`
                relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-md 
                rounded-3xl border border-green-500/20 p-6 md:p-8
                transition-all duration-500 group-hover:border-green-500/40 
                group-hover:shadow-2xl group-hover:shadow-green-900/30
                h-full ${plan.popular ? 'pt-12' : ''}
              `}>
                {/* Plan Icon & Name */}
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} border border-green-500/30 flex items-center justify-center`}>
                    <div className="text-white">
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-gray-400">
                    Perfect for {plan.name.toLowerCase()} projects
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-end justify-center">
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 * featureIndex }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${feature.included
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-gray-800 text-gray-500'
                        }`}>
                        {feature.included ? (
                          <FaCheck className="w-3 h-3" />
                        ) : (
                          <FaTimes className="w-3 h-3" />
                        )}
                      </div>
                      <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/30'
                      : 'bg-gradient-to-r from-gray-800 to-gray-900 text-green-400 border border-green-500/30 hover:border-green-500/50'
                    }`}
                >
                  {plan.popular ? 'Get Started Now' : 'Choose Plan'}
                </motion.button>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green-500/20 transition-all duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Plan Comparison
            </h3>
            <p className="text-gray-400">
              Detailed comparison of all features across plans
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-md rounded-3xl border border-green-500/20 overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-6 border-b border-green-500/20">
              <div className="text-left font-bold text-green-400">Features</div>
              <div className="text-center font-bold">Basic</div>
              <div className="text-center font-bold">Intermediate</div>
              <div className="text-center font-bold">Advanced</div>
            </div>

            {services[activeTab].plans[0].features.map((_, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b border-green-500/10">
                <div className="text-gray-300 text-sm">
                  {services[activeTab].plans[0].features[index].text}
                </div>
                {services[activeTab].plans.map((plan) => (
                  <div key={plan.name} className="text-center">
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${plan.features?.[index]?.included
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-gray-800 text-gray-500'
                      }`}>
                      {plan.features?.[index]?.included ? (
                        <FaCheck className="w-4 h-4" />
                      ) : (
                        <FaTimes className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-400">
              Common questions about our pricing and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Can I upgrade my plan later?",
                a: "Yes, you can upgrade to a higher plan anytime. We'll prorate the difference."
              },
              {
                q: "Do you offer custom packages?",
                a: "Absolutely! Contact us for custom solutions tailored to your specific needs."
              },
              {
                q: "What's included in the support?",
                a: "Support includes bug fixes, minor updates, and technical assistance."
              },
              {
                q: "Is there a contract period?",
                a: "No long-term contracts. Monthly plans can be canceled anytime."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm rounded-2xl border border-green-500/20"
              >
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  {faq.q}
                </h4>
                <p className="text-gray-400 text-sm">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="max-w-2xl mx-auto">
            <div className="p-8 bg-gradient-to-r from-green-900/20 to-emerald-900/10 backdrop-blur-md rounded-3xl border border-green-500/30">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Need a <span className="text-green-400">Custom Solution?</span>
              </h3>

              <p className="text-gray-400 mb-8">
                Contact us for a personalized quote based on your specific requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300"
                >
                  Get Custom Quote
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-green-500/50 text-green-400 font-bold rounded-full hover:bg-green-500/10 transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPage;