// src/pages/customers/CustomerList.tsx
import React, { useState } from 'react';
import CustomerTable from '../../components/customers/CustomerTable';
import CustomerForm from '../../components/customers/CustomerForm';
import Loader from '../../components/common/Loader';
import { useCustomers } from '../../hooks/useCustomers';
import { Customer } from '../../types/customer.types';

const CustomerList: React.FC = () => {
  const { data: customers, isLoading } = useCustomers();
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [showForm, setShowForm] = useState(false);

  if (isLoading) return <Loader />;

  const handleEdit = (customer: Customer) => {
    setEditingCustomer(customer);
    setShowForm(true);
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditingCustomer(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold">Customers</h1>
        <button
          onClick={() => {
            setEditingCustomer(null);
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Customer
        </button>
      </div>

      {showForm && (
        <CustomerForm
          initialData={editingCustomer ?? undefined}
          onSuccess={handleFormSuccess}
        />
      )}

      <CustomerTable customers={customers ?? []} onEdit={handleEdit} />
    </div>
  );
};

export default CustomerList;
