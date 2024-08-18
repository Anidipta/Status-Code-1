import React from 'react';

const AppointmentCard = ({ appointment }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{appointment.date}</h3>
      <p style={styles.text}><strong>Time:</strong> {appointment.time}</p>
      <p style={styles.text}><strong>Doctor:</strong> Dr. {appointment.doctor}</p>
      <p style={styles.text}><strong>Reason:</strong> {appointment.reason}</p>
      <p style={styles.text}><strong>Status:</strong> {appointment.status}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '250px',
    display: 'inline-block',
    verticalAlign: 'top',
  },
  title: {
    margin: '0',
    fontSize: '1.2rem',
    color: '#333',
  },
  text: {
    margin: '5px 0',
    color: '#666',
  },
};

export default AppointmentCard;