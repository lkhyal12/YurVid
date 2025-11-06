import React from "react";
import "./Home.css";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../feed/Feed";
const Home = ({ showSideBar }) => {
  return (
    <>
      <SideBar showSideBar={showSideBar} />

      <div className={`container ${showSideBar ? "" : "largeContainer"}`}>
        <Feed />
      </div>
    </>
  );
};

export default Home;
