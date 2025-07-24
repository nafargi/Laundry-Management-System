// src/schemas/order.schema.ts
import { z } from 'zod';

export const orderSchema = z.object({
  customerId: z.string().min(1, 'Customer is required'),
  serviceIds: z.array(z.string()).min(1, 'At least one service is required'),
  dueDate: z.string().min(1, 'Due date is required'),
  notes: z.string().optional(),
});

export type OrderSchema = z.infer<typeof orderSchema>;
