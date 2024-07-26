"use client";

import { Switch } from "@headlessui/react";

export interface TogglePropType {
	label: string;
	enabled: boolean;
	onChange: any;
}

const Toggle = ({ label, enabled, onChange }: TogglePropType) => {
	return (
		<Switch.Group>
			<div className="flex items-center justify-between gap-2">
				<Switch.Label className="w-7 text-center">{label}</Switch.Label>
				<Switch
					checked={enabled}
					onChange={onChange}
					className={`${
						enabled ? "bg-primary-900" : "bg-primary-200"
					} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
				>
					<span
						className={`${
							enabled ? "-translate-x-6" : "-translate-x-1"
						} inline-block h-4 w-4 transform rounded-full bg-secondary-0 transition-transform`}
					/>
				</Switch>
			</div>
		</Switch.Group>
	);
};

export default Toggle;
