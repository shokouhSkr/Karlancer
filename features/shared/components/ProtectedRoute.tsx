"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import { useAuthorizeUser } from "@/features/auth/hooks/useAuthorizeUser";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	// 1. Load the authenticated user.
	const { isAuthenticated, isLoading } = useAuthorizeUser();
	const router = useRouter();

	// 2. Check if is authorized or not, check if is authenticated or not.
	useEffect(() => {
		if (!isAuthenticated && !isLoading) router.push("/auth");

		// if (!isVerified && !isLoading) {
		// 	toast.error("پروفایل شما هنوز تایید نشده است");
		// 	router.push("/");
		// }

		// if (!isAuthorized && !isLoading) router.replace("/not-access");
	}, [isAuthenticated, isLoading, router]);

	// 3. While loading => show a loading
	if (isLoading) return <Loading />;

	// 4. If user isAuthenticated and isAuthorized => render the app
	// if (isAuthenticated && isAuthorized) return children;
	if (isAuthenticated) return children;
};

export default ProtectedRoute;
