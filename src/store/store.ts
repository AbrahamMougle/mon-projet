import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createCartSlice } from "./cartSlice";
import { createOrderSlice} from "./OrderSlice";
import type { OrderSlice } from "./OrderSlice";
import type { CartSlice } from "./cartSlice";
type Store = CartSlice& OrderSlice; 

export const useStore = create<Store>()(
  devtools(
    persist(
      (set,get,api) => ({
        ...createOrderSlice(set,get,api),
        ...createCartSlice(set,get,api),
      }),
      { name: "ecommerce-cart" } // clé localStorage
    )
  )
);
