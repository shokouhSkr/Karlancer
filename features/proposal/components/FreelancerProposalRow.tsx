"use client";

import { Table } from "@/features";
import { statusStyle } from "@/utils/constants";
import { truncateText, persianPriceFormatter, toPersianNumbers } from "@/utils/helpers";

const FreelancerProposalRow = ({ proposal, index }: { proposal: any; index: number }) => {
	return (
		<Table.Row key={proposal._id}>
			<td>{index + 1}</td>
			<td>{truncateText(proposal.description, 60)}</td>
			<td>{toPersianNumbers(proposal.duration)} روز</td>
			<td>{persianPriceFormatter(proposal.price)}</td>
			<td>
				<span className={`badge ${statusStyle[proposal.status].className}`}>
					{statusStyle[proposal.status].label}
				</span>
			</td>
		</Table.Row>
	);
};

export default FreelancerProposalRow;
