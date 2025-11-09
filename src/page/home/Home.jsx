import React, { useState } from "react";
import "./Home.css";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../feed/Feed";
const Home = ({ showSideBar }) => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <SideBar
        showSideBar={showSideBar}
        category={category}
        setCategory={setCategory}
      />

      <div className={`container ${showSideBar ? "" : "largeContainer"}`}>
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
