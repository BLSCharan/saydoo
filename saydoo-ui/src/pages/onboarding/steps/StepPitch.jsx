export default function StepPitch({ data, setData }) {
  const pitch = data?.pitch || {};

  const update = (key, value) => setData({ ...data, pitch: { ...(pitch||{}), [key]: value } });

  const toggleFormat = (f) => {
    const list = new Set(pitch.allowedFormats || []);
    if (list.has(f)) list.delete(f); else list.add(f);
    update('allowedFormats', Array.from(list));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm text-black">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Pitch Submission Format</h2>
      <p className="mt-2 text-gray-500 text-sm">Choose allowed pitch formats and limits</p>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Allowed Pitch Format</label>
        <div className="flex gap-2">
          {['AI Chat','PDF Deck','Video','All'].map(f=> (
            <button key={f} type="button" onClick={()=>toggleFormat(f)} className={`px-3 py-2 rounded-lg border ${ (pitch.allowedFormats||[]).includes(f) ? 'bg-indigo-50 border-indigo-600 text-indigo-600' : 'border-gray-300 text-gray-700'}`}>{f}</button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-700 mb-2">Maximum Pitch Deck Size (optional)</label>
          <input className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" value={pitch.maxDeckSize||''} onChange={(e)=>update('maxDeckSize', e.target.value)} />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">Maximum Video Pitch Duration (optional)</label>
          <input className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" value={pitch.maxVideoDuration||''} onChange={(e)=>update('maxVideoDuration', e.target.value)} />
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm text-gray-700 mb-2">Key Evaluation Factors</label>
        <input className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" value={(pitch.evaluationFactors||[]).join(', ')} onChange={(e)=>update('evaluationFactors', e.target.value.split(',').map(s=>s.trim()))} placeholder="Comma separated" />
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-700 mb-2">Minimum Expectations (optional)</label>
          <input className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" value={pitch.minimumExpectations||''} onChange={(e)=>update('minimumExpectations', e.target.value)} />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">Areas / Ideas to Avoid (optional)</label>
          <input className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" value={pitch.avoid||''} onChange={(e)=>update('avoid', e.target.value)} />
        </div>
      </div>
    </div>
  );
}
