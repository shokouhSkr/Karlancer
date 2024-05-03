"use client";

import { useState, useEffect } from "react";
import { SendOTPForm, CheckOTPForm, CompleteProfileForm } from "@/features";

type AuthContainerPropType = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const AuthContainer = ({ setStep }: AuthContainerPropType) => {
  const [currentForm, setCurrentForm] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

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
          />
        );

      case 2:
        return <CheckOTPForm setCurrentForm={setCurrentForm} phoneNumber={phoneNumber} />;

      case 3:
        return <CompleteProfileForm setCurrentForm={setCurrentForm} setStep={setStep} />;

      default:
        return null;
    }
  };

  return renderCurrentForm();
};

export default AuthContainer;
