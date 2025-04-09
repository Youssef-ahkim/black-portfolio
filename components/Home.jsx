import Image from "next/image";
import { FiDownload, FiAward, FiBriefcase, FiUsers, FiFolder, FiMail } from 'react-icons/fi';

export default function Home() {
  return (
    <div idd="home" className="text-white flex justify-center items-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full relative z-10">
        {/* Left Column - Profile Section */}
        <div className="animate-pop-in [animation-delay:100ms] opacity-0 bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl p-6 md:p-8 rounded-xl flex flex-col transition hover:bg-white/10 group order-1 hover:shadow-lg hover:transform hover:scale-[1.01]">
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

        {/* Right Column - Stats and Actions */}
        <div className="space-y-6 order-2">
          {/* Download CV */}
          <a
            href="/me.pdf"
            download="Youssef_Ahkim_CV.pdf"
            className="animate-pop-in [animation-delay:200ms] opacity-0 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl flex flex-col items-center justify-center transition hover:bg-white/10 cursor-pointer group/download hover:border-blue-400/30"
          >
            <FiDownload className="w-8 h-8 text-purple-400 mb-3 group-hover/download:animate-bounce" />
            <h3 className="text-sm font-medium tracking-wider mb-1">Download CV</h3>
            <span className="text-xs text-gray-400 group-hover/download:text-purple-400 transition-colors">PDF Format ↓</span>
          </a>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: <FiBriefcase className="w-7 h-7 text-yellow-400 mb-2" />, label: "Experience", value: "+1" },
              { icon: <FiUsers className="w-7 h-7 text-green-400 mb-2" />, label: "Clients", value: "5+" },
              { icon: <FiFolder className="w-7 h-7 text-blue-400 mb-2" />, label: "Projects", value: "5+" },
            ].map((item, index) => (
              <div 
                key={index}
                className="animate-pop-in opacity-0 bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center transition hover:bg-white/10 hover:transform hover:scale-105"
                style={{ animationDelay: `${300 + (index * 100)}ms` }}
              >
                {item.icon}
                <h3 className="text-xs font-medium tracking-wider">{item.label}</h3>
                <span className="text-xl font-bold mt-1">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Credentials */}
          <div className="animate-pop-in [animation-delay:600ms] opacity-0 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl flex flex-col items-center justify-center transition hover:bg-white/10  hover:border-blue-400/30">
            <FiAward className="w-8 h-8 text-blue-400 mb-3 group-hover/credential:animate-spin" />
            <h3 className="text-sm font-medium tracking-wider mb-1">Credentials</h3>
            <span className="text-xs text-gray-400 group-hover/credential:text-blue-400 transition-colors">Certified Full-stack Developer</span>
          </div>
        </div>

        {/* Collaboration Section */}
        <div className="animate-pop-in [animation-delay:700ms] opacity-0 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl col-span-1 md:col-span-2 flex flex-col md:flex-row items-center justify-between transition hover:bg-white/10 group order-3 hover:shadow-lg">
          <div className="flex items-center mb-4 md:mb-0">
            <FiMail className="w-8 h-8 text-blue-400 mr-4 group-hover:animate-pulse transition-transform group-hover:scale-110" />
            <h3 className="text-lg md:text-xl font-medium tracking-wide">
              Let's work <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">together</span>
            </h3>
          </div>
          <button className="px-6 py-2.5 text-sm bg-blue-500/20 border cursor-pointer border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all duration-300 flex items-center gap-2 hover:gap-3 hover:transform hover:scale-105">
            <FiMail className="w-5 h-5 transition-transform group-hover:scale-125" />
            Get in touch
          </button>
        </div>
      </div>

    </div>
  );
}