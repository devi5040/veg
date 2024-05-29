import axios from "axios";
const serverUrl = "http://192.168.1.21:5050/api";

export const login = (values) => async (dispatch) => {
  try {
    dispatch({ type: "auth/loginRequest" });
    const { data } = await axios.post(`${serverUrl}/auth/login`, values);
    dispatch({ type: "auth/loginSuccess", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "auth/loginFailure",
      payload: error,
    });
  }
};

//logout
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "auth/logoutSuccess" });
  } catch (error) {
    dispatch({
      type: "auth/logoutFailure",
      payload: error,
    });
  }
};

export const getAllProduct = () => async (dispatch) => {
  try {
    const { data } = await axios.post(`${serverUrl}/get-products`);
    dispatch({ type: "product/getAllProduct", payload: data });
  } catch (error) {
    dispatch({
      type: "auth/requestFailure",
      payload: error,
    });
  }
};
