import React, { useState, useEffect } from "react";
import AboutNav from "../components/AboutNav";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    input: "",
    password: "",
  });

  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://local:8000/login", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        setLoginSuccess(true);
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error("Error during login: ", error);
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      navigate("/home");
    }
  }, [loginSuccess, navigate]);

  return (
    <>
      <AboutNav />
      <div className="bg-gray-700 min-h-screen flex items-center justify-center pb-40">
        <div className=" max-w-xl text-white mx-auto p-6">
          <h1 className="text-4xl font-bold mb-8 text-center">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="input"
              >
                Username or Email
              </label>
              <input
                className="border border-gray-300 text-black rounded-lg px-3 py-2 w-full focus:outline-none focus:border-red-300"
                type="text"
                id="input"
                name="input"
                placeholder="Username or Email"
                value={formData.input}
                onChange={handleChange}
              />
            </div>
            <div className="mb-8">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="confirmpassword"
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

            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-red-300 hover:bg-red-700 active:bg-red-100 text-white font-bold py-3 px-6 rounded"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
