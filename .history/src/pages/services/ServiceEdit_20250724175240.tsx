// src/pages/services/ServiceEdit.tsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../../components/common/Loader';
import { useServices, useUpdateService } from '../../hooks/useServices';
import { Service } from '../../types/service.types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { serviceSchema, ServiceSchema } from '../../schemas/serviceTypes';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { useNotification } from '../../context/NotificationContext';

const ServiceEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: services, isLoading } = useServices();
  const navigate = useNavigate();
  const { notifySuccess, notifyError } = useNotification();
  const { mutateAsync: updateService, isLoading: updating } = useUpdateService();

  const service = services?.find((s) => s.id === id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ServiceSchema>({
    resolver: zodResolver(serviceSchema),
  });

  useEffect(() => {
    if (service) reset(service);
  }, [service, reset]);

  if (isLoading) return <Loader />;

  if (!service) return <p className="p-6">Service not found</p>;

  const onSubmit = async (data: ServiceSchema) => {
    try {
      await updateService({ id: service.id, updates: data });
      notifySuccess('Service updated successfully');
      navigate('/services');
    } catch {
      notifyError('Failed to update service');
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Edit Service</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded shadow">
        <Input label="Name" {...register('name')} error={errors.name?.message} />
        <Input label="Description" {...register('description')} error={errors.description?.message} />
        <Input label="Price" type="number" step="0.01" {...register('price', { valueAsNumber: true })} error={errors.price?.message} />

        <Button type="submit" loading={updating}>Update Service</Button>
      </form>
    </div>
  );
};

export default ServiceEdit;
