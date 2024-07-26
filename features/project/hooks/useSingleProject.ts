import { useQuery } from "@tanstack/react-query";
import { getSingleProjectApi } from "../services/projectService";
import { useParams } from "next/navigation";

export const useSingleProject = () => {
	// Instead of using useParams in singleProject page, we use it here. (we can use other hooks in a custom hook)
	const { projectId } = useParams();

	const { data, isLoading } = useQuery({
		// So it depends to projectId too, and whenever projectId changes, queryKey changes and fetch fresh data.
		queryKey: ["project", projectId],
		queryFn: () => getSingleProjectApi(projectId as string),
		retry: false,
	});

	const { project } = data || {};

	return { isLoading, project };
};
