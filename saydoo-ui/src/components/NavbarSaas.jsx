import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: navigate home then try to scroll
      navigate("/");
      setTimeout(() => {
        const e2 = document.getElementById(id);
        if (e2) e2.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <h1
          onClick={() => navigate("/")}
          className="text-3xl font-bold text-indigo-600 cursor-pointer"
        >
          SayDoo
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <button onClick={() => scrollTo('about')} className="hover:text-indigo-600">
            What we do
          </button>

          <button onClick={() => scrollTo('services')} className="hover:text-indigo-600">
            Why us
          </button>

          <button onClick={() => scrollTo('usecases')} className="hover:text-indigo-600">
            What Your Clone can do
          </button>

          {/* DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-indigo-600">
              Other Services <ChevronDown size={16} />
            </button>

            {dropdown && (
              <div className="absolute top-full mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <button
                  onClick={() => navigate("/custom-ai")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Customized AI
                </button>
                <button
                  onClick={() => navigate("/virtual-tours")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Virtual Tours
                </button>
              </div>
            )}
          </div>

          <button onClick={() => scrollTo('contact')} className="hover:text-indigo-600">
            Contact
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={28} className="text-gray-800" /> : <Menu size={28} className="text-gray-800" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 border-t">
          <button onClick={() => scrollTo('about')} className="block w-full text-left text-black">What we do</button>
          <button onClick={() => scrollTo('services')} className="block w-full text-left text-black">Why us</button>
          <button onClick={() => scrollTo('usecases')} className="block w-full text-left text-black">What Your Clone can do</button>

          <div>
            <p className="font-semibold mb-2 text-black">Other Services</p>
            <button onClick={() => { setOpen(false); navigate('/custom-ai'); }} className="block w-full text-left pl-4 py-1 text-black">
              Customized AI
            </button>
            <button onClick={() => { setOpen(false); navigate('/virtual-tours'); }} className="block w-full text-left pl-4 py-1 text-black">
              Virtual Tours
            </button>
          </div>

          <button onClick={() => scrollTo('contact')} className="block w-full text-left text-black">Contact</button>
        </div>
      )}
    </nav>
  );
}
