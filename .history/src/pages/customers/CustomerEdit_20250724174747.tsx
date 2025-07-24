// src/pages/customers/CustomerEdit.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCustomers } from '../../hooks/useCustomers';
import CustomerForm from '../../components/customers/CustomerForm';
import Loader from '../../components/common/Loader';

const CustomerEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: customers, isLoading } = useCustomers();
  const navigate = useNavigate();

  if (isLoading) return <Loader />;

  const customer = customers?.find((c) => c.id === id);

  if (!customer) return <p className="p-6">Customer not found</p>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Edit Customer</h1>
      <CustomerForm
        initialData={customer}
        onSuccess={() => navigate('/customers')}
      />
    </div>
  );
};

export default CustomerEdit;
