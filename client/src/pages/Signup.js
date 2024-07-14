import React, { useState, useEffect } from "react";
import AboutNav from "../components/AboutNav";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSignUp = async (e) => {};

  const handleChange = async (e) => {};

  return (
    <>
      <AboutNav />
      <div className="bg-gray-700">
        <div className=" max-w-xl text-white mx-auto p-6 mt-10">
          <h1 className="text-4xl font-bold mb-8 text-center">Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <div className="flex flex-col md:flex-row mb-6">
              <div className="w-full md:w-1/2 pr-1">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Username
                </label>
                <input
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-red-300"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
