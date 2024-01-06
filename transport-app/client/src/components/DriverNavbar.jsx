import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="mobile-nav">
      <NavLink to="/home/account" className={({ isActive }) => isActive ? 'bloc-icon selected' : 'bloc-icon' } exact>
        {/* Home Icon SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#9b9b9b" className="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
        </svg>
        <p>Home</p>
      </NavLink>
      <NavLink to="/home/bookRides" className={({ isActive }) => isActive ? 'bloc-icon selected' : 'bloc-icon' }>
        {/* Book Rides Icon SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#9b9b9b" className="bi bi-calendar" viewBox="0 0 16 16">
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
        </svg>
        <p>Book Rides</p>
      </NavLink>
      <NavLink to="/home/qrCode" className={({ isActive }) => isActive ? 'bloc-icon selected' : 'bloc-icon' }>
        {/* QR Code Icon */}
        <img src= "/src/assets/qrCodeImage.png"  width="60" height="60" className="qr-code" />
      </NavLink>
      <NavLink to="/home/pastRides" className={({ isActive }) => isActive ? 'bloc-icon selected' : 'bloc-icon' }>
        {/* Past Rides Icon SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#9b9b9b" className="bi bi-journals" viewBox="0 0 16 16">
          <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"/>
          <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"/>
        </svg>
        <p>Past Rides</p>
      </NavLink>
      <NavLink to="/home/profile" className={({ isActive }) => isActive ? 'bloc-icon selected' : 'bloc-icon' }>
        {/* Profile Icon SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#9b9b9b" className="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg>
        <p>Profile</p>
      </NavLink>
    </nav>
  );
}

export default Navbar
