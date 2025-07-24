// src/components/auth/RegisterForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterSchema } from '../../schemas/auth.schema';
import Button from '../common/Button';
import Input from '../common/Input';
import { useRegister } from '../../hooks/useAuth';
import { useNotification } from '../../context/NotificationContext';

const RegisterForm: React.FC = () => {
  const { notifySuccess, notifyError } = useNotification();
  const { mutateAsync, isLoading } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: RegisterSchema) => {
    try {
      await mutateAsync(data);
      notifySuccess('Registration successful!');
    } catch (err) {
      notifyError('Registration failed, please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Register</h2>

      <Input
        label="Name"
        type="text"
        placeholder="Your full name"
        {...register('name')}
        error={errors.name?.message}
      />

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
        placeholder="Create a password"
        {...register('password')}
        error={errors.password?.message}
      />

      <Button type="submit" loading={isLoading}>
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
