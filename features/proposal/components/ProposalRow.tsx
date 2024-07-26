"use client";

import { Table, TooltipTruncatedText } from "@/features";
import { persianPriceFormatter } from "@/utils/helpers";

// proposal.status => 0: denied, 1:pending, 2:accepted
const statusStyle = [
	{
		label: "رد شده",
		className: "badge--danger",
	},
	{
		label: "در انتظار تایید",
		className: "badge--secondary",
	},
	{
		label: "تایید شده",
		className: "badge--success",
	},
];

const ProposalRow = ({ proposal, index }: { proposal: any; index: number }) => {
	return (
		<Table.Row key={proposal._id}>
			<td>{index + 1}</td>
			<td>{proposal?.user?.name || "نام تستی"}</td>
			<td>
				<TooltipTruncatedText text={proposal.description} maxLength={30} />
			</td>
			<td>{proposal.duration} روز</td>
			<td>{persianPriceFormatter(proposal.price)}</td>
			<td>
				<span className={`badge ${statusStyle[proposal.status].className}`}>
					{statusStyle[proposal.status].label}
				</span>
			</td>
			<td>**</td>
		</Table.Row>
	);
};

export default ProposalRow;
