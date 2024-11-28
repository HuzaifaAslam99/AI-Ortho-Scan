import React from 'react'
// import Search from "../img/Search.png"
import Profile from "../img/profile-logo.jpg"
// import Notification from "../svg/notification.svg"
// import Arrow_Down from "../svg/arrow-down.svg"
import Menu from "../svg/menu.svg"
// import { Link } from 'react-router-dom';



const Header = ({toggleLeft}) => {

  return (
    
    <header className='py-[20px] flex justify-between items-center gap-[40px] max-800:justify-end'>


      <img src={Menu} alt="" className='hidden max-1200:block absolute left-[30px] top-[30px] cursor-pointer' onClick={toggleLeft}/>
      
      <div className='w-[700px] flex relative items-center max-800:hidden'>
        {/* <input type="text" placeholder="Search Here..." className='w-[100%] h-[50px] bg-dark-blue rounded-[10px] pl-[20px] pr-[45px] outline-none placeholder:text-white'/> */}
        {/* <img src={Search} alt="Search Icon" className='w-[20px] absolute right-[15px] cursor-pointer'/> */}
      </div>

      <div className="profile-box w-[30%] flex justify-end items-center gap-[20px] mr-[50px] max-800:mr-[20px]">
        {/* <img src={Notification} alt="Notification Icon" className='w-[30px] h-[30px] cursor-pointer'/> */}
        <img src={Profile} alt="Profile Icon" className='w-[40px] cursor-pointer rounded-full'/>
        {/* <img src={Arrow_Down} alt="Arrow-Down Icon" className="w-[20px] cursor-pointer max-800:hidden"/> */}
      </div>

    </header>
  )
}

export default Header
