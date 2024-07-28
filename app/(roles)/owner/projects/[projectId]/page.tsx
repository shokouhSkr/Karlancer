"use client";

import { Loading, ProposalsHeader, OwnerProposalsTable } from "@/features";
import { useSingleProject } from "@/features/project/hooks/useSingleProject";

const SingleProjectPage = () => {
	const { project, isLoading } = useSingleProject();

	if (isLoading)
		return (
			<div className="text-center">
				<Loading />
			</div>
		);

	return (
		<div>
			<ProposalsHeader project={project} />
			<OwnerProposalsTable proposals={project.proposals} />
		</div>
	);
};

export default SingleProjectPage;
