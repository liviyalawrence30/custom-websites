import { Link } from "react-router-dom";
import "../../styles/AdminNavbar.css";
import { NavLink } from "react-router-dom";

function AdminNavbar() {
  return (
    <nav className="admin-navbar">
      <div className="admin-logo">
        <h2>Custom Websites</h2>
      </div>

      <div className="admin-links">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/requests">Website Requests</Link>
        <Link to="/admin/bookings">Bookings</Link>
        <Link to="/admin">Logout</Link>
        <NavLink to="/admin/slots">
  Slots
</NavLink>
      </div>
    </nav>
  );
}

export default AdminNavbar;