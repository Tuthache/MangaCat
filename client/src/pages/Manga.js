import React, { useState, useEffect } from "react";
import DefaultNav from "../components/DefaultNav";
import Sidebar from "../components/Sidebar";
import UserMangaModal from "../components/UserMangaModal";

const Manga = () => {
  const [user, setUser] = useState("");
  const [userMangaList, setUserMangaList] = useState([]);
  const [selectedManga, setSelectedManga] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [filteredUserMangaList, setFilteredUserMangaList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);

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
        setFilteredUserMangaList(data);
      })
      .catch((error) => {
        console.error("Error fetching manga for specified user: ", error);
      });
  }, [user.user_id]);

  useEffect(() => {
    const filteredList = userMangaList.filter((manga) => {
      const matchesSearchTerm = manga.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesGenre =
        selectedGenres.length === 0 ||
        selectedGenres.some((genre) => manga.genre.includes(genre));
      return matchesSearchTerm && matchesGenre;
    });
    setFilteredUserMangaList(filteredList);
  }, [searchTerm, selectedGenres, userMangaList]);

  const handleGenreChange = (genre) => {
    setSelectedGenres((prevSelected) =>
      prevSelected.includes(genre)
        ? prevSelected.filter((g) => g !== genre)
        : [...prevSelected, genre]
    );
  };

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
        setFilteredUserMangaList(data);
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
          <div className="p-4">
            <input
              type="text"
              placeholder="Search by Title"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              className="p-2 mb-4 w-full"
            ></input>
          </div>
          <div className="mb-4 p-4">
            <h3 className="text-white">Filter by Genre:</h3>
            <div className="flex flex-wrap">
              {[
                "Action",
                "Adventure",
                "Comedy",
                "Drama",
                "Ecchi",
                "Fantasy",
                "Horror",
                "Mahou Shoujo",
                "Mecha",
                "Music",
                "Mystery",
                "Psychological",
                "Romance",
                "Sci-fi",
                "Slice of Life",
                "Sports",
                "Supernatural",
                "Thriller",
              ].map((genre) => (
                <label key={genre} className="mr-2 text-white">
                  <input
                    type="checkbox"
                    value={genre}
                    onChange={() => handleGenreChange(genre)}
                    checked={selectedGenres.includes(genre)}
                    className="mr-1"
                  />
                  {genre}
                </label>
              ))}
            </div>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredUserMangaList.length > 0 ? (
              filteredUserMangaList.map((manga) => (
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
