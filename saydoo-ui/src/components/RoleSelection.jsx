import { useNavigate } from "react-router-dom";

import influencer from "../assets/influencer.png";
import founder from "../assets/founder.png";
import company from "../assets/company.png";

export default function RoleSelection() {
  const navigate = useNavigate();

  return (
    <section className="
  relative
  min-h-[calc(100vh-80px)]
  px-6 md:px-10
  flex flex-col items-center justify-center text-center
">


      {/* TITLE */}
      <h2 className="text-5xl font-bold text-white">
        Who are you?
      </h2>

      <p className="mt-3 text-gray-400 text-lg">
        Select your role to create your AI clone
      </p>

      {/* CARDS */}
      <div className="relative z-10 mt-16 pb-24 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">


        {/* Influencer */}
        <div
          onClick={() => navigate("/login/influencer")}
          className="cursor-pointer group bg-white/5 backdrop-blur-xl border border-green-400/30 rounded-2xl p-8 hover:border-green-400 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition"
        >
          <img src={influencer} alt="Influencer" className="mx-auto h-50" />
          <h3 className="mt-6 text-2xl font-semibold text-white">
            Influencer
          </h3>
          <p className="mt-3 text-gray-400">
            Create an AI to handle your fan enquiries
          </p>
        </div>

        {/* Founder */}
        <div
          onClick={() => navigate("/login/influencer")}
          className="cursor-pointer group bg-white/5 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-8 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition"
        >
          <img src={founder} alt="Founder" className="mx-auto h-50" />
          <h3 className="mt-6 text-2xl font-semibold text-white">
            Founder
          </h3>
          <p className="mt-3 text-gray-400">
            Create an AI to manage meetings and requests
          </p>
        </div>

        {/* Company */}
        <div
          onClick={() => navigate("/login/influencer")}
          className="cursor-pointer group bg-white/5 backdrop-blur-xl border border-lime-400/30 rounded-2xl p-8 hover:border-lime-400 hover:shadow-[0_0_40px_rgba(132,204,22,0.4)] transition"
        >
          <img src={company} alt="Company" className="mx-auto h-50" />
          <h3 className="mt-6 text-2xl font-semibold text-white">
            Company
          </h3>
          <p className="mt-3 text-gray-400">
            Create an AI to handle sales and customer support
          </p>
        </div>

      </div>
    </section>
  );
}
