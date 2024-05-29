import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import Navbar from "./Navbar";
import { Link } from "react-router-dom/dist";
import axios from "axios";

function AddProduct() {
  const navigation = useNavigate();

  let user = useSelector((state) => state.auth.user);
  if (user === null || !user.isAdmin) {
    alert("session expired");
    navigation("/login");
    return null;
  }
  const [fileName, setFileName] = useState("");
  const [products, setProducts] = useState({
    name: "",
    desc: "",
    price: "",
    file: "",
  });

  const fileInput = document.querySelector("#fileInput");

  const onChangeHandler = (e) => {
    if (e.target.files && e.target.files[0] && e.target.files[0].name) {
      setFileName(e.target.files[0].name);
    }
    if (e.target.name === "file") {
      setProducts((prev) => ({ ...prev, file: fileInput.files[0] }));
    } else {
      setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(products);
    try {
      const response = await axios.post(
        "http://192.168.1.20:5050/api/add-product",
        products,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      alert("Product added successfully");
      navigation("/admin/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[65vh] w-[100vw]">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
        <form
          method="post"
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            onChange={onChangeHandler}
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            className="border px-4 py-2 rounded-lg my-3 outline-none"
          />
          <input
            onChange={onChangeHandler}
            type="text"
            name="desc"
            placeholder="Description"
            id="desc"
            className="border px-4 py-2 rounded-lg my-3 outline-none"
          />
          <input
            onChange={onChangeHandler}
            type="text"
            name="price"
            placeholder="Price"
            id="price"
            className="border px-4 py-2 rounded-lg my-3 outline-none"
          />
          <input
            onChange={onChangeHandler}
            type="file"
            name="file"
            id="fileInput"
            accept="image/*"
            className="my-5 mx-200"
          />
          <input
            type="submit"
            name="submit"
            value="Submit"
            className="w-[100%] bg-green-200 py-2 rounded-lg"
          />
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
