import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Easy Company. Easy is Smart - Smart is Easy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;