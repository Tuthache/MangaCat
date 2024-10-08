import React from "react";

const DefaultNav = () => {
  return (
    <nav className="flex justify-between items-center bg-red-300 text-white p-4 py-10">
      <div className="text-xl font-bold">
        <a href="/home">
          <img
            src={require("../img/Cat.PNG")}
            alt="MangaCat"
            className="w-30 h-20 rounded-lg"
          ></img>
        </a>
      </div>
      <div>
        <a href="/recommendation" className="mx-8 text-xl hover:text-gray-400">
          Recommendations
        </a>
        <a href="/mangalist" className="mx-8 text-xl hover:text-gray-400">
          Manga Catalog
        </a>
        <a href="/manga" className="mx-8 text-xl hover:text-gray-400">
          My Manga
        </a>
      </div>
      <div>
        <a href="/" className="mx-8 text-xl hover:text-gray-400">
          Log out
        </a>
      </div>
    </nav>
  );
};
export default DefaultNav;
