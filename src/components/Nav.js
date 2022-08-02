import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="nav-container">
    <div className="navbar">
      <img src="/planet.png" alt="logo" className="logo" />
      <h1 className="navTitle">Space Travelers&apos; Hub</h1>
      <nav>

        <NavLink
          to="/"
          className="rockets"
          style={({ isActive }) => (isActive ? { color: 'aqua' } : { color: 'orange' })}
        >
          Rockets
        </NavLink>

        <NavLink
          to="/missions"
          className="CATEGORIES"
          style={({ isActive }) => (isActive ? { color: 'aqua' } : { color: 'orange' })}
        >
          Missions
        </NavLink>

        <NavLink
          to="/myprofile"
          className="CATEGORIES"
          style={({ isActive }) => (isActive ? { color: 'aqua' } : { color: 'orange' })}
        >
          My Profile
        </NavLink>
      </nav>
    </div>
  </div>
);

export default Nav;
