import { z } from 'zod';

export const orderSchema = z.object({
  customerId: z.string().min(1, 'Customer is required'),
  services: z.array(z.string()).min(1, 'At least one service is required'),
  notes: z.string().optional(),
  status: z.enum(['pending', 'in_progress', 'completed', 'delivered']).default('pending'),
});