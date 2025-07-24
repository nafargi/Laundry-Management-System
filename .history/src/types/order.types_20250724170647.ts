export type OrderStatus = typeof ORDER_STATUSES[number];

export type Service = {
  id: string;
  name: string;
  price: number;
};

export type Order = {
  id: string;
  customerId: string;
  services: Service[];
  status: OrderStatus;
  createdAt: string;
};