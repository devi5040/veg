import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import ProductCard from "./ProductCard";
import CartCard from "./CartCard";

function Cart() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const [responsed, setResponse] = useState([]);
  const getCartItems = async () => {
    if (isAuthenticated) {
      try {
        const userId = user._id;
        const response = await axios.post(
          "http://192.168.1.20:5050/api/cart/get-item",
          {
            userId,
          }
        );
        setResponse(response.data[0].products);
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    getCartItems();
  }, [responsed]);
  return (
    <div className="m-10 p-4 grid grid-cols-4 space-x-5 ">
      {responsed.length !== 0 &&
        responsed.map((item) => {
          const image = `http://192.168.1.20:5050/${item.cartItem.imageUrl}`;
          //console.log(item.cartItem.productName);
          return (
            <div
              key={item._id}
              className="p-4 border flex flex-col  rounded-md shadow-xl"
            >
              <img src={image} className="h-[30vh]" alt="image" />
              <div className="py-2 flex flex-col items-center space-y-4">
                <h2 className="text-lg">{item.cartItem.productName}</h2>
                <h2 className="text-lg">Quantity : {item.quantity}</h2>
                <h2 className="text-lg">
                  Total : {item.cartItem.productPrice * item.quantity}
                </h2>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Cart;
