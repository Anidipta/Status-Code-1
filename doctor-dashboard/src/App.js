import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import MainDashboard from './components/MainDashboard';
import Calendar from './components/Calendar';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('Dashboard');

  return (
    <div className="flex bg-blue-100 min-h-screen">
      {/* Sidebar - Fixed */}
      <div className="w-64 fixed left-0 top-0 h-full">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>

      {/* Main content */}
      <div className="flex-1 ml-64">
        {/* Top Navigation */}
        <TopNav />
        {/* Content Area */}
        <div className="p-6">
          {activeSection === 'Dashboard' ? (
            <div className="flex space-x-6">
              <MainDashboard />
              <div className="w-1/3">
                <Calendar />
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-full text-xl text-blue-500">
              No content to display.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
