"use client";

import { useState } from "react";
import { Header, Sidebar } from "@/features";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className="grid h-dvh grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
			<Header onOpenSidebar={() => setIsSidebarOpen(true)} />

			<div className="bg-secondary-100 col-span-full py-8 px-4 md:px-8 overflow-y-auto">
				<div className="mx-auto max-w-screen-xl flex flex-col gap-12">{children}</div>
			</div>

			<Sidebar isSidebarOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
		</div>
	);
};

export default Layout;
