// src/hooks/useCustomers.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as customersApi from '../api/customers';
import { Customer, CustomerCreateUpdate } from '../types/customer.types';

export const useCustomers = () => {
  return useQuery<Customer[], Error>(['customers'], customersApi.getCustomers);
};

export const useCreateCustomer = () => {
  const queryClient = useQueryClient();
  return useMutation(customersApi.createCustomer, {
    onSuccess: () => queryClient.invalidateQueries(['customers']),
  });
};

export const useUpdateCustomer = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, updates }: { id: string; updates: CustomerCreateUpdate }) =>
      customersApi.updateCustomer(id, updates),
    {
      onSuccess: () => queryClient.invalidateQueries(['customers']),
    }
  );
};

export const useDeleteCustomer = () => {
  const queryClient = useQueryClient();
  return useMutation(customersApi.deleteCustomer, {
    onSuccess: () => queryClient.invalidateQueries(['customers']),
  });
};
