import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import VideoCom from "./page/video/Video";
import Home from "./page/home/Home";
const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <Navbar setShowSideBar={setShowSideBar} />
      <Routes>
        <Route path="/" element={<Home showSideBar={showSideBar} />} />
        <Route path="/video/:categoryId/:videoId" element={<VideoCom />} />
      </Routes>
    </>
  );
};

export default App;
