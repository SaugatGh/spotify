import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Search.scss";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { data } from "../../Data";

const Search = () => {
  return (
    <div className="search">
      <div className="searchLeftbar">
        <Sidebar />
      </div>
      <div className="searchRightbar">
        <div className="searchNavbar">
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
              <div className="searchOption">
                <SearchIcon className="searchIcon" />
                <input
                  type="text"
                  placeholder="What's on your mind ?"
                  className="searchInput"
                />
              </div>
            </div>
            <div className="searchRight">
              <div className="searchSignup">
                <Link to="/signup" className="link">
                  <h3>Signup</h3>
                </Link>
              </div>
              <div className="searchLogin">
                <Link to="/login">
                  <button>Log in</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="browse">
          <div className="browseAll">
            <Typography variant="h5" sx={{ color: "whitesmoke" }}>
              Broswe All
            </Typography>
          </div>
          .
          <div className="browseOption">
            {data.map((item) => (
              <Box>
                <Card
                  sx={{
                    maxWidth: 325,
                    position: "relative",
                    objectFit: "cover",
                  }}
                >
                  <CardMedia component="img" image={item.img} height="220" />
                  <CardContent sx={{ position: "absolute", top: 0 }}>
                    <Typography variant="h4" sx={{ color: "green" }}>
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
