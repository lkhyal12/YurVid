import React, { useEffect, useState } from "react";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";
import "./Feed.css";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "../utils";
import moment from "moment";
const cardsData = [
  {
    image: thumbnail1,
    title: "The best channel that will help u get out of the trap u are in",
    channelName: "GreatSatck",
    views: "15k",
    date: "2days ago",
  },
  {
    image: thumbnail2,
    title: "The best channel that will help u get out of the trap u are in",
    channelName: "GreatSatck",
    views: "15k",
    date: "2days ago",
  },
  {
    image: thumbnail3,
    title: "The best channel that will help u get out of the trap u are in",
    channelName: "GreatSatck",
    views: "15k",
    date: "2days ago",
  },
  {
    image: thumbnail4,
    title: "The best channel that will help u get out of the trap u are in",
    channelName: "GreatSatck",
    views: "15k",
    date: "2days ago",
  },
  {
    image: thumbnail5,
    title: "The best channel that will help u get out of the trap u are in",
    channelName: "GreatSatck",
    views: "15k",
    date: "2days ago",
  },
  {
    image: thumbnail6,
    title: "The best channel that will help u get out of the trap u are in",
    channelName: "GreatSatck",
    views: "15k",
    date: "2days ago",
  },
  {
    image: thumbnail7,
    title: "The best channel that will help u get out of the trap u are in",
    channelName: "GreatSatck",
    views: "15k",
    date: "2days ago",
  },
  {
    image: thumbnail8,
    title: "The best channel that will help u get out of the trap u are in",
    channelName: "GreatSatck",
    views: "15k",
    date: "2days ago",
  },
];
const Feed = ({ category }) => {
  console.log({ category });

  const [videosData, setVideosData] = useState([]);
  useEffect(() => {
    const apiKey = import.meta.env.VITE_YT_API_KEY;
    async function fetchData() {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      setVideosData(data.items);
    }
    fetchData();
  }, [category]);
  return (
    <div className="feed">
      {videosData.length > 0 &&
        videosData.map((item) => (
          <Link
            key={item.id}
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="card"
          >
            <div className="imgContainer">
              <img src={item.snippet.thumbnails.medium.url} alt="" />
            </div>
            <h2>{item.snippet.title}</h2>
            <h3> {item.snippet.channelTitle}</h3>
            <p>
              {abbreviateNumber(item.statistics.viewCount)} Views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        ))}
    </div>
  );
};

export default Feed;
