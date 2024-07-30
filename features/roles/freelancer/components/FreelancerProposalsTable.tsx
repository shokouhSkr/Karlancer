"use client";

import { Empty, FreelancerProposalRow, Loading, Table } from "@/features";
import { useProposals } from "../../../proposal/hooks/useProposals";

const FreelancerProposalsTable = () => {
	const { isLoading, proposals } = useProposals();

	if (isLoading)
		return (
			<div className="text-center">
				<Loading />
			</div>
		);

	if (proposals.length === 0) {
		return <Empty resourceName="درخواستی" />;
	}

	return (
		<Table>
			<Table.Header>
				<th>#</th>
				<th>توضیحات</th>
				<th>زمان تحویل</th>
				<th>هزینه (تومان)</th>
				<th>وضعیت</th>
			</Table.Header>

			<Table.Body>
				{proposals.map((proposal: any, index: number) => {
					return <FreelancerProposalRow key={proposal._id} proposal={proposal} index={index} />;
				})}
			</Table.Body>
		</Table>
	);
};

export default FreelancerProposalsTable;
