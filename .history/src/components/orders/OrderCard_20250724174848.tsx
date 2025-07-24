// src/components/orders/OrderCard.tsx
import React from 'react';
import StatusBadge from './StatusBadge';
import { Order } from '../../types/order.types';

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Order #{order.id}</h3>
        <StatusBadge status={order.status} />
      </div>
      <p><strong>Customer:</strong> {order.customer.name}</p>
      <p><strong>Services:</strong> {order.services.map(s => s.name).join(', ')}</p>
      <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
      <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default OrderCard;
