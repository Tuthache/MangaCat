import React, { useState, useEffect } from "react";
import DefaultNav from "../components/DefaultNav";
import Sidebar from "../components/Sidebar";
const Recommendation = () => {
  const [user, setUser] = useState({});
  return (
    <div className="flex flex-col h-screen">
      <DefaultNav />
      <div className="flex flex-1">
        <Sidebar user={user} />
        <div className="flex-1 bg-gray-700">
          <div className="text-center text-white">
            WIP, working on a recommendation algorithm
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
