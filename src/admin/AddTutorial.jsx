import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
function AddTutorial() {
  const navigation = useNavigate();

  let user = useSelector((state) => state.auth.user);
  if (user === null || !user.isAdmin) {
    alert("session expired");
    navigation("/login");
    return null;
  }
  const [filename, setFileName] = useState("");
  const [tutorial, setTutorial] = useState({
    name: "",
    description: "",
    time: "",
    file: "",
  });

  //onChangeHandler
  const fileInput = document.querySelector("#fileInput");
  const onChangeHandler = (e) => {
    if (e.target.files && e.target.files[0] && e.target.files[0].name) {
      setFileName(e.target.files[0].name);
    }

    if (e.target.name === "file") {
      setTutorial((prev) => ({ ...prev, file: e.target.files[0] }));
    } else {
      setTutorial((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  //submit
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(tutorial);
    try {
      const response = await axios.post(
        "http://vegshell-env.eba-7g6gygn6.ap-south-1.elasticbeanstalk.com/api/tutorial/add-tutorial",
        tutorial,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      alert("Tutorial added");
      navigation("/admin/");
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  return (
    <div className="div h-[65vh] w-[100vw]">
      <Navbar />
      <form
        method="post"
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center justify-center w-[100%] h-[100%] space-y-3"
      >
        <input
          type="text"
          placeholder="Course Name"
          name="name"
          id="name"
          onChange={onChangeHandler}
          className="border px-3 py-1 rounded-md outline-none"
        />
        <textarea
          name="description"
          id="description"
          cols="22"
          rows="5"
          placeholder="Description"
          className="border px-3 py-1 rounded-md outline-none"
          onChange={onChangeHandler}
        ></textarea>
        <input
          type="text"
          placeholder="Time"
          id="time"
          name="time"
          className="border px-3 py-1 rounded-md outline-none"
          onChange={onChangeHandler}
        />
        <input
          type="file"
          name="file"
          id="fileInput"
          accept="video/*"
          onChange={onChangeHandler}
        />
        <input
          type="submit"
          value="Submit"
          name="submit"
          className="w-[14%] my-3 py-2 bg-green-300 rounded-lg cursor-pointer"
        />
      </form>
    </div>
  );
}

export default AddTutorial;
