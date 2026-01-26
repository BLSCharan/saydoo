import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex items-center px-6 md:px-10 bg-black/40 backdrop-blur-md border-b border-white/10 relative">

      {/* LEFT: BRAND TEXT */}
      <div className="text-xl font-semibold text-white">
        Say<span className="text-lime-400">DOO</span>
      </div>

      {/* DESKTOP MENU (RIGHT) */}
      <ul className="ml-auto hidden md:flex items-center gap-8 text-gray-300 text-sm">

        <li className="relative text-lime-400 font-medium cursor-pointer">
          Home
          <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-lime-400 rounded-full" />
        </li>

        <li className="hover:text-white cursor-pointer">
          Get Your Link
        </li>

        <li className="hover:text-white cursor-pointer">
          Get Your Widget
        </li>

        <li className="hover:text-white cursor-pointer">
          Our Services
        </li>

        <li className="hover:text-white cursor-pointer">
          Contact Us
        </li>
      </ul>

      {/* MOBILE MENU BUTTON (RIGHT) */}
      <button
        className="ml-auto md:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-xl border-t border-white/10 md:hidden">
          <ul className="flex flex-col text-gray-300 text-sm py-6 px-6 gap-5">

            <li className="text-lime-400 font-medium">
              Home
            </li>

            <li className="hover:text-white cursor-pointer">
              Get Your Link
            </li>

            <li className="hover:text-white cursor-pointer">
              Get Your Widget
            </li>

            <li className="hover:text-white cursor-pointer">
              Our Services
            </li>

            <li className="hover:text-white cursor-pointer">
              Contact Us
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}
