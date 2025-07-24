// src/components/customers/CustomerForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { customerSchema, CustomerSchema } from '../../schemas/customer.schema';
import Input from '../common/Input';
import Button from '../common/Button';
import { useCreateCustomer, useUpdateCustomer } from '../../hooks/useCustomers';
import { useNotification } from '../../context/NotificationContext';

interface CustomerFormProps {
  initialData?: CustomerSchema;
  onSuccess?: () => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ initialData, onSuccess }) => {
  const { notifySuccess, notifyError } = useNotification();

  const { mutateAsync: createCustomer, isLoading: creating } = useCreateCustomer();
  const { mutateAsync: updateCustomer, isLoading: updating } = useUpdateCustomer();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerSchema>({
    resolver: zodResolver(customerSchema),
    defaultValues: initialData || {},
  });

  const onSubmit = async (data: CustomerSchema) => {
    try {
      if (initialData?.id) {
        await updateCustomer({ id: initialData.id, updates: data });
        notifySuccess('Customer updated successfully');
      } else {
        await createCustomer(data);
        notifySuccess('Customer created successfully');
      }
      onSuccess && onSuccess();
    } catch {
      notifyError('Failed to save customer. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg bg-white p-6 rounded shadow">
      <Input label="Name" {...register('name')} error={errors.name?.message} />
      <Input label="Email" type="email" {...register('email')} error={errors.email?.message} />
      <Input label="Phone" {...register('phone')} error={errors.phone?.message} />
      <Input label="Address" {...register('address')} error={errors.address?.message} />

      <Button type="submit" loading={creating || updating}>
        {initialData ? 'Update Customer' : 'Add Customer'}
      </Button>
    </form>
  );
};

export default CustomerForm;
