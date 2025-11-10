import React, { useEffect, useState } from "react";
import "./Video.jsx";
import videoElem from "../../assets/Video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import userProfile from "../../assets/user_profile.jpg";
import moment from "moment";
import { abbreviateNumber } from "../../utils.js";
const VideoPlayer = ({ videoId }) => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [channelId, setChannelId] = useState(null);
  const [commentsData, setCommentsData] = useState(null);
  async function fetchChannelDetails() {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${
        import.meta.env.VITE_YT_API_KEY
      }`
    );
    const data = await res.json();

    const commentsApiUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${
      import.meta.env.VITE_YT_API_KEY
    }`;

    const commentsResponse = await fetch(commentsApiUrl);
    const resData = await commentsResponse.json();
    setCommentsData(resData.items);
    console.log(resData.items);

    setChannelData(data.items[0]);
  }
  async function fetchVideoDetails() {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${
      import.meta.env.VITE_YT_API_KEY
    }`;
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setChannelId(data.items[0].snippet.channelId);

      setVideoDetails(data.items[0]);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (channelId) fetchChannelDetails();
  }, [channelId]);
  useEffect(() => {
    fetchVideoDetails();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div className="videoPlayer">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{videoDetails.snippet.title}</h3>

      <div className="videoInfo">
        <p>
          {abbreviateNumber(videoDetails.statistics.viewCount)} Views &bull;{" "}
          {moment(videoDetails.snippet.publishedAt).fromNow() === "a day ago"
            ? "1 day ago"
            : moment(videoDetails.snippet.publishedAt).fromNow()}
        </p>
        <div>
          <span>
            <img src={like} alt="" />{" "}
            {abbreviateNumber(videoDetails.snippet.likeCount)}
          </span>
          <span>
            <img src={dislike} alt="" />
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
        <img src={channelData?.snippet.thumbnails.medium.url || null} alt="" />
        <div>
          <p>{videoDetails.snippet.channelTitle}</p>
          <span>
            {abbreviateNumber(channelData?.statistics.subscriberCount || "")}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="videoDescription">
        <p>{videoDetails.snippet.description}</p>

        <hr />
        <h4>{videoDetails.statistics.commentCount} Comments</h4>

        {commentsData &&
          commentsData?.map((com) => (
            <div key={com.id} className="comment">
              <img
                src={com.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />

              <div>
                <h3>
                  {com.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>
                    {moment(
                      com.snippet.topLevelComment.snippet.authorDisplayName
                    ).fromNow()}
                  </span>
                </h3>
                <p>{com.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="commentAction">
                  <img src={like} alt="" />
                  <span>{com.snippet.topLevelComment.snippet.likeCount}</span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
