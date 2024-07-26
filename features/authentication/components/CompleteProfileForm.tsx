"use client";

import { useEffect } from "react";
import { Loading, TextField } from "@/features";
import { RadioButton } from "@/features";
import { useMutation } from "@tanstack/react-query";
import { completeProfileApi } from "../services/authServices";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { HiArrowSmallRight } from "react-icons/hi2";

type CompleteProfilePropType = {
	setCurrentForm: React.Dispatch<React.SetStateAction<number>>;
	setStep: React.Dispatch<React.SetStateAction<number>>;
};

type formValues = {
	name: string;
	email: string;
	role: string;
};

const CompleteProfileForm = ({ setCurrentForm, setStep }: CompleteProfilePropType) => {
	// We don't need states when we use useForm for inputs.
	// const [name, setName] = useState('')
	// const [email, setEmail] = useState('')
	// const [role, setRole] = useState('')
	const {
		register,
		setFocus,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<formValues>();

	const { mutateAsync: completeProfile, isPending: isSubmitting } = useMutation({
		mutationFn: completeProfileApi,
	});

	const router = useRouter();

	const submitInfoHandler = async (data: formValues) => {
		try {
			const res = await completeProfile(data);

			if (res.user.role === "FREELANCER") router.push("/freelancer");
			if (res.user.role === "OWNER") router.push("/owner");

			toast.success(res.message);
			setStep(3);
		} catch (error: any) {
			toast.error(error?.response?.data?.message);
		}
	};

	useEffect(() => {
		setFocus("name");
	}, [setFocus]);

	return (
		<>
			<div className="flex items-center mt-2 mb-6">
				<button onClick={() => setCurrentForm(2)} className="btn-icon-only size-7">
					<HiArrowSmallRight />
				</button>
				<h1 className="text-2xl font-extrabold flex-1 text-center">کارلنسر</h1>
			</div>

			<div className="py-4">
				<form onSubmit={handleSubmit(submitInfoHandler)} className="space-y-6">
					<TextField
						label="نام و نام خانوادگی"
						name="name"
						register={register}
						error={errors}
						validationSchema={{
							required: "نام و نام خانوادگی ضروری است.",
						}}
					/>
					<TextField
						label="ایمیل"
						name="email"
						register={register}
						error={errors}
						validationSchema={{
							required: "ایمیل ضروری است.",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: "ایمیل نامعتبر است.",
							},
						}}
					/>

					<div className="flex gap-6 my-1">
						<RadioButton
							label="کارفرما"
							name="role"
							value="OWNER"
							register={register}
							error={errors}
							watch={watch}
							validationSchema={{
								required: "انتخاب نقش ضروری است.",
							}}
						/>
						<RadioButton
							label="فریلنسر"
							name="role"
							value="FREELANCER"
							register={register}
							error={errors}
							watch={watch}
							validationSchema={{
								required: "انتخاب نقش ضروری است.",
							}}
						/>
					</div>
					{errors && errors["role"] && (
						<span className="text-error text-sm">{errors["role"]?.message as string}</span>
					)}

					<button type="submit" className="btn btn--primary w-full mt-6 py-3">
						{isSubmitting ? <Loading color="#fff" /> : "ثبت اطلاعات"}
					</button>
				</form>
			</div>
		</>
	);
};

export default CompleteProfileForm;
