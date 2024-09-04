# MangaCat (Manga Catalog)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Details

This project creates a Manga Catalog which will pull different mangas from the Anilist API and allow users to keep track of manga they've completed. This project is built using React, Node, and MySQL.

Install the required dependencies using **npm install**, make sure to have a MySQL database named "mangacat". The required tables will be automatically created. To run the application navigate into the server directory and run the following commands: **node server.js** and **curl -X POST http://localhost:8000/api/populate** in a separate CMD navigate to the client directory and run the following command: **npm start**

## Overview

Welcome to MangaCat! This project aims to provide its users with the ability to easily track manga they've planned to read, are currently reading, or have already completed. This project also aims to allow users to rate manga they have previously interacted with. This project currently contains 1000 of the most popular manga found on AniList which the user will be able to sift through.

## Current Implementation

Currently MangaCat gives users the basic functionality of adding manga into their manga list labeling them as **Plan to Read**, **Currently Reading**, or **Completed**. Users are also able to rate manga that they are currently reading or have completed. Users also have the ability to view their manga list containing manga they've interacted with as well as viewing the entire manga catalog stored on MangaCat.

## Future changes

MangaCat will implement a recommendation system in the future allowing users to find recommendations based upon manga they have within their mangalist. MangaCat also aims to allow users the ability to see the number of manga they've read or are currently reading based on genre. Once the recommendation feature is finished MangaCat will be published to the web with full functionality.
