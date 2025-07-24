// src/components/auth/LoginForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchema } from '../../schemas/auth.schema';
import Button from '../common/Button';
import Input from '../common/Input';
import { useLogin } from '../../hooks/useAuth';
import { useNotification } from '../../context/NotificationContext';

const LoginForm: React.FC = () => {
  const { notifySuccess, notifyError } = useNotification();
  const { mutateAsync, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginSchema) => {
    try {
      await mutateAsync(data);
      notifySuccess('Login successful!');
    } catch (err) {
      notifyError('Login failed, please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>

      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        label="Password"
        type="password"
        placeholder="Your password"
        {...register('password')}
        error={errors.password?.message}
      />

      <Button type="submit" loading={isLoading}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
