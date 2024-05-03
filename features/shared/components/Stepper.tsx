const Stepper = ({ thisStep }: { thisStep: number }) => {
  const steps = ["احراز هویت", "تکمیل اطلاعات", "ثبت سفارش"];
  const currentStep = 1;
  const complete = false;

  return (
    <div>
      {thisStep && (
        <div className="flex justify-between">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${i + 1 <= thisStep && "active"} ${
                i + 1 > thisStep && "not-reached"
              }`}
            >
              <div className="step text-sm">{i + 1}</div>
              <p className={`text-sm mt-4 ${i + 1 <= thisStep ? "text-black" : "text-gray-400"}`}>
                {step}
              </p>
            </div>
          ))}
        </div>
      )}

      {!thisStep && (
        <div className="flex flex-row-reverse justify-between">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              } ${i + 1 > currentStep && "not-reached"}`}
            >
              <div className="step text-sm">{i + 1}</div>
              <p
                className={`mt-4 ${
                  i + 1 <= currentStep || complete ? "text-black" : "text-gray-400"
                }`}
              >
                {step}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Stepper;
