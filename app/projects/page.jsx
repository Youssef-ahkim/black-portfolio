'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'

const ProjectsPage = () => {
  const projects = [
    {
      Image: '/zenith.png',
      title: 'Zenith',
      Description:
        'A high-performance E-commerce storefront built with Next.js and Tailwind CSS, featuring a premium dark-mode UI and seamless client-side navigation. Key implementations include a custom command-palette (CMD+K) for rapid product searching, dynamic filtering for high-spec hardware, and a fully responsive grid layout. This project focuses on delivering a "next-gen" user experience with optimized performance and clean, modular component architecture.',
      link: 'https://zenith-ruby-eight.vercel.app/',
    },
    {
      Image: '/logicraft.png',
      title: 'Logicraft',
      Description:
        'Logicraft is a full-service platform for launching US LLCs, designed for international entrepreneurs. It provides end-to-end solutions including company formation, EIN & BOI compliance, registered agent services, and integration with global payment systems like Stripe, PayPal, Wise, and Mercury. The platform features a high-conversion landing page, structured pricing system, and seamless user experience focused on speed (48h setup) and reliability (100% success rate). Built with Next.js and Tailwind CSS, it demonstrates real-world business logic, service architecture, and production-ready UI/UX.',
      link: 'https://logicraft-app.vercel.app/',
    },
    {
      Image: '/animal-care.png',
      title: 'Animal Care',
      Description:
        'Animal Care is a compassionate pet adoption platform built with Next.js and Tailwind CSS. It features a premium UI with high-performance CSS animations, dynamic routing for pet profiles, and an interactive donation system.',
      link: 'https://animal-care-sable.vercel.app/',
    },
    {
      Image: '/animefier.png',
      title: 'animefier',
      Description:
        'Animefier is a full-stack Next.js application showcasing a decoupled AI pipeline. It uses **Google Gemini 2.5 Flash** for deep image analysis (Computer Vision) to perform reverse prompt engineering. This text is then fed into the **Pollinations.ai (Flux) API** for high-quality, Text-to-Image synthesis. This demonstrates expertise in building production-ready, modular AI systems on a serverless architecture.',
      link: 'https://animefier.vercel.app/',
    },
    {
      Image: '/enigme.png',
      title: 'Enigme Telecom',
      Description:
        'Enigme Telecom is a professional website showcasing telecommunication and IT services, including IP telephony, network cabling, and security systems. It highlights the company’s expertise and reliability in delivering modern, customized solutions for businesses.',
      link: 'https://enigme-xi.vercel.app/',
    },
    {
      Image: '/dev-events.png',
      title: 'Dev Events',
      Description:
        'Dev Events is a modern platform built with Next.js that allows users to discover, explore, and follow upcoming developer events worldwide. It features a clean UI, server actions, API routes, and advanced caching.',
      link: 'https://dev-events-nextjs16-eight.vercel.app/',
    },
    {
      Image: '/enigme-redesign.png',
      title: 'Enigme Telecom -Redesign-',
      Description:
        'Enigme Telecom is a professional website showcasing telecommunication and IT services, including IP telephony, network cabling, and security systems. It highlights the company’s expertise and reliability in delivering modern, customized solutions for businesses.',
      link: 'https://enigmetelecom.ma/',
    },
    {
      Image: '/sorezay.png',
      title: 'Sorezay',
      Description:
        'Sorezay is a professional and responsive website for a logistics company offering reliable transport solutions for wood, glass, packages, and heavy goods. It highlights safety, punctuality, and modern design to reflect the company’s trust and efficiency.',
      link: 'https://sorezay.vercel.app/',
    },
  ]

  return (
    <div className="text-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-4 animate-slide-pop-ease opacity-0" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A selection of my recent work, ranging from complex full-stack applications to AI-powered experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-4 md:p-6 rounded-3xl flex flex-col group animate-slide-pop-ease opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 bg-black/40">
                <Image
                  src={project.Image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Float Badge */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <div className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Next.js
                  </div>
                  <div className="px-3 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-400/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-400">
                    Live
                  </div>
                </div>
              </div>

              <div className="space-y-3 flex-grow mb-6">
                <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-4">
                  {project.Description}
                </p>
              </div>

              <Link
                href={project.link}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white hover:bg-white hover:text-black transition-all group/btn"
              >
                View Live Project
                <FiExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
