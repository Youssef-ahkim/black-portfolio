'use client'
import React from 'react';
import { FiCode, FiMonitor, FiTrendingUp } from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      icon: <FiCode />,
      title: "Web Development",
      description: "Creating dynamic, responsive web applications using modern frameworks and industry best practices.",
      delay: "100ms",
      color: "blue"
    },
    {
      icon: <FiMonitor />,
      title: "Mobile Development",
      description: "Building cross-platform mobile applications with seamless performance and native-like UX.",
      delay: "200ms",
      color: "purple"
    },
    {
      icon: <FiTrendingUp />,
      title: "UI/UX Design",
      description: "Designing intuitive interfaces that prioritize usability and aesthetic excellence.",
      delay: "300ms",
      color: "green"
    }
  ];

  const colorMap = {
    blue: {
      text: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      glow: "group-hover:shadow-blue-500/20",
      bar: "bg-blue-500"
    },
    purple: {
      text: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      glow: "group-hover:shadow-purple-500/20",
      bar: "bg-purple-500"
    },
    green: {
      text: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      glow: "group-hover:shadow-green-500/20",
      bar: "bg-green-500"
    }
  };

  return (
    <section id="services" className="relative overflow-hidden pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-20 text-center space-y-4 animate-slide-pop-ease opacity-0" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
            Expert Services
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Providing high-end digital solutions that combine technical excellence with premium design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const styles = colorMap[service.color];
            return (
              <div
                key={service.title}
                className={`animate-pop-in flex flex-col glass-card p-10 rounded-3xl group opacity-0 ${styles.border} ${styles.glow}`}
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className={`mb-8 p-4 w-16 h-16 rounded-2xl ${styles.bg} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                  {React.cloneElement(service.icon, {
                    className: `w-8 h-8 ${styles.text}`
                  })}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed flex-1">
                  {service.description}
                </p>

                <div className="mt-10 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className={`w-12 h-1.5 ${styles.bar} rounded-full`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
