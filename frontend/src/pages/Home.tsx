import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import TemplatesPreview from "../components/home/TemplatesPreview";
import PricingPreview from "../components/home/PricingPreview";
import PortfolioPreview from "../components/home/PortfolioPreview";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <TemplatesPreview />
        <PricingPreview />
        <PortfolioPreview />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default Home;