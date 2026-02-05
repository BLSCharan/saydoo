export default function StepBasic({ data, setData }) {
  const { basicProfile } = data;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Basic Profile
      </h2>
      <p className="mt-2 text-gray-500 text-sm md:text-base">
        Tell us about yourself so we can personalize your AI clone
      </p>

      {/* FULL NAME */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={basicProfile.fullName}
          onChange={(e) =>
            setData({
              ...data,
              basicProfile: {
                ...basicProfile,
                fullName: e.target.value,
              },
            })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* NICHE */}
      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Primary Niche / Content Category
        </label>
        <select
          value={basicProfile.niche}
          onChange={(e) =>
            setData({
              ...data,
              basicProfile: {
                ...basicProfile,
                niche: e.target.value,
              },
            })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select your niche</option>
          <option>Fashion</option>
          <option>Technology</option>
          <option>Fitness</option>
          <option>Education</option>
          <option>Gaming</option>
          <option>Travel</option>
          <option>Finance</option>
          <option>Food</option>
          <option>Other</option>
        </select>
      </div>

      {/* LANGUAGE */}
      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Content Language
        </label>
        <select
          value={basicProfile.language}
          onChange={(e) =>
            setData({
              ...data,
              basicProfile: {
                ...basicProfile,
                language: e.target.value,
              },
            })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select language</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Telugu</option>
          <option>Tamil</option>
          <option>Kannada</option>
          <option>Malayalam</option>
          <option>Other</option>
        </select>
      </div>

      {/* COLLAB OPEN */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Are you open to collaborations from all locations?
        </label>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() =>
              setData({
                ...data,
                basicProfile: {
                  ...basicProfile,
                  openToCollab: "yes",
                },
              })
            }
            className={`flex-1 py-3 rounded-lg border transition ${
              basicProfile.openToCollab === "yes"
                ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            Yes
          </button>

          <button
            type="button"
            onClick={() =>
              setData({
                ...data,
                basicProfile: {
                  ...basicProfile,
                  openToCollab: "no",
                },
              })
            }
            className={`flex-1 py-3 rounded-lg border transition ${
              basicProfile.openToCollab === "no"
                ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
