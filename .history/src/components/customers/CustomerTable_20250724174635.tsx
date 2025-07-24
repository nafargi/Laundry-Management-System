// src/components/customers/CustomerTable.tsx
import React from 'react';
import Table from '../common/Table';
import Button from '../common/Button';
import { Customer } from '../../types/customer.types';

interface CustomerTableProps {
  customers: Customer[];
  onEdit: (customer: Customer) => void;
}

const CustomerTable: React.FC<CustomerTableProps> = ({ customers, onEdit }) => {
  return (
    <Table headers={['Name', 'Email', 'Phone', 'Address', 'Actions']}>
      {customers.map((customer) => (
        <tr key={customer.id} className="border-b hover:bg-gray-50">
          <td className="py-2 px-4">{customer.name}</td>
          <td className="py-2 px-4">{customer.email}</td>
          <td className="py-2 px-4">{customer.phone}</td>
          <td className="py-2 px-4">{customer.address}</td>
          <td className="py-2 px-4">
            <Button variant="secondary" onClick={() => onEdit(customer)}>
              Edit
            </Button>
          </td>
        </tr>
      ))}
    </Table>
  );
};

export default CustomerTable;
