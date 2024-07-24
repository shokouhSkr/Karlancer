"use client";

import { useState, useEffect } from "react";
import { SendOTPForm, CheckOTPForm, CompleteProfileForm } from "@/features";
import { useMutation } from "@tanstack/react-query";
import { getOtpApi } from "../services/authServices";
import toast from "react-hot-toast";

type AuthContainerPropType = {
	setStep: React.Dispatch<React.SetStateAction<number>>;
};

const AuthContainer = ({ setStep }: AuthContainerPropType) => {
	const [currentForm, setCurrentForm] = useState(1);
	const [phoneNumber, setPhoneNumber] = useState("");

	const { mutateAsync: getOtp, isPending: isSendingOtp } = useMutation({
		mutationFn: getOtpApi,
	});

	const sendOtpHandler = async (e?: React.FormEvent<HTMLFormElement>) => {
		if (e) e.preventDefault();

		if (!phoneNumber) return;

		try {
			const data = await getOtp({ phoneNumber });
			toast.success(data.message);
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

	const renderCurrentForm = () => {
		switch (currentForm) {
			case 1:
				return (
					<SendOTPForm
						setCurrentForm={setCurrentForm}
						phoneNumber={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						onSendOtp={sendOtpHandler}
						isSendingOtp={isSendingOtp}
					/>
				);

			case 2:
				return (
					<CheckOTPForm
						setCurrentForm={setCurrentForm}
						phoneNumber={phoneNumber}
						onResendOtp={sendOtpHandler}
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
