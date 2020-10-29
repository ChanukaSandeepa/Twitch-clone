import { MoreVert } from '@material-ui/icons'
import React from 'react'
import '../css/category.css'
import Tag from './Tag'

export default function Category() {
    return (
        <div className="category">
            <div className="category-container">
                <div className="image-container">
                    <img src="https://media.gettyimages.com/photos/sri-lanka-susnet-beach-swing-picture-id924405830?s=612x612"/>
                </div>
                <div className="des-container">
                    <div className="des-des">
                        <span>Just Chatting</span>
                        <MoreVert/>
                    </div>
                    <span>210 Viewers</span>
                    <Tag title="English"/>
                </div>
            </div>
        </div>
    )
}
