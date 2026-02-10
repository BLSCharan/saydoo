import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { onboardingAPI } from "../../services/api";

import StepIndicator from "./StepIndicator";
import StepBasic from "./steps/StepBasic";
import StepSocial from "./steps/StepSocial";
import StepAudience from "./steps/StepAudience";
import StepBrands from "./steps/StepBrands";
import StepPricing from "./steps/StepPricing";
import roleImg from "../../assets/login-role.jpg";
import bg from "../../assets/bg-role.png";

export default function InfluencerOnboarding() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
    content: { links: [] },
    pricing: {},
  });

  const next = () => setStep((s) => Math.min(s + 1, 5));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  // Reset scroll on step change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [step]);

  const handleFinish = async () => {
    setLoading(true);
    setError("");

    try {
      await onboardingAPI.submitInfluencerOnboarding(formData);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Failed to submit onboarding");
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    // allow skipping onboarding and go to dashboard
    navigate("/dashboard");
  };

  return (
    <section
      ref={scrollRef}
      className="min-h-screen px-4 py-10 overflow-y-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Combined Card: left steps + right image */}
        <div className="mx-auto w-full bg-white rounded-2xl shadow-2xl p-4 md:p-8 text-black grid grid-cols-1 md:grid-cols-2 overflow-hidden items-center">

          {/* Left: steps column */}
          <div className="p-4 md:p-8">
            <div className="mb-6">
              <StepIndicator currentStep={step} />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            {step === 1 && <StepBasic data={formData} setData={setFormData} />}
            {step === 2 && <StepSocial data={formData} setData={setFormData} />}
            {step === 3 && <StepAudience data={formData} setData={setFormData} />}
            {step === 4 && <StepBrands data={formData} setData={setFormData} />}
            {step === 5 && <StepPricing data={formData} setData={setFormData} />}

            <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                {step > 1 && (
                  <button
                    onClick={back}
                    className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Back
                  </button>
                )}

                <button
                  onClick={handleSkip}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition text-sm"
                >
                  Skip
                </button>
              </div>

              <button
                onClick={step === 5 ? handleFinish : next}
                disabled={loading && step === 5}
                className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-medium transition"
              >
                {loading && step === 5 ? "Submitting..." : step === 5 ? "Finish" : "Next"}
              </button>
            </div>
          </div>

          {/* Right: image column */}
          <div className="hidden md:flex items-center justify-center p-6 bg-white">
            <img src={roleImg} alt="Onboarding" className="w-full max-w-md object-contain rounded-xl shadow-lg" />
          </div>

        </div>
      </div>
    </section>
  );
}
