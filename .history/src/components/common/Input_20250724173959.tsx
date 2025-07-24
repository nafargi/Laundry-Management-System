// src/components/common/Input.tsx
import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-medium text-gray-700">{label}</label>}
      <input
        className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'
        }`}
        {...props}
      />
      {error && <p className="text-red-600 mt-1 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
