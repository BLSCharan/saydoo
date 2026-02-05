export default function StepBrands({ data, setData }) {
  const brands = data?.brands || { hasWorked: "", brandNames: [] };

  const updateBrands = (key, value) => {
    setData({
      ...data,
      brands: {
        ...brands,
        [key]: value,
      },
    });
  };

  const addBrand = () => {
    updateBrands("brandNames", [...(brands.brandNames || []), ""]);
  };

  const updateBrandName = (index, value) => {
    const updated = [...brands.brandNames];
    updated[index] = value;
    updateBrands("brandNames", updated);
  };

  const removeBrand = (index) => {
    const updated = brands.brandNames.filter((_, i) => i !== index);
    updateBrands("brandNames", updated);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Past Brand Collaborations
      </h2>
      <p className="mt-2 text-gray-500 text-sm md:text-base">
        Share your experience with brand partnerships
      </p>

      {/* YES / NO */}
      <div className="mt-6">
        <p className="text-sm font-medium text-gray-700 mb-3">
          Have you collaborated with brands before?
        </p>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => updateBrands("hasWorked", "yes")}
            className={`flex-1 py-3 rounded-lg border transition ${
              brands.hasWorked === "yes"
                ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            Yes
          </button>

          <button
            type="button"
            onClick={() => updateBrands("hasWorked", "no")}
            className={`flex-1 py-3 rounded-lg border transition ${
              brands.hasWorked === "no"
                ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            No
          </button>
        </div>
      </div>

      {/* BRAND LIST */}
      {brands.hasWorked === "yes" && (
        <div className="mt-8">
          <p className="text-sm font-medium text-gray-700 mb-4">
            List top brands you have worked with
          </p>

          <div className="space-y-3">
            {brands.brandNames.map((brand, index) => (
              <div key={index} className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Brand name"
                  value={brand}
                  onChange={(e) => updateBrandName(index, e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <button
                  type="button"
                  onClick={() => removeBrand(index)}
                  className="text-red-500 hover:text-red-600 font-bold text-lg"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addBrand}
            className="mt-4 text-sm font-medium text-indigo-600 hover:underline"
          >
            + Add another brand
          </button>
        </div>
      )}

    </div>
  );
}
