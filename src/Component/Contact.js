// app/contact/page.jsx
'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setMessage('Message successfully bhej diya gaya! Hum jaldi reply karenge.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setMessage(data.message || 'Kuch galat ho gaya, dobara try karen.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error – internet check karen.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-2xl mx-auto bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-green-500/30">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get in <span className="text-green-400">Touch</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            required
            className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email *"
            required
            className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition"
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message *"
            required
            rows={6}
            className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition"
          />

          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full py-4 rounded-lg font-bold text-lg transition-all
              ${status === 'loading' 
                ? 'bg-gray-700 cursor-not-allowed' 
                : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500'
              } text-white`}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-center font-medium mt-4">
              ✓ {message}
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center font-medium mt-4">
              ✗ {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}