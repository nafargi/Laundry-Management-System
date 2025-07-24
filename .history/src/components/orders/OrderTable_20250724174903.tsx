// src/components/orders/OrderTable.tsx
import React from 'react';
import Table from '../common/Table';
import StatusBadge from './StatusBadge';
import Button from '../common/Button';
import { Order } from '../../types/order.types';

interface OrderTableProps {
  orders: Order[];
  onEdit: (order: Order) => void;
}

const OrderTable: React.FC<OrderTableProps> = ({ orders, onEdit }) => {
  return (
    <Table headers={['Order ID', 'Customer', 'Services', 'Status', 'Total', 'Actions']}>
      {orders.map((order) => (
        <tr key={order.id} className="border-b hover:bg-gray-50">
          <td className="py-2 px-4">{order.id}</td>
          <td className="py-2 px-4">{order.customer.name}</td>
          <td className="py-2 px-4">{order.services.map((s) => s.name).join(', ')}</td>
          <td className="py-2 px-4"><StatusBadge status={order.status} /></td>
          <td className="py-2 px-4">${order.total.toFixed(2)}</td>
          <td className="py-2 px-4">
            <Button variant="secondary" onClick={() => onEdit(order)}>
              Edit
            </Button>
          </td>
        </tr>
      ))}
    </Table>
  );
};

export default OrderTable;
