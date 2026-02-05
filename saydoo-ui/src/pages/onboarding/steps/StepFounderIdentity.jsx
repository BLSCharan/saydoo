export default function StepFounderIdentity({ data, setData }) {
  const identity = data?.founderIdentity || {};

  const update = (key, value) => setData({ ...data, founderIdentity: { ...identity, [key]: value } });

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm text-black">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Founder Identity</h2>
      <p className="mt-2 text-gray-500 text-sm">Tell us about yourself</p>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Founder Name</label>
        <input className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" value={identity.name || ""} onChange={(e)=>update('name', e.target.value)} />
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" value={identity.role || ""} onChange={(e)=>update('role', e.target.value)}>
          <option value="">Select role</option>
          <option>Founder</option>
          <option>Co-founder</option>
          <option>Solo Founder</option>
        </select>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Primary Location</label>
        <input className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-black" value={identity.location || ""} onChange={(e)=>update('location', e.target.value)} />
      </div>
    </div>
  );
}
