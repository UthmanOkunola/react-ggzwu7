import React from "react";
import "../Card/Card.css"
import { useLocation } from "react-router-dom";

export default function Card({title,imageUrl,language}){

    return(
        <div className="card-container">
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    {title}
                </div>
                <div className="card-body">
                    <h3>{language}</h3>
                </div>
            </div>
        </div>
    )
}