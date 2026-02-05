export default function StepBusinessModel({ data, setData }) {
  const biz = data?.businessModel || {};

  const update = (key, value) => setData({ ...data, businessModel: { ...biz, [key]: value } });

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm text-black">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Business Model & Traction</h2>
      <p className="mt-2 text-gray-500 text-sm">Share your business model and current traction</p>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Business Model</label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" value={biz.model||''} onChange={(e)=>update('model', e.target.value)}>
          <option value="">Select model</option>
          <option>B2B</option>
          <option>B2C</option>
          <option>SaaS</option>
          <option>D2C</option>
          <option>Marketplace</option>
          <option>Subscription</option>
          <option>Other</option>
        </select>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Current Traction (users, revenue, pilots, clients)</label>
        <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" rows="3" value={biz.traction || ""} onChange={(e)=>update('traction', e.target.value)} placeholder="e.g. 10K users, $50K MRR, 5 pilot clients" />
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Key Metrics (optional)</label>
        <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" rows="2" value={biz.keyMetrics || ""} onChange={(e)=>update('keyMetrics', e.target.value)} placeholder="e.g. CAC, LTV, growth rate" />
      </div>
    </div>
  );
}
