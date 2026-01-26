import { useEffect, useState } from "react";

export default function InfluencerDashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("influencerProfile");
    if (data) setProfile(JSON.parse(data));
  }, []);

  if (!profile) {
    return (
      <div className="h-[calc(100vh-80px)] flex items-center justify-center text-gray-700 bg-gray-50">
        Loading dashboard...
      </div>
    );
  }

  return (
    <section className="h-[calc(100vh-80px)] bg-gray-50 overflow-y-auto px-6 py-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="h-20 w-20 rounded-full bg-gray-300 mb-3"></div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome, {profile.basicProfile.fullName || "Creator"}!
          </h1>

          <div className="mt-3 flex gap-3 bg-white px-4 py-2 rounded-full shadow">
            <span className="text-green-600 font-medium">✔ Profile 100% Complete</span>
            <span className="text-green-600 font-medium">● AI Clone Active</span>
          </div>
        </div>

        {/* ===== QUICK ACTION CARDS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            "Edit Profile Details",
            "Add AI Questions & Answers",
            "View Brand Enquiries",
            "View All Chats",
          ].map((t) => (
            <div key={t} className="bg-white rounded-xl shadow p-4 text-center font-medium hover:shadow-md cursor-pointer">
              {t}
            </div>
          ))}
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT BIG PROFILE PANEL */}
          <div className="lg:col-span-2 space-y-6">

            {/* PROFILE DETAILS */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-4">Profile Details</h3>

              <p><b>Primary Niche:</b> {profile.basicProfile.niche}</p>
              <p><b>Language:</b> {profile.basicProfile.language}</p>
              <p><b>Open to collaborations:</b> {profile.basicProfile.openToCollab}</p>

              <h4 className="mt-4 font-semibold">Social Media Links</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-blue-600 mt-2">
                <p>Instagram: {profile.social.instagram}</p>
                <p>Facebook: {profile.social.facebook}</p>
                <p>LinkedIn: {profile.social.linkedin}</p>
                <p>Snapchat: {profile.social.snapchat}</p>
              </div>

              <h4 className="mt-4 font-semibold">Audience</h4>
              <p>Age Group: {profile.audience.ageGroup}</p>
              <p>Gender Split: {profile.audience.male}% Male / {profile.audience.female}% Female</p>
              <p>Geography: {profile.audience.geography}</p>

              <h4 className="mt-4 font-semibold">Pricing</h4>
              <p>Barter Deals: {profile.pricing.barter}</p>
              <p>30s Reel (No Edit): ₹{profile.pricing.reel30NoEdit}</p>
              <p>30s Reel (With Edit): ₹{profile.pricing.reel30WithEdit}</p>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                Add New Question
              </button>
            </div>

            {/* BRAND ENQUIRIES */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-4">Brand Enquiries</h3>
              {profile.brands.brandNames?.map((b, i) => (
                <div key={i} className="flex justify-between border-b py-2 text-sm">
                  <span>{b}</span>
                  <button className="text-blue-600">View Chat</button>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE PANEL */}
          <div className="space-y-6">

            {/* CHATS */}
            <div className="bg-white rounded-xl shadow p-5">
              <h3 className="font-semibold mb-3">Chats</h3>
              {["Nike Campaign", "L’Oreal Collaboration", "TechGadgets Partnership"].map((c) => (
                <div key={c} className="flex justify-between border-b py-2 text-sm">
                  <span>{c}</span>
                  <span className="bg-green-100 text-green-700 px-2 rounded text-xs">Active</span>
                </div>
              ))}
            </div>

            {/* NOTIFICATIONS */}
            <div className="bg-white rounded-xl shadow p-5">
              <h3 className="font-semibold mb-3">Notifications</h3>
              <p className="text-sm text-gray-600">Your profile is now 100% complete</p>
              <p className="text-sm text-gray-600">New qualified brand lead</p>
              <p className="text-sm text-gray-600">AI asked a new question</p>

              <button className="mt-3 text-blue-600 text-sm">View Notifications →</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
