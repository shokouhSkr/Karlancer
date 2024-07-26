import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../services/projectService";
import toast from "react-hot-toast";

export const useCreateProject = () => {
	const queryClient = useQueryClient();

	const { isPending: isCreating, mutateAsync: createProject } = useMutation({
		mutationFn: createProjectApi,
		onSuccess: (data) => {
			// This "data" comes from createProjectApi automatically.
			console.log("data from useCreateProject hook: ", data);
			toast.success(data.message);

			// After creating a project, we need fresh data. so we invalidate queries to fetch data again.
			queryClient.invalidateQueries({
				queryKey: ["owner-projects"],
			});
		},
		onError: (err: any) => {
			toast.error(err?.response?.data?.message);
		},
	});

	return { isCreating, createProject };
};
