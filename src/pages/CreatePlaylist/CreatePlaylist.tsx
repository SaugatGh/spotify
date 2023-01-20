import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./CreatePlaylist.scss";

const CreatePlaylist = () => {
  return (
    <div className="createPlaylist">
      <div className="leftbar">
        <Sidebar />
      </div>
      <div className="createPlaylistRightbar">
        <Navbar />
      </div>
    </div>
  );
};

export default CreatePlaylist;
