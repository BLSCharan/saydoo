import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import hero1 from "../assets/carousel-1.jpg";
import hero2 from "../assets/carousel-2.jpg";

const slides = [
  {
    image: hero1,
    badge: "Welcome to SayDoo",
    title: "Your Personal AI Assistant",
    cta: "Create your AI Clone now",
  },
  {
    image: hero2,
    badge: "Welcome to SayDoo",
    title: "AI that can respond instantly",
    cta: "Create your Assistant now",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // ✅ PERFECT timing (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const next = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* SLIDER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background */}
          <img
            src={slides[current].image}
            alt="Hero"
            className="w-full h-full object-cover"
          />

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl w-full mx-auto px-6 lg:px-12">
              
              {/* LEFT ALIGN FIX */}
              <div className="max-w-2xl">

                {/* BADGE */}
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-6 px-4 py-2 border border-[#0b1b3a] rounded-full text-[#0b1b3a] text-sm"
                >
                  {slides[current].badge}
                </motion.span>

                {/* TITLE */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="
                    text-4xl 
                    md:text-6xl 
                    font-bold 
                    text-[#0b1b3a]
                    leading-tight
                  "
                >
                  {slides[current].title}
                </motion.h1>

                {/* CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => navigate("/roles")}
                  className="
                    mt-8
                    bg-blue-600 
                    hover:bg-blue-700
                    text-white 
                    px-8 
                    py-4 
                    rounded-lg 
                    text-lg 
                    font-semibold
                    shadow-lg
                    hover:shadow-2xl
                    transition
                    duration-300
                  "
                >
                  {slides[current].cta}
                </motion.button>

              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="
          absolute left-6 top-1/2 -translate-y-1/2
          bg-white/80 backdrop-blur
          hover:bg-white
          text-blue-600
          w-12 h-12 rounded-full
          flex items-center justify-center
          shadow-md
          transition
        "
      >
        <ChevronLeft />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="
          absolute right-6 top-1/2 -translate-y-1/2
          bg-white/80 backdrop-blur
          hover:bg-white
          text-blue-600
          w-12 h-12 rounded-full
          flex items-center justify-center
          shadow-md
          transition
        "
      >
        <ChevronRight />
      </button>
    </section>
  );
}
