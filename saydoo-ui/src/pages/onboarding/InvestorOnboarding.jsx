import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { onboardingAPI } from "../../services/api";

import StepIndicator from "./StepIndicatorInvestor";
import StepIdentity from "./steps/StepIdentity";
import StepFocus from "./steps/StepFocus";
import StepPitch from "./steps/StepPitch";
import StepAIBehavior from "./steps/StepAIBehavior";
import StepMeetings from "./steps/StepMeetings";
import StepGuidance from "./steps/StepGuidance";
import roleImg from "../../assets/login-i.jpg";
import bg from "../../assets/bg-role1.png";

export default function InvestorOnboarding() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identity: {
      name: "",
      type: "",
      location: "",
    },
    focus: {
      industries: [],
      stage: "",
      ticketRange: "",
      geography: "",
    },
    pitch: {
      allowedFormats: [],
      maxDeckSize: "",
      maxVideoDuration: "",
      evaluationFactors: [],
      avoid: "",
      minimumExpectations: "",
    },
    aiBehavior: {
      autoFilter: true,
      followUpQuestions: true,
      summaryFormat: "text",
    },
    meetings: {
      allowMeetings: true,
      types: ["15", "30"],
      paid: false,
    },
    guidance: {
      exciteNote: "",
      avoidNote: "",
    },
  });

  const next = () => setStep((s) => Math.min(s + 1, 6));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const handleFinish = async () => {
    setLoading(true);
    setError("");

    try {
      await onboardingAPI.submitInvestorOnboarding(formData);
      navigate("/dashboard/investor");
    } catch (err) {
      setError(err.message || "Failed to submit onboarding");
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    navigate("/dashboard/investor");
  };

  return (
    <section
      ref={scrollRef}
      className="min-h-screen px-4 py-10 overflow-y-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto w-full bg-white rounded-2xl shadow-2xl p-4 md:p-8 text-black grid grid-cols-1 md:grid-cols-2 overflow-hidden items-center">

          <div className="p-4 md:p-8">
            <div className="mb-6">
              <StepIndicator currentStep={step} />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            {step === 1 && <StepIdentity data={formData} setData={setFormData} />}
            {step === 2 && <StepFocus data={formData} setData={setFormData} />}
            {step === 3 && <StepPitch data={formData} setData={setFormData} />}
            {step === 4 && <StepAIBehavior data={formData} setData={setFormData} />}
            {step === 5 && <StepMeetings data={formData} setData={setFormData} />}
            {step === 6 && <StepGuidance data={formData} setData={setFormData} />}

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
                onClick={step === 6 ? handleFinish : next}
                disabled={loading && step === 6}
                className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-medium transition"
              >
                {loading && step === 6 ? "Submitting..." : step === 6 ? "Finish" : "Next"}
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center p-6 bg-white">
            <img src={roleImg} alt="Investor" className="w-full max-w-md object-contain rounded-xl shadow-lg" />
          </div>

        </div>
      </div>
    </section>
  );
}
