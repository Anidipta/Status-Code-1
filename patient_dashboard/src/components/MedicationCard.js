import React, { useEffect, useState } from 'react';

const MedicationCard = ({ medication, onTake }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const now = new Date();
    const alarmTime = new Date(medication.time);
    const timeDiff = alarmTime - now;

    if (timeDiff > 0) {
      const timer = setTimeout(() => {
        alert(`Time to take your medication: ${medication.name}`);
      }, timeDiff);

      return () => clearTimeout(timer);
    }
  }, [medication.time]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onTake(medication.name);
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{medication.name}</h3>
      <p style={styles.text}><strong>Time:</strong> {medication.time}</p>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={styles.checkbox}
      />
      <label>Taken</label>
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
  checkbox: {
    margin: '10px',
  },
};

export default MedicationCard;
