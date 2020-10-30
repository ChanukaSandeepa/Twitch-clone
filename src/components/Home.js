import { IconButton } from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos, ChevronLeft, ChevronRight } from '@material-ui/icons'
import React, { useState } from 'react'
import '../css/home.css'
import Category from './Category'
import Item from './Item'
import Stream from './Stream'

export default function Home() {

    const streams = [<Stream/>, <Stream/>]
    const [currentLiveIndex, setCurrentLiveIndex] = useState(0)
    const [previosLiveIndex, setPrevisouIndex] = useState(undefined)
    const liveSelectorHandler = (num) => {
        let index = num + currentLiveIndex;
        setPrevisouIndex(currentLiveIndex)
        if(index < 0){
            setCurrentLiveIndex(streams.length - 1)
        } else if(index >= streams.length) {
            setCurrentLiveIndex(0)
        } else {
            setCurrentLiveIndex(index)
        }
    }

    return (
        <div className="home">
            <div className="stream-area">
                <IconButton onClick={() => liveSelectorHandler(-1)}>
                    <ChevronLeft className="icon"/>
                </IconButton>
                <div className="video-area">
                    {streams[currentLiveIndex]}
                </div>
                <IconButton onClick={() => liveSelectorHandler(1)}>
                    <ChevronRight className="icon"/>
                </IconButton>
            </div>
            <p>Most live channels</p>
            <div className="section">
                <div className="section-area">
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </div>
            <div className="showmore-container">
                <hr/>
                <div>Show More</div>
                <hr/>
            </div>
            <p>Categories</p>
            <div className="section">
                <div className="section-area">
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                </div>
            </div>
            <p>Popular just chatting channels</p>
            <div className="section">
                <div className="section-area">
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </div>
            <div className="showmore-container">
                <hr/>
                <div>Show More</div>
                <hr/>
            </div>
        </div>
    )
}
