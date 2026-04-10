'use client'
import Image from "next/image";
import { FiBriefcase, FiFolder, FiDownload, FiAward, FiMail, FiCode } from 'react-icons/fi';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* Hero Section: Profile + About */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Profile Card */}
          <div
            className="lg:col-span-5 glass-card p-8 rounded-3xl flex flex-col items-center text-center animate-slide-pop-ease opacity-0"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative p-1 rounded-full bg-gradient-to-b from-blue-400 to-purple-600 shadow-2xl">
                <Image
                  src="/me.jpg"
                  width={200}
                  height={200}
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-black/50 object-cover"
                  alt="Youssef Ahkim"
                  priority
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                Youssef Ahkim
              </span>
            </h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed mb-8 max-w-sm">
              Full-stack Developer Crafting Scalable <br className="hidden md:block" /> Digital Experiences.
            </p>

            <div className="flex flex-col gap-3 w-full">
              <div className="flex gap-4 w-full">
                <Link
                  href="/contact"
                  className="flex-1 py-3 bg-white text-black font-bold rounded-2xl hover:bg-white/90 transition-all active:scale-95 text-center"
                >
                  Hire Me
                </Link>
                <Link
                  href="/projects"
                  className="flex-1 py-3 bg-white/5 border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-all active:scale-95 text-center"
                >
                  Projects
                </Link>
              </div>
              
            </div>
          </div>

          {/* About & Expertise */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className="glass-card p-8 rounded-3xl animate-slide-pop-ease opacity-0"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <FiAward className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">The Journey</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                With a passion for clean code and user-centric design, I've spent the last year building
                robust applications that solve real-world problems. I specialize in the modern web stack,
                bridging the gap between complex backend logic and beautiful frontend interfaces.
              </p>
            </div>

            <div
              className="glass-card p-8 rounded-3xl animate-slide-pop-ease opacity-0"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <FiCode className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Laravel', 'Node.js', 'PostgreSQL', 'Prisma', 'Framer Motion'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:border-blue-400/50 hover:text-white transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <FiBriefcase className="w-6 h-6" />, label: "Experience", value: "1y", color: "blue" },
            { icon: <FiFolder className="w-6 h-6" />, label: "Projects", value: "12+", color: "purple" },
            { 
              icon: <FiDownload className="w-6 h-6" />, 
              label: "Download CV", 
              value: "10+", 
              color: "yellow",
              isLink: true,
              href: "/youssef-ahkim.pdf"
            },
            { icon: <FiMail className="w-6 h-6" />, label: "Response", value: "< 24h", color: "green" },
          ].map((item, idx) => {
            const Content = (
              <div
                className={`glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center animate-pop-in opacity-0 h-full w-full ${item.isLink ? 'hover:border-yellow-400/50 transition-all cursor-pointer group' : ''}`}
                style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
              >
                <div className={`mb-3 text-${item.color}-400 ${item.isLink ? 'group-hover:scale-110 transition-transform' : ''}`}>{item.icon}</div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{item.label}</h3>
                <span className="text-2xl font-black">{item.value}</span>
              </div>
            );

            return item.isLink ? (
              <a key={idx} href={item.href} download className="block no-underline">
                {Content}
              </a>
            ) : (
              <div key={idx}>{Content}</div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className="glass-card p-10 rounded-3xl relative overflow-hidden group animate-pop-in opacity-0"
          style={{ animationDelay: '0.9s' }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -mr-32 -mt-32" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black mb-3">Ready to build something amazing?</h3>
              <p className="text-gray-400 text-lg">Let's turn your vision into a reality.</p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-black text-lg flex items-center gap-3 shadow-xl hover:shadow-blue-500/20 transition-all active:scale-95"
            >
              Start a Conversation <FiMail className="w-6 h-6" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
