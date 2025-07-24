import { Customer } from '../types/customer.types';

let dummyCustomers: Customer[] = [
  { id: '1', name: 'John Doe', phone: '1234567890', email: 'john@example.com' }
];

export const getCustomers = async (): Promise<Customer[]> => {
  return new Promise(resolve => setTimeout(() => resolve(dummyCustomers), 500));
};

export const createCustomer = async (customer: Omit<Customer, 'id'>): Promise<Customer> => {
  const newCustomer = { ...customer, id: Date.now().toString() };
  dummyCustomers.push(newCustomer);
  return new Promise(resolve => setTimeout(() => resolve(newCustomer), 500));
};