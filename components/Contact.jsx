'use client'

import { useState, useEffect } from 'react';
import { FiUser, FiMail, FiEdit, FiSend, FiBriefcase, FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-focus name input on mount
  useEffect(() => {
    document.getElementById('name-input')?.focus();
  }, []);

  // Auto-dismiss notification after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xoveyqob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="text-white flex justify-center items-center scroll-mt-20">
      {/* Notification Container */}
      <div className="fixed bottom-6 right-6 z-50 space-y-3">
        {/* Success Notification */}
        {status === 'success' && (
          <div className="animate-notification-slide bg-green-900/30 backdrop-blur-lg border border-green-400/30 rounded-xl p-4 pr-10 min-w-[300px] relative shadow-2xl transform transition-transform hover:scale-[1.02] cursor-pointer">
            <div className="flex items-start gap-3">
              <FiCheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-green-100">Message Sent!</h3>
                <p className="text-sm text-green-300/80 mt-1">I'll respond within 24 hours</p>
              </div>
              <button 
                onClick={() => setStatus('')}
                className="absolute top-3 right-3 p-1 hover:text-green-300 transition-colors"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-green-400/30 animate-progress" />
          </div>
        )}

        {/* Error Notification */}
        {status === 'error' && (
          <div className="animate-notification-slide bg-red-900/30 backdrop-blur-lg border border-red-400/30 rounded-xl p-4 pr-10 min-w-[300px] relative shadow-2xl transform transition-transform hover:scale-[1.02] cursor-pointer">
            <div className="flex items-start gap-3">
              <FiAlertCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-red-100">Sending Failed</h3>
                <p className="text-sm text-red-300/80 mt-1">Please try again or contact directly</p>
              </div>
              <button 
                onClick={() => setStatus('')}
                className="absolute top-3 right-3 p-1 hover:text-red-300 transition-colors"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-red-400/30 animate-progress" />
          </div>
        )}
      </div>

      {/* Contact Form Container */}
      <div className="max-w-5xl w-full relative z-10 px-4">
        <div className="animate-pop-in [animation-delay:100ms] opacity-0 bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl p-6 md:p-8 rounded-xl transition hover:bg-white/7 group hover:shadow-lg hover:transform hover:scale-[1.005]">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 flex items-center gap-3 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
            <FiSend className="w-8 h-8 text-blue-400 transition-transform group-hover:rotate-12" />
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="animate-pop-in [animation-delay:200ms] opacity-0 bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-lg transition hover:bg-white/10 focus-within:border-blue-400">
              <label htmlFor="name-input" className="text-sm font-medium text-gray-300 flex items-center gap-2 mb-2">
                <FiUser className="w-4 h-4 text-blue-400" />
                Your Name
              </label>
              <input
                id="name-input"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none placeholder-gray-500 text-white/90"
                placeholder="John Doe"
                autoComplete="name"
              />
            </div>

            {/* Email Input */}
            <div className="animate-pop-in [animation-delay:300ms] opacity-0 bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-lg transition hover:bg-white/10 focus-within:border-green-400">
              <label htmlFor="email-input" className="text-sm font-medium text-gray-300 flex items-center gap-2 mb-2">
                <FiMail className="w-4 h-4 text-green-400" />
                Email Address
              </label>
              <input
                id="email-input"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none placeholder-gray-500 text-white/90"
                placeholder="john@example.com"
                autoComplete="email"
              />
            </div>

            {/* Message Input */}
            <div className="animate-pop-in [animation-delay:400ms] opacity-0 md:col-span-2 bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-lg transition hover:bg-white/10 focus-within:border-purple-400">
              <label htmlFor="message-input" className="text-sm font-medium text-gray-300 flex items-center gap-2 mb-2">
                <FiEdit className="w-4 h-4 text-purple-400" />
                Your Message
              </label>
              <textarea
                id="message-input"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none placeholder-gray-500 text-white/90 resize-none"
                placeholder="Let's discuss your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="animate-pop-in [animation-delay:500ms] opacity-0 md:col-span-2 w-full px-6 py-3 text-sm bg-blue-500/20 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3 hover:transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiSend className="w-5 h-5 transition-transform group-hover:scale-125" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <span className="text-xs opacity-70 hidden md:inline">(Typically reply within 24h)</span>
            </button>
          </form>

          {/* Contact Info */}
          <div className="animate-pop-in [animation-delay:600ms] opacity-0 mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <a
              href="mailto:youssefahkim1234@gmail.com"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <FiMail className="w-4 h-4" />
              <span>youssefahkim1234@gmail.com</span>
            </a>
            <div className="h-4 w-px bg-white/20 hidden md:block"></div>
            <div className="flex items-center gap-2">
              <FiBriefcase className="w-4 h-4 text-green-400" />
              <span>Available for freelance work</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}