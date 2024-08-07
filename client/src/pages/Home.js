import React, { useState, useEffect } from "react";
import DefaultNav from "../components/DefaultNav";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [user, setUser] = useState({});
  return (
    <div className="flex flex-col h-screen">
      <DefaultNav />
      <div className="flex flex-1">
        <Sidebar user={user} />
        <div className="flex-1 bg-white">{/* Main content goes here */}</div>
      </div>
    </div>
  );
};

export default Home;
