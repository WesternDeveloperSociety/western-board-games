import React from 'react';
import './home.css';

//importing images
import WBGlogo from "../assets/LOGO_WBG.png";
import WBGbackground from "../assets/BACKGROUND_WBG.png";
import imagePlaceholder from "../assets/imagePlaceholder.png";

export default function Home() {
    return (
        <div className="home-container">
        
            {/* HEADER SECTION */}
            <div className="header" style={{backgroundImage: `url(${WBGbackground})`}}>
                <div className="header-content">
                    <img src={WBGlogo} alt="Western Board Games logo" className="logo" style={{size: '50%'}} />

                    <h1 className="about-title">About Us</h1>

                    <p className="about-text">
                        Western Board Games club provides a friendly environment for students
                        who share a passion for board games to come together at weekly events.
                        These events provide members with the opportunity to participate in
                        games of their choice. We also run tournaments that allow students to
                        compete against one another and win prizes!
                    </p>
                </div>
            </div>
        </div>
    );
}