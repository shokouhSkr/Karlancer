"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkPropType = {
	title: string;
	path: string;
	icon: React.ReactElement;
	onClose?: any;
};

const NavLink = ({ title, path, icon, onClose }: NavLinkPropType) => {
	const currentPath = usePathname();
	const isActive = currentPath.startsWith(path);
	// const isActive = currentPath === path;

	return (
		<li key={title} onClick={onClose} className="text-lg">
			<Link
				href={path}
				className={`flex items-center gap-2 rounded-xl py-2 px-4 transition-all duration-200 hover:text-primary-900 ${
					isActive ? "text-primary-900 bg-secondary-100" : "text-slate-500"
				}`}
			>
				{/* {isActive && (
					<Image
						src="https://fronthooks.ir/images/indicator.svg"
						alt=""
						width={16}
						height={16}
						className="fixed right-0 lg:hidden"
					/>
				)} */}
				{icon}
				<span>{title}</span>
			</Link>
		</li>
	);
};

export default NavLink;
