import React from "react";
import './App.css'
import { AiOutlineMail,AiFillLinkedin } from "react-icons/ai";
import './cover-img.jpeg'
export default function Name(){
    return(
        <div className="header">
        <div >
            <h1>Shivam Chourasia</h1>
            <p >Frontend Developer</p>
        </div>
        <div >
        <span>
            <a href="https://quizkhelo.in" className="email">
            <AiOutlineMail className="icon"/> Email
            </a>  
             <a href="https://quizkhelo.in" className="linkedin" >
                <AiFillLinkedin className="icon" /> LinkedIn
            </a>
        </span>
        </div>
        </div>
    )
}