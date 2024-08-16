import React, { useState, useEffect } from "react";

const UserMangaModal = ({ user, manga, isOpen, onClose, onRemove, onSave }) => {
  const [readingStatus, setReadingStatus] = useState(manga.readingStatus || "");
  const [rating, setRating] = useState(manga.rating || 0);

  useEffect(() => {
    if (manga) {
      setReadingStatus(manga.readingStatus || "");
      setRating(manga.rating || 0);
    }
  }, [manga]);

  const handleRemove = async () => {
    const body = {
      user_id: user.user_id,
      manga_id: manga.manga_id,
    };
    try {
      const response = await fetch("http://localhost:8000/usermanga/remove", {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        console.log("Response received: ", response);
        onRemove(manga.manga_id);
        onClose();
      } else {
        console.error("Error removing manga");
      }
    } catch (error) {
      console.error("Error removing manga from user list (frontend): ", error);
    }
  };

  const handleRatingUpdate = async () => {
    const body = {
      user_id: user.user_id,
      manga_id: manga.manga_id,
      manga_rating: rating !== "" ? rating : 0,
    };
    try {
      const response = await fetch("http://localhost:8000/usermanga/rate", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        console.log("Response received: ", response);
      } else {
        console.error("Error updating status of manga");
      }
    } catch (error) {
      console.error("Error updating status for user manga: ", error);
    }
  };

  const handleReadingStatusUpdate = async () => {
    const body = {
      user_id: user.user_id,
      manga_id: manga.manga_id,
      reading_status: readingStatus || "",
    };
    try {
      const response = await fetch("http://localhost:8000/usermanga/status", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        console.log("Response received: ", response);
      } else {
        console.error("Error updating status of manga");
      }
    } catch (error) {
      console.error("Error updating reading status of manga: ", error);
    }
  };

  const handleSave = async () => {
    await handleReadingStatusUpdate();
    await handleRatingUpdate();
    onSave();
    onClose();
  };

  const isSaveDisabled = !readingStatus;

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">{manga.title}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Reading Status:</label>
          <select
            value={readingStatus}
            onChange={(e) => setReadingStatus(e.target.value)}
            className="w-full mt-1 p-2 bg-gray-700 text-white rounded-md"
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="Currently Reading">Currently Reading</option>
            <option value="Completed">Completed</option>
            <option value="Dropped">Dropped</option>
            <option value="Plan to Read">Plan to Read</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Rating:</label>
          <input
            type="number"
            min={0}
            max={10}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full mt-1 p-2 bg-gray-700 text-white rounded-md"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className={`px-4 py-2 rounded mr-2 ${
              isSaveDisabled ? "bg-gray-500" : "bg-red-500"
            } text-white`}
            disabled={isSaveDisabled}
          >
            Save
          </button>
          <button
            onClick={handleRemove}
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          >
            Remove
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserMangaModal;
