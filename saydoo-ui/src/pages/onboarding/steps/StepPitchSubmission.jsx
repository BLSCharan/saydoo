export default function StepPitchSubmission({ data, setData }) {
  const pitch = data?.pitchSubmission || {};

  const update = (key, value) => setData({ ...data, pitchSubmission: { ...pitch, [key]: value } });

  const toggleFormat = (f) => {
    const list = new Set(pitch.formats || []);
    if (list.has(f)) list.delete(f); else list.add(f);
    update('formats', Array.from(list));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm text-black">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Pitch Submission</h2>
      <p className="mt-2 text-gray-500 text-sm">Choose pitch format and upload materials</p>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Pitch Format Available to Investors</label>
        <div className="flex flex-wrap gap-2">
          {['AI Chat','PDF Deck','Video','All'].map(f=> (
            <button key={f} type="button" onClick={()=>toggleFormat(f)} className={`px-3 py-2 rounded-lg border ${ (pitch.formats||[]).includes(f) ? 'bg-indigo-50 border-indigo-600 text-indigo-600' : 'border-gray-300 text-gray-700'}`}>{f}</button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Pitch Deck (PDF)</label>
        <input type="file" accept=".pdf" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black" onChange={(e)=>update('pitchDeck', e.target.files?.[0]?.name || '')} />
        {pitch.pitchDeck && <p className="mt-2 text-xs text-gray-600">{pitch.pitchDeck}</p>}
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Pitch Video (optional)</label>
        <input type="file" accept="video/*" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black" onChange={(e)=>update('pitchVideo', e.target.files?.[0]?.name || '')} />
        {pitch.pitchVideo && <p className="mt-2 text-xs text-gray-600">{pitch.pitchVideo}</p>}
      </div>
    </div>
  );
}
