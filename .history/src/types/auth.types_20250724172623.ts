// src/types/auth.types.ts

export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}
