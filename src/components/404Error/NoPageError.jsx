import { useNavigate } from "react-router-dom";
import "./NoPageError.css";
export const NoPageError = () => {
  const navigate = useNavigate();
  return (
    <div className="nopage-error-container">
      <h1>Oopsie! Where did the page go?</h1>
      <button onClick={() => navigate("/")}>Let's go home!</button>
    </div>
  );
};
