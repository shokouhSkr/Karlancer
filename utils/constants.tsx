import { NavLink } from "@/types";
import {
	HiOutlineHome,
	HiOutlineRectangleStack,
	HiOutlineInboxStack,
	HiOutlineUsers,
} from "react-icons/hi2";

export const BASE_URL = "http://localhost:5000/api";
export const RESET_TIME = 90;

export const ownerNavLinks: NavLink[] = [
	{ title: "داشبورد", path: "/owner/dashboard", icon: <HiOutlineHome className="text-xl" /> },
	{ title: "پروژه ها", path: "/owner/projects", icon: <HiOutlineInboxStack className="text-xl" /> },
];

export const freelancerNavLinks: NavLink[] = [
	{ title: "داشبورد", path: "/freelancer/dashboard", icon: <HiOutlineHome className="text-xl" /> },
	{
		title: "پروژه ها",
		path: "/freelancer/projects",
		icon: <HiOutlineInboxStack className="text-xl" />,
	},
	{
		title: "درخواست ها",
		path: "/freelancer/proposals",
		icon: <HiOutlineRectangleStack className="text-xl" />,
	},
];

export const adminNavLinks: NavLink[] = [
	{ title: "داشبورد", path: "/admin/dashboard", icon: <HiOutlineHome className="text-xl" /> },
	{ title: "کاربران", path: "/admin/users", icon: <HiOutlineUsers className="text-xl" /> },
	{ title: "پروژه ها", path: "/admin/projects", icon: <HiOutlineInboxStack className="text-xl" /> },
	{
		title: "درخواست ها",
		path: "/admin/proposals",
		icon: <HiOutlineRectangleStack className="text-xl" />,
	},
];
