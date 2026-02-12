import React, { useEffect, useRef, useState } from "react";
import { Twitter, Twitch, Share2, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ✅ LOCAL BRAND IMAGES */
import nike from "../../assets/brands/nike.png";
import adidas from "../../assets/brands/adidas.png";
import puma from "../../assets/brands/puma.png";
import zara from "../../assets/brands/zara.png";
import hm from "../../assets/brands/hm.png";
import uspolo from "../../assets/brands/uspolo.jpg";
import youtube from "../../assets/brands/youtube.png";
import netflix from "../../assets/brands/netflix.jpg";

export default function MyLinks() {
  const navigate = useNavigate();

  const profile = {
    name: "Gaurav Kumar",
    username: "@gaurav",
    avatarUrl: null,
    links: [
      { id: 1, title: "Instagram", url: "#" },
      { id: 2, title: "Facebook", url: "#" },
      { id: 3, title: "My Portfolio", url: "#" },
      { id: 4, title: "Schedule a Meeting", url: "#" },
      { id: 5, title: "Chat With Me", url: "#" },
    ],
  };

  /* ✅ LOCAL OFFERS */
  const baseOffers = [nike, adidas, puma, zara, hm, uspolo, youtube, netflix];

  /* Duplicate for infinite feel */
  const offers = [...baseOffers, ...baseOffers, ...baseOffers];

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* ✅ AUTO SCROLL */
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      el.scrollBy({
        left: 140,
        behavior: "smooth",
      });

      setCurrentIndex((prev) => (prev + 1) % baseOffers.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 flex justify-center pb-10 px-4">
      <div className="w-full max-w-md mt-6">

        {/* TOP BAR */}
        <div className="flex justify-between mb-6">
          <button className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-white">
            S
          </button>

          <button className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-white">
            <Share2 size={16} />
          </button>
        </div>

        {/* PROFILE */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-28 h-28 rounded-full bg-neutral-800 flex items-center justify-center text-white text-3xl font-bold">
            GK
          </div>

          <h2 className="text-white text-xl font-semibold">
            {profile.name}
          </h2>

          <p className="text-neutral-400 text-sm">
            {profile.username}
          </p>
        </div>

        {/* LINKS */}
        <div className="mt-6 flex flex-col gap-3">
          {profile.links.map((l) => (
            <a
              key={l.id}
              href={l.url}
              className="flex items-center justify-between bg-neutral-800 hover:bg-neutral-700 transition rounded-2xl px-4 py-4 border border-neutral-700"
            >
              <span className="text-white font-semibold text-lg">
                {l.title}
              </span>

              <ChevronRight className="text-neutral-400" size={18} />
            </a>
          ))}
        </div>

        {/* ⭐⭐⭐ PREMIUM BRAND CAROUSEL */}
        <div className="mt-8">

          <p className="text-neutral-300 text-sm mb-4 text-center">
            Offers From Brands On Us
          </p>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto no-scrollbar"
          >
            {offers.map((logo, i) => (
              <div
                key={i}
                className="
                flex-none
                w-32
                h-20
                bg-white
                rounded-2xl
                flex
                items-center
                justify-center
                shadow-md
                hover:shadow-xl
                transition
                duration-300
                hover:scale-105
                "
              >
                <img
                  src={logo}
                  alt="brand"
                  className="
                  max-w-[75%]
                  max-h-[70%]
                  object-contain
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate("/")}
          className="w-full mt-8 bg-white text-black font-semibold py-3 rounded-full shadow-md hover:scale-105 transition"
        >
          Connect with me on Saydoo
        </button>

        <p className="text-neutral-500 text-xs text-center mt-4">
          Cookie Preferences • Report • Explore
        </p>
      </div>
    </div>
  );
}
