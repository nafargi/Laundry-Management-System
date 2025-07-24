// src/api/services.ts
import { Service } from '../types/service.types';

const services: Service[] = [
  { id: '1', name: 'Wash & Fold', price: 5 },
  { id: '2', name: 'Dry Cleaning', price: 10 },
  { id: '3', name: 'Ironing', price: 3 },
];

export const getServices = async (): Promise<Service[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(services), 200));
};
