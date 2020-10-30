import React from 'react'
import '../css/header.css'
import { Avatar } from '@material-ui/core'

export default function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img className="header_leftLogo" src="https://pngimg.com/uploads/twitch/twitch_PNG6.png" alt="Twitch logo" />
                <span>Following</span>
                <span>Browse</span>
                <div className="header_vertical"></div>
                <span>Esports</span>
                <span>Musices</span>
                
                <i className="fas fa-ellipsis-h dots"></i>
            </div>
            <div className="header-center">
                <div className="header-center_container">
                <input type="text" placeholder="Search"/>
                <div className="header_center_logoContainer">
                    <i className="fas fa-search"></i>
                </div>
                </div>
            </div>
            <div className="header_right">
                <i className="fas fa-crown dots"></i>
                <i className="fas fa-inbox dots"></i>
                <i className="fas fa-comment-alt dots"></i>
                <i className="fas fa-gem dots"></i>
                <h4>Get Bits</h4>
                <Avatar style={{margin : '0 10px', width : '35px', height : '35px'}}/>
            </div>
        </div>
    )
}
