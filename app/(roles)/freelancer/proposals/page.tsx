"use client";

import { FreelancerProposalsTable } from "@/features";

const ProposalsPage = () => {
	return (
		<div>
			<h1 className="font-semibold text-secondary-700 md:text-xl mb-8">درخواست های شما</h1>
			<FreelancerProposalsTable />
		</div>
	);
};

export default ProposalsPage;
