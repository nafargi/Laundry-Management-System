// src/pages/dashboard/Dashboard.tsx
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p>Welcome to your laundry management dashboard. Here you can monitor recent activity and stats.</p>
      {/* Placeholder for future widgets and charts */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
          <p className="text-3xl font-bold">128</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Active Customers</h2>
          <p className="text-3xl font-bold">54</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Pending Orders</h2>
          <p className="text-3xl font-bold">12</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
