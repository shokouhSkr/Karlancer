"use client";

import { usePathname } from "next/navigation";
import { AdminLinks, FreelancerLinks, Logout, OwnerLinks } from "@/features";
import {
	HiOutlineBars3BottomRight,
	HiOutlineMoon,
	HiOutlineSun,
	HiOutlineUser,
} from "react-icons/hi2";

type HeaderPropType = {
	onOpenSidebar: React.MouseEventHandler<HTMLButtonElement>;
};

const Header = ({ onOpenSidebar }: HeaderPropType) => {
	const currentPath = usePathname();

	const dynamicHeaderLinks = () => {
		if (currentPath.startsWith("/owner")) return <OwnerLinks />;
		if (currentPath.startsWith("/freelancer")) return <FreelancerLinks />;
		if (currentPath.startsWith("/admin")) return <AdminLinks />;

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
					<button className="btn-icon-only size-10">
						<HiOutlineMoon size={24} />
						{/* <HiOutlineSun size={24} /> */}
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
