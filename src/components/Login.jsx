import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen">
      <img
        className="absolute h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
        alt="background"
      />
      <Header /> {/* Header component with remembered styling */}
      <div className="absolute inset-0 flex justify-center items-center z-10 opacity-85">
        <div className="bg-black bg-opacity-100 rounded-lg p-8  max-w-sm ">
          <form className=" text-white ">
            <h1 className="my-1 text-3xl font-bold text-white text-center mb-6 ">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="John Doe"
                className="mt-3 w-full p-4 bg-gray-800 rounded-md outline-none "
              />
            )}
            <input
              type="email"
              placeholder="john.doe@mail.com"
              className="mt-3 w-full p-4 bg-gray-800 rounded-md outline-none "
            />
            <input
              type="password"
              placeholder="Password"
              className="mt-3 w-full p-4 bg-gray-800 rounded-md outline-none "
            />
            <button className="w-full mt-6 p-4 bg-red-600 rounded-md hover:bg-red-700">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="mx-auto mt-10 p-0 cursor-pointer w-10/12"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to StreamVerse? Sign-up Now"
                : "Already Registered? Sign-in Now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
