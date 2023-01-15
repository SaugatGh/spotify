import React from "react";
import "./Sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadForOfflineSharpIcon from "@mui/icons-material/DownloadForOfflineSharp";
const Sidebar = () => {
  return (
    <div className="spotify">
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ0m5m7hzNKT5beRD8lkJQrYGVJ4WFzHh3jkDx2VSUp625Bzd58"
            alt="spotify logo"
          />
          <h2>Spotify</h2>
        </div>
        <div className="main">
          <div className="home">
            <span>
              <HomeIcon />
            </span>
            <p>Home</p>
          </div>
          <div className="search">
            <span>
              <SearchIcon />
            </span>
            <p>Search</p>
          </div>
          <div className="yourLibary">
            <span>
              <LibraryBooksIcon />
            </span>
            <p>Your Libary</p>
          </div>
        </div>

        <div className="secondary">
          <div className="createPlaylist">
            <span>
              <PlaylistAddIcon />
            </span>
            <p>Create Playlist</p>
          </div>
          <div className="likedSongs">
            <span>
              <FavoriteIcon />
            </span>
            <p>Liked Songs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
