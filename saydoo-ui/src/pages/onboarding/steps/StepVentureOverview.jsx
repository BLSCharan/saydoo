export default function StepVentureOverview({ data, setData }) {
  const venture = data?.ventureOverview || {};

  const update = (key, value) => setData({ ...data, ventureOverview: { ...venture, [key]: value } });

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm text-black">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Venture Overview</h2>
      <p className="mt-2 text-gray-500 text-sm">Describe your startup and the problem you're solving</p>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Startup / Venture Name</label>
        <input className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" value={venture.name || ""} onChange={(e)=>update('name', e.target.value)} />
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Industry / Sector</label>
        <input className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" value={venture.industry || ""} onChange={(e)=>update('industry', e.target.value)} />
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Stage</label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" value={venture.stage||''} onChange={(e)=>update('stage', e.target.value)}>
          <option value="">Select stage</option>
          <option>Idea</option>
          <option>MVP</option>
          <option>Early Traction</option>
          <option>Revenue</option>
          <option>Growth</option>
        </select>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Problem You Are Solving</label>
        <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" rows="3" value={venture.problem || ""} onChange={(e)=>update('problem', e.target.value)} />
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Your Solution</label>
        <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" rows="3" value={venture.solution || ""} onChange={(e)=>update('solution', e.target.value)} />
      </div>
    </div>
  );
}
