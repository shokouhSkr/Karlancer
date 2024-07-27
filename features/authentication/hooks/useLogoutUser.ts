import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { logoutApi } from "../services/authServices";
import toast from "react-hot-toast";

export const useLogoutUser = () => {
	const queryClient = useQueryClient();
	const router = useRouter();

	const { mutate: logout, isPending } = useMutation({
		mutationFn: logoutApi,

		onSuccess: () => {
			queryClient.removeQueries(); // Remove all queries and data.

			toast.success("با موفقیت خارج شدید.");

			router.replace("/auth");
		},
	});

	return { isPending, logout };
};
