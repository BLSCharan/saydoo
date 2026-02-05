import { useState, useEffect, useRef } from "react";
import { Link } from "lucide-react";

import t1 from "../assets/service-1.jpg";
import t2 from "../assets/service-2.jpg";
import t3 from "../assets/service-3.jpg";
import t4 from "../assets/service-4.jpg";

const testimonials = [
  { name: "Pratyush Tripathy", image: t1 },
  { name: "Rahul Kumar", image: t2 },
  { name: "Sachin Tendulkar", image: t3 },
  { name: "Amit Verma", image: t4 },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
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

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <style>{`
          @keyframes float { 0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)} }
          .float-anim { animation: float 6s ease-in-out infinite; }
        `}</style>

        {/* PILL */}
        <span className="inline-block mb-4 px-4 py-1 text-sm text-blue-600 border border-blue-200 rounded-full">
          Our Top Voices
        </span>

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          What Top People say <br /> about us
        </h2>

        {/* SLIDER */}
        <div className="relative">

          {/* CARDS */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all">
            {[0, 1, 2].map((offset) => {
              const item =
                testimonials[(index + offset) % testimonials.length];

              return (
                <div
                  key={offset}
                  style={{ transitionDelay: `${offset * 80}ms` }}
                  className={`group relative pr-6 pb-6 transform transition-all duration-700 ${
                    entered ? 'opacity-100 translate-y-0 float-anim' : 'opacity-0 translate-y-6'
                  }`}
                >
                  {/* IMAGE LAYER */}
                  <div className="relative z-10 mb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 flex items-center justify-center bg-blue-600/60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* BACK CARD LAYER */}
                  <div className="absolute top-12 right-0 bottom-0 left-12 border border-gray-200 rounded-lg flex items-end p-4 bg-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <h4 className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border shadow hover:bg-blue-600 hover:text-white transition"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border shadow hover:bg-blue-600 hover:text-white transition"
          >
            ›
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index
                  ? "bg-blue-600"
                  : "bg-gray-300 hover:bg-blue-500"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
