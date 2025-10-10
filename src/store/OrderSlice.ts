
import type { StateCreator } from "zustand";
import type { CartItem } from "./cartSlice";

export interface UserInfo {
  id: string;
  name: string;
  email: string;
}
type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled"

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  user: UserInfo;
  date: string;
  status: OrderStatus
}

export interface OrderSlice {
  orders: Order[];
  createOrder: (cart: CartItem[], user: UserInfo) => void;
  clearOrder: () => void

}

export const createOrderSlice: StateCreator<OrderSlice> = (set, get) => ({
  orders: [],
  createOrder: (cart, user) => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const newOrder: Order = {
      id: Date.now().toString(),
      items: cart,
      total: total,
      user: user,
      date: new Date().toLocaleString(),
      status: 'pending',

    };

    set({ orders: [...get().orders, newOrder] });
  },
  clearOrder: () => {
    set({ orders: [] })
  }
})
