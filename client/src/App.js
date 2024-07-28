import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Manga from "./pages/Manga";
import MangaList from "./pages/MangaList";
import Recommendation from "./pages/Recommendation";
import Profile from "./pages/Profile";
import Options from "./pages/Options";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/*User profile and maybe some highlights*/}
        <Route path="/manga" element={<Manga />} /> {/*User's own mangalist */}
        <Route path="/mangalist" element={<MangaList />} />
        {/*Site's mangalist */}
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/options" element={<Options />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
