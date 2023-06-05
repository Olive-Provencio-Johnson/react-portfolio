import React from "react";
import "./Home.css";
import OliveAvatar from "../../assets/OliveAvatar.png";

const Home = () => {
  return (
    <>
    <div className="home-banner">
      <div className="text-container">
        <div className="title-container">
          <h1 className="greeting">Hi, I'm</h1>
          <h2 className="name">Olive</h2>
        </div>
        <p>Full Stack Web Developer</p>
      </div>
      <img alt="avatar" src={OliveAvatar} className="avatar" />
    </div>
    <div className="about-me">
      <p className="paragraph">Driven by a passion for innovation and efficiency, I transitioned into software development six months ago after building a solid foundation in administration within the non-profit sector.</p>
      <br></br> 
      <p className="paragraph">
      My previous roles in Federally Qualified Health Centers(FQHCs) and the Consortium for Advanced Practice Providers (CAPP), a private nonprofit 501(c)(3) created to advance the model and rigor of postgraduate nurse practitioner and joint nurse practitioner/physician assistant training programs, equipped me with crucial skills in project management, operations, and strategic planning. 
      </p>
      <br></br> 
      <p className="paragraph">
      My experiences working on coding projects have been invaluable as I've delved into the world of coding and tech, providing me a unique perspective that merges administrative acumen with cutting-edge development practices. As I continue to grow in this field, my goal is to create impactful solutions that streamline processes and enhance productivity, leveraging my deep understanding of organizational structures and the transformative power of technology</p>
  </div>
</>
  );
};

export default Home;
