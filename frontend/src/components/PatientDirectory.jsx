import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import AddPatientModal from './AddPatientModal.jsx'; // Modal for adding and editing patients

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

  // Inline styles converted from provided CSS
  const styles = {
    patientDirectory: {
      width: '1230px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '30px',
      color: '#333',
    },
    patientGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '30px',
    },
    patientCard: {
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      position: 'relative',
    },
    patientCardImage: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      marginBottom: '10px',
    },
    patientCardName: {
      fontSize: '20px',
      margin: '10px 0 5px',
      color: '#333',
    },
    patientCardID: {
      fontSize: '14px',
      color: '#888',
      margin: '5px 0',
    },
    actions: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '15px',
    },
    icon: {
      fontSize: '18px',
      color: '#007bff',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    iconHover: {
      color: '#0056b3',
    },
    addPatientButton: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    addPatientButtonHover: {
      backgroundColor: '#0056b3',
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    paginationButton: {
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '8px 15px',
      borderRadius: '4px',
      margin: '0 5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    paginationButtonDisabled: {
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
    },
    paginationButtonHover: {
      backgroundColor: '#0056b3',
    }
  };

  return (
    <div style={styles.patientDirectory}>
      <div style={styles.header}>
        <h1>Patients Directory</h1>
        <div>
          <button
            style={styles.addPatientButton}
            onMouseEnter={e => (e.target.style.backgroundColor = styles.addPatientButtonHover.backgroundColor)}
            onMouseLeave={e => (e.target.style.backgroundColor = styles.addPatientButton.backgroundColor)}
            onClick={() => openModal()}
          >
            + Add New Patient
          </button>
        </div>
      </div>

      {/* Patient grid layout */}
      <div style={styles.patientGrid}>
        {patients.map((patient) => (
          <div key={patient.id} style={styles.patientCard}>
            {/* Patient details */}
            <img src="/path/to/profile-picture.jpg" alt="Patient" style={styles.patientCardImage} />
            <h3 style={styles.patientCardName}>{patient.name}</h3>
            <p style={styles.patientCardID}>{patient.id}</p>

            {/* Action buttons (View, Edit, Delete) */}
            <div style={styles.actions}>
              <i
                className="fas fa-eye"
                style={styles.icon}
                onMouseEnter={e => (e.target.style.color = styles.iconHover.color)}
                onMouseLeave={e => (e.target.style.color = styles.icon.color)}
                onClick={() => viewPatient(patient)}
              ></i>
              <i
                className="fas fa-edit"
                style={styles.icon}
                onMouseEnter={e => (e.target.style.color = styles.iconHover.color)}
                onMouseLeave={e => (e.target.style.color = styles.icon.color)}
                onClick={() => openModal(patient)}
              ></i>
              <i
                className="fas fa-trash-alt"
                style={styles.icon}
                onMouseEnter={e => (e.target.style.color = styles.iconHover.color)}
                onMouseLeave={e => (e.target.style.color = styles.icon.color)}
                onClick={() => deletePatient(patient.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={styles.pagination}>
        <button style={styles.paginationButton} disabled>
          {'<'}
        </button>
        <button style={styles.paginationButton}>1</button>
        <button style={styles.paginationButton}>2</button>
        <button style={styles.paginationButton}>3</button>
        <button style={styles.paginationButton}>...</button>
        <button style={styles.paginationButton}>10</button>
        <button style={styles.paginationButton}>{'>'}</button>
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
