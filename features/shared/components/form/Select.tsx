import { SelectPropType } from "@/types";

const Select = ({ label, name, register, options, required }: SelectPropType) => {
	return (
		<div>
			<label htmlFor={label} className="mb-2 block text-secondary-700 whitespace-nowrap">
				{label} {required && <span className="text-error">*</span>}
			</label>

			<select id={name} {...register(name)} className="text-input">
				{options.map((option: any) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
