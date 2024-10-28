"use client";

import { Divider, Loading, TextField } from "@/features";
import { checkOtpApi } from "../services/authServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type SendOTPPropType = {
	onSendOtp: any;
	isSendingOtp: boolean;
	register: any;
	errors: any;
};

const SendOTPForm = ({ onSendOtp, isSendingOtp, register, errors }: SendOTPPropType) => {
	const router = useRouter();

	// For sample owner
	const { mutateAsync: goToOwnerDashboard, isPending: redirectingToDashboardOwner } = useMutation({
		mutationFn: checkOtpApi,
	});

	// For sample freelancer
	const { mutateAsync: goToDashboardFreelancer, isPending: redirectingToDashboardFreelancer } =
		useMutation({ mutationFn: checkOtpApi });

	const loginOwner = async () => {
		try {
			const data = await goToOwnerDashboard({ phoneNumber: "09129999999", otp: "123456" });
			router.push("/owner");

			toast.success("کارفرمای عزیز، خوش آمدید. (دمو)");
		} catch (error: any) {
			toast.error(error?.response?.data?.message);
		}
	};

	const loginFreelancer = async () => {
		try {
			const data = await goToDashboardFreelancer({ phoneNumber: "09128888888", otp: "987654" });
			router.push("/freelancer");

			toast.success("فریلنسر عزیز، خوش آمدید. (دمو)");
		} catch (error: any) {
			toast.error(error?.response?.data?.message);
		}
	};

	return (
		<>
			<h1 className="text-2xl font-extrabold text-center mt-2 mb-6">کارچین</h1>
			<p className="font-bold mb-4">ورود | ثبت نام</p>

			<div className="py-4">
				<p className="mb-2 text-sm">سلام!</p>

				<form onSubmit={onSendOtp}>
					<TextField
						label="لطفا شماره موبایل خود را وارد کنید."
						type="number"
						name="phoneNumber"
						register={register}
						error={errors}
						validationSchema={{
							pattern: {
								value: /^09\d{9}$/,
								message: "شماره موبایل نامعتبر است.",
							},
						}}
					/>
					<button type="submit" className="btn btn--primary w-full mt-6 py-3">
						{isSendingOtp ? <Loading size={8} color="#fff" /> : "ارسال کد تایید"}
					</button>

					<Divider text="یا" />

					<button type="button" onClick={loginOwner} className="btn btn--primary w-full py-3">
						{redirectingToDashboardOwner ? (
							<Loading size={8} color="#fff" />
						) : (
							"ورود آزمایشی به عنوان کارفرما"
						)}
					</button>
					<button
						type="button"
						onClick={loginFreelancer}
						className="btn btn--primary w-full mt-3 py-3"
					>
						{redirectingToDashboardFreelancer ? (
							<Loading color="#fff" />
						) : (
							"ورود آزمایشی به عنوان فریلنسر"
						)}
					</button>
				</form>
			</div>
		</>
	);
};

export default SendOTPForm;
