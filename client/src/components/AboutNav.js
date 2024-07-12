import React from "react";

const AboutNav = () => {
  return (
    <nav className="flex justify-between items-center bg-red-300 text-white p-4 py-10">
      <div className="text-xl font-bold">
        <a href="/">MangaCat</a>
      </div>
      <div>
        <a href="/login" className="mx-8 text-xl hover:text-gray-400">
          Login
        </a>
        <a href="/signup" className="mx-8 text-xl hover:text-gray-400">
          Sign Up
        </a>
      </div>
    </nav>
  );
};
export default AboutNav;
