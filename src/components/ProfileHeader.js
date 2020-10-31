import React from 'react'
import '../css/profileheader.css'
import { Avatar, IconButton } from '@material-ui/core'
import { FavoriteBorder, MoreVert, Star, ExpandMore } from '@material-ui/icons'

export default function ProfileHeader() {
    return (
        <div className="profile-header">
            <div className="pro-pic-container">
                <Avatar style={{width : '60px', height : '60px'}}/>
                <div className="name-container">
                    <h3>TheRealKnossi</h3>
                    <p>1.3M follwers</p>
                </div>
            </div>
            <div className="setting-container">
                <div className="follow">
                    <FavoriteBorder style={{fontSize : '15px'}}/>
                    <p>follow</p>
                </div>
                <div className="subcribe">
                    <Star style={{fontSize : '12px'}}/>
                    <p>Subcribe</p>
                    <ExpandMore style={{fontSize : '12px'}}/>
                </div>
                <IconButton>
                <MoreVert/>
                </IconButton>
            </div>
        </div>
    )
}
