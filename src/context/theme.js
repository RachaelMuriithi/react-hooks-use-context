import React, { useState } from "react";

// Creates a themeContext object
const ThemeContext = React.createContext();

// context provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}

export { ThemeContext, ThemeProvider };