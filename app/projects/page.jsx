'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Tahanaout Poultry',
      image: '/chick-project.png',
      link: 'https://chick-project.vercel.app/',
      description:
        'A farm-to-table e-commerce platform for organic poultry. Features high-fidelity product catalogs, local delivery scheduling, and a community-driven subscription model.',
      technologies: ['Next.js', 'Tailwind CSS', 'E-commerce'],
    },
    {
      title: 'Zenith',
      image: '/zenith.png',
      link: 'https://zenith-ruby-eight.vercel.app/',
      description:
        'A premium Next.js & GSAP storefront featuring a CMD+K command palette and immersive scroll-triggered animations. Optimized for 60fps performance with a high-end dark UI.',
      technologies: ['Next.js', 'GSAP', 'Tailwind CSS', 'TypeScript'],
    },
    {
      title: 'Sorezay',
      image: '/sorezay.png',
      link: 'https://sorezay.vercel.app/',
      description:
        'Responsive logistics platform for specialized cargo. Features a clean, high-trust UI emphasizing safety and punctuality for enterprise transport solutions.',
      technologies: ['Next.js', 'Responsive Design', 'Tailwind'],
    },
    {
      title: 'Animal Care',
      image: '/animal-care.png',
      link: 'https://animal-care-sable.vercel.app/',
      description:
        'A compassionate pet adoption platform featuring fluid CSS animations, dynamic routing for pet profiles, and an interactive donation system.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Logicraft',
      image: '/logicraft.png',
      link: 'https://logicraft-app.vercel.app/',
      description:
        'Full-service platform for US LLC formation. Features high-conversion flows, end-to-end service architecture, and integration with global payment systems like Stripe and Mercury.',
      technologies: ['Next.js', 'Tailwind CSS', 'Business Logic'],
    },
    {
      title: 'Animefier',
      image: '/animefier.png',
      link: 'https://animefier.vercel.app/',
      description:
        'A decoupled AI pipeline using Google Gemini 2.5 for vision and Pollinations.ai for synthesis. Demonstrates advanced prompt engineering and serverless AI integration.',
      technologies: ['Next.js', 'Gemini AI', 'AI APIs', 'Tailwind'],
    },
    {
      title: 'Enigme Telecom (V1)',
      image: '/enigme.png',
      link: 'https://enigme-xi.vercel.app/',
      description:
        'The initial professional showcase for Enigme Telecom, highlighting core IT services like IP telephony and network cabling with a focus on clean, accessible information design.',
      technologies: ['Next.js', 'Tailwind CSS', 'UI/UX'],
    },
    {
      title: 'Enigme Telecom (Official)',
      image: '/enigme-redesign.png',
      link: 'https://enigmetelecom.ma/',
      description:
        'The official enterprise redesign for Enigme Telecom. Optimized for production with enhanced SEO, professional branding, and a high-performance infrastructure for business clients.',
      technologies: ['Next.js', 'SEO', 'Production Deployment'],
    },

    {
      title: 'Dev Events',
      image: '/dev-events.png',
      link: 'https://dev-events-nextjs16-eight.vercel.app/',
      description:
        'Global discovery platform for developer events. Built with Next.js 15, utilizing Server Actions and advanced caching for real-time event tracking.',
      technologies: ['Next.js 15', 'Server Actions', 'Caching'],
    },

  ];

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
                  src={project.image}
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
                  {project.description}
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
