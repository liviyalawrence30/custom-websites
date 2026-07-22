import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BookingForm from "../components/forms/BookingForm";

function Booking() {
  return (
    <>
      <Navbar />

      <section className="page-container">
        <BookingForm />
      </section>

      <Footer />
    </>
  );
}

export default Booking;