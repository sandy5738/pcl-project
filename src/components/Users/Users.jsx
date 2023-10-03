import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./Users.css";

export const Users = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <div className="users-container">
      <h1>Welcome fellas!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        quisquam?
      </p>
      <p>{location.pathname}</p>
      <button onClick={() => navigate("/users/dashboard")}>
        Go to dashboard
      </button>
      <Outlet />
    </div>
  );
};
