import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleStatusProjectApi } from "../services/projectService";
import toast from "react-hot-toast";

export const useProjectToggleStatus = () => {
	const queryClient = useQueryClient();

	const { isPending: isToggling, mutateAsync } = useMutation({
		mutationFn: toggleStatusProjectApi,

		onSuccess: (data) => {
			console.log("data from editProject: ", data);
			toast.success(data.message);

			// After toggling a project, we need fresh data. so we invalidate queries to fetch data again
			queryClient.invalidateQueries({
				queryKey: ["owner-projects"],
			});
		},
		onError: (err: any) => {
			toast.error(err?.response?.data?.message);
		},
	});

	return { isToggling, mutateAsync };
};
