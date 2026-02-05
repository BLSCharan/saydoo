export default function StepIndicatorFounder({ currentStep }) {
  const steps = [
    "Identity",
    "Venture",
    "Business",
    "Fundraising",
    "Pitch",
    "AI",
    "Meetings",
    "Note",
  ];

  return (
    <div className="flex justify-between mb-10">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const active = stepNumber <= currentStep;

        return (
          <div key={label} className="flex-1 text-center">
            <div
              className={`mx-auto h-2 w-2 rounded-full ${
                active ? "bg-green-400" : "bg-white/20"
              }`}
            />
            <p className={`mt-2 text-xs ${active ? "text-green-400" : "text-gray-500"}`}>
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
