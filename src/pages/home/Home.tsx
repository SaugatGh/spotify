import React from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";

const Home = () => {
  return (
    <div className="container">
      <Sidebar />

      <div className="rightbar">
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
