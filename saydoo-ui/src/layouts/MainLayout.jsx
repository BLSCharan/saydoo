import Navbar from "../components/Navbar";
import wave from "../assets/dot-wave.png";

export default function MainLayout({ children }) {
  return (
    <div className="h-screen w-screen overflow-hidden relative">

      {/* FIXED BACKGROUND */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(0,0,0,0.95),
              rgba(0,0,0,0.75),
              rgba(0,0,0,0.3)
            ),
            url(${wave})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* FIXED NAVBAR */}
      <div className="fixed top-0 left-0 w-full h-20 z-50">
        <Navbar />
      </div>

      {/* PAGE CONTENT (NO SCROLL EVER) */}
      <main className="
  absolute top-20 left-0 w-full h-[calc(100vh-80px)]
  overflow-y-auto
">

        {children}
      </main>

    </div>
  );
}
