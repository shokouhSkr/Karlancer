"use client";

import { useState } from "react";
import { AuthContainer, Stepper } from "@/features";

const AuthPage = () => {
	const [step, setStep] = useState(1);

	return (
		<div className="flex h-dvh max-w-screen-2xl mx-auto">
			{/* RIGHT */}
			<div className="h-full w-full container lg:w-[30%] lg:bg-gray-100 flex items-center justify-center lg:justify-end">
				<div className="w-full max-w-sm lg:ml-[-200px] z-20 relative">
					{/* STEPPER */}
					<div className="mb-8 lg:hidden">
						<Stepper thisStep={step} />
					</div>

					{/* AUTH FORMS */}
					<div className="p-8 rounded-2xl w-full max-w-sm lg:bg-white">
						<AuthContainer setStep={setStep} />
					</div>
				</div>
			</div>

			{/* LEFT */}
			<div className="hidden lg:flex items-center h-full w-[70%] rounded-r-3xl z-0 bg-primary-900">
				<div className="max-w-xl mx-auto">
					{/* STEPPER */}
					<div className="mb-8 lg:block hidden">
						<Stepper thisStep={step} />
					</div>
					<p className="text-2xl font-bold text-center">
						پل میان فریلنسرهای متخصص و کارفرمایان جویای مهارت
					</p>
				</div>
			</div>
		</div>
	);
};

export default AuthPage;
