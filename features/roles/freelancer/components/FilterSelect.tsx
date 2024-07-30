"use client";

import { useSearchParams } from "next/navigation";
import { FilterPropType } from "@/types";

const FilterSelect = ({ options, filterField }: FilterPropType) => {
	const searchParams = useSearchParams();
	const filterValue = searchParams.get(filterField) || ""; // earliest, web-development, ...

	// Update the browser history with the new URL. (use-query does the rest)
	const handleSearch = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const updatedParams = new URLSearchParams(searchParams.toString());
		updatedParams.set(filterField, e.target.value);
		window.history.pushState(null, "", `?${updatedParams.toString()}`);
	};

	return (
		<select
			value={filterValue}
			onChange={handleSearch}
			className="px-2 py-1.5 w-32 text-sm shadow rounded-full bg-secondary-0 focus:outline-none"
		>
			{options.map((item: any) => (
				<option key={item.value} value={item.value}>
					{item.label}
				</option>
			))}
		</select>
	);
};

export default FilterSelect;
