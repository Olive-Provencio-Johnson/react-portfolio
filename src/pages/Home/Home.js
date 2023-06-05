import React from "react";
import "./Home.css";
import OliveAvatar from "../../assets/OliveAvatar.png";

const Home = () => {
  return (
    <div className="home-banner">
      <div className="text-container">
        <div className="title-container">
          <h1>Hi, I'm</h1>
          <h2>Olive</h2>
        </div>
        <p>Full Stack Web Developer</p>
      </div>
      <img alt="avatar" src={OliveAvatar} className="avatar" />
    </div>
  );
};

export default Home;
