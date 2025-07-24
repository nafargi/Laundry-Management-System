// src/hooks/useOrders.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as ordersApi from '../api/orders';
import { Order, OrderInput } from '../types/order.types';

export function useOrders() {
  return useQuery<Order[], Error>(['orders'], ordersApi.getOrders);
}

export function useCreateOrder() {
  const queryClient = useQueryClient();
  return useMutation(ordersApi.createOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries(['orders']);
    },
  });
}

export function useUpdateOrder() {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, updates }: { id: string; updates: Partial<Order> }) =>
      ordersApi.updateOrder(id, updates),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['orders']);
      },
    }
  );
}

export function useDeleteOrder() {
  const queryClient = useQueryClient();
  return useMutation(ordersApi.deleteOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries(['orders']);
    },
  });
}
