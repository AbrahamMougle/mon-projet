import { StateCreator } from "zustand"

type Theme = "dark" | "light" | "system"

 export interface ThemeSliceState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useThemeStore :StateCreator<ThemeSliceState>=((set, get, api) => ({
  theme: "system",

  setTheme: (theme) => {
    set({ theme })
  },
}))