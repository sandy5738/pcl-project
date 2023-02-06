import { NavLink } from "react-router-dom";
import "./SideNav.css";
export const SideNav = () => {
  return (
    <div className="sidenav">
      <ul className="sidenav-links">
        <NavLink to="/timetable">Timetable</NavLink>
        <NavLink to="/study-material">Study Material</NavLink>
        <NavLink to="/syllabus">Syllabus</NavLink>
        <NavLink to="/marks">Marks</NavLink>
        <NavLink to="/ask-questions">Ask Questions</NavLink>
      </ul>
      <div className="bottom-icons">
        <div className="icons">icon1</div>
        <div className="icons">icon2</div>
        <div className="icons">icon3</div>
      </div>
    </div>
  );
};
