"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";
import useLocalStorageState from "@/features/shared/hooks/useLocalStorageState";
import { DarkModeContextType } from "@/types";

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function DarkModeProvider({ children }: { children: ReactNode }) {
	const [isDarkMode, setIsDarkMode] = useLocalStorageState(
		"isDarkMode",
		window.matchMedia("(prefers-color-scheme: dark)").matches // true, false
	);

	const toggleDarkMode = () => setIsDarkMode((prev: boolean) => !prev);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
			document.documentElement.classList.remove("light");
		} else {
			document.documentElement.classList.add("light");
			document.documentElement.classList.remove("dark");
		}
	}, [isDarkMode]);

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

export function useDarkMode() {
	const context = useContext(DarkModeContext);

	if (context === undefined)
		throw new Error("DarkModeContext was used outside of DarkModeProvider");

	return context;
}
