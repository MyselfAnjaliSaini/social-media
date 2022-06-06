import React from 'react'
import "./share.css"
import {
    AddCircle, Photo

} from '@material-ui/icons'
export default function Share() {
    return (
        <div className='share_container'>
            <div className='share_outer'>
                <div className='share_top'>
                   <div className='share_top_inner'>
                   <img src="./assets/person/profile-75.png" alt="" className='img-75 img-c' />
                    <div placeholder='What is in your mind?' className='share_input' />
                   </div>
                   <textarea  className='share_center_inner' placeholder='Start a post'>
                       
                   </textarea>
            
                    <div className='share_bottom_inner'>
                        <div className='shareOptions'>
                            <div className='shareOption'>
                                <AddCircle className='share_icon' />
                            </div>
                            <div className='shareOption'>
                                <Photo className='share_icon' />
                            </div>
                        </div>
                        <button className='text-1  btn-green-s fw-400'>Post</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
