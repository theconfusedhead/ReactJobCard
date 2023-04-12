import React from "react";
import './App.css'
import { AiOutlineMail,AiOutlineLinkedin } from "react-icons/ai";
import './cover-img.jpeg'
export default function Name(){
    return(
        <div className="header">
        <div>
           
        
            <h1 className="remove">Shivam Chourasia</h1>
            <p className="remove color">Frontend Developer</p>
        </div>
        <div className="space">
            <button><AiOutlineMail/>Email</button>
            <button><AiOutlineLinkedin/>LinkedIn</button>
        </div>
        </div>
    )
}