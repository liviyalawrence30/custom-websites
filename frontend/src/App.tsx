import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import Reviews from "./pages/Reviews";
import PlanWebsite from "./pages/PlanWebsite";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";

import AdminBookings from "./pages/AdminBookings";
import WebsiteRequests from "./pages/WebsiteRequests";
import AdminSlots from "./pages/AdminSlots";

import BookingSuccess from "./pages/BookingSuccess";
import RequestSuccess from "./pages/RequestSuccess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/plan-website" element={<PlanWebsite />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/bookings" element={<AdminBookings />} />
      <Route path="/admin/requests" element={<WebsiteRequests />} />
      <Route path="/admin/slots" element={<AdminSlots />} />
      <Route path="/booking-success" element={<BookingSuccess />} />
      <Route path="/request-success" element={<RequestSuccess />} />
    </Routes>
  );
}

export default App;