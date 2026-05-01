'use client';

import Link from 'next/link';
import {useState, useEffect} from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navLinks = [
        {href: '/', label: 'Главная'},
        {href: '/sightseeings', label: 'Достопримечательности'},
        {href: '/routes', label: 'Маршруты'},
        {href: '/about', label: 'О проекте'},
    ];

    return (
        <header className="bg-white relative z-50">
            <div className="container mx-auto px-8 max-w-[1440px]">
                <div className="flex items-center justify-between h-[52px] md:h-[88px]">
                    <Link href="/" className="inline-block shrink-0">
                        <img
                            src="/logo.svg"
                            alt="ЗНАКОВЫЕ МЕСТА"
                            className="object-contain w-[90px] md:w-[137.75px] h-auto"
                        />
                    </Link>

                    <div className="flex items-center">
                        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12 mr-8 lg:mr-12">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href}
                                      className="text-[14px] text-black hover:opacity-60 transition-opacity whitespace-nowrap">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center">
                            <button className="hidden md:block p-1 hover:opacity-60 transition-opacity">
                                <img src="/icon-search.svg" alt="Search" className="w-6 h-6"/>
                            </button>
                            <button
                                className="md:hidden flex flex-col justify-center items-end space-y-1 w-8 h-8 relative z-[60]"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? (
                                    <div className="relative w-6 h-6">
                                        <span className="absolute inset-0 m-auto w-6 h-0.5 bg-black rotate-45"></span>
                                        <span className="absolute inset-0 m-auto w-6 h-0.5 bg-black -rotate-45"></span>
                                    </div>
                                ) : (
                                    <>
                                        <span className="block w-6 h-0.5 bg-black"></span>
                                        <span className="block w-6 h-0.5 bg-black"></span>
                                        <span className="block w-6 h-0.5 bg-black"></span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={`fixed inset-0 bg-white z-50 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`}>
                    <div className="flex flex-col pt-24 px-8 space-y-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[18px] text-black font-normal"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
