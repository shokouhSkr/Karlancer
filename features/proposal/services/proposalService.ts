import http from "@/features/shared/services/httpService";

export const getProposalsApi = async () => {
	// proposals of who? it's handled in backend. if Admin, all proposals and if a freelancer, his proposals.
	const { data } = await http.get("/proposal/list");
	return data.data;
};

export const createProposalApi = async (data: any) => {
	const response = await http.post("/proposal/add", data);
	return response.data.data;
};

export const changeProposalStatusApi = async ({
	proposalId,
	projectId,
	status,
}: {
	proposalId: string;
	projectId: string;
	status: string;
}) => {
	const { data } = await http.patch(`/proposal/${proposalId}`, { projectId, status });
	return data.data;
};
