import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle my GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img className="w-40" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center p-2 rounded-full shadow-sm gap-1">
          {showGptSearch && (
            <select
              className="px-2 py-2 text-base font-medium bg-gradient-to-r from-gray-100 to-gray-300 text-gray-700 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out hover:from-gray-300 hover:to-gray-100"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-3 rounded-lg bg-indigo-600 text-white font-semibold 
            hover:bg-indigo-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage": "GPT Search"}
          </button>
          <img
            className="w-10 h-10 rounded-md border-2 border-gray-500"
            src={USER_AVATAR}
            alt="user-icon"
          />
          <button
            onClick={handleSignOut}
            className="ml-4 px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-transform duration-200 ease-in-out transform hover:scale-105"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
