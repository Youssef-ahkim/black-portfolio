'use client'
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { FiBriefcase } from 'react-icons/fi';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll('section');

      sections.forEach(section => {
        const { offsetTop, offsetHeight } = section;
        if (scrollPosition > offsetTop && scrollPosition <= offsetTop + offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }) => {
    const isActive = activeSection === href.slice(1);
    return (
      <a
        href={href}
        className={`relative px-4 py-2 text-sm transition-colors duration-300
          ${isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-300'}
          after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px]
          after:bg-cyan-400 after:transition-all after:duration-300
          hover:after:w-full hover:after:left-0 ${isActive && 'after:w-full after:left-0'}`}
      >
        {children}
      </a>
    );
  };

  const MenuButton = () => (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 focus:outline-none"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        )}
      </svg>
    </button>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Logo
          </a>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-4">
              {navigation.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-full
                        text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all
                        shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02]"
            >
              <FiBriefcase className="w-4 h-4" />
              Hire Me
            </a>
            <MenuButton />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-125"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div className="md:hidden bg-white/5 backdrop-blur-lg border-t border-white/10 px-4 pb-6">
          <div className="space-y-3 pt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors duration-200
                  ${activeSection === item.href.slice(1)
                    ? 'bg-white/10 text-cyan-400'
                    : 'text-gray-300 hover:bg-white/10 hover:text-cyan-300'}`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg
                        text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all
                        shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
            >
              <FiBriefcase className="w-4 h-4" />
              Hire Me
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default NavBar;