import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WebsiteRequestForm from "../components/forms/WebsiteRequestForm";

function PlanWebsite() {
  return (
    <>
      <Navbar />
      <section className="plan-website" style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <WebsiteRequestForm />
      </section>
      <Footer />
    </>
  );
}

export default PlanWebsite;