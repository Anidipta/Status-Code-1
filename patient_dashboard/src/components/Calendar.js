import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState('');
  const fullText = "Welcome Patient\nYour Health, Our Concern\nTrack, Plan and Stay Ahead!";
  const typingSpeed = 100;
  const resetDelay = 1000; // Adjust to control delay before restarting

  useEffect(() => {
    let index = 0;
    let typingTimeout;

    const typeText = () => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
        typingTimeout = setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(() => {
          setText(''); // Smoothly reset the text after a delay
          index = 0;
          typingTimeout = setTimeout(typeText, typingSpeed); // Restart typing
        }, resetDelay);
      }
    };

    typingTimeout = setTimeout(typeText, typingSpeed);
    return () => clearTimeout(typingTimeout); // Cleanup on component unmount
  }, []);

  const containerStyle = {
    perspective: '1000px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    marginTop: '20px',
    padding: '20px',
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

  const typingTextStyle = {
    fontFamily: "'Segoe Script', cursive",
    fontSize: '28px',
    color: '#1e3a8a',
    whiteSpace: 'pre-wrap',
    overflow: 'hidden',
  };

  const textContainerStyle = {
    marginLeft: '80px',
    width: '450px', // Adjust width as needed
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <div style={typingTextStyle}>
          <pre>{text}</pre>
        </div>
      </div>
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
