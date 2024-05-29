import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-between px-20 bg-green-100 p-10">
      <div className="flex flex-col">
        <h5 className="text-2xl font-bold">VEGSHELL</h5>
        <p className="text-ms">Agriculture with Difference</p>
      </div>
      <div className="col-span-2 p-6">
        <ul className="items-center flex space-x-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <div className="flex space-x-6 p-6 justify-center">
        <a href="">
          <i className="bi bi-instagram text-2xl"></i>
        </a>
        <a href="">
          <i className="bi bi-whatsapp text-2xl"></i>
        </a>
        <a href="">
          <i className="bi bi-twitter text-2xl"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
