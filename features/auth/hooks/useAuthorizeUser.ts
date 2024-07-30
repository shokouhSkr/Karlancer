"use client";

import { usePathname } from "next/navigation";
import { useProfileUser } from "./useProfileUser";

export const useAuthorizeUser = () => {
	const { isLoading, userProfile: user } = useProfileUser();
	const pathname = usePathname(); // /freelancer/dashboard

	let isAuthenticated = false;
	if (user) isAuthenticated = true;

	let isVerified = false;
	if (user && user.status === 2) isVerified = true;

	let isAuthorized = false;
	// if (pathname.includes("owner")) {
	//   if (user && user.role === "OWNER") isAuthorized = true;
	// }

	// if (pathname.includes("freelancer")) {
	//   if (user && user.role === "FREELANCER") isAuthorized = true;
	// }

	// if (pathname.includes("admin")) {
	//   if (user && user.role === "ADMIN") isAuthorized = true;
	// }
	const ROLES: { [key: string]: string } = {
		admin: "ADMIN",
		freelancer: "FREELANCER",
		owner: "OWNER",
	};

	const desiredRole = pathname.split("/").at(1); // owner || freelancer || admin
	if (desiredRole && Object.keys(ROLES).includes(desiredRole)) {
		if (user && user.role === ROLES[desiredRole]) isAuthorized = true;
	}

	return {
		isAuthenticated,
		isAuthorized,
		isLoading,
		user,
		isVerified,
	};
};
