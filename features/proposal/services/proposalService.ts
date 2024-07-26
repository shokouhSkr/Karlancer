import http from "@/features/shared/services/httpService";

export const getProposalsApi = async () => {
	// proposals of who? it's handled in backend.
	const { data } = await http.get("/proposal/list");
	return data.data;
};

export const createProposalApi = async (data: any) => {
	const response = await http.post("/proposal/add", data);
	return response.data.data;
};
