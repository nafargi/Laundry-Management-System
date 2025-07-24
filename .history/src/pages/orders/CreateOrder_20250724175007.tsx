// src/pages/orders/CreateOrder.tsx
import React from 'react';
import OrderForm from '../../components/orders/OrderForm';
import { useNavigate } from 'react-router-dom';

const CreateOrder: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New Order</h1>
      <OrderForm onSuccess={() => navigate('/orders')} />
    </div>
  );
};

export default CreateOrder;
