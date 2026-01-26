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
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        Audience Details
      </h2>
      <p className="mt-2 text-gray-400 text-sm md:text-base">
        Help brands understand your audience better
      </p>

      {/* AGE GROUP */}
      <div className="mt-6">
        <p className="text-sm text-gray-300 mb-3">
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
                  ? "border-green-400 bg-green-400/10 text-green-400"
                  : "border-white/20 text-gray-300 hover:bg-white/5"
              }`}
            >
              {age}
            </button>
          ))}
        </div>
      </div>

      {/* GENDER SPLIT */}
      <div className="mt-8">
        <p className="text-sm text-gray-300 mb-3">
          Audience gender split (if known)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Male % (e.g. 60%)"
            value={audience.male || ""}
            onChange={(e) =>
              updateAudience("male", e.target.value)
            }
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none text-white"
          />

          <input
            type="text"
            placeholder="Female % (e.g. 35%)"
            value={audience.female || ""}
            onChange={(e) =>
              updateAudience("female", e.target.value)
            }
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none text-white"
          />

          <input
            type="text"
            placeholder="Other % (optional)"
            value={audience.other || ""}
            onChange={(e) =>
              updateAudience("other", e.target.value)
            }
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none text-white"
          />
        </div>
      </div>

      {/* GEOGRAPHY */}
      <div className="mt-8">
        <label className="block text-sm text-gray-300 mb-2">
          Audience geography (top locations)
        </label>
        <input
          type="text"
          placeholder="e.g. India, USA, UK"
          value={audience.geography || ""}
          onChange={(e) =>
            updateAudience("geography", e.target.value)
          }
          className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none text-white"
        />
        <p className="mt-2 text-xs text-gray-500">
          Separate multiple locations with commas
        </p>
      </div>

    </div>
  );
}
