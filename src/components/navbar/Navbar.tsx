import React from "react";
import "./Navbar.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="spotify-navbar">
        <div className="left">
          <div className="leftArrow">
            <span>
              <ArrowBackIosNewIcon />
            </span>
          </div>
          <div className="rightArrow">
            <span>
              <ArrowForwardIosIcon />
            </span>
          </div>
        </div>
        <div className="right">
          <div className="premium">
            <h3>Premium</h3>
          </div>
          <div className="support">
            <h3>Support</h3>
          </div>
          <div className="download">
            <h3>Download</h3>
          </div>
          <div className="vertical">
            <h3>|</h3>
          </div>
          <div className="signup">
            <Link to="/signup" className="link">


            <h3>Signup</h3>
            </Link>
          </div>
          <div className="login">
            <Link to="/login">

            <button>Log in</button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
