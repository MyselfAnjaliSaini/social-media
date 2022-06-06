import React from 'react'
import "./post.css"
import {
    AccountCircleOutlined, MoreVert

} from '@material-ui/icons'
export default function Post() {
    return (
        <div className='post_container'>
            <div className='post_outer'>
                <div className='post_top'>
                    <div className='post_top_left'>
                        <div className='shareOption'>
                            <AccountCircleOutlined className='post_icon' />
                        </div>
                        <span className='text-3 fw-300'>Admin</span>
                        <span className='text-3 fw-300'>5 seconds ago</span>
                    </div>
                    <div className='post_top_right'>
                        <div className='shareOption'>
                            <MoreVert className='post_icon-small' />
                        </div>
                    </div>
                </div>
                <div className='post_center'>
                    <p className='text-3 fw-600 p-l-15'>1000 Meters Relay Race</p>
                    <div className='post_img_outer'>
                        <img src="./assets/posts/post-1.jpg" alt="post_img" />
                    </div>
                    <p className='text-4'>The baton can only be passed within the exchange zone, which is 20 meters long. Exchanges made outside the zone—based on the position of the baton, not the runners' feet—result in disqualification. Passers must remain in their lanes after the pass to avoid blocking other runners.</p>
                </div>
                <div className='post_bottom'>

                </div>
            </div>
        </div>
    )
}

