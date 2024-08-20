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
        <div className="flex-1 bg-gray-700">
          <div className="container mx-auto py-12">
            <div className="max-w-3xl mx-auto px-4 p-24">
              <h2 className="text-2xl text-white font-bold mb-4">
                Track Manga
              </h2>
              <p className="text-lg text-white mb-8">
                MangaCat allows users to track and set the current status of
                different manga they may encounter throughout the site. For
                example, manga can be set to the following options: Completed,
                Planning to read, and Currently reading.
              </p>

              <h2 className="text-2xl text-white font-bold mb-4">List Manga</h2>
              <p className="text-lg text-white mb-8">
                MangaCat offers a wide catalog of mangas ranging through
                different genres. Users are able to interact with all these
                mangas as well as having their own personalized list of
                completed manga. Users are able to remove and add mangas onto
                their personalized list.
              </p>

              <h2 className="text-2xl text-white font-bold mb-4">Rate Manga</h2>
              <p className="text-lg text-white mb-8">
                MangaCat features the ability to allow users to rate different
                Manga they have set to completed; allowing users to easily set
                different scores for different mangas and help MangaCat
                recommend new mangas to the user.
              </p>
              <h2 className="text-2xl text-white font-bold mb-4">
                Manga Recommendations
              </h2>
              <p className="text-lg text-white mb-8">
                MangaCat provides a recommendation feature which will recommend
                mangas which the user currently has not set as completed based
                upon metrics such as genres of previously completed manga, as
                well as ratings given to those previously completed manga. In
                the future we plan to add the function of allowing users have a
                "genre" of recommendations to be removed from future
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
