import http from "@/features/shared/services/httpService";

export const getCategoriesApi = async () => {
	const { data } = await http.get("/category/list");
	return data.data;
};
