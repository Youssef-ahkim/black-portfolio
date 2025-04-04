import Image from "next/image";
import { FiDownload, FiAward, FiBriefcase, FiUsers, FiFolder, FiMail } from 'react-icons/fi';
import { FaBehance, FaDribbble, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen text-white flex justify-center items-center p-6 ">
      {/* Background texture */}


      <div className="grid grid-cols-3 gap-6 max-w-5xl w-full relative z-10">
        {/* Profile Section */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl p-4 rounded-xl col-span-2 flex items-center transition hover:bg-white/10 group">
          <div className="relative">
            <Image 
              src="/me.jpg" 
              width={80} 
              height={80} 
              className="rounded-full border-2 border-white/20 group-hover:border-blue-400 transition-colors"
              alt="Jeff Maine profile picture"
              priority
            />

          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              Jeff Maine
              <FiAward className="w-5 h-5 text-yellow-400" />
            </h2>
            <p className="text-gray-400 text-xs font-light mt-1">
              Talented and passionate graphic designer creating impactful visual solutions
            </p>
          </div>
        </div>

        {/* Credentials & Projects */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center transition hover:bg-white/10">
          <FiAward className="w-6 h-6 text-blue-400 mb-2" />
          <h3 className="text-xs font-medium tracking-wider">Credentials</h3>
          <span className="text-[0.6rem] text-gray-400 mt-1">Adobe Certified</span>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center transition hover:bg-white/10">
          <FiFolder className="w-6 h-6 text-green-400 mb-2" />
          <h3 className="text-xs font-medium tracking-wider">Projects</h3>
          <span className="text-[0.6rem] text-gray-400 mt-1 flex items-center">
            View Portfolio <span className="ml-1">→</span>
          </span>
        </div>

        {/* Download CV */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center transition hover:bg-white/10">
          <FiDownload className="w-6 h-6 text-purple-400 mb-2 animate-bounce" />
          <h3 className="text-xs font-medium tracking-wider">Download CV</h3>
          <span className="text-[0.6rem] text-gray-400 mt-1">PDF Format ↓</span>
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center transition hover:bg-white/10">
          <FiBriefcase className="w-6 h-6 text-yellow-400 mb-2" />
          <h3 className="text-xs font-medium tracking-wider">Experience</h3>
          <span className="text-lg font-bold mt-1">08+</span>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center transition hover:bg-white/10">
          <FiUsers className="w-6 h-6 text-green-400 mb-2" />
          <h3 className="text-xs font-medium tracking-wider">Clients</h3>
          <span className="text-lg font-bold mt-1">125+</span>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center transition hover:bg-white/10">
          <FiFolder className="w-6 h-6 text-blue-400 mb-2" />
          <h3 className="text-xs font-medium tracking-wider">Projects</h3>
          <span className="text-lg font-bold mt-1">170+</span>
        </div>

        {/* Collaboration Section */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl col-span-3 flex items-center justify-center transition hover:bg-white/10 group">
          <div className="flex items-center">
            <FiMail className="w-8 h-8 text-blue-400 mr-4 group-hover:animate-pulse" />
            <h3 className="text-xl font-medium tracking-wide">
              Let's work <span className="text-blue-400 group-hover:text-blue-300 transition-colors">together</span>
            </h3>
          </div>
          <button className="ml-4 px-4 py-2 text-xs bg-blue-500/20 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition flex items-center gap-2">
            <FiMail className="w-4 h-4" />
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}