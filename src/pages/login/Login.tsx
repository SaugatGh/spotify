import React from "react";
import "./Login.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
const Login = () => {
  return (
    <div className="spotify-container">
      <div className="spotify">
        <div className="logo">
          <img
            src="https://i.pinimg.com/originals/8e/05/72/8e0572ca90458519ab7082ff0bb5def6.jpg"
            alt="spotify logo"
          />
          <h1>Spotify</h1>
        </div>
        <hr />
        <div className="login">
          <p>To continue login to spotify</p>
          <div className="loginWith">
            <button className="facebook">
              <span>
                <FacebookOutlinedIcon />
              </span>{" "}
              Continue with Facebok
            </button>
            <button className="apple">
              <AppleIcon />
              <span></span>
              Continue with Apple
            </button>
            <button className="google">
              <span>
                <GoogleIcon />
              </span>
              Continue with Google
            </button>
          </div>
          <div className="details">
            <h3>OR</h3>

            <div className="email">
              <label htmlFor="email">Email address or username</label>
              <input type="email" placeholder=" Email address or username" />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder=" Password" />
              <h4>Forgot your password?</h4>
            </div>
          </div>

          <div className="remember-me">
            <div className="checkbox">
              <input type="checkbox" />
              <label htmlFor="">Remember me?</label>
            </div>
            <button>LOG IN</button>
          </div>

          <div className="no-account">
            <hr />
            <h3>Don't have an account?</h3>
            <button>SIGN UP FOR SPOTIFY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
