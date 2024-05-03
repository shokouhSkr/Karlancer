"use client";

import { useState } from "react";
import { TextField } from "@/features";
import { BiArrowBack } from "react-icons/bi";
import { PulseLoader } from "react-spinners";
import { RadioButton } from "@/features";
import { useMutation } from "@tanstack/react-query";
import { completeProfileApi } from "../services/authServices";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type CompleteProfilePropType = {
  setCurrentForm: React.Dispatch<React.SetStateAction<number>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const CompleteProfileForm = ({ setCurrentForm, setStep }: CompleteProfilePropType) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const router = useRouter();
  const {
    mutateAsync: completeProfile,
    isPending: isSubmitting,
    data,
  } = useMutation({
    mutationFn: completeProfileApi,
  });

  const submitInfoHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { user } = await completeProfile({ name: username, email, role });
      // console.log("user data: ", user);

      if (user.role === "FREELANCER") router.push("/freelancer");
      if (user.role === "OWNER") router.push("/freelancer");

      toast.success(data.message);
      setStep(3);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="flex items-center mt-2 mb-6">
        <button onClick={() => setCurrentForm(2)} className="btn-icon-only rotate-180">
          <BiArrowBack />
        </button>
        <h1 className="text-2xl font-extrabold flex-1 text-center">کارلنس</h1>
      </div>

      <div className="py-4">
        <form onSubmit={submitInfoHandler} className="space-y-6">
          <TextField
            label="نام و نام خانوادگی"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            shouldAutoFocus
          />
          <TextField
            label="ایمیل"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex gap-6 my-1">
            <RadioButton
              label="کارفرما"
              value="OWNER"
              name="role"
              checked={role === "OWNER"}
              onChange={(e: any) => setRole(e.target.value)}
            />
            <RadioButton
              label="فریلنسر"
              value="FREELANCER"
              name="role"
              checked={role === "FREELANCER"}
              onChange={(e: any) => setRole(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn--primary w-full mt-6 py-3">
            {isSubmitting ? <PulseLoader color="#fff" size={8} /> : "ثبت اطلاعات"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CompleteProfileForm;
