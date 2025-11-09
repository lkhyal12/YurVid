import React from "react";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import "./Recommended.css";

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
const Recommended = () => {
  return (
    <div className="recommended">
      {cardsData.map((card) => (
        <div className="sideVideoList">
          <img src={card.image} alt="" />
          <div className="videoInfo">
            <h4>{card.title}</h4>
            <h5> {card.channelName}</h5>
            <p>{card.views} Views</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
