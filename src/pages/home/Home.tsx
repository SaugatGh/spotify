import React  from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";

const Home = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <Rightbar />
    </div>
  );
};

export default Home;
