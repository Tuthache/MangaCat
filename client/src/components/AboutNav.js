import React from "react";

const AboutNav = () => {
  return (
    <nav className="flex justify-between items-center bg-pink-300 text-black p-4 py-10">
      <div className="text-xl font-bold">
        <a href="/">MangaCat</a>
      </div>
      <div>
        <a href="/login" className="mx-8 text-xl hover:text-red-400">
          Login
        </a>
      </div>
      <div>
        <a href="/signup" className="mx-8 text-xl hover:text-red-400">
          Sign Up
        </a>
      </div>
    </nav>
  );
};
export default AboutNav;
