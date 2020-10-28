import { Avatar } from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'
import React from 'react'
import '../css/channel.css'

export default function Channel() {
    return (
        <div className="channel">
            <Avatar/>
            <div className="details">
                <p className="title">Name</p>
                <p className="description">Description</p>
            </div>
            <div className="live-updates">
                <i style={{color: 'red', fontSize : '10px'}} className="fas fa-circle"></i>
                <p>200k</p>
            </div>
        </div>
    )
}
