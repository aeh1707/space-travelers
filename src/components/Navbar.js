import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-container">
    <div className="navbar">
      <img src="/planet.png" alt="logo" className="profile" />
      <h1 className="Bookstore-CMS">Space Travelers&apos; Hub</h1>
      <nav>

        <NavLink
          to="/"
          className="rockets"
          style={(isActive) => ({
            color: isActive ? 'green' : 'blue',
          })}
        >
          Rockets
        </NavLink>

        <NavLink
          to="/missions"
          className="CATEGORIES"
          style={(isActive) => ({
            color: isActive ? 'green' : 'blue',
          })}
        >
          Missions
        </NavLink>

        <NavLink
          to="/myprofile"
          className="CATEGORIES"
          style={(isActive) => ({
            color: isActive ? 'green' : 'blue',
          })}
        >
          My Profile
        </NavLink>
      </nav>
    </div>
  </div>
);

export default Navbar;
