"use client";

import { FilterTabs } from "@/features";
import { useCategories } from "@/features/category/hooks/useCategories";
import FilterSelect from "./FilterSelect";

const sortOptions = [
	{ value: "latest", label: "جدیدترین" },
	{ value: "earliest", label: "قدیمی ترین" },
];

const statusOptions = [
	{ value: "ALL", label: "همه" },
	{ value: "OPEN", label: "باز" },
	{ value: "CLOSED", label: "بسته" },
];

const FreelancerProjectsHeader = () => {
	const { transformedCategories: categories } = useCategories();

	return (
		<div className="flex items-center justify-between text-secondary-700 mb-8">
			<h1 className="font-bold text-xl text-secondary-700 md:text-2xl">لیست پروژه ها</h1>

			{/* FILTER BY PROJECT STATUS */}
			<FilterTabs filterField="status" options={statusOptions} />

			<div className="flex items-center gap-4">
				{/* FILTER BY CATEGORY */}
				<FilterSelect
					filterField="category"
					options={[{ value: "ALL", label: "همه دسته ها" }, ...categories]}
				/>

				{/* FILTER BY SORT */}
				<FilterSelect filterField="sort" options={sortOptions} />
			</div>
		</div>
	);
};

export default FreelancerProjectsHeader;
