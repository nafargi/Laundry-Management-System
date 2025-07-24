// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, LoginInput, RegisterInput } from '../types/auth.types';
import * as authApi from '../api/auth';

interface AuthContextType {
  user: User | null;
  login: (data: LoginInput) => Promise<void>;
  register: (data: RegisterInput) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = async (data: LoginInput) => {
    const res = await authApi.login(data);
    setUser(res);
    localStorage.setItem('user', JSON.stringify(res));
  };

  const register = async (data: RegisterInput) => {
    const res = await authApi.register(data);
    setUser(res);
    localStorage.setItem('user', JSON.stringify(res));
  };

  const logout = async () => {
    await authApi.logout();
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuthContext must be used within an AuthProvider');
  return ctx;
};
