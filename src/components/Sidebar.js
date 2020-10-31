import { IconButton } from '@material-ui/core'
import { ArrowBack, ArrowForward, FavoriteBorder, Videocam } from '@material-ui/icons'
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
                const sidebarWidth = entries[0].target.offsetWidth
                const collapseWidth = window.innerWidth * 4 /100
                console.log('sidebar width', sidebarWidth)
                console.log('collapse width', collapseWidth)
                if(sidebarWidth === Math.floor(collapseWidth)){
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
                <div style={{paddingLeft : !isCollapsed ? '15px' : '0px', display : 'flex', justifyContent : !isCollapsed ? 'space-between' : 'center', alignItems :'center'}}>
                   {!isCollapsed && <span>FOLLOWED CHANNELS</span>}
                    <IconButton onClick={() => handler()}>
                        {!isCollapsed ? <ArrowBack style={{fontSize : '20px'}}/> : <ArrowForward style={{fontSize : '20px'}} className="expand-key"/>}
                    </IconButton>
                </div>
                {isCollapsed && <div className="tooltip"> <FavoriteBorder style={{fontSize : '20px'}}/> <span class="tooltiptext">Tooltip text</span></div>}
                
                <Channel/>
                <Channel/>
                <Channel/>
                <div style={{paddingLeft : !isCollapsed ? '15px' : '0px', display : 'flex', justifyContent : !isCollapsed ? 'space-between' : 'center'}}>
                   {!isCollapsed ? <span>RECOMMENDED CHANNELS</span> : <Videocam style={{fontSize : '20px'}}/>}
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
