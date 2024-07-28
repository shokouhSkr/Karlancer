"use client";

import { useState } from "react";
import { Modal, ProjectForm } from "@/features";
import { HiOutlinePlus } from "react-icons/hi";

const ProjectHeader = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex items-center justify-between mb-6">
			<h1 className="font-black text-secondary-700 text-xl">پروژه های شما</h1>

			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="اضافه کردن پروژه جدید">
				<ProjectForm onClose={() => setIsOpen(false)} />
			</Modal>

			<button
				onClick={() => setIsOpen(true)}
				className="btn btn--primary transition-all duration-200 rounded-lg px-4 py-2 flex items-center gap-1.5"
			>
				<HiOutlinePlus className="text-white size-5" />
				<span>اضافه کردن پروژه</span>
			</button>
		</div>
	);
};

export default ProjectHeader;
