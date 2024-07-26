import React from "react";
import { TagsInput } from "react-tag-input-component";

interface TagFieldProps {
	label: string;
	name: string;
	value: string[];
	onChange: (tags: string[]) => void;
}

const TagField = ({ label, name, value, onChange }: TagFieldProps) => {
	return (
		<div>
			<label className="mb-2 block text-right text-secondary-700">{label}</label>
			<TagsInput name={name} value={value} onChange={onChange} />
		</div>
	);
};

export default TagField;
