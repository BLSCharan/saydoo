export default function StepAIBehavior({ data, setData }) {
  const ai = data?.aiBehavior || {};

  const update = (key, value) => setData({ ...data, aiBehavior: { ...(ai||{}), [key]: value } });

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm text-black">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">AI Behaviour Preferences</h2>
      <p className="mt-2 text-gray-500 text-sm">How should the assistant filter and summarize pitches?</p>

      <div className="mt-6 space-y-4">
        <label className="flex items-center gap-3">
          <input type="checkbox" checked={ai.autoFilter!==false} onChange={(e)=>update('autoFilter', e.target.checked)} />
          <span className="text-sm text-gray-700">Automatically filter irrelevant pitches</span>
        </label>

        <label className="flex items-center gap-3">
          <input type="checkbox" checked={ai.followUpQuestions!==false} onChange={(e)=>update('followUpQuestions', e.target.checked)} />
          <span className="text-sm text-gray-700">Ask follow-up questions before submission</span>
        </label>

        <div>
          <label className="block text-sm text-gray-700 mb-2">Pitch Summary Format</label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" value={ai.summaryFormat||'text'} onChange={(e)=>update('summaryFormat', e.target.value)}>
            <option value="text">Text</option>
            <option value="voice">Voice</option>
            <option value="both">Both</option>
          </select>
        </div>
      </div>
    </div>
  );
}
