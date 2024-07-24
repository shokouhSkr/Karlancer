import http from "@/features/shared/services/httpService";

export const getOwnerProjectsApi = async () => {
	const { data } = await http.get("/project/owner-projects");
	return data.data;
};
export const createProjectApi = async (data: any) => {
	const response = await http.post("/project/add", data);
	return response.data.data;
};

export const toggleStatusProjectApi = async ({ data, id }: { data: any; id: string }) => {
	const response = await http.patch(`/project/${id}`, data);
	return response.data.data; // data => {status:"OPEN"}
};

export const removeOwnerProjectApi = async ({ id }: { id: string }) => {
	const { data } = await http.delete(`/project/${id}`);
	return data.data;
};
