import type{ StateCreator } from "zustand";

 type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
};// un type qui se retrouve un peu partout a deplacer d'ici

 export type ProductSlice = {
  products: Product[];
  selectedProduct: Product | null;
  setProducts: (products: Product[]) => void;
  clearSelectedProduct: () => void;
};

export const createProductSlice :  StateCreator<ProductSlice>= (set, get,api) => ({
        products: [],
        selectedProduct: null,
        setProducts: (products) => set({ products }),
        clearSelectedProduct: () => set({ selectedProduct: null }),
      })

