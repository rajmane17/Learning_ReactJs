import { useContext, createContext } from "react";
import React from "react";

export const ThemeContext = createContext({
    ThemeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

//Creating the provider
export const ThemeProvider = ThemeContext.Provider

// creating and exporting a hook

export default function useTheme() {
    return useContext(ThemeContext)
}


