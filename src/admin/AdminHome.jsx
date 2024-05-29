import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import Navbar from "./Navbar";
import { Link } from "react-router-dom/dist";

function AdminHome() {
  const navigation = useNavigate();
  let user = useSelector((state) => state.auth.user);
  if (user === null || !user.isAdmin) {
    alert("session expired");
    navigation("/login");
    return null;
  }
  return (
    <div className="w-[100vw] h-[65vh]">
      <Navbar />
      <div className="flex justify-center items-center w-[100%] h-[100%]">
        <h4 className="mx-auto text-center font-bold text-8xl">Welcome</h4>
      </div>
    </div>
  );
}

export default AdminHome;
