import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './LoginComponents/Login';
import Signup from './SignUpComponents/Signup';
// import Diagnose from "./DiagnosisComponents/Mdiagnosis"
// LeftDiagnosis

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/PatientRecord" element={<Dashboard />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/"  element={<Login />}/>
        <Route path="/Diagnose"  element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;