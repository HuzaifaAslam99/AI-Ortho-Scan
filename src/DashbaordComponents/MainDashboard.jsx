import React from 'react'
import Patient from "./PatientActivities"
import Modules from "./ModuleButtons"

const Main = () => {
  return (
    <main className="flex flex-col justify-between gap-[40px] max-800:flex-col max-800:items-center max-800:gap-[20px]">
         <Patient/>
         <Modules/>
    </main>
  )
}

export default Main
