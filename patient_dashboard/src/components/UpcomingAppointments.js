import React, { useState } from 'react';
import AppointmentCard from './AppointmentCard';

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([
    { date: '2024-08-18', time: '10:00 AM', doctor: 'Smith', reason: 'Routine Checkup', status: 'Pending' },
    { date: '2024-08-20', time: '02:00 PM', doctor: 'Johnson', reason: 'Follow-up Visit', status: 'Accepted' },
  ]);

  const acceptAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].status = 'Accepted';
    setAppointments(updatedAppointments);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Upcoming Appointments</h1>
      <div style={styles.cardsContainer}>
        {appointments.map((appointment, index) => (
          <AppointmentCard key={index} appointment={appointment} />
        ))}
      </div>
      <button onClick={() => acceptAppointment(0)} style={styles.button}>Accept First Appointment</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  title: {
    color: 'black', // Change the color to black
    fontSize: '24px',
    margin: '0',
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#4ade80',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default UpcomingAppointments;
