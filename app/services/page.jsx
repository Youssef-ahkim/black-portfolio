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
    blue: "blue-400",
    purple: "purple-400",
    green: "green-400"
  };

  return (
    <section id="services" className="relative overflow-hidden pt-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Expert Services
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const color = colorMap[service.color];
            return (
              <div
                key={service.title}
                className={`animate-pop-in [animation-delay:${service.delay}] opacity-0
                  bg-white/5 backdrop-blur-xl border border-${color}/20
                  p-8 rounded-2xl transition-all duration-300 ease-out
                  hover:bg-white/10
                  hover:-translate-y-2 hover:shadow-xl
                  group`}
              >
                <div className="flex flex-col h-full">
                  <div className={`mb-6 p-3 w-fit rounded-lg bg-${color}/10`}>
                    {React.cloneElement(service.icon, {
                      className: `w-12 h-12 mb-4 text-${color} transition-transform group-hover:scale-110`
                    })}
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`inline-block w-8 h-1 bg-${color} rounded-full`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
