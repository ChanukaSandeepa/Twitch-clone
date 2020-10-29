import { Avatar, IconButton, requirePropFactory } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'
import React from 'react'
import '../css/item.css'
import Tag from './Tag'
import ReactPlayer from 'react-player'

export default function Item() {
    return (
        <div className="item">
            <div className="item-container">
                <div className="video">
                    <ReactPlayer width="100%" height="100%" url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                </div>
                <div className="caption">
                    <Avatar style={{ width : '35px', height : '35px' }}/>
                    <div className="channel-des">
                        <span className="channel-title">Stream Title</span>
                        <span className="sub-title">Channel Name</span>
                        <span className="sub-title">Title</span>
                        <div>
                            <Tag title="English"/>
                        </div>
                    </div>
                    <MoreVert/>
                </div>
            </div>
        </div>
    )
}
