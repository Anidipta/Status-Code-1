import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import ConsultationHistory from './components/ConsultationHistory';
import DoctorAppointments from './components/DoctorAppointments';
import HealthRecords from './components/HealthRecords';
import HealthOverview from './components/HealthOverview';
import ProfileManagement from './components/ProfileManagement';

function App() {
  const [notification, setNotification] = useState(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const [profileImage, setProfileImage] = useState(null); // State to store profile image

  const handleNewNotification = (message) => {
    setNotification(message);
    setUnreadCount((prevCount) => prevCount + 1);
  };

  return (
    <Router>
      <div className="App">
        <TopNavBar
          notification={notification}
          unreadCount={unreadCount}
          setUnreadCount={setUnreadCount}
          profileImage={profileImage} // Pass profile image to TopNavBar
        />
        <div className="main-container">
          <div className="content">
            <Routes>
              <Route path="/" element={<AppointmentsPage onNewNotification={handleNewNotification} />} />
              <Route path="/appointments" element={<AppointmentsPage onNewNotification={handleNewNotification} />} />
              <Route path="/health-records" element={<HealthRecords />} />
              <Route path="/health-overview" element={<HealthOverview />} />
              <Route path="/profile-management" element={<ProfileManagement setProfileImage={setProfileImage} />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const AppointmentsPage = ({ onNewNotification }) => (
  <div className="appointments-section">
    <Calendar />
    <DoctorAppointments setNotification={onNewNotification} />
    <ConsultationHistory />
  </div>
);

export default App;
