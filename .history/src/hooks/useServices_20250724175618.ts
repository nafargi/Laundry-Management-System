// src/hooks/useServices.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as servicesApi from '../api/services';
import { Service, ServiceCreateUpdate } from '../types/service.types';

export const useServices = () => {
  return useQuery<Service[], Error>(['services'], servicesApi.getServices);
};

export const useCreateService = () => {
  const queryClient = useQueryClient();
  return useMutation(servicesApi.createService, {
    onSuccess: () => queryClient.invalidateQueries(['services']),
  });
};

export const useUpdateService = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, updates }: { id: string; updates: ServiceCreateUpdate }) =>
      servicesApi.updateService(id, updates),
    {
      onSuccess: () => queryClient.invalidateQueries(['services']),
    }
  );
};

export const useDeleteService = () => {
  const queryClient = useQueryClient();
  return useMutation(servicesApi.deleteService, {
    onSuccess: () => queryClient.invalidateQueries(['services']),
  });
};
