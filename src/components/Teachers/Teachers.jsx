import { Outlet, useNavigate } from "react-router-dom";
import "./Teachers.css";

export const Teachers = () => {
  const navigate = useNavigate();
  return (
    <div className="teachers-container">
      <h1>Bonjour Teachers!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        quisquam?
      </p>
      <button onClick={() => navigate("/teachers/dashboard")}>
        Go to dashboard
      </button>
      <Outlet />
    </div>
  );
};
