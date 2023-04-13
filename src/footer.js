import React from "react";
import { AiFillTwitterSquare,AiOutlineLinkedin,AiOutlineInstagram } from "react-icons/ai";
import {FaGithubSquare } from "react-icons/fa";
export default function footer(){
    return (
        <div className="footer">
            <p><AiOutlineLinkedin /></p> 
            <p><AiFillTwitterSquare /></p>
            <p><AiOutlineInstagram /></p>
            <p><FaGithubSquare /></p>
        </div>
    )
}