"use client";

import Select from "@/features/shared/components/form/Select";
import Loading from "@/features/shared/components/Loading";
import { ProposalChangeStatusPropType } from "@/types";
import { useForm } from "react-hook-form";
import { useChangeProposalStatus } from "../hooks/useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const statusOptions = [
	{
		label: "در انتظار تایید",
		value: 1,
	},
	{
		label: "تایید شده",
		value: 2,
	},
	{
		label: "رد شده",
		value: 0,
	},
];

type FormValues = {
	status: string;
	projectId: string;
};

const ProposalChangeStatus = ({ proposalId, onClose }: ProposalChangeStatusPropType) => {
	const { register, handleSubmit } = useForm<FormValues>();
	const { changeProposalStatus, isUpdatingStatus } = useChangeProposalStatus();
	const { projectId } = useParams();
	const queryClient = useQueryClient();

	const onSubmit = (data: FormValues) => {
		changeProposalStatus(
			{ proposalId, ...data },
			{
				onSuccess: () => {
					onClose();
					queryClient.invalidateQueries({ queryKey: ["project", projectId] }); // To update project data with this specific id. (we don't have access to projectId in useChangeProposalStatus, so we do it here)
				},
			}
		);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Select
					name="status"
					label="تغییر وضعیت"
					register={register}
					options={statusOptions}
					required
				/>
				<div className="flex items-center gap-4 justify-end mt-6">
					<button
						onClick={onClose}
						className="btn w-20 mb-2 bg-secondary-0 text-primary-900 border border-primary-900 hover:bg-secondary-0"
					>
						لغو
					</button>
					<button type="submit" className="btn w-20 mb-2">
						{isUpdatingStatus ? <Loading color="#fff" /> : "تایید"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProposalChangeStatus;
