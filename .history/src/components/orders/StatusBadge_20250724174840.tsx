// src/components/orders/StatusBadge.tsx
import React from 'react';
import { OrderStatus } from '../../constants/orderStatus';

interface StatusBadgeProps {
  status: OrderStatus;
}

const statusColors: Record<OrderStatus, string> = {
  pending: 'bg-yellow-200 text-yellow-800',
  'in-progress': 'bg-blue-200 text-blue-800',
  completed: 'bg-green-200 text-green-800',
  cancelled: 'bg-red-200 text-red-800',
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const classes = statusColors[status] || 'bg-gray-200 text-gray-800';
  return (
    <span className={`px-2 py-1 rounded text-sm font-semibold ${classes}`}>
      {status.replace('-', ' ').toUpperCase()}
    </span>
  );
};

export default StatusBadge;
