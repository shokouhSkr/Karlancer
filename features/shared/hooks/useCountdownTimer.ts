import { useState, useEffect } from "react";

export const useCountdownTimer = (initialTime: number) => {
	const [time, setTime] = useState(initialTime);

	const resetTimer = () => {
		setTime(initialTime);
	};

	useEffect(() => {
		const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);

		return () => {
			if (timer) clearInterval(timer);
		};
	}, [time]);

	return { time, resetTimer };
};
