import React, { useState } from "react";
import "./SignIn.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSucces,
} from "../../../redux/userSlice";
import { auth, provider } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import GoogleIcon from '@mui/icons-material/Google';

const SignIn = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch(); // ----------------------react-redux

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart()); // ----------------we have to pass a payload but this doesnt have any payload
    try {
      const res = await axios.post(
        "/api/auth/signin",
        { name, password },
        { withCredentials: true }
      );
      dispatch(loginSucces(res.data)); //--------------------we passed a payload here
      navigate(`/`);
    } catch (err) {
      dispatch(loginFailure());
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/auth/signup",
        { name, email, password },
        { withCredentials: true }
      );
      dispatch(loginSucces(res.data)); //--------------------we passed a payload here
      navigate(`/`);
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user.email)
        axios
          .post(
            "/api/auth/google",
            {
              name: result.user.displayName,
              email: result.user.email,
              img: result.user.photoURL,
            },
            // { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data)
            dispatch(loginSucces(res.data));
          });
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };

  return (<>
    <div className="signgoogle">
      <button className="buttongoogle" onClick={signInWithGoogle}> <GoogleIcon style={{backgroundColor:"transparent"}}/> Sign In with google</button>
    </div>
    <div className="maincontent">
      <div className="SignContainer">
        <h1>SignIn</h1>
        <div className="form">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>SignIn</button>
        </div>
      </div>

      <div className="SignContainer">
        <h1>SignUp</h1>
        <div className="form">
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="name"
            id=""
            placeholder="UserName"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignUp}>SignUp</button>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default SignIn;
