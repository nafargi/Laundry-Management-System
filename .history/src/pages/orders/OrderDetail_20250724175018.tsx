// src/pages/orders/OrderDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useOrders } from '../../hooks/useOrders';
import Loader from '../../components/common/Loader';
import StatusBadge from '../../components/orders/StatusBadge';

const OrderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: orders, isLoading } = useOrders();

  if (isLoading) return <Loader />;

  const order = orders?.find((o) => o.id === id);

  if (!order) return <p className="p-6">Order not found</p>;

  return (
    <div className="p-6 bg-white rounded shadow max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Order #{order.id}</h1>
      <StatusBadge status={order.status} />
      <p><strong>Customer:</strong> {order.customer.name}</p>
      <p><strong>Services:</strong> {order.services.map(s => s.name).join(', ')}</p>
      <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
      <p><strong>Notes:</strong> {order.notes || 'N/A'}</p>
      <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default OrderDetail;
