import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);

    if (message) return;

    // Sign-In / Sign-Up the user

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
              );
              navigate("/browse");
            })
            .catch((error) => {
              seterrorMessage(error.message);
              navigate("/error");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " -> " + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " -> " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen">
      <img
        className="absolute h-full w-full object-cover opacity-90"
        src={BACKGROUND_IMG}
        alt="background"
      />
      <Header /> {/* Header component with remembered styling */}
      <div className="absolute inset-0 flex justify-center items-center z-10 opacity-95">
        <div className="bg-black bg-opacity-100 rounded-lg p-8  max-w-sm ">
          <form className=" text-white " onSubmit={(e) => e.preventDefault()}>
            <h1 className="my-1 text-3xl font-semibold text-white text-center mb-6 ">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="John Doe"
                className="mt-3 w-full p-4 bg-gray-800 rounded-md outline-none "
              />
            )}
            <input
              ref={email}
              type="email"
              placeholder="john.doe@gmail.com"
              className="mt-3 w-full p-4 bg-gray-800 rounded-md outline-none "
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="mt-3 w-full p-4 bg-gray-800 rounded-md outline-none "
            />
            {errorMessage && (
              <p className="mt-3 text-lg font-semibold text-gray-900 bg-white border-l-4 border-red-400 rounded-lg p-2 shadow-md">
                {errorMessage}
              </p>
            )}
            <button
              className="w-full mt-6 p-4 bg-red-600 rounded-md hover:bg-red-700"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="mx-auto mt-5 p-0 cursor-pointer w-10/12"
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
