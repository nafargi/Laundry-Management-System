// src/routes/AppRoutes.tsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Layout from '../components/layout/Layout';
import Loader from '../components/common/Loader';
import { routes } from '../constants/routes';

// Lazy load pages for better performance
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
const Analytics = lazy(() => import('../pages/dashboard/Analytics'));
const CustomerList = lazy(() => import('../pages/customers/CustomerList'));
const CustomerDetail = lazy(() => import('../pages/customers/CustomerDetail'));
const CustomerEdit = lazy(() => import('../pages/customers/CustomerEdit'));
const OrderList = lazy(() => import('../pages/orders/OrderList'));
const CreateOrder = lazy(() => import('../pages/orders/CreateOrder'));
const OrderDetail = lazy(() => import('../pages/orders/OrderDetail'));
const OrderEdit = lazy(() => import('../pages/orders/OrderEdit'));
const ServiceList = lazy(() => import('../pages/services/ServiceList'));
const ServiceEdit = lazy(() => import('../pages/services/ServiceEdit'));
const Settings = lazy(() => import('../pages/settings/Settings'));

const AppRoutes: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/auth">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route index element={<Navigate to="/auth/login" replace />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to={routes.dashboard} replace />} />
          <Route path={routes.dashboard} element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />

          <Route path={routes.customers}>
            <Route index element={<CustomerList />} />
            <Route path=":id" element={<CustomerDetail />} />
            <Route path="edit/:id" element={<CustomerEdit />} />
          </Route>

          <Route path={routes.orders}>
            <Route index element={<OrderList />} />
            <Route path="create" element={<CreateOrder />} />
            <Route path=":id" element={<OrderDetail />} />
            <Route path="edit/:id" element={<OrderEdit />} />
          </Route>

          <Route path={routes.services}>
            <Route index element={<ServiceList />} />
            <Route path="edit/:id" element={<ServiceEdit />} />
          </Route>

          <Route path={routes.settings} element={<Settings />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
