import React from "react";
import Navbar from "../navbar/Navbar";

import "./Rightbar.scss";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { headingType } from "../../Data";
import { Button } from "@mui/material";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <Navbar />

      {headingType.map((item, index) => (
        <div className="wrapper" key={index}>
          <div className="top">
            <div className="leftSide">
              <h2>{item.title}</h2>
            </div>
            <div className="rightSide">
              <h3>ShowAll</h3>
            </div>
          </div>

          <div className="music-content">
            {item.lists.map((list, index) => (
              <div className="box" key={index}>
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
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rightbar;
