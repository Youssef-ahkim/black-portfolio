'use client'
import { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';
import { FiBriefcase } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navigation = [
    { id: 'home', name: 'Home', href: '/' },
    { id: 'services', name: 'Services', href: '/services' },
    { id: 'projects', name: 'Projects', href: '/projects' },
    { id: 'contact', name: 'Contact', href: '/contact' },
];

export default function Nav() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // This ref ensures animations run only once
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!hasAnimated.current) {
            hasAnimated.current = true;
        }
    }, []);

    const NavLink = ({ item, delay }) => {
        const isActive = pathname === item.href;
        return (
            <Link
                href={item.href}
                className={`relative px-4 py-2 text-sm transition-colors duration-300 ${isActive ? 'text-cyan-300' : 'text-gray-300 hover:text-cyan-300'
                    } after:absolute after:bottom-0 after:left-1/2
        after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all
        after:duration-300 hover:after:w-full hover:after:left-0
        ${!hasAnimated.current ? 'animate-pop-in opacity-0' : 'opacity-100'}`}
                style={!hasAnimated.current ? { animationDelay: `${delay}ms` } : {}}
                onClick={() => setIsOpen(false)}
            >
                {item.name}
            </Link>
        );
    };

    return (
        <nav className="absolute top-0 w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 relative">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={`${!hasAnimated.current ? 'animate-pop-in opacity-0' : 'opacity-100'}`}
                        style={!hasAnimated.current ? { animationDelay: '150ms' } : {}}
                    >
                        <Image src="/logo.png" width={128} height={40} className="h-10 w-auto" alt="LOGO" priority />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                        <div className="flex items-center gap-4">
                            {navigation.map((item, index) => (
                                <NavLink key={item.id} item={item} delay={300 + index * 100} />
                            ))}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div
                        className={`flex items-center gap-4 ${!hasAnimated.current ? 'animate-pop-in opacity-0' : 'opacity-100'
                            }`}
                        style={!hasAnimated.current ? { animationDelay: '450ms' } : {}}
                    >
                        <Link
                            href="/contact"
                            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-full
                        text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all
                        shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02]"
                        >
                            <FiBriefcase className="w-4 h-4" />
                            Hire Me
                        </Link>

                        {/* Mobile menu button */}
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
                enter="transition-transform transition-opacity duration-300 ease-out"
                enterFrom="-translate-y-6 opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="transition-transform transition-opacity duration-200 ease-in"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="-translate-y-6 opacity-0"
            >
                <div className="md:hidden fixed inset-x-0 top-16 bg-black/90 backdrop-blur-lg border-t border-white/10 shadow-xl z-40">
                    <div className="flex flex-col gap-4 p-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`text-gray-300 hover:text-cyan-300 text-lg font-medium transition-colors ${pathname === item.href ? 'text-cyan-300' : ''
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full
                   text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all
                   shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02]"
                            onClick={() => setIsOpen(false)}
                        >
                            <FiBriefcase className="w-4 h-4" />
                            Hire Me
                        </Link>
                    </div>
                </div>
            </Transition>


        </nav>
    );
}
