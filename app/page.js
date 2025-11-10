'use client'
import Image from "next/image";
import { FiBriefcase, FiFolder, FiDownload, FiAward, FiMail } from 'react-icons/fi';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-white pt-24">
      <div className="max-w-5xl mx-auto p-4 space-y-12">

        {/* Profile + About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Profile */}
          <div
            className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl p-4 md:p-6 rounded-xl flex flex-col transition hover:bg-white/10 animate-slide-pop-ease opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative flex-shrink-0 mx-auto">
              <Image
                src="/me.jpg"
                width={160}
                height={160}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/20 group-hover:border-blue-400 transition-all duration-300 mb-6"
                alt="Youssef Ahkim profile picture"
                priority
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                Youssef Ahkim
              </h2>
              <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-[280px] mx-auto">
                Experienced Full-stack Developer specializing in creating robust and scalable web applications.
              </p>
            </div>
          </div>

          {/* About Details */}
          <div className="flex flex-col justify-between gap-4">
            <div
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl transition hover:bg-white/10 animate-slide-pop-ease opacity-0"
              style={{ animationDelay: '0.4s' }}
            >
              <h3 className="text-xl font-bold mb-3">My Journey</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                With over 1 year of professional experience, I have honed my skills as a Full-stack Developer working on diverse projects. I thrive on solving complex challenges and building scalable applications that drive real business value.
              </p>
            </div>
            <div
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl transition hover:bg-white/10 animate-slide-pop-ease opacity-0"
              style={{ animationDelay: '0.6s' }}
            >
              <h3 className="text-xl font-bold mb-3">Technical Expertise</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                My technical toolkit includes JavaScript, React, Node.js, and various database systems. I continuously update my skills to stay ahead of industry trends.
              </p>
            </div>
          </div>
        </div>

        {/* Stats + CV + Credentials Section */}
        <div className="flex flex-wrap gap-6">

          {/* CV Download */}
          <Link
            href="/me.pdf"
            download
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl flex-1 min-w-[250px] flex flex-col items-center justify-center transition hover:bg-white/10 animate-slide-pop-ease opacity-0"
            style={{ animationDelay: '0.8s' }}
          >
            <FiDownload className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-sm font-medium tracking-wider mb-1">Download CV</h3>
            <span className="text-xs text-gray-400">PDF Format ↓</span>
          </Link>

          {/* Stats */}
          {[
            { icon: <FiBriefcase className="w-7 h-7 text-yellow-400 mb-2" />, label: "Experience", value: "1+" },
            { icon: <FiFolder className="w-7 h-7 text-blue-400 mb-2" />, label: "Projects", value: "5+" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl flex-1 min-w-[250px] flex flex-col items-center justify-center transition hover:bg-white/10 animate-slide-pop-ease opacity-0"
              style={{ animationDelay: `${0.9 + idx * 0.1}s` }}
            >
              {item.icon}
              <h3 className="text-xs font-medium tracking-wider">{item.label}</h3>
              <span className="text-xl font-bold mt-1">{item.value}</span>
            </div>
          ))}

          {/* Credentials */}
          <div
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl flex-1 min-w-[250px] flex flex-col items-center justify-center transition hover:bg-white/10 animate-slide-pop-ease opacity-0"
            style={{ animationDelay: '1.2s' }}
          >
            <FiAward className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-sm font-medium tracking-wider mb-1">Credentials</h3>
            <span className="text-xs text-gray-400">Certified Full-stack Developer</span>
          </div>
        </div>

        {/* Collaboration Section */}
        <div
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between transition hover:bg-white/10 animate-slide-pop-ease opacity-0"
          style={{ animationDelay: '1.5s' }}
        >
          <div className="flex items-center mb-4 md:mb-0">
            <FiMail className="w-8 h-8 text-blue-400 mr-4" />
            <h3 className="text-lg md:text-xl font-medium">
              Let's collaborate on your next project!
            </h3>
          </div>
          <Link
            href="/contact"
            className="px-6 py-2.5 text-sm bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center gap-2 hover:scale-105 transition-all"
          >
            <FiMail className="w-5 h-5" />
            Get in touch
          </Link>
        </div>

      </div>
    </div>
  );
}
