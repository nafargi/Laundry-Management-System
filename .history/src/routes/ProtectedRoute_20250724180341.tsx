// src/routes/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;
