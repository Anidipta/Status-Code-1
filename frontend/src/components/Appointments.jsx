import React, { useState } from 'react';

// Utility functions
const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

// Random appointment generator (for demonstration)
const generateRandomAppointments = (days) => {
  const randomAppointments = [];
  const assignedDays = new Set();

  for (let i = 0; i < 5; i++) { // Limit to 5 random appointments for simplicity
    let day;

    // Ensure the day is unique within the month
    do {
      day = Math.floor(Math.random() * days) + 1;
    } while (assignedDays.has(day));

    assignedDays.add(day);

    randomAppointments.push({
      day,
      time: `${Math.floor(Math.random() * 12) + 1}:00-${Math.floor(Math.random() * 12) + 1}:30`,
      name: `Appointment ${i + 1}`
    });
  }

  return randomAppointments;
};

const initialAppointments = {
  January: generateRandomAppointments(31),
  February: generateRandomAppointments(28),
  March: generateRandomAppointments(31),
  April: generateRandomAppointments(30),
  May: generateRandomAppointments(31),
  June: generateRandomAppointments(30),
  July: generateRandomAppointments(31),
  August: generateRandomAppointments(31),
  September: generateRandomAppointments(30),
  October: generateRandomAppointments(31),
  November: generateRandomAppointments(30),
  December: generateRandomAppointments(31),
};

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const AppointmentDay = ({ day, appointments, isCurrentMonth }) => (
  <div className={`day ${!isCurrentMonth ? 'blocked' : ''}`}>
    <div className="date">{day}</div>
    {appointments.length > 0 && (
      <div className="appointment">
        {appointments[0].time}<br />
        {appointments[0].name}
      </div>
    )}
    <style jsx>{`
      .day {
        width: 14.28%;
        height: 120px; /* Fixed height for all calendar cells */
        padding: 10px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        text-align: center;
        background-color: ${isCurrentMonth ? '#f0f9f9' : '#e0e0e0'};
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Ensures content is evenly distributed */
      }

      .blocked {
        opacity: 0.5;
      }

      .date {
        font-weight: bold;
        margin-bottom: 5px;
        color: ${isCurrentMonth ? '#004d40' : '#7f7f7f'};
      }

      .appointment {
        background-color: #00695c;
        padding: 5px;
        margin-bottom: 5px;
        border-radius: 3px;
        color: #ffffff;
      }
    `}</style>
  </div>
);

const Appointments = () => {
  const [currentMonth, setCurrentMonth] = useState(7); // August is index 7
  const [currentYear] = useState(2024);

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1)); // Wrap around to December
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1)); // Wrap around to January
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

  // Determine days to show from the previous month
  const previousMonthDays = firstDayOfMonth === 0 ? [] : Array.from(
    { length: firstDayOfMonth },
    (_, index) => getDaysInMonth(currentMonth - 1 < 0 ? 11 : currentMonth - 1, currentYear) - (firstDayOfMonth - 1) + index
  );

  // Combine all days to form the complete calendar grid
  const totalDays = [
    ...previousMonthDays.map(day => ({ day, isCurrentMonth: false })),
    ...Array.from({ length: daysInMonth }, (_, index) => ({ day: index + 1, isCurrentMonth: true })),
    ...Array.from({ length: 42 - (previousMonthDays.length + daysInMonth) }, (_, index) => ({ day: index + 1, isCurrentMonth: false }))
  ];

  const getAppointmentsForDay = (day) => {
    return initialAppointments[months[currentMonth]].filter(appointment => appointment.day === day);
  };

  return (
    <div>
      <div className="container">
        <h1>Appointments</h1>
        <div className="nav">
          <button onClick={handlePrevMonth}>&lt;</button>
          <button>{months[currentMonth]}</button>
          <button onClick={handleNextMonth}>&gt;</button>
          <button className="new-appointment">+ New appointment</button>
        </div>
      </div>

      <div className="calendar">
        {/* Weekdays */}
        {weekDays.map((day, index) => (
          <div key={index} className="day-header">
            <div className="date">{day}</div>
          </div>
        ))}

        {/* Divider */}
        <div className="divider"></div>

        {/* Calendar Days */}
        {totalDays.map((dayObj, index) => (
          <AppointmentDay
            key={index}
            day={dayObj.day}
            isCurrentMonth={dayObj.isCurrentMonth}
            appointments={dayObj.isCurrentMonth ? getAppointmentsForDay(dayObj.day) : []}
          />
        ))}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        h1 {
          margin: 0;
          font-size: 24px;
          font-family: sans-serif;
        }

        .nav {
          display: flex;
          align-items: center;
        }

        .nav button {
          background-color: #2A23FE;
          border: none;
          font-size: 16px;
          margin: 0 10px;
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 4px;
          color: white;
        }

        .new-appointment {
          background-color: #003366;
          color: white;
          font-weight: bold;
        }

        .new-appointment:hover {
          background-color: #5B80E1;
        }

        .new-appointment:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(38, 143, 255, 0.5);
        }

        .calendar {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
        }

        .divider {
          width: 100%;
          height: 2px;
          background-color: #ddd;
          margin: 0;
        }

        .day-header {
          width: 14.28%;
          padding: 10px;
          text-align: center;
          font-weight: bold;
          color: #ffffff;
          background-color: #1DFF00;
        }
      `}</style>
    </div>
  );
};

export default Appointments;
