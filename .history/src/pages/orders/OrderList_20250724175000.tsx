// src/pages/orders/OrderList.tsx
import React, { useState } from 'react';
import OrderTable from '../../components/orders/OrderTable';
import Loader from '../../components/common/Loader';
import { useOrders } from '../../hooks/useOrders';
import { Order, OrderStatus } from '../../types/order.types';

const OrderList: React.FC = () => {
  const { data: orders, isLoading } = useOrders();
  const [filterStatus, setFilterStatus] = useState<OrderStatus | 'all'>('all');
  const [editingOrder, setEditingOrder] = React.useState<Order | null>(null);

  if (isLoading) return <Loader />;

  const filteredOrders =
    filterStatus === 'all'
      ? orders
      : orders?.filter((order) => order.status === filterStatus);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Orders</h1>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as OrderStatus | 'all')}
          className="border rounded px-3 py-1"
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {filteredOrders && <OrderTable orders={filteredOrders} onEdit={setEditingOrder} />}
    </div>
  );
};

export default OrderList;
