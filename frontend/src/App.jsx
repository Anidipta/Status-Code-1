import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainDashboard from './components/MainDashboard';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Patients from './components/Patients';
import Calendar from './components/Calendar';
import Appointment from './components/Appointments';
import './index.css';

function App() {
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
              <Route path="/patients" element={<Patients />} />
              <Route path="/appointment" element={<Appointment />} />
            </Routes>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;