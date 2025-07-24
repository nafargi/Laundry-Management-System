// src/store/slices/orderSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../../types/order.types';

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
    removeOrder: (state, action: PayloadAction<string>) => {
      state.orders = state.orders.filter((o) => o.id !== action.payload);
    },
  },
});

export const { setOrders, addOrder, removeOrder } = orderSlice.actions;
export default orderSlice.reducer;
