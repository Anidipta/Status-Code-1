import React from 'react';

const HealthRecordCard = ({ record }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{record.date}</h3>
      <p style={styles.text}><strong>Weight:</strong> {record.weight} kg</p>
      <p style={styles.text}><strong>Blood Pressure:</strong> {record.bloodPressure}</p>
      <p style={styles.text}><strong>Notes:</strong> {record.notes}</p>
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
    color: '#333',
  },
};

export default HealthRecordCard;
