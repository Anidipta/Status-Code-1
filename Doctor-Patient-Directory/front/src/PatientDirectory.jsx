import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import AddPatientModal from './AddPatientModal.jsx'; // Modal for adding and editing patients
import './PatientDirectory.css';

function PatientDirectory({ patients, setPatients }) {
  const [showModal, setShowModal] = useState(false);
  const [editPatient, setEditPatient] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  // Modal functions
  const openModal = (patient = null) => {
    setEditPatient(patient);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditPatient(null);
  };

  // Function to add or update patients
  const addOrUpdatePatient = (newPatient) => {
    if (editPatient) {
      // Update patient
      setPatients(patients.map(p =>
        p.id === editPatient.id ? newPatient : p
      ));
    } else {
      // Add new patient
      setPatients([...patients, newPatient]);
    }
    closeModal();
  };

  // Function to handle delete
  const deletePatient = (patientId) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      setPatients(patients.filter(patient => patient.id !== patientId));
    }
  };

  // Function to handle view
  const viewPatient = (patient) => {
    navigate(`/patients/${patient.id}`, { state: patient }); // Pass the patient data using the state
  };

  return (
    <div className="patient-directory">
      <div className="header">
        <h1>Patients Directory</h1>
        <div className="add-patient">
          <button onClick={() => openModal()}>+ Add New Patient</button>
        </div>
      </div>

      {/* Patient grid layout */}
      <div className="patient-grid">
        {patients.map((patient) => (
          <div key={patient.id} className="patient-card">
            {/* Patient details */}
            <h3>{patient.name}</h3>
            <p>{patient.id}</p>
            {/* Action buttons (View, Edit, Delete) */}
            <div className="actions">
              <button onClick={() => viewPatient(patient)}>
                <i className="fas fa-eye"></i> View
              </button>
              <button onClick={() => openModal(patient)}>
                <i className="fas fa-edit"></i> Edit
              </button>
              <button onClick={() => deletePatient(patient.id)}>
                <i className="fas fa-trash-alt"></i> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination (placeholder for future implementation) */}
      <div className="pagination">
        <button disabled>{'<'}</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>10</button>
        <button>{'>'}</button>
      </div>

      {/* Modal for adding and editing a patient */}
      <AddPatientModal 
        showModal={showModal} 
        closeModal={closeModal} 
        addOrUpdatePatient={addOrUpdatePatient} 
        editPatient={editPatient} 
      />
    </div>
  );
}

export default PatientDirectory;
