import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-container">
    <div className="navbar">
      <img src="/planet.png" alt="logo" className="profile" />
      <h1 className="Bookstore-CMS">Space Travelers' Hub</h1>
      <nav>
        <Link to="/" className="rockets">Rockets</Link>
        <Link to="/missions" className="CATEGORIES">Missions</Link>
        <Link to="/myprofile" className="CATEGORIES">My Profile</Link>
      </nav>
    </div>
  </div>
);

export default Navbar;
