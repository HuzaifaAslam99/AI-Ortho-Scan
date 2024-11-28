import React from 'react'
import PatientDetail from "./PatientDetail"
import Report from "./Report"
import Elbow from "../img/Elbow.jpg"
import Search from "../img/Search.png"


const Main = () => {
  return (
    <main className="flex justify-betweengap-[40px] max-800:flex-col max-800:items-center max-800:gap-[20px]">

      <div className='w-[90%] relative items-center hidden max-800:flex'>
        <input type="text" placeholder="Search Here..." className='w-[100%] h-[50px] bg-dark-blue rounded-[10px] pl-[20px] pr-[45px] outline-none placeholder:text-white'/>
        <img src={Search} alt="Search Icon" className='w-[20px] absolute right-[15px] cursor-pointer'/>
      </div>

      <div className='w-[700px] flex flex-col gap-[20px] max-800:items-center max-800:w-[90%]'>
        <PatientDetail/>
        <Report/>
      </div>

      <img src={Elbow} alt="Elbow" className="w-[30%] h-[30%] mr-[50px] max-800:mr-[0px]"/>

    </main>
  )
}

export default Main
