import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Manga from "./pages/Manga";
import Recommendation from "./pages/Recommendation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/recommendation" element={<Recommendation />} />
      </Routes>
    </Router>
  );
}

export default App;
