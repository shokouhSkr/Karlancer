import { useQuery } from "@tanstack/react-query";
import { getCategoriesApi } from "../services/CategoryService";

export const useCategories = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["categories"],
		queryFn: getCategoriesApi,
	});

	// The data comes in {_id, title, enTitle,...}
	const { categories: rawCategories = [] } = data || {};

	// But we need them to be like {value, label}, so we can pass it to Select component (with label and value)
	const newCategories = rawCategories.map((item: any) => ({
		label: item.title,
		value: item._id,
	}));

	// For filtering
	const transformedCategories = rawCategories.map((item: any) => ({
		label: item.title,
		value: item.englishTitle,
	}));

	return { isLoading, newCategories, transformedCategories };
};
