'use client';

import Link from 'next/link';
import {useState} from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        {href: '/', label: 'Главная'},
        {href: '/sightseeings', label: 'Достопримечательности'},
        {href: '/routes', label: 'Маршруты'},
        {href: '/about', label: 'О проекте'},
    ];

    return (
        <header className="bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center space-x-2">
                        <img src="/logo.svg" alt="logotype" className="h-16 w-auto text-gray-700"/>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button
                            className="md:flex p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block"
                            aria-label="Search">
                            <img src="/icon-search.svg" alt="Search" className="w-6 h-6 text-gray-700"/>
                        </button>
                    
                        <button
                            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu">
                            <svg
                                className="w-6 h-6 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"/>
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"/>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-gray-200 bg-white shadow-lg">
                        <div className="flex flex-col space-y-3 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-700 hover:text-gray-900 font-medium py-3 px-4 rounded-md transition-colors"
                                    onClick={() => setIsMenuOpen(false)}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}