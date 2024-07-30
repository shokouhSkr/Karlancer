"use client";

import { useState } from "react";
import {
	ProjectDelete,
	ProjectForm,
	Modal,
	ProjectToggleStatus,
	Table,
	TooltipTruncatedText,
} from "@/features";
import { HiOutlineEye, HiOutlineTrash } from "react-icons/hi";
import { persianPriceFormatter } from "@/utils/persianPriceFormatter";
import { toLocalDateShort } from "@/utils/toLocalDateShort";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useRemoveOwnerProject } from "../../../project/hooks/useRemoveOwnerProject";
import Link from "next/link";

const OwnerProjectRow = ({ project, index }: { project: any; index: number }) => {
	const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
	const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
	const { removeProject, isDeleting } = useRemoveOwnerProject();

	return (
		<Table.Row key={project._id}>
			<td>{index + 1}</td>
			<td>
				<TooltipTruncatedText text={project.title} maxLength={30} />
			</td>
			<td>{project.category.title}</td>
			<td>{persianPriceFormatter(project.budget)}</td>
			<td>{toLocalDateShort(project.deadline)}</td>
			<td>
				<div className="flex items-center flex-wrap gap-2 max-w-[200px]">
					{project.tags.map((tag: string) => (
						<span key={tag} className="badge badge--secondary">
							{tag}
						</span>
					))}
				</div>
			</td>
			{/* <td>{project?.freelancer?.name || "-"}</td> */}
			<td>
				<ProjectToggleStatus project={project} />
			</td>
			<td>
				<div className="flex items-center gap-4">
					{/* EDIT PROJECT */}
					<>
						<button onClick={() => setIsEditOpen(true)}>
							<HiOutlinePencilSquare className="size-5 text-primary-900" />
						</button>
						<Modal
							isOpen={isEditOpen}
							title={`ویرایش ${project.title}`}
							onClose={() => setIsEditOpen(false)}
						>
							<ProjectForm projectToEdit={project} onClose={() => setIsEditOpen(false)} />
						</Modal>
					</>

					{/* DELETE PROJECT */}
					<>
						<button onClick={() => setIsDeleteOpen(true)}>
							<HiOutlineTrash className="size-5 text-error" />
						</button>
						<Modal
							isOpen={isDeleteOpen}
							title={`حذف ${project.title}`}
							onClose={() => setIsDeleteOpen(false)}
						>
							<ProjectDelete
								resourceName={project.title}
								onClose={() => setIsDeleteOpen(false)}
								onDelete={() =>
									// First argument always is the argument that the function need (like id).
									// If we need more than one argument, put them in a {}.
									removeProject(project._id, {
										onSuccess: () => setIsDeleteOpen(false),
									})
								}
								isDeleting={isDeleting}
								disabled={false}
							/>
						</Modal>
					</>
				</div>
			</td>
			<td>
				<Link href={`/owner/projects/${project._id}`} className="flex justify-center">
					<HiOutlineEye className="size-5 text-primary-800" />
				</Link>
			</td>
		</Table.Row>
	);
};

export default OwnerProjectRow;
