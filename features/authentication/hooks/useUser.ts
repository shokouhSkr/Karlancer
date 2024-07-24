import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "../services/authServices";

export const useUser = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["get-user"],
		queryFn: getUserApi,
		retry: false,
		refetchOnWindowFocus: true,
	});

	const { user } = data || {};

	return { isLoading, user };
};
