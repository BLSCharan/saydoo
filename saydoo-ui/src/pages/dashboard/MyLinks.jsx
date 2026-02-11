import React, { useEffect, useRef, useState } from "react";
import { Twitter, Twitch, Share2, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MyLinks() {
  const navigate = useNavigate();

  const profile = {
    name: "Gaurav Kumar",
    username: "@gaurav",
    avatarUrl: null,
    links: [
      { id: 1, title: "Instagram", url: "#", img: "https://dummyimage.com/600x60/1f2937/ffffff&text=Instagram" },
      { id: 2, title: "Facebook", url: "#", img: "https://dummyimage.com/600x60/111827/ffffff&text=Facebook" },
      { id: 3, title: "My Portfolio", url: "#", img: "https://dummyimage.com/600x60/0f172a/ffffff&text=My+Portfolio" },
      { id: 4, title: "Schedule a Meeting", url: "#", img: "https://dummyimage.com/600x60/111827/ffffff&text=Schedule+a+Meeting" },
      { id: 5, title: "Chat With Me", url: "#", img: "https://dummyimage.com/600x60/111827/ffffff&text=Chat+With+Me" },
    ],
    socials: [
      { id: "t", icon: Twitter, url: "https://twitter.com/allbusiness" },
      { id: "tt", icon: Twitch, url: "https://tiktok.com/@allbusiness" },
    ],
  };

  // Carousel state and refs
  const baseOffers = [
    "https://dummyimage.com/160x80/F7F7F7/111111&text=Dr.+Sheth's",
    "https://dummyimage.com/160x80/ff3b6a/ffffff&text=NYKAA",
    "https://dummyimage.com/160x80/F7F7F7/111111&text=Tokyo+Talkies",
    "https://dummyimage.com/160x80/f7b27a/111111&text=Creator",
  ];

  // Ensure at least 10 cards for smooth scrolling — repeat base set if needed
  const offers = [];
  while (offers.length < 10) {
    for (let i = 0; i < baseOffers.length && offers.length < 10; i++) {
      offers.push(baseOffers[i]);
    }
  }

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const items = el.children;
    if (!items || items.length === 0) return;

    const centerChild = (idx) => {
      const child = items[idx];
      if (!child) return;
      const offset = child.offsetLeft + child.offsetWidth / 2 - el.clientWidth / 2;
      el.scrollTo({ left: offset, behavior: "smooth" });
    };

    let interval = setInterval(() => {
      setCurrentIndex((i) => {
        const next = (i + 1) % items.length;
        centerChild(next);
        return next;
      });
    }, 2500);

    // center initial
    centerChild(currentIndex);

    return () => clearInterval(interval);
  }, []);

  const scrollToIndex = (idx) => {
    const el = carouselRef.current;
    if (!el) return;
    const child = el.children[idx];
    if (!child) return;
    const offset = child.offsetLeft + child.offsetWidth / 2 - el.clientWidth / 2;
    el.scrollTo({ left: offset, behavior: "smooth" });
    setCurrentIndex(idx);
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-start justify-center pb-8 px-4">
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
      <div className="w-full max-w-sm md:max-w-lg lg:max-w-3xl mt-6">
        {/* Top controls (small icons) */}
        <div className="flex items-center justify-between px-2 mb-4">
          <button aria-label="brand" className="w-9 h-9 rounded-full bg-neutral-800/60 flex items-center justify-center text-neutral-200">
            <span className="text-sm font-semibold">S</span>
          </button>
          <button className="w-9 h-9 rounded-full bg-neutral-800/60 flex items-center justify-center text-neutral-200">
            <Share2 size={16} />
          </button>
        </div>

        <div className="bg-transparent px-4">
          <div className="flex flex-col items-center gap-3">
            <div className="w-28 h-28 rounded-full bg-neutral-800 flex items-center justify-center overflow-hidden ring-2 ring-neutral-700">
              {profile.avatarUrl ? (
                <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-white text-3xl font-bold">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              )}
            </div>

            <h2 className="text-white text-xl font-semibold">{profile.name}</h2>
            <p className="text-neutral-400 text-sm">{profile.username}</p>
          </div>

          <div className="mt-6">
            <div className="flex flex-col gap-3">
              {profile.links.map((l) => {
                return (
                  <a
                    key={l.id}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-between bg-neutral-800/70 hover:bg-neutral-800/60 transition-colors rounded-2xl px-4 py-4 shadow-inner border border-neutral-700"
                  >
                    <div className="flex-1 flex items-center justify-center">
                      <span className="text-neutral-100 font-semibold text-lg tracking-wide">{l.title}</span>
                    </div>
                    <div className="ml-3">
                      <ChevronRight size={18} className="text-neutral-400" />
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-5">
              <div className="text-neutral-200 text-sm mb-3">Offers From Brands On Us</div>

              <div className="relative">
                <div ref={carouselRef} className="flex gap-3 overflow-x-auto no-scrollbar pb-2 items-center" style={{scrollBehavior: 'smooth'}}>
                  {offers.map((o, i) => (
                    <div key={i} className="flex-none w-20 h-12 rounded-xl bg-white flex items-center justify-center text-sm font-medium" style={{flex: '0 0 80px'}}>
                      <img src={o} alt={`offer-${i}`} className="w-full h-full object-cover rounded-xl" />
                    </div>
                  ))}
                </div>

                <button onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))} className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-800/60 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-neutral-200"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>

                <button onClick={() => scrollToIndex((currentIndex + 1) % offers.length)} className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-800/60 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-neutral-200"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>

              <div className="flex items-center justify-center mt-3">
                <div className="flex gap-2">
                  {offers.map((_, i) => (
                    <button key={i} onClick={() => scrollToIndex(i)} className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-neutral-400' : 'bg-neutral-500/40'}`}></button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => navigate("/")}
                className="w-full bg-neutral-100 text-neutral-900 font-semibold py-3 rounded-full shadow-md"
              >
                Connect with me on Saydoo
              </button>
            </div>

            <div className="mt-4 text-center text-neutral-500 text-xs">
              Cookie Preferences • Report • Explore
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
