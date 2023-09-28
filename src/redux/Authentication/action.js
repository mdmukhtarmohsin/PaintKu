import axios from "axios";
import { LOGIN_FAILURE, LOGIN_RQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "./actionTypes";

export const login = (user_data) =>  (dispatch) => {
  dispatch({ type: LOGIN_RQUEST });

  return axios
    .post(`https://64b65d04df0839c97e156cc4.mockapi.io/users`, user_data)
    .then((res) => {
      // console.log(res);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data }).then((res) => {
        console.log(res.data)
      })
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
    });
};



export const signup = (user) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });

  return axios
    .post(`https://64b65d04df0839c97e156cc4.mockapi.io/users`, user)
    .then((res) => {
      console.log(res.data);

      dispatch({ type: SIGNUP_SUCCESS, payload: res.data});
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_FAILURE });
    });
};


// eve.holt@reqres.in