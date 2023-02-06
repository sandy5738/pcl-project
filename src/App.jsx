import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NoPageError } from "./components/404Error/NoPageError";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Notifications } from "./components/Notifications/Notifications";
import { SideNav } from "./components/SideNav/SideNav";
import { TeacherDashboard } from "./components/TeacherDashboard/TeacherDashboard";
import { Teachers } from "./components/Teachers/Teachers";
import { UserDashboard } from "./components/UserDashboard/UserDashboard";
import { Users } from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="users" element={<Users />}>
            <Route path="dashboard" element={<UserDashboard />} />
          </Route>
          <Route path="teachers" element={<Teachers />}>
            <Route path="dashboard" element={<TeacherDashboard />} />
          </Route>
          <Route path="notifications" element={<Notifications />} />
          <Route path="*" element={<NoPageError />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
