import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createCartSlice } from "./cartSlice";
import { createOrderSlice} from "./OrderSlice";
import type { OrderSlice } from "./OrderSlice";
import type { CartSlice } from "./cartSlice";
import { createProductSlice } from "./ProductSlice";
import type { ProductSlice } from "./ProductSlice";
type Store = CartSlice& OrderSlice& ProductSlice; 

export const useStore = create<Store>()(
  devtools(
    persist(
      (set,get,api) => ({
        ...createOrderSlice(set,get,api),
        ...createCartSlice(set,get,api),
        ...createProductSlice(set,get,api)  
      }),
      { name: "ecommerce-cart" } // clé localStorage
    )
  )
);
