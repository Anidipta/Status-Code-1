import React from 'react';

const appointments = [
  { day: 30, time: '9:00-10:30', name: 'Betty Hake' },
  { day: 1, time: '11:00-11:45', name: 'Millie Simons' },
  { day: 15, time: '11:00-11:45', name: 'Millie Simons' },
  { day: 20, time: '15:45-16:00', name: 'Mark Brent' },
  { day: 21, time: '14:00-16:00', name: 'Petra Collins' },
  { day: 26, time: '7:00-7:30', name: 'John Pope' },
];

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const getAppointmentsForDay = (day) => {
  return appointments.filter(appointment => appointment.day === day);
};

const AppointmentDay = ({ day, appointments }) => (
  <div className="day">
    <div className="date">{day}</div>
    {appointments.map((appointment, index) => (
      <div key={index} className="appointment">
        {appointment.time}<br />
        {appointment.name}
      </div>
    ))}
    <style jsx>{`
      .day {
        width: 14.28%;
        padding: 10px;
        border: 1px solid #ddd;
        box-sizing: border-box;
        text-align: center;
      }

      .date {
        font-weight: bold;
        margin-bottom: 5px;
      }

      .appointment {
        background-color: #eee;
        padding: 5px;
        margin-bottom: 5px;
        border-radius: 3px;
      }
    `}</style>
  </div>
);

const Appointments = () => {
  return (
    <div>
      <div className="container">
        <h1>Appointments</h1>
        <div className="nav">
          <button>&lt;</button>
          <button>June</button>
          <button>&gt;</button>
          <button className="new-appointment">+ New appointment</button>
          <button>Dr. Kawasaki</button>
        </div>
      </div>

      <div className="calendar">
        {/* Weekdays */}
        {weekDays.map((day, index) => (
          <div key={index} className="day">
            <div className="date">{day}</div>
          </div>
        ))}

        {/* Divider */}
        <div className="divider"></div>

        {/* Calendar Days */}
        {[26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map((day, index) => (
          <AppointmentDay key={index} day={day} appointments={getAppointmentsForDay(day)} />
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
          background-color: skyblue;
          border: none;
          font-size: 16px;
          margin: 0 10px;
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 4px;
        }

        .new-appointment {
          background-color: #007bff;
          color: white;
          font-weight: bold;
        }

        .new-appointment:hover {
          background-color: #0056b3;
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
      `}</style>
    </div>
  );
};

export default Appointments;