import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "../services/authServices";

export const useProfileUser = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["get-user"],
		queryFn: getUserApi,
		retry: false,
		refetchOnWindowFocus: true,
	});

	const { user: userProfile } = data || {};

	return { isLoading, userProfile };
};
