import { Order, OrderStatus } from '../types/order.types';

let dummyOrders: Order[] = [
  {
    id: '1',
    customerId: '1',
    services: [{ id: '1', name: 'Wash & Fold', price: 10 }],
    status: 'pending',
    createdAt: new Date().toISOString()
  }
];

export const getOrders = async (): Promise<Order[]> => {
  return new Promise(resolve => setTimeout(() => resolve(dummyOrders), 500));
};

export const createOrder = async (order: Omit<Order, 'id' | 'createdAt'>): Promise<Order> => {
  const newOrder = { 
    ...order, 
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };
  dummyOrders.push(newOrder);
  return new Promise(resolve => setTimeout(() => resolve(newOrder), 500));
};