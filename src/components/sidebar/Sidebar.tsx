import React from "react";
import "./Sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadForOfflineSharpIcon from "@mui/icons-material/DownloadForOfflineSharp";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="spotify-sidebar">
      <div className="sidebar-wrapper">
        <div className="logo">
          <img
            src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ0m5m7hzNKT5beRD8lkJQrYGVJ4WFzHh3jkDx2VSUp625Bzd58"
            alt="spotify logo"
          />
          <Link to="/" style={{color:"white",textDecoration:"none"}}>
            <h2>Spotify</h2>
          </Link>
        </div>
        <div className="problem">
          <div className="main">
            <Link to="/" className="link">
              <div className="home">
                <span>
                  <HomeIcon />
                </span>
                <p>Home</p>
              </div>
            </Link>
            <Link to="/search" className="link">
              <div className="search">
                <span>
                  <SearchIcon />
                </span>
                <p>Search</p>
              </div>
            </Link>
            <Link to="/libary" className="link">
              <div className="yourLibary">
                <span>
                  <LibraryBooksIcon />
                </span>
                <p>Your Libary</p>
              </div>
            </Link>
          </div>

          <div className="secondary">
            <Link to="/createPlaylist" className="link">
              <div className="createPlaylist">
                <span>
                  <PlaylistAddIcon />
                </span>
                <p>Create Playlist</p>
              </div>
            </Link>

            <Link to="/likedSongs" className="link">
              <div className="likedSongs">
                <span>
                  <FavoriteIcon />
                </span>
                <p>Liked Songs</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
