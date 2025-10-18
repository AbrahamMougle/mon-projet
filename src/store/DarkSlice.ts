import { StateCreator } from "zustand"

type Theme = "dark" | "light" | "system"

 export interface ThemeSliceState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useThemeStore :StateCreator<ThemeSliceState>=((set, get, api) => ({
  theme: (localStorage.getItem("theme") as Theme) || "system",

  setTheme: (theme) => {
    localStorage.setItem("theme", theme)
    set({ theme })
  },
}))