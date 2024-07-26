import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState("profile");

  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "profile") {
      navigate(`/home/profile`);
    }
  };
  return (
    <>
      <div className="w-1/4 bg-gray-200 p-4 flex items-center justify-center flex-col"></div>
    </>
  );
};

export default Sidebar;
