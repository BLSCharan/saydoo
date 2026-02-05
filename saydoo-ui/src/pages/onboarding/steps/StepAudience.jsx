export default function StepAudience({ data, setData }) {
  const audience = data?.audience || {};

  const updateAudience = (key, value) => {
    setData({
      ...data,
      audience: {
        ...audience,
        [key]: value,
      },
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Audience Details
      </h2>
      <p className="mt-2 text-gray-500 text-sm md:text-base">
        Help brands understand your audience better
      </p>

      {/* AGE GROUP */}
      <div className="mt-6">
        <p className="text-sm font-medium text-gray-700 mb-3">
          Who is your primary audience age group?
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["13–17", "18–24", "25–34", "35–44", "45–54", "55+"].map((age) => (
            <button
              key={age}
              type="button"
              onClick={() => updateAudience("ageGroup", age)}
              className={`py-2.5 rounded-lg border transition ${
                audience.ageGroup === age
                  ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                  : "border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {age}
            </button>
          ))}
        </div>
      </div>

      {/* GENDER SPLIT */}
      <div className="mt-8">
        <p className="text-sm font-medium text-gray-700 mb-3">
          Audience gender split (if known)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Male % (e.g. 60%)"
            value={audience.male || ""}
            onChange={(e) => updateAudience("male", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            placeholder="Female % (e.g. 35%)"
            value={audience.female || ""}
            onChange={(e) => updateAudience("female", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            placeholder="Other % (optional)"
            value={audience.other || ""}
            onChange={(e) => updateAudience("other", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* GEOGRAPHY */}
      <div className="mt-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Audience geography (top locations)
        </label>
        <input
          type="text"
          placeholder="e.g. India, USA, UK"
          value={audience.geography || ""}
          onChange={(e) => updateAudience("geography", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <p className="mt-2 text-xs text-gray-400">
          Separate multiple locations with commas
        </p>
      </div>

    </div>
  );
}
