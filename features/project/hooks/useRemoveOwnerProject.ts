import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeOwnerProjectApi } from "../services/projectService";
import toast from "react-hot-toast";

export const useRemoveOwnerProject = () => {
	const queryClient = useQueryClient();

	const { mutateAsync: removeProject, isPending: isDeleting } = useMutation({
		mutationFn: removeOwnerProjectApi, // It also needs an id to remove project, which it handled on ProjectRow, confirmDelete.
		onSuccess: (data) => {
			// This data comes from returned data from removeOwnerProjectApi.
			toast.success(data.message); // Cause we don't have access to setState to close modal after successfully deleting a project, we use another onSuccess method and continue other things there.

			// After deleting a project, we need fresh data. so we invalidate queries to fetch data again.
			queryClient.invalidateQueries({
				queryKey: ["owner-projects"],
			});
		},
		onError: (err: any) => {
			toast.error(err?.response?.data?.message);
		},
	});

	return { removeProject, isDeleting };
};
