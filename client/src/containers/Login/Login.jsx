import React from "react";
import "./Login.scss";
const Login = (props) => {
  return (
    <div className="login-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="brand">LOGIN PAGE</div>
            <div className="details">
              Hello and welcome to our technology community! We are so glad you
              decided to join us and share your passion for all things tech. Our
              community is a place where you can learn, connect, and collaborate
              with other tech enthusiasts from around the world. Whether you are
              interested in coding, design, gaming, AI, or anything else related
              to technology, you will find something here for you. As a new
              member, we encourage you to: Introduce yourself in the
              #introductions channel and tell us a bit about yourself and your
              tech interests.
            </div>
          </div>
          <div className="content-right col-12 col-sm-5 green d-flex flex-column gap-3 py-3">
            <div className="brand d-sm-none">LOGIN PAGE</div>
            <input
              type="text"
              className="form-control"
              placeholder="Email addres or phone number"
            />
            <input
              type="password"
              className="form-control"
              placeholder="password"
            />
            <button className="btn btn-primary">Login</button>
            <span className="text-center">
              <a className="forgot-password" href="facebook.com">
                Forgot your password
              </a>
            </span>
            <hr />
            <div className="text-center">
              <button className="btn-create">Create new account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
