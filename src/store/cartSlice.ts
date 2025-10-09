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
  updateQuantity: (id: number, qty: number) => void;
  clearCart: () => void;
  cartTotal: () => number;
}

export const createCartSlice: StateCreator<
  CartSlice
> = (set, get,api) => ({
  cart: [],

  addToCart: (item, qty = 1) =>
    set((state) => {
      const existing = state.cart.find((p) => p.id === item.id);
      if (existing) {
        // si le produit est déjà dans le panier → on ajoute la quantité
        return {
          cart: state.cart.map((p) =>
            p.id === item.id ? { ...p, quantity: p.quantity + qty } : p
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: qty }] };
    }, false),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== id),
    }), false),

  updateQuantity: (id, qty) =>
    set((state) => ({
      cart: state.cart.map((p) =>
        p.id === id ? { ...p, quantity: qty } : p
      ),
    }), false),//pas encore utiliser

  clearCart: () => set(() => ({ cart: [] }), false),//pas encore utiliser 

  cartTotal: () => {
    const state = get();
    return state.cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
  },
});
