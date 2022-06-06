import React from 'react'
import "./rightbar.css"
import {
    SupervisorAccount

} from '@material-ui/icons'
import Bottombar from '../bottombar/Bottombar'
export default function Rightbar() {
    return (
        <div className='rightbar_container'>
            <div className='rightbar_outer'>

                <div className='rightbar_bottom'>
                    <div className='rightbar-inner'>
                        <div>
                            <h1 className='text-1 fw-700 black-c'>Competitions
                            </h1>
                            <ul className='ul-flex'>
                                <li className='text-1 fw-400 light-c li-flex'><SupervisorAccount /><p className='text-1  fw-400 light-c'>Zuma Dance</p></li>
                                <li className='text-1  fw-400 light-c li-flex'><SupervisorAccount /><p className='text-1  fw-400 light-c'>Fitness Studio</p></li>
                                <li className='text-1  fw-400 light-c li-flex'><SupervisorAccount /><p className='text-1  fw-400 light-c li-flex'>Jaguar Gym</p></li>
                                <li className='text-1  fw-400 light-c li-flex'><SupervisorAccount /><p className='text-1  fw-400 light-c '>Yoga</p></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-1 fw-700 black-c'>Events
                            </h1>
                            <ul className='ul-flex'>
                                <li className='text-1 fw-400 light-c li-flex'><SupervisorAccount /><p className='text-1  fw-400 light-c'>Zuma Dance</p></li>
                                <li className='text-1  fw-400 light-c li-flex'><SupervisorAccount /><p className='text-1  fw-400 light-c'>Fitness Studio</p></li>
                                <li className='text-1  fw-400 light-c li-flex'><SupervisorAccount /><p className='text-1  fw-400 light-c li-flex'>Jaguar Gym</p></li>
                                <li className='text-1  fw-400 light-c li-flex'><SupervisorAccount /><p className='text-1  fw-400 light-c '>Yoga</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Bottombar/>
            </div>
        </div>
    )
}
