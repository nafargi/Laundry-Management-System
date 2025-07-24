// src/api/auth.ts
import { LoginInput, RegisterInput, User } from '../types/auth.types';

export const login = async (data: LoginInput): Promise<User> => {
  // Simulate API delay
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ id: '1', name: 'Admin User', email: data.email, token: 'mock-token' });
    }, 500)
  );
};

export const register = async (data: RegisterInput): Promise<User> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ id: '2', name: data.name, email: data.email, token: 'mock-token-2' });
    }, 500)
  );
};

export const logout = async (): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, 200));
};
