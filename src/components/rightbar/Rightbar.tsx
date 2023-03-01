import React from "react";
import Navbar from "../navbar/Navbar";

import "./Rightbar.scss";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { headingType } from "../../Data";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { afterLoginGoodAfternoon } from "../../Data";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const Item = styled(Paper)(() => ({
  textAlign: "center",

  height: 90,

  lineHeight: "60px",
  gap: "10px",
}));

const Rightbar = () => {
  return (
    <div className="rightbar-container">
      <div className="rightNavbar">
        <Navbar />
      </div>

      <div className="spotify-rightbar">
        <div className="afterLoginContainer">
          <Box
            sx={{
              bgcolor: "#1c1c1c",
              color: "white",
            }}
          >
            <Typography
              variant="h6"
              fontSize="large"
              sx={{ margin: "0px 10px", padding: "10px" }}
            >
              Good Afternoon
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    p: 2,
                    gap: 3,
                  }}
                >
                  {afterLoginGoodAfternoon.map((afterLogin, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                      <Item
                        sx={{
                          bgcolor: "#242424",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={afterLogin.img}
                          style={{
                            height: "80%",
                          }}
                        />
                        <Typography>{afterLogin.desc}</Typography>
                      </Item>
                    </Grid>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>

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
    </div>
  );
};

export default Rightbar;
