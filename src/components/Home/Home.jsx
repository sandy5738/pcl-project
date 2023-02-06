import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import "./Home.css";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <section className="home-hero">
        <div className="left">
          <h1>Let's get started!</h1>
        </div>
        <div className="right">
          <button onClick={() => navigate("/users")}>Students</button>
          <button onClick={() => navigate("/teachers")}>Teachers</button>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h3>Feature 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, modi?
          </p>
        </div>
        <div className="feature">
          <h3>Feature 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, modi?
          </p>
        </div>
        <div className="feature">
          <h3>Feature 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, modi?
          </p>
        </div>
      </section>
    </div>
  );
};
