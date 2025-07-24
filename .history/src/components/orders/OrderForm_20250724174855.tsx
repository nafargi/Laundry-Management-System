// src/components/orders/OrderForm.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderSchema, OrderSchema } from '../../schemas/order.schema';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';
import { useServices } from '../../hooks/useServices';
import { useCustomers } from '../../hooks/useCustomers';
import { useCreateOrder, useUpdateOrder } from '../../hooks/useOrders';
import { useNotification } from '../../context/NotificationContext';

interface OrderFormProps {
  initialData?: OrderSchema;
  onSuccess?: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ initialData, onSuccess }) => {
  const { notifySuccess, notifyError } = useNotification();

  const { data: services, isLoading: servicesLoading } = useServices();
  const { data: customers, isLoading: customersLoading } = useCustomers();

  const { mutateAsync: createOrder, isLoading: creating } = useCreateOrder();
  const { mutateAsync: updateOrder, isLoading: updating } = useUpdateOrder();

  const { control, register, handleSubmit, formState: { errors } } = useForm<OrderSchema>({
    resolver: zodResolver(orderSchema),
    defaultValues: initialData || {
      customerId: '',
      serviceIds: [],
      notes: '',
    },
  });

  const onSubmit = async (data: OrderSchema) => {
    try {
      if (initialData?.id) {
        await updateOrder({ id: initialData.id, updates: data });
        notifySuccess('Order updated successfully');
      } else {
        await createOrder(data);
        notifySuccess('Order created successfully');
      }
      onSuccess && onSuccess();
    } catch {
      notifyError('Failed to save order. Please try again.');
    }
  };

  if (servicesLoading || customersLoading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg bg-white p-6 rounded shadow space-y-4">
      <label className="block">
        <span className="font-medium text-gray-700">Customer</span>
        <select
          {...register('customerId')}
          className={`mt-1 block w-full rounded border px-3 py-2 ${
            errors.customerId ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select a customer</option>
          {customers?.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        {errors.customerId && <p className="text-red-600 mt-1 text-sm">{errors.customerId.message}</p>}
      </label>

      <label className="block">
        <span className="font-medium text-gray-700">Services</span>
        <Controller
          name="serviceIds"
          control={control}
          render={({ field }) => (
            <select
              multiple
              {...field}
              className={`mt-1 block w-full rounded border px-3 py-2 ${
                errors.serviceIds ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              {services?.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} (${s.price.toFixed(2)})
                </option>
              ))}
            </select>
          )}
        />
        {errors.serviceIds && <p className="text-red-600 mt-1 text-sm">{errors.serviceIds.message}</p>}
      </label>

      <Input
        label="Notes"
        type="text"
        placeholder="Additional notes"
        {...register('notes')}
        error={errors.notes?.message}
      />

      <Button type="submit" loading={creating || updating}>
        {initialData ? 'Update Order' : 'Create Order'}
      </Button>
    </form>
  );
};

export default OrderForm;
