import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainDashboard from './components/MainDashboard';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import PatientDirectory from './components/PatientDirectory';
import PatientDetails from './components/PatientDetails';
import Appointment from './components/Appointments';
import './index.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [patients, setPatients] = useState([
    { name: 'Duncan Pitt', id: 'AG9ST2D0P5', age: 45, bloodGroup: 'O+', sex: 'M' },
    { name: 'Mary Weather', id: 'R4L7Y9C2E1', age: 32, bloodGroup: 'O+', sex: 'F' },
    // Add initial patients here
  ]);

  return (
    <div className="flex bg-blue-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-64 fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <TopNav />
        <div className="p-6">
          <div className="flex space-x-6">
            {/* Route Management */}
            <Routes>
              <Route path="/" element={<MainDashboard />} />
              <Route
                path="/patients"
                element={<PatientDirectory patients={patients} setPatients={setPatients} />}
              />
              {/* Patient Details Route */}
              
              <Route path="/appointment" element={<Appointment />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
