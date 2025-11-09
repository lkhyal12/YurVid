import React from "react";
import "./Video.css";
import VideoPlayer from "./VideoPlayer";
import Recommended from "../../components/recomended/Recommended";
const VideoCom = () => {
  return (
    <div className="videoContainer">
      <VideoPlayer />
      <Recommended />
    </div>
  );
};

export default VideoCom;
