import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProposalApi } from "../services/proposalService";

export const useCreateProposal = () => {
	const queryClient = useQueryClient();

	const { isPending: isCreating, mutateAsync: createProposal } = useMutation({
		mutationFn: createProposalApi,
		onSuccess: (data) => {
			toast.success(data.message);

			queryClient.invalidateQueries({
				queryKey: ["proposals"],
			});
		},
		onError: (err: any) => {
			toast.error(err?.response?.data?.message);
		},
	});

	return { isCreating, createProposal };
};
