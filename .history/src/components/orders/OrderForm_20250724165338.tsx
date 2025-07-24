import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderSchema } from '../../schemas/order.schema';
import { Button, Input, Select } from '../common';
import { useServices } from '../../hooks/useServices';
import { useCustomers } from '../../hooks/useCustomers';

type FormData = Zod.infer<typeof orderSchema>;

export const OrderForm = ({ onSubmit }: { onSubmit: (data: FormData) => void }) => {
  const { services } = useServices();
  const { customers } = useCustomers();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(orderSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Select
        label="Customer"
        options={customers.map(c => ({ value: c.id, label: c.name }))}
        error={errors.customerId?.message}
        {...register('customerId')}
      />
      
      <div className="space-y-2">
        <label className="block font-medium">Services</label>
        {services.map(service => (
          <div key={service.id} className="flex items-center">
            <input
              type="checkbox"
              id={`service-${service.id}`}
              value={service.id}
              {...register('services')}
            />
            <label htmlFor={`service-${service.id}`} className="ml-2">
              {service.name} (${service.price})
            </label>
          </div>
        ))}
        {errors.services && <p className="text-red-500">{errors.services.message}</p>}
      </div>

      <Input
        label="Notes"
        type="text"
        error={errors.notes?.message}
        {...register('notes')}
      />

      <Button type="submit" className="w-full">
        Create Order
      </Button>
    </form>
  );
};