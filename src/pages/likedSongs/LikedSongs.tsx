import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./LikedSongs.scss"
const LikedSongs = () => {
  return (
    <div className="likedSongs">
      <div className="leftbar">
        <Sidebar />
      </div>

      <div className="rightbar">
        <Navbar />
        <div className="search">LikedSongs</div>
      </div>
    </div>
  );
};

export default LikedSongs;
