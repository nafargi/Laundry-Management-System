// src/components/layout/Navbar.tsx
import React from 'react';
import { useAuthContext } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuthContext();

  return (
    <header className="flex justify-between items-center bg-white shadow px-6 py-3">
      <h1 className="text-xl font-bold">Laundry Management</h1>
      <div className="flex items-center space-x-4">
        <span className="font-medium">{user?.name}</span>
        <button
          onClick={() => logout()}
          className="text-red-600 hover:text-red-800 focus:outline-none"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
