import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-primary shadow-lg">
          <nav className="flex flex-col p-4">
            <Link 
              href="/" 
              className="text-white py-2 hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            {/* Add other navigation links */}
          </nav>
        </div>
      )}
    </div>
  );
}