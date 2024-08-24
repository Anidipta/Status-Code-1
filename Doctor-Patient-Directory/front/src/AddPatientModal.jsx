import React, { useState, useEffect } from 'react';
import './AddPatientModal.css';

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

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{editPatient ? 'Edit Patient' : 'Add New Patient'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>
          <label>
            Sex:
            <div className="radio-group">
              <input
                type="radio"
                id="male"
                name="sex"
                value="M"
                checked={sex === 'M'}
                onChange={(e) => setSex(e.target.value)}
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="female"
                name="sex"
                value="F"
                checked={sex === 'F'}
                onChange={(e) => setSex(e.target.value)}
              />
              <label htmlFor="female">Female</label>
            </div>
          </label>
          <label>
            Blood Type:
            <div className="radio-group">
              {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                <React.Fragment key={type}>
                  <input
                    type="radio"
                    id={type}
                    name="bloodType"
                    value={type}
                    checked={bloodType === type}
                    onChange={(e) => setBloodType(e.target.value)}
                  />
                  <label htmlFor={type}>{type}</label>
                </React.Fragment>
              ))}
            </div>
          </label>
          <button type="submit">{editPatient ? 'Update Patient' : 'Add Patient'}</button>
          <button type="button" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default AddPatientModal;
