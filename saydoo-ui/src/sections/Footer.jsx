import { Mail, MapPin, Phone, Twitter, Facebook, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0B1B3B] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* OUR OFFICE */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Our Office
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>123 Street, New York, USA</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>+012 345 67890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>info@example.com</span>
              </li>
            </ul>
            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-6">
              {[Twitter, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer flex items-center gap-2">
                <span>›</span> Why Us
              </li>
              <li className="hover:text-white cursor-pointer flex items-center gap-2">
                <span>›</span> Investors
              </li>
              <li className="hover:text-white cursor-pointer flex items-center gap-2">
                <span>›</span> Founders
              </li>
              <li className="hover:text-white cursor-pointer flex items-center gap-2">
                <span>›</span> Digital Creators
              </li>
              <li className="hover:text-white cursor-pointer flex items-center gap-2">
                <span>›</span> Business
              </li>
            </ul>
          </div>

          {/* ALSO CHECK */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Also Check
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer flex items-center gap-2">
                <span>›</span> Custom AI
              </li>
              <li className="hover:text-white cursor-pointer flex items-center gap-2">
                <span>›</span> Virtual Tours
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Newsletter
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 rounded-l-lg outline-none"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-r-lg transition">
                SignUp
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
