"use client";

import { UseFormRegister } from "react-hook-form";

type TextFieldPropType = {
	label: string;
	name: string;
	register: UseFormRegister<any>;
	type?: string;
	required?: boolean;
	error?: any;
	validationSchema?: any;
};

const TextField = ({
	label,
	type = "text",
	name,
	register,
	required,
	error,
	validationSchema,
}: TextFieldPropType) => {
	return (
		<div>
			<label htmlFor={name} className="text-sm block text-right">
				{label} {required && <span className="text-error">*</span>}
			</label>

			<input
				type={type}
				id={name}
				// name={name}
				// value={value}
				// onChange={onChange}
				{...register(name, validationSchema)}
				autoComplete="off"
				className="textField__input mt-2"
			/>

			{error && error[name] && (
				<span className="text-error text-sm mt-2 text-right block">{error[name]?.message}</span>
			)}
		</div>
	);
};

export default TextField;
