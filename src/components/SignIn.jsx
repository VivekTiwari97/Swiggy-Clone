/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./login.css";

const SignIn = () => {
  return (
    <div className="login-page">
      <div className="login-page2">
        <div>
          <h2>Login with Secure</h2> <br />
          <form className="form">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="form-inner">
              <h2>LOGIN</h2>
              <div className="content">
                <input className="inputt" type="text" placeholder="Username" />
                <input
                  className="inputt"
                  type="password"
                  placeholder="Password"
                />
                <button className="btn">LOGIN</button>
              </div>
            </div>
          </form>
          <p className="reset-password-link">
            <a href="#">Forgot password?</a>
          </p>
          <button className="btn" type="submit">
            Login with Gmail
          </button>
        </div>
      </div>
      <div className="login-page2">
      <div>
        <img
          className="img_edit"
          src="https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
          alt="Login Image"
        />
      </div>
      </div>
    </div>
  );
};

export default SignIn;
