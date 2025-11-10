import React from "react";
import "./Video.css";
import VideoPlayer from "./VideoPlayer";
import Recommended from "../../components/recomended/Recommended";
import { useParams } from "react-router-dom";
const VideoCom = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="videoContainer">
      <VideoPlayer videoId={videoId} />
      <Recommended />
    </div>
  );
};

export default VideoCom;
