import { useState, useEffect, useRef } from "react";
import phone from "../assets/about.png";
import bgImg from "../assets/bg.png";
import {
  MessageCircle,
  Users,
  Calendar,
  UserCheck,
  CheckCircle,
  Briefcase,
  Award,
} from "lucide-react";

const TABS = {
  investor: {
    label: "Investor",
    content: `SayDoo helps you screen founders before you ever join a call.
    Your AI assistant collects pitches, pitch decks, and videos in a structured way.
    It summarizes opportunities based on your investment preferences.`,
  },
  creator: {
    label: "Digital Creator",
    content: `SayDoo replies instantly to brand enquiries, collaboration requests,
    pricing queries, and FAQs — 24×7 without missing opportunities.`,
  },
  founder: {
    label: "Founder",
    content: `SayDoo manages investor queries, partnership requests,
    and meeting scheduling so you stay focused on building.`,
  },
  business: {
    label: "Business",
    content: `SayDoo automates customer enquiries, sales leads,
    and service requests with instant AI responses.`,
  },
  
};

export default function About() {
  const [active, setActive] = useState("investor");
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);

  const [enteredTop, setEnteredTop] = useState(false);
  const [enteredCards, setEnteredCards] = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);
  const [counts, setCounts] = useState({ users: 0, paid: 0, staff: 0, awards: 0 });

  useEffect(() => {
    const tObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setEnteredTop(true);
        });
      },
      { threshold: 0.25 }
    );
    if (leftRef.current) tObserver.observe(leftRef.current);
    if (rightRef.current) tObserver.observe(rightRef.current);

    const cObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setEnteredCards(true);
        });
      },
      { threshold: 0.2 }
    );
    if (cardsRef.current) cObserver.observe(cardsRef.current);

    const sObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setStatsStarted(true);
        });
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) sObserver.observe(statsRef.current);

    return () => {
      tObserver.disconnect();
      cObserver.disconnect();
      sObserver.disconnect();
    };
  }, []);

  // count up animation
  useEffect(() => {
    if (!statsStarted) return;

    const duration = 1400;
    const start = performance.now();
    const from = { users: 0, paid: 0, staff: 0, awards: 0 };
    const to = { users: 111234, paid: 98734, staff: 4, awards: 14 };

    let rafId;
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = t * (2 - t);
      setCounts({
        users: Math.floor(from.users + (to.users - from.users) * ease),
        paid: Math.floor(from.paid + (to.paid - from.paid) * ease),
        staff: Math.floor(from.staff + (to.staff - from.staff) * ease),
        awards: Math.floor(from.awards + (to.awards - from.awards) * ease),
      });

      if (t < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [statsStarted]);

  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="bg-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP SECTION */}
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <div ref={rightRef} className={`flex justify-center transform transition-all duration-700 ${enteredTop ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <img
                src={phone}
                alt="SayDoo Chat"
                className="w-[320px] md:w-[420px] lg:w-[460px] drop-shadow-2xl"
              />
            </div>

            {/* CONTENT */}
            <div ref={leftRef} className={`transform transition-all duration-700 ${enteredTop ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <span className="inline-block mb-4 px-4 py-1 text-sm text-blue-600 bg-blue-50 rounded-full">
                Now no more responding to random enquiries !!
              </span>

              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Use SayDoo and reply instantly to any enquiry
              </h2>

              <p className="mt-4 text-gray-900 max-w-xl">
                SayDoo helps you stay available 24×7. From brand collaborations
                and service enquiries to meeting requests, your AI assistant
                responds instantly and never misses opportunities.
              </p>

              {/* TABS CARD */}
              <div className="mt-8 border border-gray-200 rounded-xl p-6 bg-white/90">
                <div className="flex flex-wrap gap-6 border-b border-gray-200 mb-4">
                  {Object.keys(TABS).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActive(key)}
                      className={`pb-2 text-sm font-medium transition ${
                        active === key
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-500 hover:text-gray-800"
                      }`}
                    >
                      {TABS[key].label}
                    </button>
                  ))}
                </div>

                <p className="text-gray-900 leading-relaxed">
                  {TABS[active].content}
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM FEATURE CARDS */}
          <div ref={cardsRef} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <style>{`
              @keyframes float { 0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)} }
              .float-anim { animation: float 6s ease-in-out infinite; }
            `}</style>

            <div style={{ transitionDelay: '80ms' }} className={`border border-blue-100 rounded-xl p-6 flex gap-4 items-start transform transition-all duration-700 ${enteredCards ? 'opacity-100 translate-y-0 float-anim' : 'opacity-0 translate-y-6'}`}>
              <div className="p-3 bg-blue-600 text-white rounded-full">
                <MessageCircle size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  AI chat Assistant
                </h4>
                <p className="text-gray-900 text-sm mt-1">
                  Let people talk to you 24×7
                </p>
              </div>
            </div>

            <div style={{ transitionDelay: '160ms' }} className={`border border-blue-100 rounded-xl p-6 flex gap-4 items-start transform transition-all duration-700 ${enteredCards ? 'opacity-100 translate-y-0 float-anim' : 'opacity-0 translate-y-6'}`}>
              <div className="p-3 bg-blue-600 text-white rounded-full">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  One Stop Platform
                </h4>
                <p className="text-gray-900 text-sm mt-1">
                  Describe yourself better
                </p>
              </div>
            </div>

            <div style={{ transitionDelay: '240ms' }} className={`border border-blue-100 rounded-xl p-6 flex gap-4 items-start transform transition-all duration-700 ${enteredCards ? 'opacity-100 translate-y-0 float-anim' : 'opacity-0 translate-y-6'}`}>
              <div className="p-3 bg-blue-600 text-white rounded-full">
                <Calendar size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Schedule Meetings
                </h4>
                <p className="text-gray-900 text-sm mt-1">
                  Free or Paid online sessions now made easy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION (NEW) ================= */}
      <section ref={statsRef} className="relative py-20" style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: '300px', backgroundPosition: 'right center' }}>
        <div className="absolute inset-0 bg-blue-600/85" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">

            {/* STAT 1 */}
            <div>
              <div className="flex justify-center mb-4">
                <Users size={42} />
              </div>
              <h3 className="text-4xl font-bold">{counts.users.toLocaleString()}</h3>
              <p className="mt-2 text-blue-100">Registered Users</p>
            </div>

            {/* STAT 2 */}
            <div>
              <div className="flex justify-center mb-4">
                <CheckCircle size={42} />
              </div>
              <h3 className="text-4xl font-bold">{counts.paid.toLocaleString()}</h3>
              <p className="mt-2 text-blue-100">Paid Users</p>
            </div>

            {/* STAT 3 */}
            <div>
              <div className="flex justify-center mb-4">
                <Briefcase size={42} />
              </div>
              <h3 className="text-4xl font-bold">{counts.staff}</h3>
              <p className="mt-2 text-blue-100">Dedicated Staff</p>
            </div>

            {/* STAT 4 */}
            <div>
              <div className="flex justify-center mb-4">
                <Award size={42} />
              </div>
              <h3 className="text-4xl font-bold">{counts.awards}</h3>
              <p className="mt-2 text-blue-100">Awards Achieved</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
