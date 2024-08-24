import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainDashboard from './components/MainDashboard';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import PatientDirectory from './components/PatientDirectory';
import Appointment from './components/Appointments';
import './index.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
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
                <Route path="/patients" element={<PatientDirectory />} />
                <Route path="/appointment" element={<Appointment />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
