"use client";

import { Empty, Loading, ProjectRow, Table } from "@/features";
import { useOwnerProjects } from "../hooks/useOwnerProjects";

const ProjectsTable = () => {
	const { projects, isLoading } = useOwnerProjects();

	if (isLoading)
		return (
			<div className="text-center">
				<Loading />
			</div>
		);

	if (projects.length === 0) {
		return <Empty resourceName="پروژه ای" />;
	}

	return (
		<Table>
			<Table.Header>
				<th>#</th>
				<th>عنوان پروژه</th>
				<th>دسته بندی</th>
				<th>بودجه (تومان)</th>
				<th>ددلاین</th>
				<th>تگ ها</th>
				<th>فریلنسر</th>
				<th>وضعیت</th>
				<th>عملیات</th>
				<th>درخواست ها</th>
			</Table.Header>

			<Table.Body>
				{projects.map((project: any, index: number) => (
					<ProjectRow key={project._id} project={project} index={index} />
				))}
			</Table.Body>
		</Table>
	);
};

export default ProjectsTable;
