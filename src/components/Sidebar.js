import React from 'react'
import '../css/sidebar.css'
import Channel from './Channel'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div style={{height : '90%', width : '100%'}}>
                <p>FOLLOWED CHANNEL</p>
                <Channel/>
                <p>RECOMMENDED CHANNEL</p>
            </div>
            <div style={{height : '10%', width : '100%'}} className="serch-container">
                <input type="text" placeholder="Search"/>
            </div>
        </div>
    )
}
