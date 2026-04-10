'use client'
import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineHand } from 'react-icons/hi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navigation = [
    { id: 'home', name: 'Home', href: '/' },
    { id: 'services', name: 'Services', href: '/services' },
    { id: 'projects', name: 'Projects', href: '/projects' },
    { id: 'contact', name: 'Contact', href: '/contact' },
];

// Global variable to track if the site has already performed its initial animation
let hasSiteBeenAnimated = false;

const NavLink = ({ item, delay, isActive, shouldAnimate, setIsOpen }) => {
    return (
        <Link
            href={item.href}
            className={`relative px-4 py-2 text-sm font-medium transition-all duration-500 
                ${isActive ? 'text-blue-400' : 'text-gray-400 hover:text-white'}
                after:absolute after:bottom-0 after:left-1/2
                after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 
                after:transition-all after:duration-300 hover:after:w-full hover:after:left-0
                ${shouldAnimate ? 'animate-pop-in opacity-0' : 'opacity-100'}`}
            style={shouldAnimate ? { animationDelay: `${delay}ms` } : {}}
            onClick={() => setIsOpen(false)}
        >
            {item.name}
        </Link>
    );
};

export default function Nav() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Stable state determined at mount time
    const [shouldAnimate] = useState(!hasSiteBeenAnimated);

    useEffect(() => {
        hasSiteBeenAnimated = true;
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/5 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 relative">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={`flex items-center gap-2 group ${shouldAnimate ? 'animate-pop-in opacity-0' : 'opacity-100'}`}
                        style={shouldAnimate ? { animationDelay: '100ms' } : {}}
                    >
                        <div className="relative">
                            <Image src="/logo.png" width={128} height={40} className="h-9 w-auto grayscale brightness-200 group-hover:grayscale-0 transition-all duration-500" alt="LOGO" priority />
                            <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex absolute border border-white/10 bg-white/5 px-2 py-1 rounded-full left-1/2 transform -translate-x-1/2 backdrop-blur-md">
                        <div className="flex items-center gap-1">
                            {navigation.map((item, index) => (
                                <NavLink 
                                    key={item.id} 
                                    item={item} 
                                    delay={200 + index * 50} 
                                    isActive={pathname === item.href}
                                    shouldAnimate={shouldAnimate}
                                    setIsOpen={setIsOpen}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div
                        className={`flex items-center gap-4 ${shouldAnimate ? 'animate-pop-in opacity-0' : 'opacity-100'}`}
                        style={shouldAnimate ? { animationDelay: '400ms' } : {}}
                    >
                        <Link
                            href="/contact"
                            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 rounded-full
                        text-sm font-semibold text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all
                        hover:scale-[1.02] active:scale-95"
                        >
                            <HiOutlineHand className="w-4 h-4" />
                            Hire Me
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all focus:outline-none"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <Transition show={isOpen}>
                {/* Backdrop Layer */}
                <Transition.Child
                    as="div"
                    enter="transition-opacity duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-700"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-40"
                    onClick={() => setIsOpen(false)}
                />

                {/* Menu Card */}
                <Transition.Child
                    as="div"
                    enter="transition-all duration-1000 ease-out"
                    enterFrom="opacity-0 -translate-y-4 scale-95"
                    enterTo="opacity-100 translate-y-0 scale-100"
                    leave="transition-all duration-700 ease-in"
                    leaveFrom="opacity-100 translate-y-0 scale-100"
                    leaveTo="opacity-0 -translate-y-4 scale-95"
                    className="md:hidden fixed inset-x-4 top-24 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl z-50 overflow-hidden"
                >
                    <div className="flex flex-col gap-2 p-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                                    pathname === item.href 
                                    ? 'bg-white/10 text-blue-400' 
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 rounded-xl
                   text-base font-semibold text-white transition-all active:scale-[0.98]"
                            onClick={() => setIsOpen(false)}
                        >
                            <HiOutlineHand className="w-5 h-5" />
                            Hire Me
                        </Link>
                    </div>
                </Transition.Child>
            </Transition>
        </nav>
    );
}
