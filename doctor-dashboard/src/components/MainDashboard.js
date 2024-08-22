import React from 'react';
import { FaUserInjured, FaFileAlt, FaStethoscope, FaStar } from 'react-icons/fa';

const MainDashboard = () => {
  return (
    <div className="flex flex-col space-y-6 p-6">
      {/* Daily Overview Card */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Daily Overview</h1>
        <div className="flex space-x-8">
          {/* Patients Card */}
          <div className="flex flex-col items-center justify-center p-4 bg-green-50 shadow-inner rounded-lg w-40 h-40">
            <FaUserInjured className="text-3xl text-blue-500 mb-2" />
            <p className="text-2xl font-bold">212</p>
            <p className="text-gray-600">Patients</p>
          </div>

          {/* Reports Card */}
          <div className="flex flex-col items-center justify-center p-4 bg-green-50 shadow-inner rounded-lg w-40 h-40">
            <FaFileAlt className="text-3xl text-green-500 mb-2" />
            <p className="text-2xl font-bold">109</p>
            <p className="text-gray-600">Reports</p>
          </div>

          {/* Consultations Card */}
          <div className="flex flex-col items-center justify-center p-4 bg-green-50 shadow-inner rounded-lg w-40 h-40">
            <FaStethoscope className="text-3xl text-purple-500 mb-2" />
            <p className="text-2xl font-bold">114</p>
            <p className="text-gray-600">Consultations</p>
          </div>

          {/* Experience Card */}
          <div className="flex flex-col items-center justify-center p-4 bg-green-50 shadow-inner rounded-lg w-40 h-40">
            <FaStar className="text-3xl text-yellow-500 mb-2" />
            <p className="text-2xl font-bold">127</p>
            <p className="text-gray-600">Experience</p>
          </div>
        </div>
      </div>

      {/* Schedule Card */}
      <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto" style={{ width: '52rem' }}>
        <h2 className="text-xl font-bold mb-4">Schedule</h2>
        <div className="flex">
          {/* Days Column */}
          <div className="flex flex-col min-w-max pr-2 border-r border-gray-300">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="py-2 px-4 text-center border-b border-gray-300">
                {day}
              </div>
            ))}
          </div>

          {/* Time Row */}
          <div className="flex flex-col flex-grow">
            <div className="flex space-x-4 py-2 px-4 overflow-x-auto scrollbar-thin scrollbar-thumb-white">
              {[...Array(25).keys()].map((hour) => (
                <div key={hour} className="text-center flex-shrink-0 w-16">
                  {hour < 10 ? `0${hour}:00` : `${hour}:00`}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments Card */}
      <div className="bg-white shadow-md rounded-lg p-4" style={{ width: '52rem' }}>
        <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="text-gray-600">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Diagnosis</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {/* First Patient */}
            <tr>
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">Fever</td>
              <td className="px-4 py-2">10:00 AM</td>
              <td className="px-4 py-2">Monitor temperature</td>
            </tr>

            {/* Second Patient */}
            <tr>
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">Cough</td>
              <td className="px-4 py-2">11:00 AM</td>
              <td className="px-4 py-2"></td> {/* Empty notes */}
            </tr>

            {/* Third Patient */}
            <tr>
              <td className="px-4 py-2">Alex Johnson</td>
              <td className="px-4 py-2">Headache</td>
              <td className="px-4 py-2">12:00 PM</td>
              <td className="px-4 py-2">Prescribe medication</td>
            </tr>

            {/* Fourth Patient */}
            <tr>
              <td className="px-4 py-2">Emily Davis</td>
              <td className="px-4 py-2">Back Pain</td>
              <td className="px-4 py-2">1:00 PM</td>
              <td className="px-4 py-2"></td> {/* Empty notes */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainDashboard;
