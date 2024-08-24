import React from 'react';
import HealthRecordCard from './HealthRecordCard';
import UpcomingAppointments from './UpcomingAppointments';
import MedicationSchedule from './MedicationSchedule';

const HealthOverview = () => {
  const [records, setRecords] = React.useState([
    { date: '2024-08-01', weight: 70, bloodPressure: '120/80', notes: 'Feeling good' },
    { date: '2024-08-15', weight: 71, bloodPressure: '118/79', notes: 'Slight weight increase' },
  ]);

  return (
    <div style={styles.container}>
      <h1>MediTrack - Health Overview</h1>
      <div style={styles.cardsContainer}>
        {records.map((record, index) => (
          <div key={index} style={styles.healthRecordsCard}>
            <HealthRecordCard record={record} />
          </div>
        ))}
        <div style={styles.appointmentsCard}>
          <UpcomingAppointments />
        </div>
        <div style={styles.medicationCard}>
          <MedicationSchedule />
        </div>
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
    flexDirection: 'column',
    gap: '20px',
  },
  healthRecordsCard: {
    marginBottom: '20px',
  },
  appointmentsCard: {
    marginBottom: '20px',
  },
  medicationCard: {
    marginBottom: '20px',
  },
  cardContent: {
    padding: '20px',
  },
  cardTitle: {
    marginBottom: '10px',
  },
  listItem: {
    padding: '10px 0',
  },
};

export default HealthOverview;
