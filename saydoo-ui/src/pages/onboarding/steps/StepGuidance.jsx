export default function StepGuidance({ data, setData }) {
  const guidance = data?.guidance || {};

  const update = (key, value) => setData({ ...data, guidance: { ...(guidance||{}), [key]: value } });

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm text-black">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Guidance for Founders</h2>
      <p className="mt-2 text-gray-500 text-sm">Short notes to guide founder pitches</p>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">One-line note on what excites you</label>
        <input className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" value={guidance.exciteNote||''} onChange={(e)=>update('exciteNote', e.target.value)} />
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">One-line note on what founders should avoid pitching</label>
        <input className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" value={guidance.avoidNote||''} onChange={(e)=>update('avoidNote', e.target.value)} />
      </div>
    </div>
  );
}
