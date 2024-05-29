import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";

function CartCard({ item }) {
  console.log(item);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const image = `http://192.168.1.20:5050/${item.imageUrl}`;

  return (
    <div className="p-4 border flex flex-col  rounded-md shadow-xl">
      <img src={image} className="h-[30vh]" alt="image" />
      <div className="py-2 flex flex-col items-center space-y-4">
        <h2 className="text-lg">{item.productName}</h2>
        <h2 className="text-lg"></h2>
        <h2 className="text-lg">{item.productPrice}</h2>
      </div>
      <div className="flex justify-center gap-5 my-4">
        <i className="bi bi-plus" onClick={increment}></i>
        <h3 className="border px-2">{count}</h3>
        <i className="bi bi-dash" onClick={decrement}></i>
      </div>
      <div className="grid grid-cols-2 space-x-3 my-2">
        <button className="px-4 py-2 bg-green-300 rounded-md hover:bg-light">
          <button className="cursor-pointer" onClick={addCartHandler}>
            Add to Cart
          </button>
        </button>
        <button className="px-4 py-2 bg-green-300 rounded-md hover:bg-light">
          <Link>Order Now</Link>
        </button>
      </div>
    </div>
  );
}

export default CartCard;
