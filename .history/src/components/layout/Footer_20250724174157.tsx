// src/components/layout/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm py-3 border-t border-gray-300 mt-auto">
      &copy; {new Date().getFullYear()} Laundry Management System. All rights reserved.
    </footer>
  );
};

export default Footer;
