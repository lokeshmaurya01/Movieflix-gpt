import React, { useEffect } from "react";
import logo from "../utils/images/MOVIE.png";
import signin from "../utils/images/Signin.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //User is Signed In
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); //unsubscribe when component unmounts;
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGptSearchClick = () => {
    //Toggle GPT Search Function
    dispatch(toggleGptSearchView());
  };
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  return (
    <div className="absolute w-99vw overscroll-none p-2 bg-gradient-to-b from-black z-10 flex justify-between  ">
      <img className="scale-70 ml-4  my-2" src={logo} alt="" />

      {user && (
        <div className="flex mr-8 ">
          <div
            className="text-white py-3 px-4 my-auto mx-3 bg-purple-600 rounded-xl"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT-search"}
          </div>
          <div className="bg-red-600 w-12 h-12 mt-4 rounded-3xl shadow-black shadow-sm">
            <img className="rounded-3xl" src={user.photoURL} alt="SignIn" />
          </div>
          <button onClick={handleSignOut} className="ml-4 font-bold text-white">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
