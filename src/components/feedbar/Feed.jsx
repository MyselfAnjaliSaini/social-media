import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
export default function Feed() {
    return (
        <div className='feed_container'>
            <Share/>
            <Post/>
        </div>
    )
}
