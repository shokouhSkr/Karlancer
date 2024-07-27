"use client";

import { usePathname } from "next/navigation";
import { AdminLinks, FreelancerLinks, Logout, OwnerLinks } from "@/features";
import { useProfileUser } from "@/features/authentication/hooks/useProfileUser";
import Image from "next/image";

type SidebarPropType = {
	isSidebarOpen: boolean;
	onClose: React.MouseEventHandler<HTMLDivElement>;
};

const Sidebar = ({ isSidebarOpen, onClose }: SidebarPropType) => {
	const { userProfile, isLoading } = useProfileUser();
	const currentPath = usePathname();

	const dynamicSidebarLinks = () => {
		if (currentPath.startsWith("/owner")) return <OwnerLinks onClose={onClose} />;
		if (currentPath.startsWith("/freelancer")) return <FreelancerLinks onClose={onClose} />;
		if (currentPath.startsWith("/admin")) return <AdminLinks onClose={onClose} />;

		return null;
	};

	return (
		<>
			{/* BACKDROP */}
			<div
				className={`${
					isSidebarOpen && "fixed top-0 left-0 z-40 h-dvh w-full lg:hidden bg-[#00000080]"
				}`}
				onClick={onClose}
			/>

			{/* OVERLAY */}
			<aside
				className={`${
					isSidebarOpen ? "translate-x-0" : "translate-x-80"
				} fixed right-0 top-0 bottom-0 z-50 w-64 bg-secondary-0 shadow-lg transition-transform duration-300 lg:hidden flex flex-col overflow-y-auto`}
			>
				{/* LOGO */}
				<span className="bg-purple-100 p-6">کارلنسر</span>

				{/* NAVIGATION LINKS */}
				<ul className="relative p-6 flex-1">
					{dynamicSidebarLinks()}
					<Logout />
				</ul>

				{/* PROFILE */}
				<div className="p-4 flex gap-2 mb-4">
					{/* PROFILE - IMAGE */}
					<Image
						src={"https://avatar.iran.liara.run/public/6"}
						alt=""
						width={80}
						height={80}
						className="size-[50px] rounded-full object-cover object-center"
					/>
					{/* PROFILE - INFO */}
					<div className="flex flex-col justify-center gap-0.5">
						<span>{userProfile?.name}</span>
						<span className="text-sm">{userProfile?.email}</span>
					</div>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
