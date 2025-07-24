// src/hooks/useOrders.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as ordersApi from '../api/orders';
import { Order, OrderCreateUpdate } from '../types/order.types';

export const useOrders = () => {
  return useQuery<Order[], Error>(['orders'], ordersApi.getOrders);
};

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(ordersApi.createOrder, {
    onSuccess: () => queryClient.invalidateQueries(['orders']),
  });
};

export const useUpdateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, updates }: { id: string; updates: OrderCreateUpdate }) =>
      ordersApi.updateOrder(id, updates),
    {
      onSuccess: () => queryClient.invalidateQueries(['orders']),
    }
  );
};

export const useDeleteOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(ordersApi.deleteOrder, {
    onSuccess: () => queryClient.invalidateQueries(['orders']),
  });
};
