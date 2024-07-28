"use client";

import { usePathname } from "next/navigation";
import { AdminSidebarLinks, FreelancerSidebarLinks, Logout, OwnerSidebarLinks } from "@/features";
import {
	HiOutlineBars3BottomRight,
	HiOutlineMoon,
	HiOutlineSun,
	HiOutlineUser,
} from "react-icons/hi2";
import { useDarkMode } from "@/context/DarkModeContext";

type HeaderPropType = {
	onOpenSidebar: React.MouseEventHandler<HTMLButtonElement>;
};

const Header = ({ onOpenSidebar }: HeaderPropType) => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	const currentPath = usePathname();

	const dynamicHeaderLinks = () => {
		if (currentPath.startsWith("/owner")) return <OwnerSidebarLinks />;
		if (currentPath.startsWith("/freelancer")) return <FreelancerSidebarLinks />;
		if (currentPath.startsWith("/admin")) return <AdminSidebarLinks />;

		return null;
	};

	return (
		<header className="col-span-full bg-secondary-0 px-4 md:px-8 flex items-center h-[70px]">
			<nav className="flex flex-1 items-center justify-between max-w-screen-xl mx-auto">
				{/* RIGHT */}
				<div className="flex items-center gap-4">
					<button onClick={onOpenSidebar} className="lg:hidden">
						<HiOutlineBars3BottomRight className="text-3xl p-1" />
					</button>
					<span className="ml-4 font-bold">کارلنسر</span>
					<div className="hidden lg:flex">{dynamicHeaderLinks()}</div>
				</div>

				{/* LEFT */}
				<div className="flex gap-3 items-center text-slate-500">
					{/* THEME TOGGLE */}
					<button onClick={toggleDarkMode} className="btn-icon-only size-10">
						{isDarkMode ? <HiOutlineSun size={24} /> : <HiOutlineMoon size={24} />}
					</button>
					{/* USER */}
					<button className="btn-icon-only size-10">
						<HiOutlineUser size={24} />
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
