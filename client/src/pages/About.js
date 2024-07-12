import React from "react";
import AboutNav from "../components/AboutNav";

const About = () => {
  return (
    <>
      <AboutNav />
      <div className="bg-gray-100">
        <div className="py-24 bg-blue-600 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">About Our Expense Tracker</h1>
          <p className="text-lg">
            Simplify your finances, track your expenses, and achieve your
            financial goals with our intuitive expense tracker app.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
