type User = {
  id: string;
  email: string;
  name: string;
  token: string;
};

const dummyUsers: User[] = [
  { id: '1', email: 'admin@laundry.com', name: 'Admin', token: 'dummy-token' }
];

export const login = async (email: string, password: string): Promise<User> => {
  const user = dummyUsers.find(u => u.email === email);
  if (!user || password !== 'demo123') throw new Error('Invalid credentials');
  return user;
};

export const logout = async (): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, 500));
};