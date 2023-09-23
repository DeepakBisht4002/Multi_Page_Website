import React from "react";
import web from '../src/images/img.jpg'
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common heading ='Grow Your Business with' imgsrc={web} visit='/services' btname='Get Started'/>
    </>
  );
};
export default Home;
