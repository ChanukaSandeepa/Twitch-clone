import { IconButton } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import React, { createRef, useEffect, useState } from 'react'
import '../css/sidebar.css'
import '../App.css'
import Channel from './Channel'

export default function Sidebar({handler}) {

    const ref = createRef()
    const [isCollapsed, setCollapsed] = useState(false)

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            if(entries){
                console.log(entries[0].target.offsetWidth);
                const sidebarWidth = entries[0].target.offsetWidth
                const collapseWidth = window.innerWidth * 5 /100

                if(sidebarWidth === collapseWidth){
                    setCollapsed(true)
                } else {
                    setCollapsed(false)
                }
            }
       });
    
       resizeObserver.observe(ref.current);
    },[])

    return (
        <div ref={ref} className="sidebar">
            <div className="sidebar-channels" style={{height : '90%', width : '100%'}}>
                <div style={{paddingLeft : '15px', display : 'flex', justifyContent : 'space-between', alignItems :'center'}}>
                   {!isCollapsed && <span>FOLLOWED CHANNELS</span>}
                    <IconButton onClick={() => handler()}>
                        <ArrowBack/>
                    </IconButton>
                </div>
                <Channel/>
                <Channel/>
                <Channel/>
                <div style={{padding : '15px'}}>
                   {!isCollapsed && <span>RECOMMENDED CHANNELS</span>}
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
            {!isCollapsed && <div style={{height : '10%', width : '100%'}} className="serch-container">
                <input type="text" placeholder="Search"/>
            </div>}
        </div>
    )
}
