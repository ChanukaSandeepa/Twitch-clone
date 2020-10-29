import React from 'react'
import '../css/stream.css'
import Player from 'react-player'
import { Avatar } from '@material-ui/core'
import Tag from './Tag'

export default function Stream() {
    return (
        <div className="stream">
            <div className="video-fraction">
                <Player width="100%" height="100%" url="https://www.youtube.com/watch?v=TU0awDN2DsM"/>
            </div>
            <div className="profile-fraction">
                <div className="pro-details">
                    <Avatar style={{width : '35px', height : '35px'}}/>
                    <div className="channel-details">
                        <span>Channel Name</span>
                        <span>title</span>
                        <p>244k follwers</p>
                    </div>
                </div>
                <div className="pro-tags">
                    <Tag title="English"/>
                    <Tag title="Closed Captions"/>
                </div>
                <div className="pro-des">
                    <span>
                        We're featuring a group of Partners as part of a creator growth program for the next few weeks. Click into the stream and join the chat to learn more about Just_Relax_Kid!
                    </span>
                </div>
            </div>
        </div>
    )
}
