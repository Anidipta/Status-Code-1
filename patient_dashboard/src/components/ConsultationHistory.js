import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function ConsultationHistory() {
  const [isOpen, setIsOpen] = useState(false);
  const consultations = [
    {
      date: '2024-08-01',
      doctor: 'Doctor A',
      condition: 'Cold & Fever',
      diagnosis: 'Viral Infection',
      treatment: 'Rest & Fluids',
      medications: 'Paracetamol',
      followUp: 'In 7 days',
      tests: 'Blood Test',
      mode: 'Online',
      fee: '₹500'
    },
    // Add more records as needed
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="consultation-history" style={{ padding: '20px' }}>
      <Button
        variant="contained"
        onClick={toggleDropdown}
        style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '10px 10px',
          borderRadius: '20px',
          fontWeight: 'bold',
          marginLeft: '90px', // Increased margin-right value
        }}
      >
        {isOpen ? 'Hide Consultation History' : 'Show Consultation History'}
      </Button>
      {isOpen && (
        <TableContainer
          component={Paper}
          style={{
            marginTop: '20px',
            marginRight: '150px',
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
          }}
        >
          <Table>
            <TableHead style={{ backgroundColor: '#1e3a8a' }}>
              <TableRow>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Date & Time</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Doctor's Name</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Condition</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Diagnosis</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Prescribed Treatment</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Medications</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Follow-up Instructions</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Tests Ordered</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Mode & Duration</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Consultation Fee</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {consultations.map((record, index) => (
                <TableRow
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? '#f3f4f6' : '#ffffff',
                    transition: 'background-color 0.3s ease',
                  }}
                  hover
                >
                  <TableCell style={{ fontWeight: 'bold' }}>{record.date}</TableCell>
                  <TableCell>{record.doctor}</TableCell>
                  <TableCell>{record.condition}</TableCell>
                  <TableCell>{record.diagnosis}</TableCell>
                  <TableCell>{record.treatment}</TableCell>
                  <TableCell>{record.medications}</TableCell>
                  <TableCell>{record.followUp}</TableCell>
                  <TableCell>{record.tests}</TableCell>
                  <TableCell>{record.mode}</TableCell>
                  <TableCell>{record.fee}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default ConsultationHistory;
