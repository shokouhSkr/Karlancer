"use client";

import { useState } from "react";
import OTPInput from "react-otp-input";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { checkOtpApi } from "../services/authServices";
import { useCountdownTimer } from "@/features/shared/hooks/useCountdownTimer";
import { RESET_TIME } from "@/utils/constants";
import { Loading } from "@/features";
import { HiArrowSmallRight, HiOutlinePencilSquare } from "react-icons/hi2";

type CheckOTPPropType = {
	setCurrentForm: React.Dispatch<React.SetStateAction<number>>;
	phoneNumber: string;
	onResendOtp: any;
};

const CheckOTPForm = ({ setCurrentForm, phoneNumber, onResendOtp }: CheckOTPPropType) => {
	const [otp, setOtp] = useState("");
	const { time, resetTimer } = useCountdownTimer(RESET_TIME);
	const router = useRouter();

	const { mutateAsync: checkOtp, isPending: isCheckingOtp } = useMutation({
		mutationFn: checkOtpApi,
	});

	const checkOtpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!otp) return;

		try {
			const data = await checkOtp({ phoneNumber, otp });
			const { message, user } = data;
			if (user.isActive) {
				if (user.role === "ADMIN") router.push("/admin");
				if (user.role === "OWNER") router.push("/owner");
				if (user.role === "FREELANCER") router.push("/freelancer");
			} else {
				setCurrentForm(3);
			}
			toast.success(message);
		} catch (error: any) {
			toast.error(error?.response?.data?.message);
		}
	};

	const resendOtpHandler = () => {
		onResendOtp();
		resetTimer();
	};

	return (
		<>
			<div className="flex items-center mt-2 mb-6">
				<button onClick={() => setCurrentForm(1)} className="btn-icon-only size-7 rounded-lg">
					<HiArrowSmallRight />
				</button>
				<h1 className="text-2xl font-extrabold flex-1 text-center">کارلنسر</h1>
			</div>

			<div className="flex items-center mb-2">
				<p className="text-xs">کد تایید برای شماره موبایل {phoneNumber} ارسال شد.</p>
				<button onClick={() => setCurrentForm(1)} className="p-2 text-primary-900 text-lg">
					<HiOutlinePencilSquare />
				</button>
			</div>

			<div className="py-4">
				<p className="text-lg font-bold mb-4">کد تایید را وارد کنید.</p>

				<form onSubmit={checkOtpHandler}>
					<OTPInput
						shouldAutoFocus
						value={otp}
						onChange={setOtp}
						numInputs={6}
						renderInput={(props) => <input {...props} type="number" className="otp-input" />}
						renderSeparator={<span className="px-1"></span>}
						containerStyle="flex flex-row-reverse justify-center"
						inputStyle={{
							width: "2.5rem",
							padding: "0.5rem 0.2rem",
						}}
					/>

					<div className="my-8 text-center text-sm">
						{time > 0 ? (
							<p>{time} ثانیه تا ارسال مجدد کد</p>
						) : (
							<button onClick={resendOtpHandler}>دریافت مجدد کد تایید</button>
						)}
					</div>

					<button type="submit" className="btn btn--primary w-full py-3">
						{isCheckingOtp ? <Loading color="bg-secondary-0" /> : "تایید و ادامه"}
					</button>
				</form>
			</div>
		</>
	);
};

export default CheckOTPForm;
