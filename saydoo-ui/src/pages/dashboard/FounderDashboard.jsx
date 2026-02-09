import { useEffect, useState } from "react";
import { Edit2, CheckCircle, Bell, ChevronRight, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FounderDashboard() {
  const navigate = useNavigate();

  // Dummy profile data
  const profile = {
    founderIdentity: {
      name: "Alex Johnson",
      role: "CEO & Co-founder",
      location: "New York, NY",
    },
    ventureOverview: {
      name: "TechVenture AI",
      industry: "Artificial Intelligence",
      stage: "Series A",
    },
    businessModel: {
      model: "B2B SaaS",
      traction: "$500K ARR",
    },
    fundraising: {
      raising: "Series A",
      stage: "Active",
      targetAmount: "$5M",
    },
    onboarding: [
      { title: "Founder Identity", status: "Completed", updatedAt: "3 days ago", optional: false },
      { title: "Venture Overview", status: "Completed", updatedAt: "2 days ago", optional: false },
      { title: "Business Model", status: "Completed", updatedAt: "1 day ago", optional: false },
      { title: "Fundraising Details", status: "In Progress", updatedAt: "Just now", optional: true },
    ],
  };

  const initials = (profile.founderIdentity?.name || "F").split(" ").map(n=>n[0]).join("").toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <nav className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={()=>navigate("/")}>
            <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">S</div>
            <span className="text-2xl font-bold text-gray-900">Saydoo</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><Edit2 size={16}/>Prev Profile</button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><Bell size={16}/>Notifications</button>
            <button onClick={() => navigate('/roles')} className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><LogOut size={16}/>Logout</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">{initials}</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome, {profile.founderIdentity?.name}</h1>
            <p className="text-gray-600">{profile.ventureOverview?.name} — {profile.ventureOverview?.industry}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="px-6 py-4 border-b bg-blue-50">
                <h2 className="text-lg font-bold">Profile Details</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600">Founder</p>
                    <p className="font-semibold text-gray-900">{profile.founderIdentity?.name} — {profile.founderIdentity?.role}</p>
                    <p className="text-sm text-gray-700 mt-2">{profile.founderIdentity?.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Venture</p>
                    <p className="font-semibold text-gray-900">{profile.ventureOverview?.name}</p>
                    <p className="text-sm text-gray-700 mt-2">Stage: {profile.ventureOverview?.stage}</p>
                  </div>
                </div>

                <div className="mt-6 border-t pt-6">
                  <p className="text-sm text-gray-600">Business Model</p>
                  <p className="font-semibold text-gray-900">{profile.businessModel?.model}</p>
                  <p className="text-sm text-gray-700 mt-2">Traction: {profile.businessModel?.traction}</p>
                </div>

                <div className="mt-6 border-t pt-6">
                  <p className="text-sm text-gray-600">Fundraising</p>
                  <p className="font-semibold text-gray-900">{profile.fundraising?.raising} — {profile.fundraising?.stage}</p>
                  <p className="text-sm text-gray-700 mt-2">Target: {profile.fundraising?.targetAmount}</p>
                </div>

                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">Edit Profile</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="px-6 py-4 border-b bg-purple-50 flex items-center justify-between">
                <h2 className="text-lg font-bold">Onboarding Steps</h2>
                <a href="#" className="text-blue-600 font-semibold">View All</a>
              </div>
              <div className="p-6 space-y-4">
                {(profile.onboarding || []).slice(0,4).map((s, i)=> (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 text-green-600">●</div>
                    <div>
                      <p className="font-medium text-gray-900">{s.title}</p>
                      <p className="text-xs text-gray-500">{s.status} — {s.updatedAt}</p>
                    </div>
                  </div>
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
                <p className="text-sm text-gray-700">Your profile is 100% complete</p>
                <p className="text-sm text-gray-700">New investor interest received</p>
                <a className="text-blue-600 font-semibold" href="#">View Notifications</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="px-4 py-3 bg-teal-50 border-b flex items-center justify-between">
                <h3 className="font-bold">Quick Actions</h3>
                <a className="text-blue-600 font-semibold" href="#">View All</a>
              </div>
              <div className="p-4 grid gap-3">
                <button className="w-full bg-white border rounded-lg py-2 text-sm">Message Mentors</button>
                <button className="w-full bg-white border rounded-lg py-2 text-sm">Update Pitch</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
