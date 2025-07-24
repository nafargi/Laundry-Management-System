// src/hooks/useAuth.ts
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

// Add these stubs for now:
export const useLogin = () => {
  const { login } = useAuth();
  return { login };
};

export const useRegister = () => {
  const { register } = useAuth();
  return { register };
};

export { AuthContext }; // Ensure this export exists
