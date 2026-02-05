import { useEffect, useState } from "react";

export default function FounderDashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem("founderProfile");
    if (raw) setProfile(JSON.parse(raw));
  }, []);

  return (
    <section className="min-h-screen p-8 bg-gray-50">
      <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Founder Dashboard</h1>

        {!profile ? (
          <p className="text-gray-600">No profile saved yet.</p>
        ) : (
          <div className="space-y-4 text-sm text-gray-800">
            <div>
              <h3 className="font-semibold">Identity</h3>
              <p>{profile.founderIdentity?.name} — {profile.founderIdentity?.role}</p>
              <p>{profile.founderIdentity?.location}</p>
            </div>

            <div>
              <h3 className="font-semibold">Venture Overview</h3>
              <p>{profile.ventureOverview?.name} ({profile.ventureOverview?.industry})</p>
              <p>Stage: {profile.ventureOverview?.stage}</p>
            </div>

            <div>
              <h3 className="font-semibold">Business Model</h3>
              <p>{profile.businessModel?.model}</p>
              <p>Traction: {profile.businessModel?.traction}</p>
            </div>

            <div>
              <h3 className="font-semibold">Fundraising</h3>
              <p>Raising: {profile.fundraising?.raising} | Stage: {profile.fundraising?.stage}</p>
              <p>Target: {profile.fundraising?.targetAmount}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
