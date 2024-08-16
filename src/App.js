import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import ConsultationHistory from './components/ConsultationHistory';
import DoctorAppointments from './components/DoctorAppointments';
import HealthRecords from './components/HealthRecords';

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavBar />
        <div className="main-container">
          <div className="content">
            <Routes>
              <Route path="/" element={<AppointmentsPage />} />
              <Route path="/appointments" element={<AppointmentsPage />} />
              <Route path="/health-records" element={<HealthRecords />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const AppointmentsPage = () => (
  <div className="appointments-section">
    <Calendar />
    <DoctorAppointments />
    <ConsultationHistory />
  </div>
);

export default App;
