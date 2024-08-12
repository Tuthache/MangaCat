import React, { useState, useEffect } from "react";
import DefaultNav from "../components/DefaultNav";
import Sidebar from "../components/Sidebar";

const MangaList = () => {
  const [user, setUser] = useState({});
  const [mangaList, setMangaList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/userInfo", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Response received: ", response);
          return response.json();
        }
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });

    fetch("http://localhost:8000/api/getAllManga", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Response received: ", response);
          return response.json();
        } else {
          console.error("Error retrieving response for getAllManga");
        }
      })
      .then((data) => {
        setMangaList(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <DefaultNav />
      <div className="flex flex-1">
        <Sidebar user={user} />
        <div className="flex-1 bg-gray-700">{/* Main content goes here */}</div>
      </div>
    </div>
  );
};

export default MangaList;
