import React from "react";
import "./Navbar.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="slider">
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
          {/* <div className="button">Upgrade</div>
          <div className="profile">
            <PermIdentityIcon />
            <h3>SaugatGh</h3>
            <ArrowDropDownIcon />
          </div> */}

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
            <h3>Signup</h3>
          </div>
          <div className="login">
            <button>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
