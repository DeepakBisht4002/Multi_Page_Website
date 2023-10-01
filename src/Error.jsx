import React from "react";
import web from '../src/images/error.jpg'
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Error = ()=>{
  
    return(
        <>
            <h1 className="text-center font-weight-bold">Error 404 : Page not found</h1>
            <img src={web} alt="error" className="error-img up-down-animation" />
        </>
    )
}
export default Error