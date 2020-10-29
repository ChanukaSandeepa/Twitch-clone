import React from 'react'
import '../css/tag.css'

export default function Tag({ title }) {
    return (
        <div className="tag">
            <span>{title}</span>
        </div>
    )
}
