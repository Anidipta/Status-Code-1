import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import PhoneIcon from '@mui/icons-material/Phone';

function DoctorAppointments() {
  const doctors = [
    { name: 'Doctor A', fee: '₹500', slots: 'Request Appointment', status: 'available' },
    { name: 'Doctor B', fee: '₹500', slots: 'Limited Slots Left', status: 'limited' },
    { name: 'Doctor C', fee: '₹500', slots: 'Request Appointment', status: 'available' }
  ];

  return (
    <div className="doctor-appointments" style={{ fontFamily: "'Segoe Script', cursive", display: 'flex', flexDirection: 'column' }}>
      {doctors.map((doctor, index) => (
        <Card
          key={index}
          style={{
            marginBottom: '20px',
            backgroundColor: '#2563eb',
            color: 'white',
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            padding: '15px',
            marginRight: '100px',
            marginLeft: '100px',
            display: 'flex',
            alignItems: 'center',
            height: '35px', // Adjust height as needed
            justifyContent: 'space-between',
          }}
        >
          <CardContent style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            {/* Doctor Info and Icons */}
            <div style={{ display: 'flex', alignItems: 'center', flex: 2 }}>
              <Typography variant="h6" style={{ fontWeight: 'bold', marginRight: '350px', fontFamily: "'Dexery', cursive" }}>
                {doctor.name}
              </Typography>
              <MessageIcon style={{ marginRight: '70px', cursor: 'pointer', color: '#fff' }} />
              <PhoneIcon style={{ cursor: 'pointer', color: '#fff' }} />
            </div>

            {/* Buttons and Fee */}
            <div style={{ display: 'flex', alignItems: 'center', fontFamily: "'Dexery', cursive" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: doctor.status === 'limited' ? '#ef4444' : '#10b981',
                  color: 'white',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  height: '40px', // Adjust height to match card
                  minWidth: '150px', // Set a minimum width for button
                  textAlign: 'center', // Center text
                  whiteSpace: 'nowrap', // Ensure text stays in one line
                  overflow: 'hidden', // Hide overflow text
                  textOverflow: 'ellipsis', // Add ellipsis if text overflows
                  marginRight: '10px' // Space between button and fee
                }}
              >
                {doctor.slots}
              </Button>
              <Typography variant="body1" style={{ fontWeight: 'bold', color: 'white', fontFamily: "'Dexery', cursive" }}>
                {doctor.fee}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default DoctorAppointments;
