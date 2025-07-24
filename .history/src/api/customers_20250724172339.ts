// src/api/customers.ts
import { Customer } from '../types/customer.types';

let customers: Customer[] = [
  { id: '1', name: 'John Doe', phone: '123456789', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', phone: '987654321', email: 'jane@example.com' },
];

export const getCustomers = async (): Promise<Customer[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(customers), 300));
};

export const getCustomerById = async (id: string): Promise<Customer | undefined> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(customers.find((c) => c.id === id)), 300)
  );
};

export const createCustomer = async (customer: Customer): Promise<Customer> => {
  const newCustomer = { ...customer, id: String(Date.now()) };
  customers.push(newCustomer);
  return new Promise((resolve) => setTimeout(() => resolve(newCustomer), 300));
};

export const updateCustomer = async (id: string, updates: Partial<Customer>): Promise<Customer | null> => {
  const index = customers.findIndex((c) => c.id === id);
  if (index === -1) return null;
  customers[index] = { ...customers[index], ...updates };
  return new Promise((resolve) => setTimeout(() => resolve(customers[index]), 300));
};

export const deleteCustomer = async (id: string): Promise<boolean> => {
  customers = customers.filter((c) => c.id !== id);
  return new Promise((resolve) => setTimeout(() => resolve(true), 200));
};
