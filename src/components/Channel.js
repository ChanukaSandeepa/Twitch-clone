import { Avatar, setRef } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { createRef } from 'react'
import '../css/channel.css'

export default function Channel() {

    const ref = createRef()
    const [isCollapsed, setCollapsed] = useState(false)


    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            if(entries){
                console.log(entries[0].target.offsetWidth);
                const sidebarWidth = entries[0].target.offsetWidth
                const collapseWidth = window.innerWidth * 4 /100

                if(sidebarWidth === Math.floor(collapseWidth)){
                    setCollapsed(true)
                } else {
                    setCollapsed(false)
                }
            }
       });
    
       resizeObserver.observe(ref.current);
    },[])

    const defaultCss = { display : 'flex', alignItems : 'center', justifyContent : 'space-around', width : '50%' }
    const collapsedCss = { display : 'flex', alignItems : 'center', justifyContent : 'center', width : '100%' }

    return (
        <div ref={ref} className="channel">
            <div style={!isCollapsed ? defaultCss : collapsedCss}>
                <Avatar style={{width : '30px', height : '30px'}}/>
                {!isCollapsed && <div className="details">
                    <p className="title">Name</p>
                    <p className="description">Description</p>
                </div>}
            </div>
            {!isCollapsed && <div className="live-updates">
                <i style={{color: 'red', fontSize : '10px'}} className="fas fa-circle"></i>
                <p>200k</p>
            </div>}
        </div>
    )
}
