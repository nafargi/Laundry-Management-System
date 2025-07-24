// src/hooks/useAuth.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as authApi from '../api/auth';
import { LoginInput, RegisterInput, User } from '../types/auth.types';
import { useAuthContext } from '../context/AuthContext';

export function useLogin() {
  const { login } = useAuthContext();
  const queryClient = useQueryClient();

  return useMutation<User, Error, LoginInput>({
    mutationFn: async (data) => {
      await login(data);
      return { id: '', name: '', email: '', token: '' }; // you can improve this if needed
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['user']);
    },
  });
}

export function useRegister() {
  const { register } = useAuthContext();
  const queryClient = useQueryClient();

  return useMutation<User, Error, RegisterInput>({
    mutationFn: async (data) => {
      await register(data);
      return { id: '', name: '', email: '', token: '' };
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['user']);
    },
  });
}
