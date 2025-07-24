import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <nav role="navigation">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/directors" className={({ isActive }) => isActive ? "active" : ""}>Directors</NavLink>
        <NavLink to="/actors" className={({ isActive }) => isActive ? "active" : ""}>Actors</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
