import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useNavigation } from "react-router-dom/dist";
import { login } from "./redux/action";
function Login() {
  const navigate = useNavigate();
  //redux
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const message = useSelector((state) => state.auth.user);
  const loader = useSelector((state) => state.auth.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [values, setValues] = useState({
    phoneNumber: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(values));
  };
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "auth/clearError" });
    }
    if (isAuthenticated) {
      alert("login success");
      if (message.isAdmin) {
        navigate("/admin/");
      } else {
        navigate("/");
      }
    }
  }, [error, dispatch, message, loader]);
  return (
    <div className="w-[100vw] h-[65vh]">
      <div className="flex flex-col justify-center items-center h-[100%]">
        <form method="post" onSubmit={submitHandler} className="flex flex-col">
          <label htmlFor="mobile" className="mb-2">
            Enter Mobile Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="mobile"
            className="border rounded-lg outline-none px-3 py-2 mb-4"
            onChange={onChangeHandler}
          />
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border rounded-lg outline-none px-3 py-2 mb-4"
            onChange={onChangeHandler}
          />
          <input
            type="submit"
            value="Login"
            className="my-4 w-[100%] bg-green-300 py-2 rounded-lg cursor-pointer"
          />
        </form>
        <div>
          <h3>
            Don't have an account? <Link>Sign Up</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Login;
