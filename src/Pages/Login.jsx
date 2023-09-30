import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import styled from "styled-components";
import { login } from "../redux/Authentication/action";


function Login() {


  const [email, setemail] = useState("");
  const [password, setpasssword] = useState("");
  const dispatch = useDispatch();

  const { isAuth, Email, Name, Password } = useSelector((store) => {
    console.log(store);
    return {
      isAuth: store.authReducer.isAuth,
      Email: store.authReducer.user.email,
      Name: store.authReducer.user.name,
      Password: store.authReducer.user.password

    };
  });
  // console.log(isAuth);

  const handle_submit = (e) => {
    e.preventDefault();
    let user_data = {
      email,
      password,
    };
    // console.log(user_data);

    if (user_data.email == Email && user_data.password == Password) {

      dispatch(login(user_data))
    }

  };


  return (
    <DIV auth={isAuth} className="loginpage">

      <h1>Login</h1>

      {/* <h2>{isAuth ? "Login Successfull" : "Login to Continue"}</h2> */}



      <form onSubmit={(e) => handle_submit(e)}>
        <input
          type="email"
          placeholder="Enter email "
          name="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={(e) => setpasssword(e.target.value)}
        />

        <button type="submit">Login</button>

      </form>
    </DIV>
  );
}




const DIV = styled.div`

 h2 {
  color : ${({ auth }) => (auth ? "green" : "red")}
}

 input {
  padding: 8px;
  border-radius: 4px;
  border: ${({ err }) => (err ? "1px solid red" : "1px solid grey")}
}
`

export default Login