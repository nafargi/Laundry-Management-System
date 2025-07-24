// src/store/slices/customerSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Customer } from '../../types/customer.types';

interface CustomerState {
  customers: Customer[];
}

const initialState: CustomerState = {
  customers: [],
};

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setCustomers: (state, action: PayloadAction<Customer[]>) => {
      state.customers = action.payload;
    },
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.customers.push(action.payload);
    },
    removeCustomer: (state, action: PayloadAction<string>) => {
      state.customers = state.customers.filter((c) => c.id !== action.payload);
    },
  },
});

export const { setCustomers, addCustomer, removeCustomer } = customerSlice.actions;
export default customerSlice.reducer;
