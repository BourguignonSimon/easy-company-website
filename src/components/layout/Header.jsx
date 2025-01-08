import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-primary shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="w-36">
            <img src="/logo.svg" alt="Easy Company" className="w-full" />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-200">Accueil</Link>
            <Link href="/services" className="text-white hover:text-gray-200">Nos Services</Link>
            <Link href="/blog" className="text-white hover:text-gray-200">Blog/Actualités</Link>
            <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;