"use client";

import { FreelancerProposalsTable } from "@/features";

const ProposalsPage = () => {
	return (
		<div>
			<h1 className="font-bold text-xl text-secondary-700 md:text-2xl mb-8">درخواست های شما</h1>
			<FreelancerProposalsTable />
		</div>
	);
};

export default ProposalsPage;
