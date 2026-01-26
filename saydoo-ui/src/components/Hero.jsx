import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-[calc(100vh-80px)] overflow-hidden px-6 md:px-10">


      {/* CONTENT */}
      <div className="relative z-10 max-w-xl pt-24 md:pt-32">


        <h1 className="text-6xl font-bold leading-[1.15] text-white">
  Are you an{" "}
  <span className="text-green-400">Influencer</span>,{" "}
  <span className="text-green-400">Business</span>,<br />
  or Founder?
</h1>




        <p className="mt-6 text-lg text-gray-300">
          Get your <span className="text-green-400">AI Clone</span> Now
        </p>

        {/* PROCEED BUTTON */}
        <button
          onClick={() => navigate("/roles")}
          className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-lime-400 text-black font-medium hover:shadow-[0_0_30px_#9FE870] transition"
        >
          Proceed
        </button>
      </div>

    </section>
  );
}
