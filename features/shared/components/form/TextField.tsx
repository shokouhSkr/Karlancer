"use client";

import { useRef, useEffect } from "react";

type TextFieldPropType = {
	label: string;
	name: string;
	value: string;
	type?: string;
	shouldAutoFocus?: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const TextField = ({ label, name, value, type, shouldAutoFocus, onChange }: TextFieldPropType) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<div>
			<label htmlFor={name} className="text-sm block">
				{label}
			</label>

			<input
				type={type || "text"}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				autoComplete="off"
				className="textField__input mt-2"
				ref={shouldAutoFocus ? inputRef : null}
			/>
		</div>
	);
};

export default TextField;
