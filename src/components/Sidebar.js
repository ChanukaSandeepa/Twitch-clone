import React from 'react'
import '../css/sidebar.css'
import Channel from './Channel'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-channels" style={{height : '90%', width : '100%'}}>
                <div style={{padding : '15px'}}>
                    <span>FOLLOWED CHANNELS</span>
                </div>
                <Channel/>
                <Channel/>
                <Channel/>
                <div style={{padding : '15px'}}>
                    <span>RECOMMENDED CHANNELS</span>
                </div>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
            </div>
            <div style={{height : '10%', width : '100%'}} className="serch-container">
                <input type="text" placeholder="Search"/>
            </div>
        </div>
    )
}
