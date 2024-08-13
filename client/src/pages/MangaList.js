import React, { useState, useEffect } from "react";
import DefaultNav from "../components/DefaultNav";
import Sidebar from "../components/Sidebar";

const MangaList = () => {
  const [user, setUser] = useState({});
  const [mangaList, setMangaList] = useState([]);

  const handleMangaClick = async () => {};

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
      .catch((error) => {
        console.error(
          "Error getting manga to be displayed for manga catalog, ",
          error
        );
      });
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <DefaultNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar user={user} className="w-1/4" />
        <div className="w-3/4 flex-1 bg-gray-700 overflow-y-auto">
          <div className="p-4 grid grid-cols-3 gap-4">
            {mangaList.map((manga) => (
              <div
                key={manga.manga_id}
                onClick={() => handleMangaClick(manga)}
                className="mb-2 text-center text-white bg-red-400 rounded-lg shadow p-4 hover:bg-red-500 cursor-pointer"
              >
                <p>Title: {manga.title}</p>
                <p>Author: {manga.author}</p>
                <p>Genre: {manga.genre}</p>
                <p>Status: {manga.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangaList;
