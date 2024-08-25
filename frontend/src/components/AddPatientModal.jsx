import React, { useState, useEffect } from 'react';

function AddPatientModal({ showModal, closeModal, addOrUpdatePatient, editPatient }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('M');
  const [bloodType, setBloodType] = useState('A+');

  useEffect(() => {
    if (editPatient) {
      setName(editPatient.name);
      setAge(editPatient.age);
      setSex(editPatient.sex);
      setBloodType(editPatient.bloodType);
    } else {
      setName('');
      setAge('');
      setSex('M');
      setBloodType('A+');
    }
  }, [editPatient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatient = {
      id: editPatient ? editPatient.id : Date.now(),
      name,
      age,
      sex,
      bloodType,
    };
    addOrUpdatePatient(newPatient);
  };

  if (!showModal) return null;

  // Inline styles for modal overlay and content
  const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      background: 'rgba(255, 255, 255, 0.2)', // Glassmorphism effect
      backdropFilter: 'blur(10px)',
      padding: '30px',
      borderRadius: '20px',
      width: '600px',
      maxWidth: '90%',
      textAlign: 'center',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
    input: {
      width: 'calc(70% - 1px)',
      padding: '12px',
      margin: '10px 0',
      borderRadius: '10px',
      border: '1px solid #ccc',
      fontSize: '1em',
    },
    radioGroup: {
      display: 'flex',
      justifyContent: 'center',
      margin: '5px 0',
    },
    radioLabel: {
      margin: '0 8px',
      backgroundColor: 'lightblue',
      padding: '10px',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      fontSize: '0.9em',
    },
    radioChecked: {
      backgroundColor: '#007bff',
      color: 'white',
    },
    button: {
      padding: '10px 10px',
      margin: '12px',
      border: 'none',
      borderRadius: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      fontSize: '0.8em',
    },
    buttonCancel: {
      backgroundColor: '#ccc',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    buttonCancelHover: {
      backgroundColor: '#999',
    },
  };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <h2>{editPatient ? 'Edit Patient' : 'Add New Patient'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={modalStyles.input}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              style={modalStyles.input}
            />
          </label>
          <label>
            Sex:
            <div style={modalStyles.radioGroup}>
              <input
                type="radio"
                id="male"
                name="sex"
                value="M"
                checked={sex === 'M'}
                onChange={(e) => setSex(e.target.value)}
              />
              <label
                htmlFor="male"
                style={{
                  ...modalStyles.radioLabel,
                  ...(sex === 'M' ? modalStyles.radioChecked : {}),
                }}
              >
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="sex"
                value="F"
                checked={sex === 'F'}
                onChange={(e) => setSex(e.target.value)}
              />
              <label
                htmlFor="female"
                style={{
                  ...modalStyles.radioLabel,
                  ...(sex === 'F' ? modalStyles.radioChecked : {}),
                }}
              >
                Female
              </label>
            </div>
          </label>
          <label>
            Blood Type:
            <div style={modalStyles.radioGroup}>
              {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((type) => (
                <React.Fragment key={type}>
                  <input
                    type="radio"
                    id={type}
                    name="bloodType"
                    value={type}
                    checked={bloodType === type}
                    onChange={(e) => setBloodType(e.target.value)}
                  />
                  <label
                    htmlFor={type}
                    style={{
                      ...modalStyles.radioLabel,
                      ...(bloodType === type ? modalStyles.radioChecked : {}),
                    }}
                  >
                    {type}
                  </label>
                </React.Fragment>
              ))}
            </div>
          </label>
          <button type="submit" style={modalStyles.button}>
            {editPatient ? 'Update Patient' : 'Add Patient'}
          </button>
          <button
            type="button"
            style={{ ...modalStyles.button, ...modalStyles.buttonCancel }}
            onClick={closeModal}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPatientModal;
