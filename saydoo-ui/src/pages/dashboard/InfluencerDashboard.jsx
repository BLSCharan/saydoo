import { useState } from "react";
import { Edit2, MessageSquare, CheckCircle, Bell, ChevronRight, MessageCircle, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function InfluencerDashboard() {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  // Dummy profile data
  const profile = {
    basicProfile: {
      fullName: "Sarah Anderson",
      niche: "Fashion & Lifestyle",
      language: "English",
      openToCollab: "yes",
    },
    social: {
      instagram: "sarahAnderson",
      facebook: "Sarah Anderson",
      twitter: "sarahAnderson",
      linkedin: "sarahAnderson",
    },
    audience: {
      ageGroup: "18-34",
      female: 65,
      male: 35,
      geography: "USA & Canada",
    },
    pricing: {
      barter: true,
      reel30NoEdit: "500",
      reel30WithEdit: "800",
    },
    brands: {
      brandNames: ["Nike", "L'Oreal", "TechGadgets", "Bliss Resorts"],
    },
  };

  const getUserInitials = () => {
    const name = profile.basicProfile?.fullName || "Creator";
    return name.split(" ").map(n => n[0]).join("").toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      {/* ===== NAVBAR ===== */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="text-2xl font-bold text-gray-900">Saydoo</span>
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <MessageSquare size={18} />
              My Link
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <Edit2 size={18} />
              Prev Profile
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <Bell size={18} />
              Notifications
            </button>
            <button onClick={() => navigate('/roles')} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <LogOut size={18} />
              Logout
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-4">
            <Bell size={20} className="text-gray-700 cursor-pointer" />
            <button className="text-gray-700 hover:text-blue-600">Menu</button>
          </div>
        </div>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ===== WELCOME SECTION ===== */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
            {/* Profile Avatar */}
            <div className="flex items-center gap-4">
              <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                {getUserInitials()}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Welcome, {profile.basicProfile?.fullName || "Creator"}!
                </h1>
                <p className="text-gray-600 mt-1">{profile.basicProfile?.niche || "Content Creator"}</p>
              </div>
            </div>
          </div>

          {/* Status Pills */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <CheckCircle size={18} className="text-green-600" />
              <span className="text-green-700 font-medium">Profile 100% Complete</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2">
              <CheckCircle size={18} className="text-blue-600" />
              <span className="text-blue-700 font-medium">AI Clone Active</span>
              <ChevronRight size={16} className="text-blue-600" />
            </div>
          </div>
        </div>

        {/* ===== QUICK ACTION CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <button className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center group cursor-pointer border border-gray-100 hover:border-blue-200">
            <div className="text-4xl mb-3 flex justify-center group-hover:scale-110 transition-transform">
              ✏️
            </div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">Edit</h3>
            <p className="text-sm text-gray-600 mt-1">Profile Details</p>
          </button>

          <button className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center group cursor-pointer border border-gray-100 hover:border-blue-200">
            <div className="text-4xl mb-3 flex justify-center group-hover:scale-110 transition-transform">
              🤖
            </div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">Add More</h3>
            <p className="text-sm text-gray-600 mt-1">AI Questions & Answers</p>
          </button>

          <button className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center group cursor-pointer border border-gray-100 hover:border-blue-200">
            <div className="text-4xl mb-3 flex justify-center group-hover:scale-110 transition-transform">
              📋
            </div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">View</h3>
            <p className="text-sm text-gray-600 mt-1">Brand Enquiries</p>
          </button>

          <button className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center group cursor-pointer border border-gray-100 hover:border-blue-200">
            <div className="text-4xl mb-3 flex justify-center group-hover:scale-110 transition-transform">
              💬
            </div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">View All</h3>
            <p className="text-sm text-gray-600 mt-1">Chats</p>
          </button>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ===== LEFT PANEL (2/3 width) ===== */}
          <div className="lg:col-span-2 space-y-6">

            {/* PROFILE DETAILS CARD */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Profile Details</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Name</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.basicProfile?.fullName || "Not provided"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Primary Niche</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.basicProfile?.niche || "Not provided"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Language</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.basicProfile?.language || "Not provided"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Open to Collaborations</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.basicProfile?.openToCollab === "yes" ? "Yes" : "No"}</p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Social Media Links</p>
                      <div className="space-y-2">
                        {profile.social?.instagram && (
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-pink-600">📷</span>
                            <a href={`https://instagram.com/${profile.social.instagram}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              Instagram ({profile.social.instagram})
                            </a>
                            <span className="text-gray-500 text-xs">View</span>
                          </div>
                        )}
                        {profile.social?.facebook && (
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-blue-600">f</span>
                            <span className="text-gray-700">{profile.social.facebook}</span>
                          </div>
                        )}
                        {profile.social?.twitter && (
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-blue-400">𝕏</span>
                            <span className="text-gray-700">{profile.social.twitter}</span>
                          </div>
                        )}
                        {profile.social?.linkedin && (
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-blue-700">in</span>
                            <span className="text-gray-700">{profile.social.linkedin}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Audience & Geography Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Audience</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Age Group:</span>
                        <span className="font-semibold text-gray-900">{profile.audience?.ageGroup || "18-34"}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Gender:</span>
                        <span className="font-semibold text-gray-900">{profile.audience?.female || 60}% F, {profile.audience?.male || 40}% M</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Geography</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600">📍</span>
                        <span className="text-gray-900 font-semibold">{profile.audience?.geography || "Mixed"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-3 font-semibold">Pricing</p>
                  <div className="space-y-3">
                    {profile.pricing?.barter && (
                      <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
                        <span className="text-gray-700">Barter Deals</span>
                        <span className="font-semibold text-blue-600">Available</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-700">30 Sec Reel (Without Edit)</span>
                      <span className="font-semibold text-gray-900">₹{profile.pricing?.reel30NoEdit || "500"}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-700">30 Sec Reel (With Editing)</span>
                      <span className="font-semibold text-gray-900">₹{profile.pricing?.reel30WithEdit || "800"}</span>
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200">
                  Add New Question
                </button>
              </div>
            </div>

            {/* BRAND ENQUIRIES CARD */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Brand Enquiries</h2>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1">
                  View All <ChevronRight size={18} />
                </a>
              </div>
              <div className="divide-y divide-gray-100">
                {profile.brands?.brandNames && profile.brands.brandNames.length > 0 ? (
                  profile.brands.brandNames.slice(0, 4).map((brand, idx) => (
                    <div key={idx} className="px-6 py-4 hover:bg-gray-50 transition-colors flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm">
                          {brand[0]}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{brand}</p>
                          <p className="text-xs text-gray-500">Inception - 1h ago</p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                        View Chat
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-8 text-center text-gray-500">
                    No brand enquiries yet
                  </div>
                )}
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200">
                  Edit Profile Information
                </button>
              </div>
            </div>

          </div>

          {/* ===== RIGHT PANEL (1/3 width) ===== */}
          <div className="space-y-6">

            {/* CHATS CARD */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Chats</h2>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1 text-sm">
                  View All
                </a>
              </div>
              <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
                {[
                  { name: "Nike Campaign", status: "Active", time: "15m ago", color: "from-orange-400 to-red-400" },
                  { name: "L'Oreal Collaboration", status: "New", time: "In Conversation", color: "from-pink-400 to-purple-400" },
                  { name: "TechGadgets Partnership", status: "Qualified", time: "4h ago", color: "from-blue-400 to-cyan-400" },
                  { name: "Daniel (Bliss Resorts)", status: "Qualified", time: "15m ago", color: "from-green-400 to-emerald-400" },
                ].map((chat, idx) => (
                  <div key={idx} className="px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${chat.color} flex-shrink-0`}></div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm truncate">{chat.name}</p>
                        <p className="text-xs text-gray-500">{chat.time}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap flex-shrink-0 ${
                        chat.status === "Active" ? "bg-teal-100 text-teal-700" :
                        chat.status === "New" ? "bg-blue-100 text-blue-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {chat.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                <a href="#" className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1">
                  Chats <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* NOTIFICATIONS CARD */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 px-6 py-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
              </div>
              <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
                {[
                  { 
                    type: "success", 
                    title: "Your profile is now 100% complete", 
                    time: "1h ago",
                    icon: "✅"
                  },
                  { 
                    type: "warning", 
                    title: "New Qualified Lead: TechGadgets Partnership", 
                    time: "4h ago",
                    icon: "🎯"
                  },
                  { 
                    type: "info", 
                    title: "AI has asked a new question in the Nike Campaign", 
                    time: "15m ago",
                    icon: "🤖"
                  },
                ].map((notif, idx) => (
                  <div key={idx} className="px-4 py-4 hover:bg-gray-50 transition-colors cursor-pointer border-l-4 border-transparent hover:border-blue-500">
                    <div className="flex gap-3">
                      <span className="text-xl flex-shrink-0">{notif.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 font-medium">{notif.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                <a href="#" className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1">
                  Notifications <ChevronRight size={16} />
                </a>
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
