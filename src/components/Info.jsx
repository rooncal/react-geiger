import React from "react";

const Info = () => {
    return (
        <div className="info--container">
            <img className="info--image" src="src/assets/pic.jpeg"/>
            <h1>Geiger Geigerson</h1>
            <h2>Professional Geiger</h2>
            <h3>geiger.org</h3>
            <div className="info--buttons">
                <button className="email--button"><img src="src/assets/Email_icon.png" /> Email</button>
                <button className="linkedin--button"><img src="src/assets/Linkedin_Icon.png" /> LinkedIn</button>
            </div>
        </div> 
    )
}

export default Info;