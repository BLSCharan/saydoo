import { Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Services() {
  const leftRef = useRef(null);
  const cardsRef = useRef(null);
  const [enteredLeft, setEnteredLeft] = useState(false);
  const [enteredCards, setEnteredCards] = useState(false);

  useEffect(() => {
    const lObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setEnteredLeft(true);
        });
      },
      { threshold: 0.25 }
    );
    if (leftRef.current) lObserver.observe(leftRef.current);

    const cObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setEnteredCards(true);
        });
      },
      { threshold: 0.2 }
    );
    if (cardsRef.current) cObserver.observe(cardsRef.current);

    return () => {
      lObserver.disconnect();
      cObserver.disconnect();
    };
  }, []);

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <style>{`
          @keyframes float { 0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)} }
          .float-anim { animation: float 6s ease-in-out infinite; }
          .card-hover { transition: all 0.3s ease; }
          .card-hover:hover { background-color: #3f63f2; color: white; border-color: #3f63f2; }
          .card-hover:hover h4, .card-hover:hover p { color: white; }
          .card-hover:hover .check-icon { background-color: white; color: #3f63f2; }
        `}</style>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div ref={leftRef} className={`transform transition-all duration-700 ${enteredLeft ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="inline-block mb-4 px-4 py-1 text-sm text-blue-600 border border-blue-200 rounded-full">
              Why Choose SayDoo
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              24×7 AI That Works Like You !
            </h2>

            <p className="mt-6 text-gray-900 max-w-xl">
              Your AI assistant answers enquiries instantly, shares accurate
              information, and guides visitors without sounding robotic or generic.
            </p>

            <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
              Create your assistant now
            </button>
          </div>

          {/* RIGHT CARDS – CUSTOM POSITIONING */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* CARD 1 – TOP LEFT */}
            <div style={{ transitionDelay: '80ms' }} className={`card-hover border-2 border-blue-200 rounded-xl p-6 transform transition-all duration-700 ${enteredCards ? 'opacity-100 translate-y-0 float-anim' : 'opacity-0 translate-y-6'}`}>
              <div className="check-icon mb-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Check size={22} />
              </div>

              <h4 className="text-lg font-semibold text-gray-900">
                Built for Real Conversations
              </h4>

              <p className="mt-2 text-gray-900 text-sm leading-relaxed">
                SayDoo doesn't just show information. It enables meaningful
                interactions—chat, voice, and meetings—so opportunities move
                forward faster.
              </p>
            </div>

            {/* CARD 3 – TOP RIGHT */}
            <div style={{ transitionDelay: '160ms' }} className={`card-hover border-2 border-blue-200 rounded-xl p-6 transform transition-all duration-700 ${enteredCards ? 'opacity-100 translate-y-0 float-anim' : 'opacity-0 translate-y-6'}`}>
              <div className="check-icon mb-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Check size={22} />
              </div>

              <h4 className="text-lg font-semibold text-gray-900">
                Look Professional & Always Available
              </h4>

              <p className="mt-2 text-gray-900 text-sm leading-relaxed">
                You show up as responsive, organized, and reliable 24×7 without
                extra effort.
              </p>
            </div>

            {/* CARD 2 – CENTERED BELOW */}
            <div style={{ transitionDelay: '240ms' }} className={`col-span-1 md:col-span-2 card-hover border-2 border-blue-200 rounded-xl p-6 w-full md:w-[75%] mx-auto transform transition-all duration-700 ${enteredCards ? 'opacity-100 translate-y-0 float-anim' : 'opacity-0 translate-y-6'}`}>
              <div className="check-icon mb-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Check size={22} />
              </div>

              <h4 className="text-lg font-semibold text-gray-900">
                Get Only Serious Conversations
              </h4>

              <p className="mt-2 text-gray-900 text-sm leading-relaxed">
                Your AI filters casual enquiries so you spend time only with
                people who truly matter.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
