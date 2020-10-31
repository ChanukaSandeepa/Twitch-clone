import React from 'react'
import '../css/live.css'
import ReactPlayer from 'react-player'
import { Avatar } from '@material-ui/core'
import Tag from './Tag'

export default function Live() {
    return (
        <div className="live">
            <div className="live-vid-section">
                <div className="vid-section">
                    <ReactPlayer width="100%" height="100%" url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                </div>
                <div className="pro-section">
                    <div className="pro">
                        <div className="descrip-container">
                            <Avatar style={{width : '60px', height : '60px'}}/>
                            <div className="descrip">
                                <h3>Channel Name</h3>
                                <span className="sub-title-1">C'est parti pour un Let's Play sur Little Hope ! #ad</span>
                                <span className="sub-title-2">The Dark Pictures Anthology: Little Hope</span>
                                <div className="tag-container">
                                    <Tag title="English"/>
                                    <Tag title="Gaming"/>
                                    <Tag title="Sports"/>
                                </div>
                            </div>
                        </div>
                        <div className="channel-des-container">

                        </div>
                    </div>
                    <div style={{width : '100%', display : 'flex', justifyContent : 'center'}}>
                        <div className="account">
                            <Avatar style={{width : '80px', height : '80px'}}/>
                            <div className="acc-des-continer">
                                <h3>Channel Name</h3>
                                <p>
                                Je live chaque jeudi de 20h à 00h, et quelques autres fois de manière aléatoire. Follow la chaîne pour être notifié lorsque je lance un live !
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-section">

            </div>
        </div>
    )
}
