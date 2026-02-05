import bgImg from "../assets/bg.png";

export default function CTA() {
  return (
    <section className="relative py-24 bg-white">
      
      {/* TOP BLUE BACKGROUND (HALF ONLY) WITH BG.PNG */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#3f63f2]" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-blue-600/85" />
      </div>

      {/* CARD */}
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

          {/* BADGE */}
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1 text-sm text-blue-600 border border-blue-200 rounded-full">
              Get In Touch
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Request A Call-Back
          </h2>

          {/* FORM */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* YOUR NAME */}
            <input
              type="text"
              placeholder="Your Name"
              className="h-14 px-5 border border-gray-300 rounded-lg text-gray-900 font-medium
                         placeholder:text-gray-500 placeholder:text-base
                         focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* YOUR EMAIL */}
            <input
              type="email"
              placeholder="Your Email"
              className="h-14 px-5 border border-gray-300 rounded-lg text-gray-900 font-medium
                         placeholder:text-gray-500 placeholder:text-base
                         focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* YOUR MOBILE */}
            <input
              type="tel"
              placeholder="Your Mobile"
              className="h-14 px-5 border border-gray-300 rounded-lg text-gray-900 font-medium
                         placeholder:text-gray-500 placeholder:text-base
                         focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Subject"
              className="h-14 px-5 border border-gray-300 rounded-lg text-gray-900 font-medium
                         placeholder:text-gray-500 placeholder:text-base
                         focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* MESSAGE */}
            <textarea
              rows="5"
              placeholder="Leave a message here"
              className="md:col-span-2 px-5 py-4 border border-gray-300 rounded-lg text-gray-900 font-medium
                         placeholder:text-gray-500 placeholder:text-base
                         focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="md:col-span-2 mt-4 w-full py-4 bg-[#3f63f2]
                         hover:bg-blue-700 text-white font-semibold
                         rounded-lg transition"
            >
              Submit Now
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
