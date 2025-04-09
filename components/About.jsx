import Image from "next/image";
import { FiDownload, FiAward, FiBriefcase, FiUsers, FiFolder, FiMail } from 'react-icons/fi';

export default function About() {
  return (
    <div id="about" className="text-white ">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Section */}
          <div className="animate-pop-in [animation-delay:100ms] opacity-0 bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl p-6 md:p-8 rounded-xl flex flex-col transition hover:bg-white/10 group">
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
              <div className="flex items-center gap-3 mb-3 justify-center">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Youssef Ahkim
                </h2>
                <FiAward className="w-6 h-6 md:w-7 md:h-7 text-yellow-400 flex-shrink-0 animate-pulse" />
              </div>
              <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-[280px] mx-auto">
                Experienced Full-stack Developer specializing in creating robust and scalable web applications.
              </p>
            </div>
          </div>

          {/* Detailed Information Section */}
          <div className="space-y-6">
            {/* My Journey */}
            <div className="animate-pop-in [animation-delay:200ms] opacity-0 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl transition hover:bg-white/10">
              <h3 className="text-xl font-bold mb-3">My Journey</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                With over 1 years of professional experience, I have honed my skills as a Full-stack Developer working on diverse projects. I thrive on solving complex challenges and building scalable applications that drive real business value.
              </p>
            </div>
            {/* Technical Expertise */}
            <div className="animate-pop-in [animation-delay:300ms] opacity-0 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl transition hover:bg-white/10">
              <h3 className="text-xl font-bold mb-3">Technical Expertise</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                My technical toolkit includes JavaScript, React, Node.js, and various database systems. I continuously update my skills to stay ahead of industry trends and ensure that every project I work on is built with best practices in mind.
              </p>
            </div>
            {/* Credentials & Stats */}
            
            {/* Certifications */}
          
          </div>
        </div>

        {/* Collaboration Call-to-Action */}
        <div className="animate-pop-in [animation-delay:700ms] opacity-0 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between mt-8 transition hover:bg-white/10">
          <div className="flex items-center mb-4 md:mb-0">
            <FiMail className="w-8 h-8 text-blue-400 mr-4 animate-pulse transition-transform" />
            <h3 className="text-lg md:text-xl font-medium">
              Let's collaborate on your next project!
            </h3>
          </div>
          <button className="px-6 py-2.5 text-sm bg-blue-500/20 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all duration-300 flex items-center gap-2 hover:scale-105">
            <FiMail className="w-5 h-5 transition-transform" />
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
