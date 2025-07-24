// src/components/layout/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../constants/';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        LaundrySys
      </div>
      <nav className="flex flex-col flex-grow mt-4">
        <NavLink
          to={routes.dashboard}
          className={({ isActive }) =>
            `px-4 py-3 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to={routes.orders}
          className={({ isActive }) =>
            `px-4 py-3 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
          }
        >
          Orders
        </NavLink>
        <NavLink
          to={routes.customers}
          className={({ isActive }) =>
            `px-4 py-3 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
          }
        >
          Customers
        </NavLink>
        <NavLink
          to={routes.services}
          className={({ isActive }) =>
            `px-4 py-3 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
          }
        >
          Services
        </NavLink>
        <NavLink
          to={routes.settings}
          className={({ isActive }) =>
            `px-4 py-3 mt-auto hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
          }
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
