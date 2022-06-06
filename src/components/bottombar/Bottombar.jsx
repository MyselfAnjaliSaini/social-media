import React from 'react'
import "./bottombar.css"
import {
    Copyright

} from '@material-ui/icons'
export default function Bottombar() {
    const year = new Date().getFullYear()
    return (
        <div className='footer_links_outer'>
            <div className='footer_links'>
                <div className='footer_link'>
                    <p className='text-2'> About</p>
                </div>
                <div className='footer_link'>
                    <p className='text-2'>Privacy</p>
                </div>
                <div className='footer_link'>
                    <p className='text-2'>Terms</p>
                </div>

            </div>
            <h1 className='text-2 copy-sec'><Copyright/> {year} <p className='text-2'>TeambeforeSelf</p></h1>
        </div>
    )
}
