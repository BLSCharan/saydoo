import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";

import investor from "../assets/service-1.jpg";
import creator from "../assets/service-2.jpg";
import founder from "../assets/service-3.jpg";
import business from "../assets/service-4.jpg";

const data = {
  Investors: {
    image: investor,
    title: "You meet only the startups that truly match your criteria.",
    desc: "It summarizes opportunities in text and voice, based on your investment preferences. SayDoo helps you screen founders before you ever join a call.",
    points: [
      "AI chat Assistant",
      "Schedules Meeting",
      "All important link together",
    ],
  },
  "Digital Creators": {
    image: creator,
    title: "Never miss a brand enquiry again.",
    desc: "Your AI assistant replies instantly to brands, fans, and agencies while you focus on content creation.",
    points: [
      "24×7 Auto Replies",
      "Brand Deal Screening",
      "Smart Lead Filtering",
    ],
  },
  Founders: {
    image: founder,
    title: "Handle meetings, pitches, and enquiries effortlessly.",
    desc: "SayDoo manages inbound requests, investor queries, and schedules calls automatically.",
    points: [
      "Pitch Collection",
      "Auto Scheduling",
      "Founder Screening",
    ],
  },
  Businesses: {
    image: business,
    title: "Convert enquiries into customers automatically.",
    desc: "Your AI assistant answers FAQs, books meetings, and routes serious leads to sales.",
    points: [
      "Customer Support AI",
      "Sales Qualification",
      "Meeting Automation",
    ],
  },
};

export default function UseCases() {
  const [active, setActive] = useState("Investors");
  const current = data[active];
  
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  
  const [enteredHeader, setEnteredHeader] = useState(false);
  const [enteredTabs, setEnteredTabs] = useState(false);
  const [enteredImage, setEnteredImage] = useState(false);
  const [enteredContent, setEnteredContent] = useState(false);

  useEffect(() => {
    const hObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setEnteredHeader(true);
        });
      },
      { threshold: 0.25 }
    );
    if (headerRef.current) hObserver.observe(headerRef.current);

    const tObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setEnteredTabs(true);
        });
      },
      { threshold: 0.2 }
    );
    if (tabsRef.current) tObserver.observe(tabsRef.current);

    const iObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setEnteredImage(true);
        });
      },
      { threshold: 0.25 }
    );
    if (imageRef.current) iObserver.observe(imageRef.current);

    const cObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setEnteredContent(true);
        });
      },
      { threshold: 0.25 }
    );
    if (contentRef.current) cObserver.observe(contentRef.current);

    return () => {
      hObserver.disconnect();
      tObserver.disconnect();
      iObserver.disconnect();
      cObserver.disconnect();
    };
  }, []);

  return (
    <section id="usecases" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <style>{`
          @keyframes float { 0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)} }
          .float-anim { animation: float 6s ease-in-out infinite; }
        `}</style>

        {/* HEADER */}
        <div ref={headerRef} className={`text-center mb-16 transform transition-all duration-700 ${enteredHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block mb-4 px-4 py-1 text-sm text-blue-600 border border-blue-200 rounded-full">
            What You Can Do With SayDoo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            From first enquiry to real conversations.
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">

          {/* LEFT TABS */}
          <div ref={tabsRef} className={`space-y-4 transform transition-all duration-700 ${enteredTabs ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {Object.keys(data).map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`w-full text-left px-6 py-4 rounded-lg border transition flex items-center gap-3
                  ${
                    active === item
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-800 border-gray-200 hover:border-blue-400"
                  }`}
              >
                ☰ {item}
              </button>
            ))}
          </div>

          {/* IMAGE */}
          <div ref={imageRef} className={`flex justify-center transform transition-all duration-700 ${enteredImage ? 'opacity-100 translate-y-0 float-anim' : 'opacity-0 translate-y-6'}`}>
            <img
              src={current.image}
              alt={active}
              className="rounded-xl shadow-lg w-full max-h-[420px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div ref={contentRef} className={`transform transition-all duration-700 ${enteredContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {current.title}
            </h3>

            <p className="text-gray-900 mb-6">
              {current.desc}
            </p>

            <ul className="space-y-3 mb-8">
              {current.points.map((p, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-900">
                  <Check className="text-blue-600" size={18} />
                  {p}
                </li>
              ))}
            </ul>

            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
              Create Your Assistant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
