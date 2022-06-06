import React from 'react'
import {
    SupervisorAccount

} from '@material-ui/icons'
import "./sidebar.css"
export default function Sidebar() {
    return (
        <div className='sidebar_container'>
            <div className='sidebar_outer'>
                <div className='sidebar_top'>
                    <div className='img-sec'>
                        <img src="./assets/person/profile-130.png" className='img-c img-130' alt="pfofile-img" />
                        
                    </div>
                    <h1 className='text-1 fw-400 black-c '>Davuluri_Hemanth</h1>
                        <div className='num-outer'>
                            <div className='num-sec'>
                                <h1 className='text-1 fw-700 black-c num-inner'>100<span className='text-1 fw-300 black-c'>Posts</span></h1>
                            </div>
                            <div className='num-sec'>
                                <h1 className='text-1 fw-700 black-c num-inner'>50<span className='text-1 fw-300 black-c'>Posts</span></h1>
                            </div>
                        </div>
                        <button className='text-1 btn-green fw-400'>View profile</button>
                </div>
                <div className='sidebar_bottom'>
                    <div>
                        <h1 className='text-1 fw-700 black-c'>Your Teams

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
        </div>
    )
}
