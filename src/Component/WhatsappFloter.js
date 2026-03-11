// components/WhatsAppFloater.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaComments, FaQuestionCircle, FaQuoteRight, FaCalendarAlt } from 'react-icons/fa';
import { useState } from 'react';

const WhatsAppFloater = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Your WhatsApp number (without +)
  const phoneNumber = '1234567890'; // Replace with your number
  
  // Different auto-message templates
  const messageTemplates = [
    {
      id: 1,
      icon: <FaQuestionCircle />,
      title: "General Inquiry",
      message: "Hello! I have a general question about your services. Can you help me?",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      icon: <FaQuoteRight />,
      title: "Get Quote",
      message: "Hi! I'm interested in getting a quote for your digital marketing services.",
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 3,
      icon: <FaCalendarAlt />,
      title: "Schedule Call",
      message: "Hello, I'd like to schedule a consultation call to discuss my project.",
      color: "from-purple-500 to-pink-400"
    },
    {
      id: 4,
      icon: <FaComments />,
      title: "Custom Message",
      message: "",
      custom: true,
      color: "from-gray-600 to-gray-500"
    }
  ];

  const sendWhatsAppMessage = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Message Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-72 space-y-3"
          >
            {messageTemplates.map((template) => (
              <motion.button
                key={template.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: template.id * 0.1 }}
                whileHover={{ scale: 1.02, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (template.custom) {
                    const customMessage = prompt("Enter your custom message:");
                    if (customMessage) {
                      sendWhatsAppMessage(customMessage);
                    }
                  } else {
                    sendWhatsAppMessage(template.message);
                  }
                  setIsOpen(false);
                }}
                className={`w-full p-4 bg-gradient-to-r ${template.color} backdrop-blur-md rounded-xl border border-white/20 shadow-xl text-left flex items-center gap-3 group`}
              >
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <div className="text-white text-lg">
                    {template.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white">{template.title}</h4>
                  <p className="text-white/80 text-sm truncate">
                    {template.custom ? "Type your own message" : template.message.substring(0, 40) + "..."}
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <FaWhatsapp className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.button>
            ))}
            
            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="p-3 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-green-500/30"
            >
              <p className="text-green-300 text-sm text-center">
                💬 We reply within 30 minutes
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
      >
        {/* Background Pulse */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-green-500 rounded-full"
        />
        
        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaWhatsapp className="w-8 h-8 text-white" />
          </motion.div>
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-black flex items-center justify-center">
            <span className="text-white text-xs font-bold">{messageTemplates.length}</span>
          </div>
        </button>
        
        {/* Tooltip */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-2 bg-gradient-to-r from-green-900 to-emerald-900 text-white text-sm rounded-lg border border-green-500/30 shadow-lg opacity-0 hover:opacity-100 transition-opacity">
          Click for quick messages
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-900 rotate-45"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhatsAppFloater;