// src/schemas/customer.schema.ts
import { z } from 'zod';

export const customerSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email().optional(),
  phone: z.string().min(7, 'Phone number is required'),
  address: z.string().optional(),
});

export type CustomerSchema = z.infer<typeof customerSchema>;
