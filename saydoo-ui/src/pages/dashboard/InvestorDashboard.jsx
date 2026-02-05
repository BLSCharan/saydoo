import { useEffect, useState } from "react";

export default function InvestorDashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem("investorProfile");
    if (raw) setProfile(JSON.parse(raw));
  }, []);

  return (
    <section className="min-h-screen p-8 bg-gray-50">
      <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Investor Dashboard</h1>

        {!profile ? (
          <p className="text-gray-600">No profile saved yet.</p>
        ) : (
          <div className="space-y-4 text-sm text-gray-800">
            <div>
              <h3 className="font-semibold">Identity</h3>
              <p>{profile.identity?.name} — {profile.identity?.type}</p>
              <p>{profile.identity?.location}</p>
            </div>

            <div>
              <h3 className="font-semibold">Investment Focus</h3>
              <p>Industries: {(profile.focus?.industries||[]).join(', ')}</p>
              <p>Stage: {profile.focus?.stage} | Ticket: {profile.focus?.ticketRange}</p>
            </div>

            <div>
              <h3 className="font-semibold">Pitch Preferences</h3>
              <p>Formats: {(profile.pitch?.allowedFormats||[]).join(', ')}</p>
              <p>Evaluation: {(profile.pitch?.evaluationFactors||[]).join(', ')}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
