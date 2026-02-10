import React from "react";
import {
  Play,
  Globe,
  Heart,
  Link2,
  Twitter,
  Twitch,
  Share2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MyLinks() {
  const navigate = useNavigate();

  const profile = {
    name: "The All-Business",
    username: "@allbusiness",
    avatarUrl: null, // replace with real image path if available
    links: [
      { id: 1, title: "My portfolio", url: "https://example.com/portfolio", type: "portfolio" },
      { id: 2, title: "Business blog", url: "https://blog.example.com", type: "blog" },
      { id: 3, title: "Forbes interview", url: "https://forbes.com/example", type: "article" },
      { id: 4, title: "Stocks", url: "https://stocks.example.com", type: "stocks" },
    ],
    socials: [
      { id: "t", icon: Twitter, url: "https://twitter.com/allbusiness" },
      { id: "tt", icon: Twitch, url: "https://tiktok.com/@allbusiness" },
    ],
  };

  const getIcon = (type) => {
    switch (type) {
      case "portfolio":
        return Play;
      case "blog":
        return Globe;
      case "article":
        return Heart;
      case "stocks":
        return Link2;
      default:
        return Link2;
    }
  };

  return (
    <div className="min-h-screen dynamic-bg py-8 px-4">
      <style>{`
        .dynamic-bg {
          background-image: radial-gradient(circle at 10% 10%, rgba(255,255,255,0.06), transparent 15%),
                            linear-gradient(120deg, #0ea5e9 0%, #2563eb 35%, #4f46e5 65%, #7c3aed 100%);
          background-size: 200% 200%;
          animation: bgShift 12s ease infinite;
        }

        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div className="w-full max-w-3xl mx-auto bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-lg overflow-hidden ring-1 ring-blue-100">
        <div className="px-6 py-8 sm:flex sm:items-center sm:gap-6">
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-inner">
              {profile.avatarUrl ? (
                <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover rounded-full" />
              ) : (
                profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)
              )}
            </div>
          </div>

          <div className="mt-4 text-center sm:text-left sm:mt-0 sm:flex-1">
            <h2 className="text-2xl font-semibold text-blue-900">{profile.name}</h2>
            <p className="text-sm text-blue-700/80 mt-1">{profile.username}</p>
          </div>
        </div>

        <div className="px-6 pb-8">
          <div className="grid gap-3">
            {profile.links.map((l) => {
              const Icon = getIcon(l.type);
              return (
                <a
                  key={l.id}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-blue-50/60 hover:bg-blue-100 transition-colors rounded-lg px-4 py-3"
                >
                  <div className="p-2 rounded-lg bg-white border border-indigo-100">
                    <Icon size={20} className="text-blue-700" />
                  </div>
                  <span className="text-blue-900 font-medium">{l.title}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            {profile.socials.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/60 hover:bg-white transition">
                  <Icon size={18} className="text-blue-700" />
                </a>
              );
            })}
          </div>

          <div className="mt-6">
            <button
              onClick={() => navigate("/")}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-sm hover:opacity-95 transition"
            >
              Join Saydoo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
