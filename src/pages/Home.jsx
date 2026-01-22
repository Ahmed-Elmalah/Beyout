import Hero from "../sections/Hero";
import Partners from "../sections/Partners";
import Features from "../sections/Features";
import HowItWorks from "../sections/HowItWorks";
import Packages from "../sections/Packages";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import BestSellers from "../sections/BestSellers";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <Features />
      <BestSellers />
      {/* <HowItWorks /> */}
      <Packages />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default HomePage;