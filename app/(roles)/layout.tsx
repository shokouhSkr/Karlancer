"use client";

import { useState } from "react";
import { Header, Sidebar } from "@/features";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className="grid h-dvh grid-rows-[auto_1fr] grid-cols-[256px_1fr]">
			<Header onOpenSidebar={() => setIsSidebarOpen(true)} />

			<div className="col-span-full bg-secondary-0 lg:col-start-2 overflow-y-auto">
				<div className="mx-auto max-w-screen-xl flex flex-col gap-12">
					<div className="bg-secondary-100 rounded-tr-3xl min-h-[calc(100dvh-70px)] py-8 px-4 md:px-8">
						{children}
					</div>
				</div>
			</div>

			<Sidebar isSidebarOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
		</div>
	);
};

export default Layout;
