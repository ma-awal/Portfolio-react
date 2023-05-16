import React from "react";
import Banner from "../../components/banner/Banner";
 import Intro from "../../components/Intro/Intro";
  import Skill from "../../components/skill/Skill";
   import Project from "../../components/project/Project";
 import Address from "../../components/address/Address";
 import Connect from "../../components/connect/Connect";
 
 
const Home = () => {
  return (
    <div>
      <Banner />
      <Intro/>
      <Skill/>
       <Project/>
        <Address/>
        <Connect/>
    </div>
  );
};

export default Home;
