import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

function AddLand() {
  const navigation = useNavigate();

  let user = useSelector((state) => state.auth.user);
  if (user === null || !user.isAdmin) {
    alert("session expired");
    navigation("/login");
    return null;
  }

  const [filename, setFileName] = useState("");
  const [land, setLand] = useState({
    city: "",
    description: "",
    area: "",
    phone: "",
    latitude: "",
    longitude: "",
    file: "",
  });

  //onChangeHandler
  const fileInput = document.querySelector("#fileInput");
  const onChangeHandler = (e) => {
    if (e.target.files && e.target.files[0] && e.target.files[0].name) {
      setFileName(e.target.files[0].name);
    }

    if (e.target.name === "file") {
      setLand((prev) => ({ ...prev, file: e.target.files[0] }));
    } else {
      setLand((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  //submit
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(land);
    try {
      const response = await axios.post(
        "http://vegshell-env.eba-7g6gygn6.ap-south-1.elasticbeanstalk.com/api/community/add-land",
        land,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Land added");
      navigation("/");
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  return (
    <div className="div w-[100vw] h-[65vh]">
      <Navbar />
      <form
        method="post"
        onSubmit={onSubmitHandler}
        className="flex flex-col justify-center items-center h-[100%]"
      >
        <input
          type="text"
          placeholder="City Name"
          name="city"
          id="city"
          onChange={onChangeHandler}
          className="border px-3 py-1 my-1 outline-none rounded-md"
        />
        <textarea
          name="description"
          id="description"
          cols="22"
          rows="5"
          className="border px-3 py-1 my-1 outline-none rounded-md"
          placeholder="Description"
          onChange={onChangeHandler}
        ></textarea>
        <input
          type="text"
          placeholder="Area of Land in Acres"
          id="area"
          name="area"
          className="border px-3 py-1 my-1 outline-none rounded-md"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="phone"
          id="phone"
          className="border px-3 py-1 my-1 outline-none rounded-md"
          placeholder="Enter Mobile Number"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="latitude"
          id="latitude"
          className="border px-3 py-1 my-1 outline-none rounded-md"
          placeholder="Latitude"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="longitude"
          id="longitude"
          className="border px-3 py-1 my-1 outline-none rounded-md"
          placeholder="Latitude"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="soil"
          id="soil"
          className="border px-3 py-1 my-1 outline-none rounded-md"
          placeholder="Soil"
          onChange={onChangeHandler}
        />
        <input
          type="file"
          name="file"
          id="fileInput"
          accept="image/*"
          onChange={onChangeHandler}
        />
        <input
          type="submit"
          value="Submit"
          name="submit"
          className="w-[14%] my-3 py-2 bg-green-300 rounded-lg"
        />
      </form>
    </div>
  );
}

export default AddLand;
