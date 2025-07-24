// src/pages/orders/OrderEdit.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOrders } from '../../hooks/useOrders';
import Loader from '../../components/common/Loader';
import OrderForm from '../../components/orders/OrderForm';

const OrderEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: orders, isLoading } = useOrders();
  const navigate = useNavigate();

  if (isLoading) return <Loader />;

  const order = orders?.find((o) => o.id === id);

  if (!order) return <p className="p-6">Order not found</p>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Edit Order #{order.id}</h1>
      <OrderForm
        initialData={{
          customerId: order.customer.id,
          serviceIds: order.services.map((s) => s.id),
          notes: order.notes,
          status: order.status,
          id: order.id,
          total: order.total,
          createdAt: order.createdAt,
        }}
        onSuccess={() => navigate('/orders')}
      />
    </div>
  );
};

export default OrderEdit;
