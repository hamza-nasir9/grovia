// components/WhatsAppButton.jsx
'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaRobot, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number (without + sign)
  const phoneNumber = '1234567890'; // Example: 923001234567 for Pakistan
  
  // Customize this message
  const defaultMessage = "Hello! I'm interested in your digital marketing services. Can you provide more information?";
  
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  // Encode message for URL
  const encodedMessage = encodeURIComponent(defaultMessage);
  
  // WhatsApp URL (works on both mobile and desktop)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Copy message to clipboard
  const copyMessage = () => {
    navigator.clipboard.writeText(defaultMessage);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  // Send message function
  const sendWhatsAppMessage = () => {
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Optional: Track click event
    console.log('WhatsApp button clicked');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Message Preview Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 20,
          scale: isHovered ? 1 : 0.9
        }}
        transition={{ duration: 0.3 }}
        className="w-80 bg-gradient-to-br from-green-900/90 to-emerald-900/80 backdrop-blur-md rounded-2xl border border-green-500/30 shadow-2xl overflow-hidden"
        style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
      >
        {/* Header */}
        <div className="p-4 border-b border-green-500/20 bg-gradient-to-r from-green-900 to-emerald-900">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20">
              <FaRobot className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h3 className="font-bold text-white">Auto Message</h3>
              <p className="text-green-300 text-sm">Click to send automatically</p>
            </div>
          </div>
        </div>
        
        {/* Message Content */}
        <div className="p-4">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">A</span>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 border border-green-500/20">
                <p className="text-gray-200 text-sm leading-relaxed">
                  {defaultMessage}
                </p>
              </div>
              <div className="flex items-center justify-between mt-2 px-2">
                <span className="text-green-400 text-xs">
                  <FaRobot className="inline w-3 h-3 mr-1" />
                  Auto-generated
                </span>
                <span className="text-gray-500 text-xs">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3 mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyMessage}
              className="flex-1 py-2 px-4 bg-gradient-to-r from-gray-800 to-gray-900 border border-green-500/30 text-green-400 text-sm font-medium rounded-lg hover:border-green-500/50 transition-all flex items-center justify-center gap-2"
            >
              {isCopied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Message
                </>
              )}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={sendWhatsAppMessage}
              className="flex-1 py-2 px-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-green-500/40 transition-all flex items-center justify-center gap-2"
            >
              <FaPaperPlane className="w-4 h-4" />
              Send Now
            </motion.button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="px-4 py-3 border-t border-green-500/20 bg-gradient-to-r from-green-900/50 to-emerald-900/40">
          <p className="text-green-300 text-xs text-center">
            Opens WhatsApp with pre-filled message
          </p>
        </div>
      </motion.div>

      {/* Main WhatsApp Button */}
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={sendWhatsAppMessage}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isHovered 
            ? "0 0 40px rgba(37, 211, 102, 0.6)" 
            : "0 0 20px rgba(37, 211, 102, 0.4)"
        }}
        className="relative group"
      >
        {/* Outer glow */}
        <div className="absolute -inset-4 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Main button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30">
          <FaWhatsapp className="w-8 h-8 text-white" />
          
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-black flex items-center justify-center">
            <span className="text-white text-xs font-bold">!</span>
          </div>
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full border-4 border-green-400/30 animate-ping"></div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-2 bg-gradient-to-r from-green-900 to-emerald-900 text-white text-sm rounded-lg border border-green-500/30 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2">
            <FaRobot className="w-3 h-3 text-green-300" />
            <span>Click for auto message</span>
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-900 rotate-45"></div>
        </div>
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;