import React from 'react'
import '../css/sidebar.css'
import Channel from './Channel'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <p>FOLLOWED CHANNEL</p>
            <Channel/>
            <p>RECOMMENDED CHANNEL</p>
        </div>
    )
}
