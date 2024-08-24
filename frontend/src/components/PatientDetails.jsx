import React from 'react';
import { useLocation } from 'react-router-dom';

function PatientDetails() {
  const location = useLocation();
  const { name, age, bloodGroup, sex } = location.state || {}; // Destructure the patient details from state

  // Inline styles converted from provided CSS
  const styles = {
    patientDetails: {
      padding: '20px',
      backgroundColor: '#f5f7fb',
    },
    patientInfo: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '20px',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    photo: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
    },
    additionalInfo: {
      color: '#7a7a7a',
    },
    bodyImageContainer: {
      position: 'relative',
      textAlign: 'center',
    },
    bodyImage: {
      width: '100px',
      height: 'auto',
    },
    labels: {
      position: 'absolute',
      top: 0,
      left: '110px',
    },
    label: {
      position: 'absolute',
      left: '110%',
      whiteSpace: 'nowrap',
    },
    migraineLabel: {
      top: '10%',
    },
    heartRateLabel: {
      top: '50%',
    },
    cholesterolLabel: {
      top: '80%',
    },
    healthStats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridGap: '10px',
    },
    stat: {
      backgroundColor: '#f0f4f8',
      padding: '10px',
      borderRadius: '8px',
      textAlign: 'center',
    },
    heartRateGraph: {
      height: '150px',
      backgroundColor: '#e3e9f3',
      borderRadius: '8px',
      marginTop: '10px',
    },
    graphPlaceholder: {
      width: '100%',
      height: '100%',
      backgroundColor: '#1c82e2',
      borderRadius: '4px',
    },
  };

  return (
    <div style={styles.patientDetails}>
      <h1>Patient - {name}</h1>
      <div style={styles.patientInfo}>
        <div style={styles.card}>
          <p><strong>Age:</strong> {age}</p>
        </div>
        <div style={styles.card}>
          <p><strong>Blood Group:</strong> {bloodGroup}</p>
        </div>
        <div style={styles.card}>
          <p><strong>Sex:</strong> {sex}</p>
        </div>
      </div>
      {/* Example additional info block */}
      <div style={styles.bodyImageContainer}>
        <img src="/path/to/body-image.jpg" alt="Body" style={styles.bodyImage} />
        <div style={styles.labels}>
          <span style={{ ...styles.label, ...styles.migraineLabel }}>Migraine</span>
          <span style={{ ...styles.label, ...styles.heartRateLabel }}>Heart Rate</span>
          <span style={{ ...styles.label, ...styles.cholesterolLabel }}>Cholesterol</span>
        </div>
      </div>
      {/* Health stats section */}
      <div style={styles.healthStats}>
        <div style={styles.stat}>Heart Rate: 80 bpm</div>
        <div style={styles.stat}>Cholesterol: 190 mg/dL</div>
      </div>
      {/* Heart rate graph placeholder */}
      <div style={styles.heartRateGraph}>
        <div style={styles.graphPlaceholder}></div>
      </div>
    </div>
  );
}

export default PatientDetails;
