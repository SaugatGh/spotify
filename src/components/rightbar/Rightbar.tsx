import React, { useState } from "react";
import Navbar from "../navbar/Navbar";

import "./Rightbar.scss";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { headingType } from "../../Data";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AfterLogin from "./AfterLogin";

const Rightbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isNotLoggedIn, setisNotLoggedIn] = useState(true);

  return (
    <div className="rightbar-container">
      <div className="rightNavbar">
        <Navbar />
      </div>
      {isLoggedIn && (
        <div className="spotify-rightbar">
          {isNotLoggedIn && <AfterLogin />}

          {headingType.map((item, index) => (
            <div className="wrapper" key={index}>
              <div className="top">
                <div className="leftSide">
                  <h2>{item.title}</h2>
                </div>
                <div className="rightSide">
                  <Link
                    to="/showAll/recent"
                    style={{ textDecorationLine: "none" }}
                  >
                    <h3>ShowAll</h3>
                  </Link>
                </div>
              </div>

              <div className="music-content">
                {item.lists.map((list, index) => (
                  <div className="box" key={index}>
                    <Link
                      to="playlist/:id"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <div className="image">
                        <img src={list.img} />
                        <Button size="large">
                          <PlayCircleFilledIcon className="icon" />
                        </Button>
                      </div>
                      <div className="details">
                        <h4>{list.songTitle}</h4>
                        <p>{list.desc}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rightbar;
