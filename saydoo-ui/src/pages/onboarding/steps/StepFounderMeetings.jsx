export default function StepFounderMeetings({ data, setData }) {
  const meetings = data?.meetings || {};

  const update = (key, value) => setData({ ...data, meetings: { ...meetings, [key]: value } });

  const toggleType = (t) => {
    const list = new Set(meetings.types || []);
    if (list.has(t)) list.delete(t); else list.add(t);
    update('types', Array.from(list));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm text-black">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Meetings & Availability</h2>
      <p className="mt-2 text-gray-500 text-sm">How investors and partners can meet with you</p>

      <div className="mt-6">
        <label className="flex items-center gap-3">
          <input type="checkbox" checked={meetings.allowMeetings!==false} onChange={(e)=>update('allowMeetings', e.target.checked)} />
          <span className="text-sm text-gray-700">Allow investors or partners to book meetings</span>
        </label>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Types Offered</label>
        <div className="flex gap-2">
          {['15','30','Deep Dive'].map(t=> (
            <button key={t} type="button" onClick={()=>toggleType(t)} className={`px-3 py-2 rounded-lg border ${ (meetings.types||[]).includes(t) ? 'bg-indigo-50 border-indigo-600 text-indigo-600' : 'border-gray-300 text-gray-700'}`}>{t}</button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label className="flex items-center gap-3">
          <input type="checkbox" checked={meetings.paid===true} onChange={(e)=>update('paid', e.target.checked)} />
          <span className="text-sm text-gray-700">Paid meetings</span>
        </label>
      </div>
    </div>
  );
}
