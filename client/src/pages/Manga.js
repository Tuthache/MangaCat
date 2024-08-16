import React, { useState, useEffect } from "react";
import DefaultNav from "../components/DefaultNav";
import Sidebar from "../components/Sidebar";
import UserMangaModal from "../components/UserMangaModal";

const Manga = () => {
  const [user, setUser] = useState("");
  const [userMangaList, setUserMangaList] = useState([]);
  const [selectedManga, setSelectedManga] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

    fetch(
      `http://localhost:8000/usermanga/getUserManga?user_id=${user.user_id}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Response received: ", response);
          return response.json();
        }
      })
      .then((data) => {
        setUserMangaList(data);
      })
      .catch((error) => {
        console.error("Error fetching manga for specified user: ", error);
      });
  }, [user.user_id]);

  const handleMangaClick = (manga) => {
    setSelectedManga(manga);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedManga(null);
  };

  const handleSave = () => {
    // Fetch updated list or update the local state if needed
    fetch(
      `http://localhost:8000/usermanga/getUserManga?user_id=${user.user_id}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setUserMangaList(data);
      })
      .catch((error) => {
        console.error("Error fetching updated manga list: ", error);
      });
  };

  return (
    <div className="flex flex-col h-screen">
      <DefaultNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar user={user} className="w-1/4" />
        <div className="w-3/4 flex-1 bg-gray-700 overflow-y-auto">
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {userMangaList.length > 0 ? (
              userMangaList.map((manga) => (
                <div
                  key={manga.manga_id}
                  onClick={() => handleMangaClick(manga)}
                  className="mb-2 text-center text-white bg-red-400 rounded-lg shadow p-4 hover:bg-red-500 cursor-pointer"
                >
                  <p>Title: {manga.title}</p>
                  <p>Status: {manga.reading_status}</p>
                  <p>Rating: {manga.manga_rating}</p>
                </div>
              ))
            ) : (
              <p className="text-white text-center">No manga found</p>
            )}
          </div>
        </div>
      </div>
      {selectedManga && (
        <UserMangaModal
          user={user}
          manga={selectedManga}
          isOpen={isModalOpen}
          onClose={closeModal}
          onRemove={handleSave}
          onSave={handleSave}
        />
      )}
    </div>
  );
};
export default Manga;
