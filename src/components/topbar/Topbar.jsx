import React from 'react';
import "./topbar.css";
import {
    Search, Home, Notifications, Telegram, FavoriteBorder, AccountCircleOutlined

} from '@material-ui/icons';
import { NavLink } from "react-router-dom";
export default function Topbar() {
    return (
        <div className='tb_Container'>
            <div className='tb_logo'>
            <NavLink exact to="/">
                <div className='logo'>SocialMedia</div>
                </NavLink>
            </div>
            <div className='tb_search'>
                <div className='search_bar'>
                    <Search className='s-icon' />
                    <input placeholder='Search' className='search_input'></input>
                </div>
            </div>
            <div className='tb_links'>
                <div className='tb_links_outer'>
                    <div className='tb_link'>
                        <NavLink to="/" >
                            <Home />
                        </NavLink>



                    </div>
                    <div className='tb_link'>
                        <Notifications />
                    </div>
                    <div className='tb_link'>
                        <Telegram />
                    </div>
                    <div className='tb_link'>
                        <FavoriteBorder />
                    </div>
                    <div className='tb_link'>
                    <NavLink exact to="/profile">
                            <AccountCircleOutlined />
                        </NavLink>
                    </div>
                    {/* <img src="./assets/person/profile-50.png" alt="profile-pic" /> */}
                </div>
            </div>
        </div>
    )
}
