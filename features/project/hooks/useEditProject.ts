import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../services/projectService";
import toast from "react-hot-toast";

export const useEditProject = () => {
	const queryClient = useQueryClient();

	const { isPending: isEditing, mutateAsync: editProject } = useMutation({
		mutationFn: editProjectApi,

		onSuccess: (data) => {
			toast.success(data.message);

			// After editing a project, we need fresh data. so we invalidate queries to fetch data again.
			queryClient.invalidateQueries({
				queryKey: ["owner-projects"],
			});
		},
		onError: (err: any) => {
			toast.error(err?.response?.data?.message);
		},
	});

	return { isEditing, editProject };
};
