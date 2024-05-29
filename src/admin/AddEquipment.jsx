import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

function AddEquipment() {
  const navigation = useNavigate();

  let user = useSelector((state) => state.auth.user);
  if (user === null || !user.isAdmin) {
    alert("session expired");
    navigation("/login");
    return null;
  }
  const [filename, setFileName] = useState("");
  const [equipment, setEquipment] = useState({
    name: "",
    description: "",
    rent: "",
    type: "",
    file: "",
  });

  //onChangeHandler
  const fileInput = document.querySelector("#fileInput");
  const onChangeHandler = (e) => {
    if (e.target.files && e.target.files[0] && e.target.files[0].name) {
      setFileName(e.target.files[0].name);
    }

    if (e.target.name === "file") {
      setEquipment((prev) => ({ ...prev, file: e.target.files[0] }));
    } else {
      setEquipment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  //submit
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(equipment);
    try {
      const response = await axios.post(
        "http://vegshell-env.eba-7g6gygn6.ap-south-1.elasticbeanstalk.com/api/equipment/add-equipment",
        equipment,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Equipment added");
      navigation("/admin/");
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  return (
    <div className="w-[100vw] h-[65vh]">
      <Navbar />
      <form
        method="post"
        onSubmit={onSubmitHandler}
        className="flex flex-col justify-center items-center h-[100%]"
      >
        <input
          type="text"
          placeholder="Equipment Name"
          name="name"
          id="name"
          onChange={onChangeHandler}
          className="border px-3 py-1 my-1 outline-none rounded-md"
        />
        <textarea
          name="description"
          id="description"
          cols="22"
          rows="5"
          placeholder="Description"
          onChange={onChangeHandler}
          className="border rounded-md outline-none px-3 py-1"
        ></textarea>
        <input
          type="text"
          placeholder="Rent"
          id="rent"
          name="rent"
          onChange={onChangeHandler}
          className="border px-3 py-1 my-1 outline-none rounded-md"
        />
        <div className="flex space-x-2 items-center justify-center my-3">
          <input
            type="radio"
            name="type"
            id="per Hour"
            value="Hour"
            onChange={onChangeHandler}
          />
          <label htmlFor="per Hour">Per Hour</label>
          <input
            type="radio"
            name="type"
            id="per Day"
            value="Day"
            onChange={onChangeHandler}
          />
          <label htmlFor="per Day">Per Day</label>
        </div>
        <input
          type="file"
          name="file"
          id="fileInput"
          accept="image/*"
          onChange={onChangeHandler}
          className="mx-0"
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

export default AddEquipment;
