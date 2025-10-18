import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createCartSlice } from "./cartSlice";
import { createOrderSlice} from "./OrderSlice";
import type { OrderSlice } from "./OrderSlice";
import type { CartSlice } from "./cartSlice";
import { useThemeStore } from "./DarkSlice";
import type{ ThemeSliceState } from "./DarkSlice";

import { createUserSlice, type UserSlice } from "./UserSlice";
type Store = CartSlice&OrderSlice&UserSlice&ThemeSliceState; 

export const useStore = create<Store>()(
  devtools(
    persist(
      (set,get,api) => ({
        ...createOrderSlice(set,get,api),
        ...createCartSlice(set,get,api),
        ...createUserSlice(set,get,api),
        ...useThemeStore(set, get, api),
      
      }),
      { name: "ecommerce-cart" } // clé localStorage
    )
  )
);
