import { useEffect, useState } from "react";
import { Edit2, CheckCircle, Clock, AlertCircle, Bell, ChevronRight, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FounderDashboard() {
  const navigate = useNavigate();

  // Dummy profile data with all 8 onboarding steps
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
      problem: "Enterprises struggle with manual data processing",
      solution: "AI-powered automation platform",
    },
    businessModel: {
      model: "B2B SaaS",
      traction: "$500K ARR",
      keyMetrics: "2x MoM growth",
    },
    fundraising: {
      raising: "Series A",
      stage: "Active",
      targetAmount: "$5M",
      useOfFunds: "Product development & sales",
    },
    pitchSubmission: {
      formats: ["PDF Deck", "Video"],
      pitchDeck: "saydoo-pitch-deck.pdf",
      pitchVideo: "https://vimeo.com/...",
    },
    aiAssistant: {
      autoExplain: true,
      askQualifying: true,
      summaryFormat: "voice",
    },
    meetings: {
      allowMeetings: true,
      types: ["15", "30"],
      paid: false,
    },
    founderNote: {
      message: "We're building the future of enterprise AI",
      avoid: "Questions about valuation and cap table",
    },
    onboarding: [
      { 
        stepNum: 1,
        title: "Founder Identity", 
        description: "Your profile and background",
        status: "Completed", 
        updatedAt: "3 days ago", 
        optional: false,
        completed: true,
        details: "Name, Role, Location"
      },
      { 
        stepNum: 2,
        title: "Venture Overview", 
        description: "Company fundamentals",
        status: "Completed", 
        updatedAt: "2 days ago", 
        optional: false,
        completed: true,
        details: "Name, Industry, Stage, Problem, Solution"
      },
      { 
        stepNum: 3,
        title: "Business Model", 
        description: "How you make money",
        status: "Completed", 
        updatedAt: "1 day ago", 
        optional: false,
        completed: true,
        details: "Model, Traction, Key Metrics"
      },
      { 
        stepNum: 4,
        title: "Fundraising Details", 
        description: "Your funding journey",
        status: "In Progress", 
        updatedAt: "Just now", 
        optional: false,
        completed: false,
        details: "Stage, Target Amount, Use of Funds"
      },
      { 
        stepNum: 5,
        title: "Pitch Submission", 
        description: "How investors pitch to you",
        status: "Pending", 
        updatedAt: "Not started", 
        optional: false,
        completed: false,
        details: "Allowed Formats, Deck, Video"
      },
      { 
        stepNum: 6,
        title: "AI Behavior", 
        description: "Configure your AI assistant",
        status: "Pending", 
        updatedAt: "Not started", 
        optional: true,
        completed: false,
        details: "Auto-explain, Follow-up Questions, Summary Format"
      },
      { 
        stepNum: 7,
        title: "Meeting Preferences", 
        description: "Your availability for calls",
        status: "Pending", 
        updatedAt: "Not started", 
        optional: true,
        completed: false,
        details: "Allow Meetings, Duration Options, Paid/Free"
      },
      { 
        stepNum: 8,
        title: "Founder Note", 
        description: "Final message to investors",
        status: "Pending", 
        updatedAt: "Not started", 
        optional: true,
        completed: false,
        details: "Message to Investors, Topics to Avoid"
      },
    ],
  };

  const initials = (profile.founderIdentity?.name || "F").split(" ").map(n=>n[0]).join("").toUpperCase();
  const completedSteps = profile.onboarding.filter(s => s.completed).length;
  const totalSteps = profile.onboarding.length;
  const progressPercent = Math.round((completedSteps / totalSteps) * 100);

  const handleEditStep = (stepNum) => {
    navigate(`/onboarding/founder?step=${stepNum}`);
  };

  const getStatusIcon = (status) => {
    if (status === "Completed") return <CheckCircle className="text-green-600" size={18} />;
    if (status === "In Progress") return <Clock className="text-blue-600" size={18} />;
    return <AlertCircle className="text-gray-400" size={18} />;
  };

  const getStatusColor = (status) => {
    if (status === "Completed") return "bg-green-50 border-green-200";
    if (status === "In Progress") return "bg-blue-50 border-blue-200";
    return "bg-gray-50 border-gray-200";
  };

  const getStatusBadgeColor = (status) => {
    if (status === "Completed") return "bg-green-100 text-green-700";
    if (status === "In Progress") return "bg-blue-100 text-blue-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      {/* NAVBAR */}
      <nav className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={()=>navigate("/")}>
            <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">S</div>
            <span className="text-2xl font-bold text-gray-900">Saydoo</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><Edit2 size={16}/>Edit Profile</button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><Bell size={16}/>Notifications</button>
            <button onClick={() => navigate('/roles')} className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><LogOut size={16}/>Logout</button>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* WELCOME SECTION */}
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">{initials}</div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">Welcome, {profile.founderIdentity?.name}</h1>
            <p className="text-gray-600 mt-1">{profile.ventureOverview?.name} • {profile.ventureOverview?.industry}</p>
            <p className="text-sm text-gray-500 mt-2">Stage: {profile.ventureOverview?.stage} • {profile.businessModel?.traction}</p>
          </div>
          <div className="flex-shrink-0 text-right">
            <div className="text-3xl font-bold text-blue-600">{progressPercent}%</div>
            <div className="text-xs text-gray-600">Profile Complete</div>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="mb-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Overall Progress</h3>
            <span className="text-sm text-gray-600">{completedSteps} of {totalSteps} steps completed</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN - ALL ONBOARDING STEPS */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b bg-gradient-to-r from-purple-50 to-indigo-50">
                <h2 className="text-xl font-bold text-gray-900">Onboarding Steps</h2>
                <p className="text-sm text-gray-600 mt-1">Complete all steps to unlock full features</p>
              </div>

              <div className="p-6 space-y-4">
                {profile.onboarding.map((step, idx) => (
                  <div key={idx} className={`border-2 rounded-xl p-5 transition-all ${getStatusColor(step.status)}`}>
                    <div className="flex items-start justify-between gap-4">
                      
                      {/* LEFT: Step number, title, status */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                            step.completed ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'
                          }`}>
                            {step.stepNum}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-lg">{step.title}</h3>
                            <p className="text-sm text-gray-600">{step.description}</p>
                          </div>
                        </div>

                        {/* Details preview */}
                        <div className="ml-11 mt-2 text-sm text-gray-700">
                          <p className="font-medium text-gray-800 mb-1">Fields:</p>
                          <p className="text-gray-600">{step.details}</p>
                        </div>

                        {/* Status info */}
                        <div className="ml-11 mt-3 flex items-center gap-2">
                          {getStatusIcon(step.status)}
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(step.status)}`}>
                            {step.status}
                          </span>
                          <span className="text-xs text-gray-500">{step.updatedAt}</span>
                          {step.optional && <span className="text-xs text-gray-500 italic">(Optional)</span>}
                        </div>
                      </div>

                      {/* RIGHT: Edit button */}
                      <button 
                        onClick={() => handleEditStep(step.stepNum)}
                        className="flex-shrink-0 mt-1 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex gap-3">
                <button 
                  onClick={() => navigate("/onboarding/founder")}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
                >
                  Continue Onboarding
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                  Save for Later
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - QUICK INFO & ACTIONS */}
          <div className="space-y-6">
            
            {/* Profile Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Profile Summary</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-600">Founder</p>
                  <p className="font-semibold text-gray-900">{profile.founderIdentity?.name}</p>
                  <p className="text-gray-700">{profile.founderIdentity?.role}</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600">Company</p>
                  <p className="font-semibold text-gray-900">{profile.ventureOverview?.name}</p>
                  <p className="text-gray-700">{profile.ventureOverview?.industry}</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600">Model</p>
                  <p className="font-semibold text-gray-900">{profile.businessModel?.model}</p>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 bg-teal-50 border-b">
                <h3 className="font-bold text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex gap-3">
                  <div className="text-2xl">✅</div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">Venture Overview completed</p>
                    <p className="text-gray-600 text-xs">2 days ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">⏳</div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">Working on Fundraising Details</p>
                    <p className="text-gray-600 text-xs">Just now</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 bg-teal-50 border-b">
                <h3 className="font-bold text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-4 space-y-2">
                <button className="w-full text-left px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition">📊 View Analytics</button>
                <button className="w-full text-left px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition">💬 Message Investors</button>
                <button className="w-full text-left px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition">📝 Edit Pitch Deck</button>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
