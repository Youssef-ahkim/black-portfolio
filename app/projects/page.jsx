'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'

const ProjectsPage = () => {
  const projects = [
    {
      Image: '/enigme.png',
      title: 'Enigme Telecom',
      Description:
        'Enigme Telecom is a professional website showcasing telecommunication and IT services, including IP telephony, network cabling, and security systems. It highlights the company’s expertise and reliability in delivering modern, customized solutions for businesses.',
      link: 'https://enigme-xi.vercel.app/',
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
    <div className="text-white pt-24">
      <div className="max-w-5xl mx-auto p-4 space-y-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent mb-10">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl p-4 md:p-6 rounded-xl flex flex-col transition hover:bg-white/10 animate-slide-pop-ease opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden mb-5">
                <Image
                  src={project.Image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <h2 className="text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                {project.Description}
              </p>

              <Link
                href={project.link}
                target="_blank"
                className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-sm font-medium hover:scale-105 hover:bg-blue-500/30 transition-all self-start"
              >
                <FiExternalLink className="w-4 h-4" />
                Visit Website
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
