import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import StepIndicatorFounder from "./StepIndicatorFounder";
import StepFounderIdentity from "./steps/StepFounderIdentity";
import StepVentureOverview from "./steps/StepVentureOverview";
import StepBusinessModel from "./steps/StepBusinessModel";
import StepFundraisingDetails from "./steps/StepFundraisingDetails";
import StepPitchSubmission from "./steps/StepPitchSubmission";
import StepAIBehavior from "./steps/StepAIBehavior";
import StepMeetings from "./steps/StepMeetings";
import StepFounderNote from "./steps/StepFounderNote";
import roleImg from "../../assets/login-f.jpg";
import bg from "../../assets/bg-role1.png";

export default function FounderOnboarding() {
  const [step, setStep] = useState(1);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    founderIdentity: {
      name: "",
      role: "",
      location: "",
    },
    ventureOverview: {
      name: "",
      industry: "",
      stage: "",
      problem: "",
      solution: "",
    },
    businessModel: {
      model: "",
      traction: "",
      keyMetrics: "",
    },
    fundraising: {
      raising: "",
      stage: "",
      targetAmount: "",
      useOfFunds: "",
    },
    pitchSubmission: {
      formats: [],
      pitchDeck: "",
      pitchVideo: "",
    },
    aiAssistant: {
      autoExplain: true,
      askQualifying: true,
      summaryFormat: "text",
    },
    meetings: {
      allowMeetings: true,
      types: ["15", "30"],
      paid: false,
    },
    founderNote: {
      message: "",
      avoid: "",
    },
  });

  const next = () => setStep((s) => Math.min(s + 1, 8));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const handleFinish = () => {
    localStorage.setItem("founderProfile", JSON.stringify(formData));
    navigate("/dashboard/founder");
  };

  const handleSkip = () => {
    navigate("/dashboard/founder");
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
              <StepIndicatorFounder currentStep={step} />
            </div>

            {step === 1 && <StepFounderIdentity data={formData} setData={setFormData} />}
            {step === 2 && <StepVentureOverview data={formData} setData={setFormData} />}
            {step === 3 && <StepBusinessModel data={formData} setData={setFormData} />}
            {step === 4 && <StepFundraisingDetails data={formData} setData={setFormData} />}
            {step === 5 && <StepPitchSubmission data={formData} setData={setFormData} />}
            {step === 6 && <StepAIBehavior data={formData} setData={setFormData} />}
            {step === 7 && <StepMeetings data={formData} setData={setFormData} />}
            {step === 8 && <StepFounderNote data={formData} setData={setFormData} />}

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
                onClick={step === 8 ? handleFinish : next}
                className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
              >
                {step === 8 ? "Finish" : "Next"}
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center p-6 bg-white">
            <img src={roleImg} alt="Founder" className="w-full max-w-md object-contain rounded-xl shadow-lg" />
          </div>

        </div>
      </div>
    </section>
  );
}
