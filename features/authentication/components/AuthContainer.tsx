"use client";

import { useState, useEffect } from "react";
import { SendOTPForm, CheckOTPForm, CompleteProfileForm } from "@/features";
import { useMutation } from "@tanstack/react-query";
import { getOtpApi } from "../services/authServices";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

type AuthContainerPropType = {
	setStep: React.Dispatch<React.SetStateAction<number>>;
};

type FormValues = {
	phoneNumber: string;
};

const AuthContainer = ({ setStep }: AuthContainerPropType) => {
	const [currentForm, setCurrentForm] = useState(1);
	const {
		register,
		handleSubmit,
		getValues,
		setFocus,
		formState: { errors },
	} = useForm<FormValues>();

	const { mutateAsync: getOtp, isPending: isSendingOtp } = useMutation({
		mutationFn: getOtpApi,
	});

	const sendOtpHandler = async (data: FormValues) => {
		// console.log("data:", data); => data: { phoneNumber:"09168516859" }

		if (!data) return;

		try {
			const res = await getOtp(data);
			toast.success(res.message);
			setCurrentForm(2);
		} catch (error: any) {
			toast.error(error?.response?.data?.message);
			setCurrentForm(2);
		}
	};

	useEffect(() => {
		if (currentForm === 2) setStep(1);
		if (currentForm === 3) setStep(2);
	}, [currentForm, setStep]);

	useEffect(() => {
		setFocus("phoneNumber");
	}, [setFocus]);

	const renderCurrentForm = () => {
		switch (currentForm) {
			case 1:
				return (
					<SendOTPForm
						register={register}
						onSendOtp={handleSubmit(sendOtpHandler)} // handleSubmit comes from useForm hook.
						isSendingOtp={isSendingOtp}
						errors={errors}
					/>
				);

			case 2:
				return (
					<CheckOTPForm
						setCurrentForm={setCurrentForm}
						phoneNumber={getValues("phoneNumber")}
						onResendOtp={handleSubmit(sendOtpHandler)}
					/>
				);

			case 3:
				return <CompleteProfileForm setCurrentForm={setCurrentForm} setStep={setStep} />;

			default:
				return null;
		}
	};

	return renderCurrentForm();
};

export default AuthContainer;
