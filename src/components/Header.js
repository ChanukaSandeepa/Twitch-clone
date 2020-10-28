import React from 'react'
import '../css/header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img className="header_leftLogo" src="https://pngimg.com/uploads/twitch/twitch_PNG6.png" />
                <h2>Following</h2>
                <h2>Browse</h2>
                <h2>E sports</h2>
                <h2>Musices</h2>
                <div className="header_vertical"></div>
                <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className="header-center">
                <input type="text" placeholder="Search"/>
                <div className="header_center_logoContainer">
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="header_right">
                <div className="header_rightContainer">
                    <i className="fas fa-crown"></i>
                    <i className="fas fa-inbox"></i>
                    <i className="fas fa-comment-alt"></i>
                    <div class="header_rightBits">
                        <i className="fas fa-gem"></i>
                        <h4>Get Bits</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
