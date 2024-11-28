import React from 'react'
import Header from "./Header"
import MainDashboard from './MainDashboard';
import Main from '../PatientComponents/Main';
import Diagnose from "../DiagnosisComponents/Mdiagnosis"

import {useLocation } from 'react-router-dom';

const RightDash = ({toggleLeft}) => {

  const location = useLocation();

  return (
    <div className="pl-[50px] w-[85%] min-h-screen bg-background-blue max-1200:w-[100%] max-1200:pl-[90px] max-800:px-[20px] pb-[30px]">
      <Header toggleLeft={toggleLeft}/>
      {location.pathname === "/Dashboard"  && (
          <MainDashboard/>
        )}
        {location.pathname === "/PatientRecord"  && (
          <Main/>
        )}
        {location.pathname === "/Diagnose"  && (
          <Diagnose/>
        )}
    </div>
  )
}

export default RightDash
