"use client";

import { useState } from "react";
import { Modal, ProposalChangeStatus, Table, TooltipTruncatedText } from "@/features";
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
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<Table.Row key={proposal._id}>
			<td>{index + 1}</td>
			<td>{proposal?.user?.name || "نام تستی"}</td>
			<td>
				<TooltipTruncatedText text={proposal.description} maxLength={50} />
			</td>
			<td>{proposal.duration} روز</td>
			<td>{persianPriceFormatter(proposal.price)}</td>
			<td>
				<span className={`badge ${statusStyle[proposal.status].className}`}>
					{statusStyle[proposal.status].label}
				</span>
			</td>
			<td>
				<Modal
					title="تغییر وضعیت درخواست"
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				>
					<ProposalChangeStatus proposalId={proposal._id} onClose={() => setIsModalOpen(false)} />
				</Modal>
				<button onClick={() => setIsModalOpen(true)}>تغییر وضعیت</button>
			</td>
		</Table.Row>
	);
};

export default ProposalRow;
