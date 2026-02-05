import NavbarSaaS from "../components/NavbarSaas";

import Hero from "../components/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Carousel from "../sections/Carousel";
import Team from "../sections/Team";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";
import UseCases from "../sections/UseCases";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <NavbarSaaS />

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <About />

      {/* SERVICES SECTION */}
      <Services />
       <UseCases />
      {/* IMAGE CAROUSEL */}
    

      {/* TEAM SECTION */}
      <Team />

      {/* TESTIMONIALS */}
      <Testimonials />
        <Carousel />

      {/* CALL TO ACTION */}
      <CTA />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
