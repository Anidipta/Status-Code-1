import React, { useState } from 'react';
import MedicationCard from './MedicationCard';

const MedicationSchedule = () => {
  const [medications, setMedications] = useState([
    { name: 'Vitamin C', time: '2024-08-17T08:00:00' },
    { name: 'Blood Pressure Medication', time: '2024-08-17T12:00:00' },
    { name: 'Allergy Medication', time: '2024-08-17T18:00:00' },
  ]);

  const handleMedicationTaken = (medicationName) => {
    console.log(`${medicationName} has been taken`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Medication Schedule</h1>
      <div style={styles.cardsContainer}>
        {medications.map((medication, index) => (
          <MedicationCard
            key={index}
            medication={medication}
            onTake={handleMedicationTaken}
          />
        ))}
      </div>
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
};

export default MedicationSchedule;
