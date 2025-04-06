import { createContext, ReactNode, useContext, useState } from "react";

const DARK_THEME = "dark";

interface NavThemeContextType {
  navTheme: "dark" | "light";
  setNavTheme: (theme: "dark" | "light") => void;
}

const NavThemeContext = createContext<NavThemeContextType | null>(null);

export const NavThemeProvider = ({ children }: { children: ReactNode }) => {
  const [navTheme, setNavTheme] = useState<"dark" | "light">(DARK_THEME);
  return (
    <NavThemeContext.Provider value={{ navTheme, setNavTheme }}>
      {children}
    </NavThemeContext.Provider>
  );
};

export const useNavTheme = () => {
  const context = useContext(NavThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
