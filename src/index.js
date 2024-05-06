import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./stepper.css";

function Stepper() {
  const steps = ["Customer", "Shippment", "Payment"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  return (
    <>
      <div className="w-2/6  mt-40 m-auto flex justify-between">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            }`}
          >
            <div className="step">{i + 1}</div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      <div className="w-1/6 mt-10 m-auto">
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          Next {currentStep}
        </button>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Stepper />
  </React.StrictMode>
);
