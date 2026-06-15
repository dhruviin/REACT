import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  Theme: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
  return useContext(ThemeContext);
}
