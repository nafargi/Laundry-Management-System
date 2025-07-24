// src/api/orders.ts
import { Order, OrderInput } from '../types/order.types';

let orders: Order[] = [
  {
    id: '101',
    customerId: '1',
    serviceIds: ['1', '2'],
    status: 'pending',
    dueDate: '2025-08-01',
    createdAt: new Date().toISOString(),
  },
];

export const getOrders = async (): Promise<Order[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(orders), 300));
};

export const getOrderById = async (id: string): Promise<Order | undefined> => {
  return new Promise((resolve) => setTimeout(() => resolve(orders.find((o) => o.id === id)), 300));
};

export const createOrder = async (orderData: OrderInput): Promise<Order> => {
  const newOrder: Order = {
    id: String(Date.now()),
    ...orderData,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
  orders.push(newOrder);
  return new Promise((resolve) => setTimeout(() => resolve(newOrder), 300));
};

export const updateOrder = async (id: string, updates: Partial<Order>): Promise<Order | null> => {
  const index = orders.findIndex((o) => o.id === id);
  if (index === -1) return null;
  orders[index] = { ...orders[index], ...updates };
  return new Promise((resolve) => setTimeout(() => resolve(orders[index]), 300));
};

export const deleteOrder = async (id: string): Promise<boolean> => {
  orders = orders.filter((o) => o.id !== id);
  return new Promise((resolve) => setTimeout(() => resolve(true), 200));
};
