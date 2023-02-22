import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./RecentPlayed.scss";
const RecentPlayed = () => {
  return (
    <div className="showAll">
      <div className="showAll-sidebar">
        <Sidebar />
      </div>

      <div className="rightbar-showAll">
        <Navbar />
        <div className="boxes">
          <Box sx={{ width: 250, height: 300, backgroundColor: "blue" }}></Box>
          <Box sx={{ width: 250, height: 300, backgroundColor: "blue" }}></Box>
          <Box sx={{ width: 250, height: 300, backgroundColor: "blue" }}></Box>
          <Box sx={{ width: 250, height: 300, backgroundColor: "blue" }}></Box>
          <Box sx={{ width: 250, height: 300, backgroundColor: "blue" }}></Box>
          <Box sx={{ width: 250, height: 300, backgroundColor: "blue" }}></Box>
          <Box sx={{ width: 250, height: 300, backgroundColor: "blue" }}></Box>
          <Box sx={{ width: 250, height: 300, backgroundColor: "blue" }}></Box>
          <Box sx={{ width: 250, height: 300, backgroundColor: "blue" }}></Box>
          <Box sx={{ width: 250, height: 300, backgroundColor: "blue" }}></Box>
          <Box sx={{ width: 250, height: 300, backgroundColor: "blue" }}></Box>
          <Box sx={{ width: 250, height: 300, backgroundColor: "blue" }}></Box>
        </div>
      </div>
    </div>
  );
};

export default RecentPlayed;
