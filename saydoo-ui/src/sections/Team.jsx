import { Facebook, Twitter, Instagram } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";

const teamMembers = [
  { name: "Kate Winslet", image: team1 },
  { name: "Jac Jackson", image: team2 },
  { name: "Doris Jordan", image: team3 },
];

export default function Team() {
  const cardsRef = useRef(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setEntered(true);
        });
      },
      { threshold: 0.2 }
    );
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <style>{`
          @keyframes float { 0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)} }
          .float-anim { animation: float 6s ease-in-out infinite; }
        `}</style>

        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 px-5 py-1 text-sm text-blue-600 border border-blue-200 rounded-full">
            One platform for Investors, Digital Creators, Founder and Businesses
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            SayDoo built on Trust
          </h2>
        </div>

        {/* CARDS */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 80}ms` }}
              className={`group border border-blue-200 rounded-xl px-6 py-8 text-center transition-all duration-300 hover:bg-blue-600 transform duration-700 ${
                entered ? 'opacity-100 translate-y-0 float-anim' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* NAME */}
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-white transition">
                {member.name}
              </h4>

              {/* IMAGE */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full mt-6 rounded-xl"
              />

              {/* SOCIAL ICONS */}
              <div className="flex justify-center gap-4 mt-6">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-white transition"
                  >
                    <Icon size={16} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
