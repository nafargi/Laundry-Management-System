// src/components/layout/Layout.tsx
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <main className="flex-grow overflow-auto p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
