import React from "react";
import AboutNav from "../components/AboutNav";

const About = () => {
  return (
    <>
      <AboutNav />
      <div className="bg-gray-700">
        <div className="py-24 bg-red-400 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">About MangaCat</h1>
          <p className="text-lg">
            Keep track of completed manga, plan to read future manga, and rate
            manga with MangaCat.
          </p>
        </div>
        <div className="container mx-auto py-12">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl text-white font-bold mb-4">Track Manga</h2>
            <p className="text-lg text-white mb-8">
              MangaCat allows users to track and set the current status of
              different manga they may encounter throughout the site. For
              example, manga can be set to the following options: Completed,
              Planning to read, and Currently reading.
            </p>
            {/*
            <h2 className="text-2xl text-white font-bold mb-4">Plan Manga</h2>
            <p className="text-lg text-white mb-8">

            </p>
            */}
            <h2 className="text-2xl text-white font-bold mb-4">Rate Manga</h2>
            <p className="text-lg text-white mb-8">
              MangaCat features the ability to allow users to rate different
              Manga they have set to completed; allowing users to easily set
              different scores for different mangas and help MangaCat recommend
              new mangas to the user.
            </p>
            <h2 className="text-2xl text-white font-bold mb-4">
              Manga Recommendations
            </h2>
            <p className="text-lg text-white mb-8">
              MangaCat provides a recommendation feature which will recommend
              mangas which the user currently has not set as completed based
              upon metrics such as genres of previously completed manga, as well
              as ratings given to those previously completed manga.
            </p>
          </div>
        </div>
        <footer className="bg-red-400 text-white py-8 text-center">
          <div className="container mx-auto">
            <p>MangaCat: The goto Manga Cataloging Application</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
