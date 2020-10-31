import React from 'react'
import '../css/profile.css'
import ReactPlayer from 'react-player'
import ProfileHeader from './ProfileHeader'

export default function Profile() {
    return (
        <div style={{width : '100%', height : '100%'}}>
            <div className="profile">
                <div style={{width : '100%', height : '100%'}}>
                    <ReactPlayer width="100%" height="100%" url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                </div>
                <div className="content">
                    <ProfileHeader/>
                </div>
            </div>
        </div>
    )
}
