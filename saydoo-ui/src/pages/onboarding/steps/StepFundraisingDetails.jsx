export default function StepFundraisingDetails({ data, setData }) {
  const fundraising = data?.fundraising || {};

  const update = (key, value) => setData({ ...data, fundraising: { ...fundraising, [key]: value } });

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm text-black">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Fundraising Details</h2>
      <p className="mt-2 text-gray-500 text-sm">Tell investors about your fundraising plans</p>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Are you currently raising funds?</label>
        <div className="flex gap-4">
          <button type="button" onClick={() => update('raising', 'yes')} className={`flex-1 py-2.5 rounded-lg border transition ${fundraising.raising === 'yes' ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>Yes</button>
          <button type="button" onClick={() => update('raising', 'no')} className={`flex-1 py-2.5 rounded-lg border transition ${fundraising.raising === 'no' ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>No</button>
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Funding Stage You Are Raising For</label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" value={fundraising.stage||''} onChange={(e)=>update('stage', e.target.value)}>
          <option value="">Select stage</option>
          <option>Pre-Seed</option>
          <option>Seed</option>
          <option>Series A</option>
          <option>Series B</option>
          <option>Series C+</option>
        </select>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Target Raise Amount (optional)</label>
        <input className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" value={fundraising.targetAmount || ""} onChange={(e)=>update('targetAmount', e.target.value)} placeholder="e.g. $500K" />
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Use of Funds (high-level)</label>
        <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" rows="3" value={fundraising.useOfFunds || ""} onChange={(e)=>update('useOfFunds', e.target.value)} placeholder="e.g. Product development, marketing, hiring" />
      </div>
    </div>
  );
}
