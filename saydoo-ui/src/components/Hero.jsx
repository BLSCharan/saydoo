import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Users, DollarSign, Settings, FileText, CheckCircle, Shield } from "lucide-react";

const features = [
  { id: 1, icon: MessageCircle, title: "Instant DM Replies", position: "left" },
  { id: 2, icon: Users, title: "Lead Conversion", position: "left" },
  { id: 3, icon: DollarSign, title: "Cost Efficient", position: "left" },
  { id: 4, icon: MessageCircle, title: "Instant DM Replies", position: "left" },
  { id: 5, icon: Settings, title: "Workflow Automation", position: "right" },
  { id: 6, icon: FileText, title: "Document Handling", position: "right" },
  { id: 7, icon: CheckCircle, title: "Smart Task Tracking", position: "right" },
  { id: 8, icon: Shield, title: "Easy Investors", position: "right" },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollProgress =
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setScrollY(Math.max(0, Math.min(scrollProgress, 1)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen py-12 md:py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-20 pt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-gray-900">AI Clones for </span>
            <span className="text-blue-600">Founders, Creators,</span>
            <br className="hidden sm:block" />
            <span className="text-blue-600">Investors</span>
            <span className="text-gray-900"> and Businesses</span>
          </h1>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Automate DMs, operations and workflows with AI that understands your business, and works 24/7.
          </p>
        </div>

      {/* ================= DESKTOP VIEW ================= */}
<div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">

  {/* LEFT SIDE */}
  <div className="lg:col-span-3 flex flex-col gap-6 items-center justify-center">
    {features.slice(0, 4).map((feature, index) => {
      const IconComponent = feature.icon;
      return (
        <motion.div
          key={feature.id}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          style={{ x: scrollY * -80 }}
          className="flex items-center gap-4 px-8 py-4 bg-white rounded-full
                     shadow-lg hover:shadow-2xl
                     transition-all duration-300 ease-out
                     cursor-pointer
                     border border-gray-200 hover:border-blue-500
                     w-full max-w-[280px]"
          whileHover={{ y: -4, scale: 1.05 }}
        >
          <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
            <IconComponent size={24} className="text-blue-600" />
          </div>

          <span className="text-base font-semibold text-gray-900 whitespace-nowrap">
            {feature.title}
          </span>
        </motion.div>
      );
    })}
  </div>

  {/* CENTER BOX */}
  <div className="lg:col-span-6 flex justify-center">
    <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-10 shadow-2xl border border-blue-200 max-w-md w-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
          S
        </div>
        <p className="font-semibold text-gray-900 text-lg">
          Hi! I am your Saydoo AI
        </p>
      </div>

      <div className="bg-white rounded-2xl p-5 mb-5">
        <p className="text-gray-800 font-medium text-base">
          How can I help today?
        </p>
      </div>

      <input
        type="text"
        placeholder="Type your message..."
        className="w-full bg-white rounded-xl px-5 py-3 text-gray-700
                   focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
      />

      <button
        onClick={() => navigate("/roles")}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl"
      >
        Generate My Link
      </button>
    </div>
  </div>

  {/* RIGHT SIDE */}
<div className="lg:col-span-3 flex flex-col gap-6 items-start justify-center">

  {features.slice(4, 8).map((feature, index) => {
    const IconComponent = feature.icon;

    return (
      <motion.div
        key={feature.id}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        style={{ x: scrollY * 80 }}
        whileHover={{ y: -4, scale: 1.05 }}
        className="flex items-center gap-4 px-8 py-4 
                   bg-white rounded-full
                   shadow-lg hover:shadow-2xl
                   transition-all duration-300 ease-out
                   cursor-pointer
                   border border-gray-200 hover:border-blue-500
                   w-[290px]"
      >
        <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
          <IconComponent size={24} className="text-blue-600" />
        </div>

        <span className="text-base font-semibold text-gray-900 whitespace-nowrap">
          {feature.title}
        </span>
      </motion.div>
    );
  })}

</div>

</div>

        {/* ================= MOBILE & TABLET VIEW ================= */}
        <div className="lg:hidden">

          {/* Chat First */}
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 shadow-2xl border-2 border-blue-200 max-w-md w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  S
                </div>
                <p className="font-semibold text-gray-900">Hi! I am your Saydoo AI</p>
              </div>

              <div className="bg-white rounded-2xl p-4 mb-4">
                <p className="text-gray-800 font-medium">
                  How can I help today?
                </p>
              </div>

              <input
                type="text"
                placeholder="Type your message..."
                className="w-full bg-white rounded-xl px-4 py-3 text-gray-700
                           focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              />

              <button
                onClick={() => navigate("/roles")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all"
              >
                Generate My Link
              </button>
            </div>
          </div>

          {/* 4 ROWS - 2 SLIDES EACH */}
          <div className="space-y-6">
            {features.slice(0, 4).map((leftFeature, index) => {
              const rightFeature = features.slice(4, 8)[index];
              const LeftIcon = leftFeature.icon;
              const RightIcon = rightFeature.icon;

              return (
                <div key={index} className="grid grid-cols-2 gap-4">

                  <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-full shadow-md
                                  border-2 border-transparent hover:border-blue-500">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <LeftIcon size={20} className="text-blue-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      {leftFeature.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-full shadow-md
                                  border-2 border-transparent hover:border-blue-500">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <RightIcon size={20} className="text-blue-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      {rightFeature.title}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}