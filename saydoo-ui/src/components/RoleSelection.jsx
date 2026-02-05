import { useNavigate } from "react-router-dom";

import investor from "../assets/investor.png";
import creator from "../assets/creator.png";
import founder from "../assets/founder.png";
import business from "../assets/business.png";

import bg from "../assets/bg-role.png"; // your wave background

export default function RoleSelection() {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Investor",
      image: investor,
      color: "from-orange-500 to-orange-600",
      route: "/login/investor",
    },
    {
      title: "Digital Creator",
      image: creator,
      color: "from-purple-500 to-indigo-600",
      route: "/login/creator",
    },
    {
      title: "Founder",
      image: founder,
      color: "from-teal-500 to-emerald-600",
      route: "/login/founder",
    },
    {
      title: "Business",
      image: business,
      color: "from-blue-600 to-blue-800",
      route: "/login/business",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      
      {/* ✅ BACKGROUND IMAGE */}
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-white/70 -z-10"></div>

      <div className="max-w-7xl w-full text-center">
        
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#0b1b3a]">
          WHO ARE <span className="text-orange-500">YOU ?</span>
        </h1>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {roles.map((role, index) => (
            <div
              key={index}
              onClick={() => navigate(role.route)}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3 overflow-hidden"
            >
              
              {/* IMAGE */}
              <div className="p-6">
                <img
                  src={role.image}
                  alt={role.title}
                  className="h-44 mx-auto object-contain"
                />
              </div>

              {/* BOTTOM COLOR BAR */}
              <div
                className={`bg-gradient-to-r ${role.color} py-4`}
              >
                <h3 className="text-white font-bold text-lg tracking-wide">
                  {role.title.toUpperCase()}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
