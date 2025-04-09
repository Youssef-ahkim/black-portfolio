import React from 'react';
import { FiCode, FiMonitor, FiTrendingUp } from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      icon: <FiCode className="w-12 h-12 mb-4 text-blue-400" />,
      title: "Web Development",
      description: "Creating dynamic, responsive web applications using modern frameworks and industry best practices for optimal performance.",
      delay: "100ms",
      color: "blue"
    },
    {
      icon: <FiMonitor className="w-12 h-12 mb-4 text-purple-400" />,
      title: "Mobile Development",
      description: "Building cross-platform mobile applications with seamless performance and native-like user experiences.",
      delay: "200ms",
      color: "purple"
    },
    {
      icon: <FiTrendingUp className="w-12 h-12 mb-4 text-green-400" />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces that prioritize usability while maintaining aesthetic excellence and brand consistency.",
      delay: "300ms",
      color: "green"
    }
  ];

  return (
    <section 
      id="services" 
      className="relative overflow-hidden"
      aria-label="Services Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Expert Services
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your online presence and drive business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`animate-pop-in [animation-delay:${service.delay}] opacity-0
                bg-white/5 backdrop-blur-xl border border-${service.color}-400/20
                p-8 rounded-2xl transition-all duration-300 ease-out
                hover:bg-white/10 hover:border-${service.color}-400/40
                hover:-translate-y-2 hover:shadow-xl
                focus:outline-none focus:ring-2 focus:ring-${service.color}-400/30
                group`}
              role="region"
              aria-label={`${service.title} Service`}
              tabIndex={0}
            >
              <div className="flex flex-col h-full">
                <div className={`mb-6 p-3 w-fit rounded-lg bg-${service.color}-400/10`}>
                  {React.cloneElement(service.icon, {
                    'aria-hidden': true,
                    className: `${service.icon.props.className} transition-transform group-hover:scale-110`
                  })}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`inline-block w-8 h-1 bg-${service.color}-400 rounded-full`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/svg/grid-pattern.svg')] bg-repeat" />
      </div>
    </section>
  );
}