"use client";

import { Empty, Loading, FreelancerProjectRow, Table } from "@/features";
import { useAllProjects } from "@/features/project/hooks/useAllProjects";

const FreelancerProjectsTable = () => {
	const { allProjects, isLoading } = useAllProjects();

	if (isLoading)
		return (
			<div className="text-center">
				<Loading />
			</div>
		);

	if (allProjects.length === 0) {
		return <Empty resourceName="پروژه ای" />;
	}

	return (
		<Table>
			<Table.Header>
				<th>#</th>
				<th>عنوان پروژه</th>
				<th>بودجه (تومان)</th>
				<th>ددلاین</th>
				<th>وضعیت</th>
				<th>عملیات</th>
			</Table.Header>

			<Table.Body>
				{allProjects.map((project: any, index: number) => (
					<FreelancerProjectRow key={project._id} project={project} index={index} />
				))}
			</Table.Body>
		</Table>
	);
};

export default FreelancerProjectsTable;
