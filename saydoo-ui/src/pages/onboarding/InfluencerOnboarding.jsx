import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import StepIndicator from "./StepIndicator";
import StepBasic from "./steps/StepBasic";
import StepSocial from "./steps/StepSocial";
import StepAudience from "./steps/StepAudience";
import StepBrands from "./steps/StepBrands";
import StepContent from "./steps/StepContent";
import StepPricing from "./steps/StepPricing";

export default function InfluencerOnboarding() {
  const [step, setStep] = useState(1);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    basicProfile: {
      fullName: "",
      niche: "",
      language: "",
      openToCollab: "",
    },
    social: {},
    audience: {},
    brands: {},
    content: {
      links: [],
    },
    pricing: {},
  });

  const next = () => setStep((s) => Math.min(s + 1, 6));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  // ✅ RESET SCROLL ON STEP CHANGE
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [step]);

  // ✅ FINISH HANDLER
  const handleFinish = () => {
    // Save onboarding data (temporary storage)
    localStorage.setItem(
      "influencerProfile",
      JSON.stringify(formData)
    );

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <section
      ref={scrollRef}
      className="
        h-[calc(100vh-80px)]
        overflow-y-auto
        px-4
        py-10
      "
    >
      {/* CENTERED CONTENT */}
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-8">
          <StepIndicator currentStep={step} />
        </div>

        {step === 1 && <StepBasic data={formData} setData={setFormData} />}
        {step === 2 && <StepSocial data={formData} setData={setFormData} />}
        {step === 3 && <StepAudience data={formData} setData={setFormData} />}
        {step === 4 && <StepBrands data={formData} setData={setFormData} />}
        {step === 5 && <StepContent data={formData} setData={setFormData} />}
        {step === 6 && <StepPricing data={formData} setData={setFormData} />}

        {/* NAV BUTTONS */}
        <div className="flex justify-between mt-10 pb-10">
          {step > 1 ? (
            <button
              onClick={back}
              className="px-6 py-2 rounded-lg border border-white/20 text-white"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={step === 6 ? handleFinish : next}
            className="px-6 py-2 rounded-lg bg-green-400 text-black font-medium"
          >
            {step === 6 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </section>
  );
}
