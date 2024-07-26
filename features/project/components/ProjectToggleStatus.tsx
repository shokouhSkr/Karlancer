"use client";

import { Loading, Toggle } from "@/features";
import { useProjectToggleStatus } from "../hooks/useProjectToggleStatus";

const ProjectToggleStatus = ({ project }: { project: any }) => {
	const { isToggling, mutateAsync: toggleStatus } = useProjectToggleStatus();

	const toggleHandler = () => {
		const status = project.status === "OPEN" ? "CLOSED" : "OPEN";

		toggleStatus({ id: project._id, data: { status } });
	};

	return (
		<div className="w-[5rem] flex justify-center">
			{isToggling && <Loading />}
			{!isToggling && (
				<Toggle
					label={project.status === "OPEN" ? "باز" : "بسته"}
					enabled={project.status === "OPEN" ? true : false}
					onChange={toggleHandler}
				/>
			)}
		</div>
	);
};

export default ProjectToggleStatus;
