// src/pages/auth/Register.tsx
import React from 'react';
import RegisterForm from '../../components/auth/RegisterForm';

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RegisterForm />
    </div>
  );
};

export default Register;
