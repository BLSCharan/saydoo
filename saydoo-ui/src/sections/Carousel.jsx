import { useState, useEffect, useRef } from "react";

import t1 from "../assets/testimonial-1.jpg";
import t2 from "../assets/testimonial-2.jpg";
import t3 from "../assets/testimonial-3.jpg";
import t4 from "../assets/testimonial-4.jpg";
import t5 from "../assets/testimonial-3.jpg";

const testimonials = [
  {
    text:
      "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.",
    name: "Client Name",
    role: "Profession",
    img: t1,
  },
  {
    text:
      "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.",
    name: "Client Name",
    role: "Profession",
    img: t2,
  },
  {
    text:
      "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.",
    name: "Client Name",
    role: "Profession",
    img: t3,
  },
  {
    text:
      "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.",
    name: "Client Name",
    role: "Profession",
    img: t4,
  },
  {
    text:
      "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.",
    name: "Client Name",
    role: "Profession",
    img: t5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
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

  // show 3 at a time
  const visible = testimonials.slice(active, active + 3);

  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">

        {/* BADGE */}
        {/* HEADER */}
<div className="text-center mb-20">
  <span className="inline-block mb-4 px-5 py-1.5 text-sm text-blue-600 border border-blue-200 rounded-full">
    Testimonial
  </span>

  <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3B]">
    What Our Clients Say!
  </h2>
</div>


        {/* TITLE */}
        <h2 className="hidden">What Our Clients Say!</h2>

        {/* TESTIMONIAL GRID */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all">
          <style>{`
            @keyframes float { 0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)} }
            .float-anim { animation: float 6s ease-in-out infinite; }
          `}</style>

          {visible.map((item, index) => (
            <div key={index} style={{ transitionDelay: `${index * 80}ms` }} className={`flex flex-col items-center transform transition-all duration-700 ${
              entered ? 'opacity-100 translate-y-0 float-anim' : 'opacity-0 translate-y-6'
            }`}>

              {/* SPEECH BUBBLE */}
              <div className="relative bg-white border border-blue-200 rounded-xl p-8 min-h-[180px] flex items-center">

                {/* QUOTE ICON */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-blue-200 flex items-center justify-center text-blue-600 text-3xl font-bold">
                  "
                </div>

                <p className="text-gray-900 text-base leading-relaxed">
                  {item.text}
                </p>

                {/* TRIANGLE */}
                <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-0 h-0
                  border-l-[12px] border-r-[12px] border-t-[12px]
                  border-l-transparent border-r-transparent border-t-blue-200">
                </div>
              </div>

              {/* USER */}
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full mt-8 object-cover"
              />

              <h4 className="mt-4 font-semibold text-lg text-gray-900">
                {item.name}
              </h4>

              <p className="text-gray-500 text-sm">
                {item.role}
              </p>
            </div>
          ))}

        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-4 mt-14">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => setActive(dot)}
              className={`w-4 h-4 rounded-full border transition ${
                active === dot
                  ? "bg-blue-600 border-blue-600"
                  : "border-blue-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
