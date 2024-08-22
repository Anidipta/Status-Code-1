import React from 'react';
import logo from '../images/logo.png';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { label: 'Dashboard', icon: '🏠' },
    { label: 'Patients', icon: '🧑🏻‍🤝‍🧑🏻' },
    { label: 'Appointment', icon: '📅', notification: '05' },
    { label: 'Chat', icon: '💬' },
  ];

  return (
    <div className="w-64 h-screen bg-blue shadow-md fixed">
      <div className="flex items-center p-6">
        <img src={logo} alt="Logo" className="h-10" />
        <h1 className="ml-3 text-xl font-semibold">MediTrack</h1>
      </div>
      <nav className="mt-6">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={`flex items-center p-3 cursor-pointer ${
                activeSection === item.label ? 'bg-blue-500 font-semibold' : 'hover:bg-blue-200'
              }`}
              onClick={() => setActiveSection(item.label)}
            >
              <span className="text-lg mr-3">{item.icon}</span>
              {item.label}
              {item.notification && (
                <span className="ml-auto bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs">
                  {item.notification}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {/* Profile Section */}
      <div className="mt-8">
        <ul>
          <li className="flex items-center p-3 hover:bg-gray-100 cursor-pointer">
            <span className="text-lg mr-3">⚙️</span>Profile Settings
          </li>
          <li className="flex items-center p-3 hover:bg-gray-100 cursor-pointer">
            <span className="text-lg mr-3">🔔</span>Notification
          </li>
          <li className="flex items-center p-3 hover:bg-gray-100 cursor-pointer">
            <span className="text-lg mr-3">🆘</span>Help
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
