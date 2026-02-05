export default function StepPricing({ data, setData }) {
  const pricing = data?.pricing || {};

  const updatePricing = (key, value) => {
    setData({
      ...data,
      pricing: {
        ...pricing,
        [key]: value,
      },
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Pricing & Deals
      </h2>
      <p className="mt-2 text-gray-500 text-sm md:text-base">
        Set your collaboration pricing preferences
      </p>

      {/* BARTER DEAL */}
      <div className="mt-6">
        <p className="text-sm text-gray-600 mb-3">
          Are you open for barter deals?
        </p>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => updatePricing("barter", "yes")}
            className={`flex-1 py-2.5 rounded-lg border transition font-medium ${
              pricing.barter === "yes"
                ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            Yes
          </button>

          <button
            type="button"
            onClick={() => updatePricing("barter", "no")}
            className={`flex-1 py-2.5 rounded-lg border transition font-medium ${
              pricing.barter === "no"
                ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            No
          </button>
        </div>
      </div>

      {/* PRICING INPUTS */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* WITHOUT EDITING */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Price for 30 sec Reel (without editing)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              ₹
            </span>
            <input
              type="number"
              placeholder="5000"
              value={pricing.reel30NoEdit || ""}
              onChange={(e) =>
                updatePricing("reel30NoEdit", e.target.value)
              }
              className="w-full pl-8 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* WITH EDITING */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Price for 30 sec Reel (with editing)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              ₹
            </span>
            <input
              type="number"
              placeholder="8000"
              value={pricing.reel30WithEdit || ""}
              onChange={(e) =>
                updatePricing("reel30WithEdit", e.target.value)
              }
              className="w-full pl-8 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

      </div>

      {/* NOTE */}
      <p className="mt-6 text-xs text-gray-500">
        You can update pricing anytime from your dashboard
      </p>

    </div>
  );
}
