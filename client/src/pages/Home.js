import React, { useState, useEffect } from "react";
import DefaultNav from "../components/DefaultNav";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/userInfo", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Response received: ", response);
          return response.json();
        } else {
          console.error("Failed to fetch user data");
        }
      })
      .then((data) => {
        console.log("Data received: ", data);
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, []);

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
