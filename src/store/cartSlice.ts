import type { StateCreator } from "zustand";

export interface CartItem {
  id: number;       
  name: string;     
  price: number;    
  quantity: number; 
}

export interface CartSlice {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartTotal: () => number;
}

export const createCartSlice: StateCreator<
  CartSlice
> = (set, get,api) => ({
  cart: [],

  addToCart: (item, qty = 1) =>
    set({cart: [...get().cart, { ...item, quantity: qty }]}),

  removeFromCart: (id) =>
    set({ cart: get().cart.filter((p) => p.id !== id) }),

  clearCart: () => set(() => ({ cart: [] }), false),//pas encore utiliser 

  cartTotal: () => {
    const state = get();
    return state.cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
  },
});
// (state) => ({cart: state.cart.filter((p) => p.id !== id)