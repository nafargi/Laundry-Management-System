export const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const APP_ROUTES = [
  { path: '/', label: 'Dashboard' },
  { path: '/orders', label: 'Orders' },
  { path: '/customers', label: 'Customers' },
  { path: '/services', label: 'Services' }
];