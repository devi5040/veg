import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-green-100 h-[12vh] w-[100%] flex justify-between p-5 items-center px-12">
      <div className="">
        <h2 className="text-4xl font-bold gap-2">
          <Link to="/">VEGSHELL</Link>
        </h2>
      </div>
      <nav className="m-10">
        <ul className="flex space-x-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
