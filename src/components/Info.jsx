import React from "react";

const Info = () => {
    return (
        <div className="info--container">
            <img className="info--image" src="src/assets/pic.jpeg"/>
            <h1 className="info--header">Geiger Geigerson</h1>
            <h2 className="info--profession">Professional Geiger</h2>
            <h3 className="info--link">geiger.org</h3>
            <div className="info--buttons">
                <button className="email--button"><img src="src/assets/Email_icon.png" /> Email</button>
                <button className="linkedin--button"><img src="src/assets/Linkedin_Icon.png" /> LinkedIn</button>
            </div>
        </div> 
    )
}

export default Info;