import React from 'react'
import Feed from '../../components/feedbar/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import "./home.css"

export default function Home() {
    return (
        <>
            <section className='section_outer'>
                <Topbar />
                <div className='main_container'>
                    <Sidebar />
                    <Feed />
                    <Rightbar />
                </div>
            </section>
        </>
    )
}
