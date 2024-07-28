import React, { useState, useEffect } from "react";
import DefaultNav from "../components/DefaultNav";
import Sidebar from "../components/Sidebar";
const Recommendation = () => {
  const [user, setUser] = useState({});
  return (
    <>
      <DefaultNav />
      <Sidebar user={user} />
    </>
  );
};

export default Recommendation;
