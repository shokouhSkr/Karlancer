"use client";

import { TextField } from "@/features";
import { getOtpApi } from "../services/authServices";
import { useMutation } from "@tanstack/react-query";
import { PulseLoader } from "react-spinners";
import toast from "react-hot-toast";

type SetStepPropType = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  phoneNumber: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const SendOTPForm = ({ setStep, phoneNumber, onChange }: SetStepPropType) => {
  const {
    mutateAsync: getOtp,
    isPending: isSendingOtp,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtpApi,
  });

  const sendOptHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!phoneNumber) return;

    try {
      const data = await getOtp({ phoneNumber });
      // console.log("otp data: ", data);
      toast.success(data.message);
      setStep(2);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
      setStep(2);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-extrabold text-center mt-2 mb-6">کارلنس</h1>
      <p className="font-bold mb-4">ورود | ثبت نام</p>

      <div className="py-4">
        <p className="mb-2 text-sm">سلام!</p>

        <form onSubmit={sendOptHandler}>
          <TextField
            label="لطفا شماره موبایل خود را وارد کنید."
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
          />
          <button type="submit" className="btn btn--primary w-full mt-6 py-3">
            {isSendingOtp ? <PulseLoader color="#fff" size={8} /> : "ارسال کد تایید"}
          </button>
        </form>
      </div>
    </>
  );
};

export default SendOTPForm;
