import { NavLink } from "react-router-dom";
import "./Navbar.css";
import iconSrc from "./icons8-slack.svg";

export const Navbar = () => {
  return (
    <nav className="topnav">
      <div className="logo">
        <img src={iconSrc} alt="logo" />
      </div>
      <ul className="topnav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/notifications">Notifications</NavLink>
      </ul>
    </nav>
  );
};
