import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">notDoscord</span>
      <div className="divider">|</div>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <div className="texts">
          <span>{currentUser.displayName}</span>
          <button onClick={() => signOut(auth)}>Log out</button>
        </div>
      </div>
    </div>
  );
};
