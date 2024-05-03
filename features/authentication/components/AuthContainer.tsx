"use client";

import { useState } from "react";
import { SendOTPForm, CheckOTPForm } from "@/features";

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );

      case 2:
        return <CheckOTPForm setStep={setStep} phoneNumber={phoneNumber} />;

      default:
        return null;
    }
  };

  return renderStep();
};

export default AuthContainer;
