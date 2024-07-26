"use client";

import { Loading, ProposalHeader, ProposalsTable } from "@/features";
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
			<ProposalHeader project={project} />
			<ProposalsTable proposals={project.proposals} />
		</div>
	);
};

export default SingleProjectPage;
