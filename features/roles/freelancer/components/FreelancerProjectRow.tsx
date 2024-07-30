"use client";

import { useState } from "react";
import { Modal, Table, TooltipTruncatedText } from "@/features";
import { persianPriceFormatter } from "@/utils/persianPriceFormatter";
import { toLocalDateShort } from "@/utils/toLocalDateShort";
import { projectStatus } from "@/utils/constants";
import { MdOutlineAssignment } from "react-icons/md";
import CreateProposalForm from "@/features/proposal/components/CreateProposalForm";

const FreelancerProjectRow = ({ project, index }: { project: any; index: number }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<Table.Row key={project._id}>
			<td>{index + 1}</td>
			<td>
				<TooltipTruncatedText text={project.title} maxLength={50} />
			</td>
			<td>{persianPriceFormatter(project.budget)}</td>
			<td>{toLocalDateShort(project.deadline)}</td>
			<td>
				<span className={`badge ${projectStatus[project.status].className} w-12 text-center`}>
					{projectStatus[project.status].label}
				</span>
			</td>
			<td>
				<button onClick={() => setIsModalOpen(true)} className="text-primary-900 pt-2">
					<MdOutlineAssignment className="size-5" />
				</button>
				<Modal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					title={`درخواست انجام پروژه ${project.title}`}
				>
					<CreateProposalForm projectId={project._id} onClose={() => setIsModalOpen(false)} />
				</Modal>
			</td>
		</Table.Row>
	);
};

export default FreelancerProjectRow;
