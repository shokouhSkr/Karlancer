"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { BiEditAlt, BiArrowBack } from "react-icons/bi";
import OTPInput from "react-otp-input";
import { checkOtpApi } from "../services/authServices";
import toast from "react-hot-toast";

type SetStepPropType = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  phoneNumber: string;
};

const CheckOTPForm = ({ setStep, phoneNumber }: SetStepPropType) => {
  const [otp, setOtp] = useState("");
  const {
    mutateAsync: checkOtp,
    isPending: isCheckingOtp,
    error,
    data,
  } = useMutation({
    mutationFn: checkOtpApi,
  });

  const checkOtpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!otp) return;

    try {
      const data = await checkOtp({ phoneNumber, otp });
      // console.log("data from check otp: ", data);
      toast.success(data.message);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="flex items-center mt-2 mb-6">
        <button onClick={() => setStep(1)} className="btn-icon-only rotate-180">
          <BiArrowBack />
        </button>
        <h1 className="text-2xl font-extrabold flex-1 text-center">کارلنس</h1>
      </div>

      <div className="flex items-center mb-2">
        <p className="text-xs">کد تایید برای شماره موبایل {phoneNumber} ارسال شد.</p>
        <button className="p-2 text-primary-900 text-lg">
          <BiEditAlt />
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
            // renderSeparator={<span className="text-gray-800">-</span>}
            containerStyle="flex flex-row-reverse justify-center"
            inputStyle={{
              width: "2.5rem",
              padding: "0.5rem 0.2rem",
            }}
          />

          <div className="text-center">
            <button className="my-8 text-center text-sm">دریافت مجدد کد تایید</button>
          </div>

          <button type="submit" className="btn btn--primary w-full  py-3">
            تایید و ادامه
          </button>
        </form>
      </div>
    </>
  );
};

export default CheckOTPForm;
