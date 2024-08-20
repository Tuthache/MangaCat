import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ user }) => {
  const [activeButton, setActiveButton] = useState("");

  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "profile") {
      navigate(`/profile`, { state: { user: user } });
    } else if (buttonName === "options") {
      navigate(`/options`, { state: { user: user } });
    }
  };
  return (
    <>
      <div className="w-1/4 bg-gray-600 p-4 flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-800 rounded-full w-32 h-32 flex items-center justify-center mb-2">
            <img
              src={require("../img/FOUR.PNG")}
              alt="Profile Picture"
              className="w-26 h-26 rounded-full"
            />
          </div>
          <p className="text-center text-2xl font-bold text-white">
            {user.username}
          </p>
          <button
            className={`w-40 mt-10 py-2 px-2 mb-4 rounded font-bold ${
              activeButton === "profile"
                ? "bg-red-600"
                : "bg-red-300 hover:bg-red-600"
            } text-white`}
            onClick={() => handleButtonClick("profile")}
          >
            My Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
