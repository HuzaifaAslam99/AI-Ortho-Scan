import React from 'react'
import Patient from "./PatientActivities"
import Modules from "./ModuleButtons"

const Main = () => {
  return (
    <main className="w-[100%] h-[80vh] overflow-y-auto">
        <div className='flex flex-col justify-between items-center gap-[40px] max-1200:items-center max-800:items-center max-800:gap-[20px]'>
           <Patient/>
           <Modules/>
        </div>
    </main>
  )
}

export default Main
