import React from 'react';
import { useLocation } from 'react-router-dom';
import './PatientDetails.css';

function PatientDetails() {
  const location = useLocation();
  const { name, age, bloodGroup, sex } = location.state || {}; // Destructure the patient details from state

  return (
    <div className="patient-details">
      <h1>Patient - {name}</h1>
      <div className="patient-info">
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Blood Group:</strong> {bloodGroup}</p>
        <p><strong>Sex:</strong> {sex}</p>
      </div>
    </div>
  );
}

export default PatientDetails;
