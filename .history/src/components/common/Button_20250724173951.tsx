// src/components/common/Button.tsx
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  loading?: boolean;
}

const baseClasses = 'px-4 py-2 rounded font-semibold focus:outline-none disabled:opacity-50 flex items-center justify-center';

const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-300 text-gray-700 hover:bg-gray-400',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', loading, disabled, children, ...props }) => {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${disabled || loading ? 'cursor-not-allowed' : ''}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 010 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"></path>
      </svg>}
      {children}
    </button>
  );
};

export default Button;
