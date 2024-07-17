import React, { useState, useEffect } from "react";
import AboutNav from "../components/AboutNav";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch("http://local:8000/signup", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        setSignupSuccess(true);
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error("Error during signup: ", error);
    }
  };

  useEffect(() => {
    if (signupSuccess) {
      navigate("/login");
    }
  }, [signupSuccess, navigate]);

  return (
    <>
      <AboutNav />
      <div className="bg-gray-700 min-h-screen flex items-center justify-center pb-40">
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
                  className="border border-gray-300 text-black rounded-lg px-3 py-2 w-full focus:outline-none focus:border-red-300"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 pl-1">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="border border-gray-300 text-black rounded-lg px-3 py-2 w-fill focus:outline-none focus:border-red-300"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border border-gray-300 text-black rounded-lg px-3 py-2 w-full focus:outline-none focus:border-red-300"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-8">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="confirmpassword"
              >
                Confirm Password
              </label>
              <input
                className="border border-gray-300 text-black rounded-lg px-3 py-2 w-full focus:outline-none focus:border-red-300"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-red-300 hover:bg-red-700 active:bg-red-100 text-white font-bold py-3 px-6 rounded"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
