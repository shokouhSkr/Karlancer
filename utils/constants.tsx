import { NavLink } from "@/types";
import { HiCollection, HiHome, HiOutlineViewGrid, HiUsers } from "react-icons/hi";

export const RESET_TIME = 90;

export const ownerNavLinks: NavLink[] = [
  { title: "داشبورد", path: "/owner/dashboard", icon: <HiHome /> },
  { title: "پروژه ها", path: "/owner/projects", icon: <HiOutlineViewGrid /> },
];

export const freelancerNavLinks: NavLink[] = [
  { title: "داشبورد", path: "/freelancer/dashboard", icon: <HiHome /> },
  { title: "پروژه ها", path: "/freelancer/projects", icon: <HiOutlineViewGrid /> },
  { title: "درخواست ها", path: "/freelancer/proposals", icon: <HiCollection /> },
];

export const adminNavLinks: NavLink[] = [
  { title: "داشبورد", path: "/admin/dashboard", icon: <HiHome /> },
  { title: "کاربران", path: "/admin/users", icon: <HiUsers /> },
  { title: "پروژه ها", path: "/admin/projects", icon: <HiOutlineViewGrid /> },
  { title: "درخواست ها", path: "/admin/proposals", icon: <HiCollection /> },
];

// status => 0: denied, 1:pending, 2:accepted
export const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];
