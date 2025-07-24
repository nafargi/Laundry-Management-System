import { NavLink } from 'react-router-dom';
import { routes } from '../../constants/routes';

export const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold">Laundry System</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) => 
                  `block px-4 py-2 rounded ${isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`
                }
              >
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};