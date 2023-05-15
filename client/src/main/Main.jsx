import React from 'react'
import Logo from './twitter-logo.png'
import './Main.css'

const Main = () => {
  return (
    <div className='container'>
        <div className='main_header'>
            <img className='logo_twitter' src={Logo} alt="img" />
            <input className='header_input' type="text" placeholder='# Explore' />
            <button className='home_button'>HOME</button>
            <button className='msg_button'>MSG</button>
            <button className='msg_button'>NTFCN</button>
        </div>
        <div className='main_content'>
            <div className='content_left'></div>
            <div className='content_right'></div>
            <div className='content_сenter'></div>
        </div>
    </div>
  )
}

export default Main