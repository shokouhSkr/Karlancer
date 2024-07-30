"use client";

import { Loading, TextField } from "@/features";
import { useForm } from "react-hook-form";
import { useCreateProposal } from "../hooks/useCreateProposal";

type FromValues = {};

const CreateProposalForm = ({ onClose, projectId }: { onClose: () => void; projectId: string }) => {
	const { createProposal, isCreating } = useCreateProposal();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FromValues>();

	const onSubmit = (data: FromValues) => {
		const newProposal = { ...data, projectId };

		createProposal(newProposal, {
			onSuccess: onClose,
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
			<TextField
				label="توضیحات"
				name="description"
				register={register}
				required
				error={errors}
				validationSchema={{
					required: "توضیحات ضروری است.",
					minLength: {
						value: 10,
						message: "حداقل 10 کاراکتر را وارد کنید.",
					},
				}}
			/>
			<TextField
				label="قیمت (تومان)"
				name="price"
				type="number"
				register={register}
				required
				error={errors}
				validationSchema={{
					required: "قیمت ضروری است.",
				}}
			/>
			<TextField
				label="مدت زمان (روز)"
				name="duration"
				type="number"
				register={register}
				required
				error={errors}
				validationSchema={{
					required: "مدت زمان ضروری است.",
				}}
			/>

			<div className="flex items-center gap-4 justify-end">
				<button
					onClick={onClose}
					className="btn w-20 mb-2 bg-secondary-0 text-primary-900 border border-primary-900 hover:bg-secondary-0"
				>
					لغو
				</button>
				<button type="submit" className="btn w-20 mb-2">
					{isCreating ? <Loading color="#fff" /> : "تایید"}
				</button>
			</div>
		</form>
	);
};

export default CreateProposalForm;
