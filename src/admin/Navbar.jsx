import React from "react";
import { Link } from "react-router-dom/dist";

function Navbar() {
  return (
    <div className="absolute top-[12vh] left-0 w-[20vw] bg-green-100 h-[65vh]">
      <div className="flex flex-col items-center space-y-10 text-lg font-semibold my-20">
        <Link
          to="/admin/add-product"
          className="border w-[150px] justify-center flex py-2 border-gray-500"
        >
          Add Products
        </Link>
        <Link
          to="/admin/add-equipment"
          className="border w-[150px] justify-center flex py-2 border-gray-500"
        >
          Add Equipments
        </Link>
        <Link
          to="/admin/add-tutorial"
          className="border w-[150px] justify-center flex py-2 border-gray-500"
        >
          Add Tutorials
        </Link>
        <Link
          to="/admin/add-land"
          className="border w-[150px] justify-center flex py-2 border-gray-500"
        >
          Add Lands
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
