import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientDirectory from './PatientDirectory.jsx';
import PatientDetails from './PatientDetails.jsx';
import './App.css';

function App() {
  const [patients, setPatients] = useState([
    { name: 'Duncan Pitt', id: 'AG9ST2D0P5', age: 45, bloodGroup: 'O+', sex: 'M' },
    { name: 'Mary Weather', id: 'R4L7Y9C2E1', age: 32, bloodGroup: 'O+', sex: 'F' },
    // Add initial patients here
  ]);

  return (
    <Router>
      <Routes>
        {/* Patient Directory Route */}
        <Route
          path="/"
          element={<PatientDirectory patients={patients} setPatients={setPatients} />}
        />
        {/* Patient Details Route */}
        <Route 
          path="/patients/:id" 
          element={<PatientDetails patients={patients} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
