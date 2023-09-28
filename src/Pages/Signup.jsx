import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/Authentication/action";
import Login from "./Login";

function Signup() {
  const [show, setshow] = useState(true);

  const { isAuth } = useSelector((store) => {
    console.log(store);
    return {
      isAuth: store.authReducer.isAuth,
    };
  });

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  const dispatch = useDispatch();

  // https://64b65d04df0839c97e156cc4.mockapi.io/users

  const uservlaue = (e) => {
    setname(e.target.value);
  };

  const email_val = (e) => {
    setemail(e.target.value);
  };

  const pass_val = (e) => {
    setpassword(e.target.value);
  };

  const signform = (e) => {
    e.preventDefault();
    // console.log(email , password, name)

    let user = {
      email: email,
      password: password,
      name: name,
    };
    // console.log(user)
    dispatch(signup(user));

    // setshow(!show);
  };

  return (
    <div className="abcd signup-page">
      {show ? (
        <div className="signupage loginpage">
          <h1> Signup</h1>
          <form onSubmit={(e) => signform(e)}>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => uservlaue(e)}
              name="name"
              value={name}
            />
            <input
              type="email"
              placeholder="email"
              onChange={(e) => email_val(e)}
              name="email"
              value={email}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => pass_val(e)}
              name="password"
              value={password}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Signup;
