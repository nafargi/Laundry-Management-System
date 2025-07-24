// src/hooks/useCustomers.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as customersApi from '../api/customers';
import { Customer } from '../types/customer.types';

export function useCustomers() {
  return useQuery<Customer[], Error>(['customers'], customersApi.getCustomers);
}

export function useCreateCustomer() {
  const queryClient = useQueryClient();
  return useMutation(customersApi.createCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries(['customers']);
    },
  });
}

export function useUpdateCustomer() {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, updates }: { id: string; updates: Partial<Customer> }) =>
      customersApi.updateCustomer(id, updates),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['customers']);
      },
    }
  );
}

export function useDeleteCustomer() {
  const queryClient = useQueryClient();
  return useMutation(customersApi.deleteCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries(['customers']);
    },
  });
}
