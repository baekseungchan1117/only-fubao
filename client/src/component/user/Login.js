import React from "react";
import "./User.css";

export default function Login() {
  return (
    <>
      <div class="wrapper">
        <form class="form-signin">
          <h1 class="form-signin-heading">login</h1>
          <div class="inputs">
            <div class="input">
              <label class="info">Email: </label>
              <input
                type="text"
                class="form-control"
                name="email"
                placeholder="Email Address"
                required=""
                autofocus=""
              />
            </div>
            <div class="input">
              <label class="info">PW: </label>
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                required=""
              />
            </div>
          </div>
          <br />
          <label class="checkbox">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember me
          </label>
          <button class="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
