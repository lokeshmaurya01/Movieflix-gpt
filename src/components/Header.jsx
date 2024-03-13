import React from "react";
import logo from "../utils/images/MOVIE.png";
import signin from "../utils/images/Signin.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
  return (
    <div className="absolute w-screen overscroll-none p-2 bg-gradient-to-b from-black z-10 flex justify-between  ">
      <img className="scale-70 ml-4  my-2" src={logo} alt="" />

      {user && (
        <div className="flex mr-8 ">
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
