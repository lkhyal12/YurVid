import React from "react";
import "./Video.jsx";
import videoElem from "../../assets/Video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import userProfile from "../../assets/user_profile.jpg";
const VideoPlayer = () => {
  return (
    <div className="videoPlayer">
      <video src={videoElem} controls autoPlay muted />
      <h3>Best channel for learning web development</h3>

      <div className="videoInfo">
        <p>1555 view &bull; 2days ago</p>
        <div>
          <span>
            <img src={like} alt="" /> 155
          </span>
          <span>
            <img src={dislike} alt="" />3
          </span>
          <span>
            <img src={share} alt="" /> Share
          </span>
          <span>
            <img src={save} alt="" /> Save
          </span>
        </div>
      </div>

      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>AbTech</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="videoDescription">
        <p>Channel That makes learning easy</p>
        <p>
          Subscribe to AbTech to Wacth more videos and tutorial related to web
          development
        </p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={userProfile} alt="" />

          <div>
            <h3>
              Jack Nicholson <span>1day ago</span>
            </h3>
            <p>
              This video is awesome it helped me a lot to fix some bugs i was
              facing recently thank u abtech for this amazing video i am realy
              grateful
            </p>
            <div className="commentAction">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={userProfile} alt="" />

          <div>
            <h3>
              Jack Nicholson <span>1day ago</span>
            </h3>
            <p>
              This video is awesome it helped me a lot to fix some bugs i was
              facing recently thank u abtech for this amazing video i am realy
              grateful
            </p>
            <div className="commentAction">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={userProfile} alt="" />

          <div>
            <h3>
              Jack Nicholson <span>1day ago</span>
            </h3>
            <p>
              This video is awesome it helped me a lot to fix some bugs i was
              facing recently thank u abtech for this amazing video i am realy
              grateful
            </p>
            <div className="commentAction">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
