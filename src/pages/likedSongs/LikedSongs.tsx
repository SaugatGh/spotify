import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./LikedSongs.scss";
const LikedSongs = () => {
  return (
    <div className="likedSongs">
      <div className="likedLeftBar">
        <Sidebar />
      </div>

      <div className="likedRightbar">
        <div className="likedNavbar">
          <Navbar />
        </div>
        <div className="songsLiked">
          <div className="top">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9_WBQIPKs0IOlbKsKkhORl0eU4uCikn07pKM5MKe0hwz483gQ"
              alt="liked-logo"
            />
            <div className="desc">
              <div className="text">
                <h2>Playlist</h2>
                <h1>Liked Songs</h1>
                <h4>UserName</h4>
              </div>
            </div>
          </div>
          <div className="down">
            <img
              src="https://cdn.jim-nielsen.com/ios/512/apple-music-2018-04-25.png"
              alt=""
            />
            <div className="desc">
              <h2>Songs you like will appear here</h2>
              <h5>Save songs by tapping the heart icon</h5>
              <button>Find songs</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedSongs;
