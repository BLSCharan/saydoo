export default function StepFounderNote({ data, setData }) {
  const note = data?.founderNote || {};

  const update = (key, value) => setData({ ...data, founderNote: { ...note, [key]: value } });

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm text-black">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Founder Note</h2>
      <p className="mt-2 text-gray-500 text-sm">Final message to investors and partners</p>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">One-line message to investors</label>
        <input className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" value={note.message || ""} onChange={(e)=>update('message', e.target.value)} placeholder="e.g. We're building the future of supply chain logistics" />
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Anything you don't want to be asked about</label>
        <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" rows="3" value={note.avoid || ""} onChange={(e)=>update('avoid', e.target.value)} placeholder="e.g. Pricing discussions, valuation details" />
      </div>
    </div>
  );
}
