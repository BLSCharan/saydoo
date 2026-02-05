export default function StepFocus({ data, setData }) {
  const focus = data?.focus || {};

  const update = (key, value) => setData({ ...data, focus: { ...(focus||{}), [key]: value } });

  const toggleIndustry = (name) => {
    const list = new Set(focus.industries || []);
    if (list.has(name)) list.delete(name); else list.add(name);
    update('industries', Array.from(list));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm text-black">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Investment Focus</h2>
      <p className="mt-2 text-gray-500 text-sm">Select industries and preferences</p>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Industries of Interest</label>
        <div className="flex flex-wrap gap-2">
          {['Tech','Health','Finance','EdTech','Consumer','SaaS','Gaming','AI'].map(i=> (
            <button key={i} type="button" onClick={()=>toggleIndustry(i)} className={`px-3 py-2 rounded-lg border ${ (focus.industries||[]).includes(i) ? 'bg-indigo-50 border-indigo-600 text-indigo-600' : 'border-gray-300 text-gray-700'}`}>{i}</button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Startup Stage</label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" value={focus.stage||''} onChange={(e)=>update('stage', e.target.value)}>
          <option value="">Select stage</option>
          <option>Idea</option>
          <option>MVP</option>
          <option>Early Revenue</option>
          <option>Growth</option>
        </select>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-700 mb-2">Typical Ticket Size Range</label>
          <input className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" value={focus.ticketRange||''} onChange={(e)=>update('ticketRange', e.target.value)} />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">Geography Preference</label>
          <input className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" value={focus.geography||''} onChange={(e)=>update('geography', e.target.value)} />
        </div>
      </div>
    </div>
  );
}
