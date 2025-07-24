// src/pages/customers/CustomerDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCustomers } from '../../hooks/useCustomers';
import Loader from '../../components/common/Loader';

const CustomerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: customers, isLoading } = useCustomers();

  if (isLoading) return <Loader />;

  const customer = customers?.find((c) => c.id === id);

  if (!customer) return <p className="p-6">Customer not found</p>;

  return (
    <div className="p-6 bg-white rounded shadow max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">{customer.name}</h1>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Phone:</strong> {customer.phone}</p>
      <p><strong>Address:</strong> {customer.address}</p>
    </div>
  );
};

export default CustomerDetail;
