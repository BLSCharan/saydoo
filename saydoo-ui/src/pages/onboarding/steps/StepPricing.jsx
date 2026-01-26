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
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        Pricing & Deals
      </h2>
      <p className="mt-2 text-gray-400 text-sm md:text-base">
        Set your collaboration pricing preferences
      </p>

      {/* BARTER DEAL */}
      <div className="mt-6">
        <p className="text-sm text-gray-300 mb-3">
          Are you open for barter deals?
        </p>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => updatePricing("barter", "yes")}
            className={`flex-1 py-3 rounded-lg border transition ${
              pricing.barter === "yes"
                ? "border-green-400 bg-green-400/10 text-green-400"
                : "border-white/20 text-gray-300 hover:bg-white/5"
            }`}
          >
            Yes
          </button>

          <button
            type="button"
            onClick={() => updatePricing("barter", "no")}
            className={`flex-1 py-3 rounded-lg border transition ${
              pricing.barter === "no"
                ? "border-green-400 bg-green-400/10 text-green-400"
                : "border-white/20 text-gray-300 hover:bg-white/5"
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
          <label className="block text-sm text-gray-300 mb-2">
            Price for 30 sec Reel (without editing)
          </label>
          <input
            type="number"
            placeholder="e.g. 5000"
            value={pricing.reel30NoEdit || ""}
            onChange={(e) =>
              updatePricing("reel30NoEdit", e.target.value)
            }
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none text-white"
          />
        </div>

        {/* WITH EDITING */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Price for 30 sec Reel (with editing)
          </label>
          <input
            type="number"
            placeholder="e.g. 8000"
            value={pricing.reel30WithEdit || ""}
            onChange={(e) =>
              updatePricing("reel30WithEdit", e.target.value)
            }
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none text-white"
          />
        </div>

      </div>

      {/* NOTE */}
      <p className="mt-6 text-xs text-gray-500">
        You can update pricing anytime from your dashboard
      </p>

    </div>
  );
}
