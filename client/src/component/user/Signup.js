import React, { useRef, useState } from "react";
import "./User.css";
import axios from "axios";
import { SERVER } from "../../lib/constant";
export default function Signup() {
  const [inputid, setInputid] = useState("");
  const [inputpw, setInputpw] = useState("");
  const [inputname, setInputname] = useState("");
  const [inputnickname, setInputnickname] = useState("");
  const [inputemail, setInputemail] = useState("");
  const idRef = useRef();
  const pwRef = useRef();
  const nameRef = useRef();
  const nicknameRef = useRef();
  const emailRef = useRef();
  const checkinput = () => {
    if (inputid.trim().length === 0) {
      idRef.current.focus();
      return false;
    }
    if (inputpw.trim().length === 0) {
      pwRef.current.focus();
      return false;
    }
    if (inputname.trim().length === 0) {
      nameRef.current.focus();
      return false;
    }
    if (inputnickname.trim().length === 0) {
      nicknameRef.current.focus();
      return false;
    }
    if (inputemail.trim().length === 0) {
      emailRef.current.focus();
      return false;
    }
    return true;
  };
  const submit = (e) => {
    e.preventDefault();
    if (!checkinput()) return;
    const user = {
      id: inputid,
      password: inputpw,
      username: inputname,
      nickname: inputnickname,
      email: inputemail,
    };
    console.log(user);
    axios({ method: "POST", url: `${SERVER}/user/signup`, data: user }).then(
      () => {
        console.log("회원가입 완료");
      }
    );
    // <link to="./Login"></link>;
  };
  return (
    <>
      <div className="wrapper">
        <form className="form-signin">
          <h1 className="form-signin-heading">Signup</h1>
          <div className="inputs">
            <div className="input">
              <label className="info">ID: </label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="ID"
                required=""
                value={inputid}
                onChange={(e) => setInputid(e.target.value)}
              />
            </div>
            <div className="input">
              <label className="info">PW: </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required=""
                value={inputpw}
                onChange={(e) => setInputpw(e.target.value)}
              />
            </div>
            <div className="input">
              <label className="info">NAME: </label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="User name"
                required=""
                value={inputname}
                onChange={(e) => setInputname(e.target.value)}
              />
            </div>
            <div className="input">
              <label className="info">
                NICK
                <br />
                NAME:{" "}
              </label>
              <input
                type="text"
                className="form-control"
                name="nickname"
                placeholder="Nick Name"
                required=""
                value={inputnickname}
                onChange={(e) => setInputnickname(e.target.value)}
              />
            </div>
            <div className="input">
              <label className="info">EMAIL: </label>
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Email Address"
                required=""
                value={inputemail}
                onChange={(e) => setInputemail(e.target.value)}
              />
            </div>
          </div>
          <br />
          <button className="btn" type="submit" onClick={submit}>
            Sign up
          </button>
          <a href="/Login"></a>
        </form>
      </div>
    </>
  );
}