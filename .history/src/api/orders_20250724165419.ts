import axios from 'axios';
import { Order, CreateOrderPayload } from '../types/order.types';
import { API_BASE_URL } from '../constants/routes';

export const createOrder = async (order: CreateOrderPayload): Promise<Order> => {
  const response = await axios.post(`${API_BASE_URL}/orders`, order);
  return response.data;
};

export const getOrders = async (params = {}): Promise<Order[]> => {
  const response = await axios.get(`${API_BASE_URL}/orders`, { params });
  return response.data;
};

export const updateOrderStatus = async (id: string, status: string): Promise<Order> => {
  const response = await axios.patch(`${API_BASE_URL}/orders/${id}/status`, { status });
  return response.data;
};