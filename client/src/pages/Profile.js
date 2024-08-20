import React, { useState, useEffect } from "react";
import DefaultNav from "../components/DefaultNav";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  const [user, setUser] = useState("");
  const [userFetched, setUserFetched] = useState(false);
  const [completedMangaCount, setCompletedMangaCount] = useState(0);
  const [plannedMangaCount, setPlannedMangaCount] = useState(0);
  const [currentMangaCount, setCurrentMangaCount] = useState(0);

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
        setUserFetched(true);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, []);

  useEffect(() => {
    if (userFetched && user && user.user_id) {
      fetch(
        `http://localhost:8000/usermanga/getCompletedManga?user_id=${user.user_id}`,
        {
          method: "GET",
          credentials: "include",
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Failed to fetch completed manga count");
        })
        .then((data) => {
          setCompletedMangaCount(data);
        })
        .catch((error) => {
          console.error(
            "Error fetching count of completed manga for user: ",
            error
          );
        });

      fetch(
        `http://localhost:8000/usermanga/getPlannedManga?user_id=${user.user_id}`,
        {
          method: "GET",
          credentials: "include",
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Failed to fetch planned manga count");
        })
        .then((data) => {
          setPlannedMangaCount(data);
        })
        .catch((error) => {
          console.error(
            "Error fetching count of planned manga for user: ",
            error
          );
        });

      fetch(
        `http://localhost:8000/usermanga/getCurrentManga?user_id=${user.user_id}`,
        {
          method: "GET",
          credentials: "include",
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Failed to fetch current manga count");
        })
        .then((data) => {
          setCurrentMangaCount(data);
        })
        .catch((error) => {
          console.error(
            "Error fetching count of currently reading manga for user: ",
            error
          );
        });
    }
  }, [user.user_id]);

  return (
    <div className="flex flex-col h-screen">
      <DefaultNav />
      <div className="flex flex-1">
        <Sidebar user={user} />
        <div className="flex-1 bg-gray-700 p-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-red-500 text-white text-center p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Completed</h3>
              <p className="text-2xl">{completedMangaCount}</p>
            </div>
            <div className="bg-blue-500 text-white text-center p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Planned</h3>
              <p className="text-2xl">{plannedMangaCount}</p>
            </div>
            <div className="bg-green-500 text-white text-center p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Currently Reading</h3>
              <p className="text-2xl">{currentMangaCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
