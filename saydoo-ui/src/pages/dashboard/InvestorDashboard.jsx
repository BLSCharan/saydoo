import { useEffect, useState } from "react";
import { MessageSquare, CheckCircle, Bell, ChevronRight, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function InvestorDashboard() {
  const navigate = useNavigate();

  // Dummy profile data
  const profile = {
    identity: {
      name: "Michael Chen",
      type: "VC Partner",
      location: "San Francisco, CA",
    },
    focus: {
      industries: ["SaaS", "AI/ML", "FinTech"],
      stage: "Seed to Series A",
      ticketRange: "$500K - $2M",
      geography: "North America",
    },
    pitch: {
      allowedFormats: ["Deck", "Video", "Executive Summary"],
      evaluationFactors: ["Market Size", "Team Strength", "Product-Market Fit"],
    },
      onboarding: [
        { title: "Identity & Profile", status: "Completed", updatedAt: "2 days ago", optional: false },
        { title: "Investment Focus", status: "Completed", updatedAt: "2 days ago", optional: false },
        { title: "Pitch Preferences", status: "Completed", updatedAt: "1 day ago", optional: false },
        { title: "AI Behavior", status: "In Progress", updatedAt: "Just now", optional: true },
        { title: "AI Behavior", status: "Completed", updatedAt: "1 day ago", optional: true },
        { title: "Meetings Preferences", status: "Completed", updatedAt: "1 day ago", optional: false },
        { title: "Guidance Notes", status: "Completed", updatedAt: "Just now", optional: false },
      ],
      aiBehavior: {
        autoFilter: true,
        followUpQuestions: true,
        summaryFormat: "text",
      },
      meetings: {
        allowMeetings: true,
        types: ["15", "30"],
        paid: false,
      },
      guidance: {
        exciteNote: "Looking for founders solving real problems with data-driven insights. Deep tech & climate tech opportunities especially welcome.",
        avoidNote: "Please avoid pitches without clear business models or unrealistic projections. Follow-ons should include detailed traction metrics.",
      },
  };

  const initials = (profile.identity?.name || "I").split(" ").map(n=>n[0]).join("").toUpperCase();

  const handleEditStep = (idx) => {
    // navigate to the investor onboarding page and include a hash for the step
    // the onboarding page can read location.hash to scroll to the step element
    navigate(`/onboarding/investor#step-${idx}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <nav className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={()=>navigate("/")}>
            <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">S</div>
            <span className="text-2xl font-bold text-gray-900">Saydoo</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><MessageSquare size={16}/>My Link</button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><Bell size={16}/>Notifications</button>
            <button onClick={() => navigate('/roles')} className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><LogOut size={16}/>Logout</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">{initials}</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome, {profile.identity?.name}</h1>
            <p className="text-gray-600">{(profile.focus?.industries||[]).join(', ')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="px-6 py-4 border-b bg-blue-50">
                <h2 className="text-lg font-bold">Investor Profile</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600">Identity</p>
                    <p className="font-semibold text-gray-900">{profile.identity?.name} — {profile.identity?.type}</p>
                    <p className="text-sm text-gray-700 mt-2">{profile.identity?.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Investment Focus</p>
                    <p className="font-semibold text-gray-900">{(profile.focus?.industries||[]).join(', ')}</p>
                    <p className="text-sm text-gray-700 mt-2">Stage: {profile.focus?.stage} | Ticket: {profile.focus?.ticketRange}</p>
                  </div>
                </div>

                <div className="mt-6 border-t pt-6">
                  <p className="text-sm text-gray-600">Pitch Preferences</p>
                  <p className="font-semibold text-gray-900">Formats: {(profile.pitch?.allowedFormats||[]).join(', ')}</p>
                  <p className="text-sm text-gray-700 mt-2">Evaluation: {(profile.pitch?.evaluationFactors||[]).join(', ')}</p>
                </div>

                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">Update Preferences</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="px-6 py-4 border-b bg-purple-50 flex items-center justify-between">
                <h2 className="text-lg font-bold">Onboarding Steps</h2>
                <a href="#" className="text-blue-600 font-semibold">View All</a>
              </div>
              <div className="p-6 space-y-4">
                {(profile.onboarding || []).map((s,i) => (
                  <section key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full h-8 w-8 bg-white border flex items-center justify-center text-sm font-semibold text-gray-700">{i+1}</div>
                          <h3 className="font-semibold text-gray-900 truncate">{s.title}</h3>
                        </div>
                        {s.description && <p className="text-sm text-gray-600 mt-2">{s.description}</p>}
                        <p className="text-xs text-gray-500 mt-2">Status: <span className="font-medium text-gray-800">{s.status}</span> — {s.updatedAt}</p>
                      </div>

                      <div className="flex-shrink-0 flex flex-col items-end gap-2">
                        <button onClick={() => handleEditStep(i)} className="bg-white border rounded-md px-3 py-1 text-sm text-blue-600 hover:bg-blue-50">Edit</button>
                        <button className="text-xs text-gray-500">{s.optional ? 'Optional' : ''}</button>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="px-4 py-3 bg-teal-50 border-b">
                <h3 className="font-bold">Notifications</h3>
              </div>
              <div className="p-4 space-y-3">
                <p className="text-sm text-gray-700">New pitch submissions available</p>
                <p className="text-sm text-gray-700">Your saved searches found 3 startups</p>
                <a className="text-blue-600 font-semibold" href="#">View Notifications</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="px-4 py-3 bg-teal-50 border-b flex items-center justify-between">
                <h3 className="font-bold">Quick Actions</h3>
                <a className="text-blue-600 font-semibold" href="#">View All</a>
              </div>
              <div className="p-4 grid gap-3">
                <button className="w-full bg-white border rounded-lg py-2 text-sm">Review Pitches</button>
                <button className="w-full bg-white border rounded-lg py-2 text-sm">Create Alert</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
