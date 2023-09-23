import React from "react";
import Common from "./Common";
import web from '../src/images/3426526.jpg'


const About = ()=>{
  return(
    <>
    <Common heading='Welcome to About Page' imgsrc={web} visit='/contact' btname='Contact us'/>

    </>
  )
}
export default About;