import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import "./Libary.css";
import { Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Libary = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="libary">
      <div className="libaryLeftbar">
        <Sidebar />
      </div>
      <div className="libaryRightbar">
        <div className="playlist-navbar">
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
            <div className="stack">
              <button
                onClick={handleClick}
                style={{ backgroundColor: active ? "#121212" : "#333333" }}
              >
                Playlist
              </button>
              <button>Podcasts</button>
              <button>Artists</button>
              <button>Album</button>
            </div>
          </div>

          <div className="right">
            <Link to="/signup">
              <button className="libarySignup">Signup</button>
            </Link>
            <Link to="/login">
              <button className="libaryLogin">Log in</button>
            </Link>
          </div>
        </div>
        <div className="playlist">
          <FontAwesomeIcon icon={faMusic} className="playlistIcon" />
          <Typography variant="h3">Create your first playlist</Typography>
          <h3>It's easy, we'll help you</h3>
          <button>Create Playlist</button>
        </div>
      </div>
    </div>
  );
};

export default Libary;
