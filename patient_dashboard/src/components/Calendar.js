import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const containerStyle = {
    perspective: '1000px',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'right',
    height: '100%',
    marginTop: '20px',
    marginRight: '50px',
  };

  const calendarStyle = {
    width: '100%',
    maxWidth: '600px',
    background: 'linear-gradient(145deg, #eef1f5, #cad1de)',
    boxShadow: '10px 10px 20px #a9b2c0, -10px -10px 20px #ffffff',
    padding: '20px',
    borderRadius: '15px',
    transform: 'rotateX(10deg) rotateY(10deg)',
    transition: 'transform 0.5s ease, box-shadow 0.5s ease',
  };

  const tileStyle = {
    background: '#edf2f7',
    boxShadow: '5px 5px 10px #a9b2c0, -5px -5px 10px #ffffff',
    borderRadius: '10px',
    color: '#1e3a8a',
    fontWeight: 'bold',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const nowTileStyle = {
    background: '#2563eb',
    color: 'white',
    borderRadius: '10px',
  };

  return (
    <div style={containerStyle}>
      <Calendar
        onChange={setDate}
        value={date}
        className="react-calendar"
        tileClassName={({ date }) =>
          date.getDate() === new Date().getDate() ? 'react-calendar__tile--now' : ''
        }
        tileContent={({ date, view }) => (
          <div style={view === 'month' && date.getDate() === new Date().getDate() ? nowTileStyle : tileStyle} />
        )}
        style={calendarStyle}
      />
    </div>
  );
};

export default CalendarComponent;
