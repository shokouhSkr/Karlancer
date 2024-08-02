import { useEffect, useState } from "react";

export default function useLocalStorageState(key: string, initialState: boolean) {
	// Initialize state with a function to avoid accessing localStorage during SSR.
	const [value, setValue] = useState<boolean>(() => {
		// Check if window is defined (we're in the browser, not on the server).
		if (typeof window !== "undefined") {
			const storedValue = localStorage.getItem(key);
			return storedValue ? JSON.parse(storedValue) : initialState;
		}
		return initialState;
	});

	useEffect(() => {
		// This effect will only run in the browser.
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue] as const;
}

// import { useEffect, useState } from "react";

// export default function useLocalStorageState(key: string, initialState: boolean) {
// 	const [value, setValue] = useState(() => {
// 		const storedValue = localStorage.getItem(key);
// 		return storedValue ? JSON.parse(storedValue) : initialState;
// 	});

// 	useEffect(() => {
// 		localStorage.setItem(key, JSON.stringify(value));
// 	}, [value, key]);

// 	return [value, setValue];
// }
