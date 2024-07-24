import { useEffect, useRef, RefObject } from "react";

const useOutsideClick = (
	handler: () => void,
	listenCapturing: boolean = true
): RefObject<HTMLElement> => {
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		function handleClick(e: MouseEvent): void {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				handler();
			}
		}

		document.addEventListener("click", handleClick, listenCapturing);

		return () => document.removeEventListener("click", handleClick, listenCapturing);
	}, [handler, listenCapturing]);

	return ref;
};

export default useOutsideClick;
