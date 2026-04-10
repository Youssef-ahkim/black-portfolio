'use client'

import { useState, useEffect } from 'react'
import {
  FiUser,
  FiMail,
  FiEdit,
  FiSend,
  FiBriefcase,
  FiCheckCircle,
  FiAlertCircle,
  FiX,
} from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Auto-focus name input on mount
  useEffect(() => {
    document.getElementById('name-input')?.focus()
  }, [])

  // Auto-dismiss notification after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(''), 5000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xoveyqob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="contact" className="w-full text-white flex justify-center px-4 pt-32 pb-20 relative overflow-hidden">

      {/* Notification Hub */}
      <div className="fixed bottom-8 right-8 z-50 space-y-4">
        {status === 'success' && (
          <div className="animate-notification-slide bg-black/40 backdrop-blur-2xl border border-green-500/30 rounded-2xl p-5 pr-12 min-w-[320px] relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-l-4 border-l-green-500 hover:scale-[1.02] transition-transform cursor-pointer group">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-green-500/10 text-green-400">
                <FiCheckCircle className="w-6 h-6 flex-shrink-0" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-lg">Message Sent!</h3>
                <p className="text-sm text-gray-400 mt-1">I've received your message and will respond shortly.</p>
              </div>
              <button onClick={() => setStatus('')} className="absolute top-4 right-4 p-1 text-gray-500 hover:text-white transition-colors">
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 h-1 bg-green-500 animate-progress" />
          </div>
        )}

        {status === 'error' && (
          <div className="animate-notification-slide bg-black/40 backdrop-blur-2xl border border-red-500/30 rounded-2xl p-5 pr-12 min-w-[320px] relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-l-4 border-l-red-500 hover:scale-[1.02] transition-transform cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-red-500/10 text-red-400">
                <FiAlertCircle className="w-6 h-6 flex-shrink-0" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-lg">Transmission Error</h3>
                <p className="text-sm text-gray-400 mt-1">Something went wrong. Please try again later.</p>
              </div>
              <button onClick={() => setStatus('')} className="absolute top-4 right-4 p-1 text-gray-500 hover:text-white transition-colors">
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 h-1 bg-red-500 animate-progress" />
          </div>
        )}
      </div>

      {/* Form Container */}
      <div className="max-w-4xl w-full relative z-10">
        <div className="animate-pop-in opacity-0 glass-card p-8 md:p-12 rounded-[2rem] relative group mt-8">

          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight flex items-center gap-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-lg mt-4">
              Have a question or looking to start a project? I'm always open to new opportunities.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name Input */}
            <div className="space-y-3">
              <label htmlFor="name-input" className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 px-1">
                <FiUser className="w-4 h-4 text-blue-400" /> Full Name
              </label>
              <div className="relative group/input">
                <input
                  id="name-input"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-gray-600 text-white"
                  placeholder="John Doe"
                  autoComplete="name"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-3">
              <label htmlFor="email-input" className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 px-1">
                <FiMail className="w-4 h-4 text-purple-400" /> Email Address
              </label>
              <div className="relative group/input">
                <input
                  id="email-input"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-gray-600 text-white"
                  placeholder="john@example.com"
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="md:col-span-2 space-y-3">
              <label htmlFor="message-input" className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 px-1">
                <FiEdit className="w-4 h-4 text-blue-400" /> Your Message
              </label>
              <textarea
                id="message-input"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-gray-600 text-white resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="md:col-span-2 w-full px-8 py-5 bg-white text-black font-black rounded-2xl hover:scale-[1.01] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_25px_50px_rgba(255,255,255,0.15)]"
            >
              <FiSend className={`w-5 h-5 ${isSubmitting ? 'animate-bounce' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'}`} />
              {isSubmitting ? 'Transmitting...' : 'Send Message'}
            </button>
          </form>

          {/* Alternative Contact */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400">
              <a href="mailto:youssefahkim1234@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full hover:text-white hover:bg-white/10 transition-all">
                <FiMail className="w-4 h-4 text-blue-400" />
                <span>youssefahkim1234@gmail.com</span>
              </a>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
                <FiBriefcase className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">Available for Freelance</span>
              </div>
            </div>

            <div className="flex gap-4">
              {/* Add social links here if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
