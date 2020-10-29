import { ArrowBackIos, ArrowForwardIos, ChevronLeft, ChevronRight } from '@material-ui/icons'
import React from 'react'
import '../css/home.css'
import Category from './Category'
import Item from './Item'
import Stream from './Stream'

export default function Home() {
    return (
        <div className="home">
            <div className="stream-area">
                <ChevronLeft className="icon"/>
                <div className="video-area">
                    <Stream/>
                </div>
                <ChevronRight className="icon"/>
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
