import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Following from "./pages/Following";
import Followers from "./pages/Followers";
import PrivateRoute from "./components/PrivateRoute";
import LoginError from "./components/LoginError";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/:username/following" element={<Following />} />
        <Route path="/:username/followers" element={<Followers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/loginerror" element={<LoginError />} />
      </Routes>
    </div>
  );
}

export default App;
