import { RegisterOptions } from "react-hook-form";

interface RadioButtonPropType {
	label: string;
	value: string;
	name: string;
	error: any;
	watch: any;
	validationSchema?: RegisterOptions;
	register: any;
}

const RadioButton = ({
	label,
	value,
	register,
	name,
	watch,
	validationSchema,
}: RadioButtonPropType) => {
	return (
		<div className="flex items-center gap-2 text-secondary-600">
			<input
				type="radio"
				name={name} // Must all radio inputs that are related have same name attribute.
				value={value}
				id={value}
				checked={watch(name) === value}
				{...register(name, validationSchema)}
				className="w-4 h-4 cursor-pointer form-radio text-green-500 focus:ring-0 focus:ring-offset-0" /* form-radio comes from @tailwindcss/form plugin (that's why we can use text-green-500) */
			/>
			<label htmlFor={value} className="cursor-pointer mt-2">
				{label}
			</label>
		</div>
	);
};

export default RadioButton;
