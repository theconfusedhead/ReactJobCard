import React from "react";
import { AiFillTwitterSquare,AiOutlineLinkedin,AiOutlineInstagram } from "react-icons/ai";
import {FaGithubSquare } from "react-icons/fa";
export default function footer(){
    return (
        <div className="footer">
            <p><AiOutlineLinkedin className="icon"/></p> 
            <p><AiFillTwitterSquare className="icon"/></p>
            <p><AiOutlineInstagram className="icon"/></p>
            <p><FaGithubSquare className="icon"/></p>
        </div>
    )
}