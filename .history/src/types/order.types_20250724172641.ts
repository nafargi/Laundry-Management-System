// src/types/order.types.ts

export type OrderStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled';

export interface Order {
  id: string;
  customerId: string;
  serviceIds: string[];
  status: OrderStatus;
  dueDate: string;
  createdAt: string;
  notes?: string;
}

export interface OrderInput {
  customerId: string;
  serviceIds: string[];
  dueDate: string;
  notes?: string;
}
