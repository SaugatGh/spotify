import React from "react";
import "./Signup.scss";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="signup-container">
      <div className="spotify-register">
        <div className="logo">
          <img
            src="https://i.pinimg.com/originals/8e/05/72/8e0572ca90458519ab7082ff0bb5def6.jpg"
            alt="spotify logo"
          />
          <Link to="/" className="link">
            <h1 >Spotify</h1>
          </Link>
        </div>
        <div className="signup">
          <h1>Sing up for to start listening music for free</h1>
          <div className="signupWith">
            <div className="facebok">
              <button className="facebook-button">
                <span>
                  <FacebookOutlinedIcon />
                </span>{" "}
                Continue with Facebok
              </button>
            </div>
            <div className="google-button">
              <button className="google-button">
                <span>
                  <GoogleIcon />
                </span>
                Continue with Google
              </button>
            </div>

            <h3>or</h3>
          </div>
        </div>

        <div className="details">
          <h3>Sign up with your email address</h3>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="confirm-email">
            <label htmlFor="confirmEmail">Confirm your email</label>
            <input type="email" placeholder="Enter your email again" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Create a password" />
          </div>
          <div className="profile-name">
            <label htmlFor="profileName">What should we call you?</label>
            <input type="text" placeholder="Enter a profile name" />
          </div>
          <div className="others-info">
            <input type="radio" name="gender" value="make" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" value="make" />
            <label htmlFor="feMale">Female</label>
            <input type="radio" name="gender" value="make" />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div className="terms-condition">
          <div className="news">
            <input type="checkbox" />
            <label htmlFor="">
              Please send me news and offers from Spotify{" "}
            </label>
          </div>
          <div className="marketing">
            <input type="checkbox" />
            <label htmlFor="">
              Share my registration data with Spotify's content provides for
              marketing purposes{" "}
            </label>
          </div>
          <div className="terms">
            <input type="checkbox" />
            <label htmlFor="">
              I agree
              <a href=""> to the Spotify Terms and Contions of Use</a>
            </label>
          </div>
        </div>
        <div className="not-robot">
          <input type="checkbox" />
          <label htmlFor="">I'm not a robot</label>
        </div>
        <div className="policy">
          <p>
            By clicking on sign-up, you agree to the
            <a href="">Spofiy Privacy Policy</a>
          </p>
        </div>
        <div className="signup-button">
          <button>SIGN UP</button>
        </div>
        <div className="already-user">
          <h5>
            Have an account?
            <a href="/login">Log in</a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Signup;
