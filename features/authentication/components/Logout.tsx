"use client";

import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { useLogoutUser } from "../hooks/useLogoutUser";

const Logout = () => {
	const { isPending, logout } = useLogoutUser();

	return (
		<button
			onClick={() => logout()}
			className="flex text-lg items-center gap-2 mt-2 rounded-md py-2 px-4 hover:text-red-500 transition-all duration-200 text-slate-500"
		>
			<HiOutlineArrowRightOnRectangle />
			<span>خروج</span>
		</button>
	);
};

export default Logout;
