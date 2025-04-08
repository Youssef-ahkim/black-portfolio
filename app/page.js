'use client'
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FiBriefcase } from 'react-icons/fi';
import Image from 'next/image';

// Import your components (adjust paths as needed)
import Home from '@/components/Home';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

const navigation = [
  { id: 'home', name: 'Home', href: '#' },
  { id: 'about', name: 'About', href: '#' },
  { id: 'services', name: 'Services', href: '#' },
  { id: 'contact', name: 'Contact', href: '#' },
];

export default function NavBar() {
  const [activeTab, setActiveTab] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  // Custom NavLink component that highlights the active tab
  const NavLink = ({ item }) => {
    const isActive = activeTab === item.id;
    return (
      <button
        onClick={() => {
          setActiveTab(item.id);
          setIsOpen(false); // Close mobile menu when a tab is clicked
        }}
        className={`relative px-4 py-2 text-sm transition-colors duration-300 ${
          isActive ? 'text-cyan-300' : 'text-gray-300 hover:text-cyan-300'
        } after:absolute after:bottom-0 after:left-1/2 
          after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all 
          after:duration-300 hover:after:w-full hover:after:left-0`}
      >
        {item.name}
      </button>
    );
  };

  // Map component imports
  const componentMap = {
    home: <Home />,
    about: <About />,
    services: <Services />,
    contact: <Contact />,
  };

  return (
    <div>
      <nav className="animate-slide-and-pop opacity-0 top-0 w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            {/* Logo */}
            <button 
              onClick={() => setActiveTab('home')}
              className="animate-pop-in [animation-delay:150ms] opacity-0"
            >
              <Image 
                src="/logo.png" 
                width={160}
                height={160}
                className="w-10 h-10 md:w-10 md:h-10"
                alt="LOGO"
                priority
              />
            </button>

            {/* Centered Desktop Navigation */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 animate-pop-in [animation-delay:300ms] opacity-0">
              <div className="flex items-center gap-4">
                {navigation.map((item) => (
                  <NavLink key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 animate-pop-in [animation-delay:450ms] opacity-0">
              <button
                onClick={() => setActiveTab('contact')}
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-full
                           text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all
                           shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02]"
              >
                <FiBriefcase className="w-4 h-4" />
                Hire Me
              </button>
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
          <div className="md:hidden bg-white/2 backdrop-blur-lg border-t border-white/10 px-4 pb-6">
            <div className="space-y-3 pt-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className="block px-4 py-3 rounded-lg text-gray-300 transition-colors
                             duration-200 hover:bg-white/10 hover:text-cyan-300"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setActiveTab('contact');
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg
                           text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all
                           shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
              >
                <FiBriefcase className="w-4 h-4" />
                Hire Me
              </button>
            </div>
          </div>
        </Transition>
      </nav>

      {/* Render Active Component */}
      <div className="min-h-screen">
        {componentMap[activeTab]}
      </div>
    </div>
  );
}
