import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Modal, Box, TextField, MenuItem } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MessageIcon from '@mui/icons-material/Message';
import PhoneIcon from '@mui/icons-material/Phone';

const DoctorAppointments = ({ setNotification }) => {
  const doctors = [
    { name: 'Doctor A', fee: '₹500', slots: 'Request Appointment', status: 'available' },
    { name: 'Doctor B', fee: '₹500', slots: 'Limited Slots Left', status: 'limited' },
    { name: 'Doctor C', fee: '₹500', slots: 'Request Appointment', status: 'available' }
  ];

  const [open, setOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState('10');
  const [selectedMinute, setSelectedMinute] = useState('00');
  const [selectedMeridian, setSelectedMeridian] = useState('AM');
  const [selectedDuration, setSelectedDuration] = useState('15 mins');
  const [reason, setReason] = useState('');
  const [uniqueID, setUniqueID] = useState('');

  const blockedDates = [new Date(2024, 7, 20), new Date(2024, 7, 21)]; // Example blocked dates
  const availableDurations = ['15 MINS', '30 MINS', '1 HOUR', '1.5 HOURS'];

  const handleOpen = (doctor) => {
    setSelectedDoctor(doctor);
    setOpen(true);
    generateUniqueID();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isBlockedDate = (date) => blockedDates.some(d => d.toDateString() === date.toDateString());

  const generateUniqueID = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setUniqueID(result);
  };

  const handleRequestAppointment = () => {
    const time = `${selectedHour}:${selectedMinute} ${selectedMeridian}`;
    const date = selectedDate.toDateString();
    const message = `Appointment booked on ${date}, \nTime: ${time} with ${selectedDoctor.name}`;

    // Set notification in TopNavBar
    setNotification(message);

    // Close the modal
    handleClose();
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#e0f7fa', // Lightest blue background
    borderRadius: '10px',
    boxShadow: 24,
    p: 3,
    overflowY: 'auto',
    maxHeight: '80vh',
    overflowX: 'hidden' // Prevent horizontal scrollbar
  };

  return (
    <div className="doctor-appointments" style={{ fontFamily: "'Dexery', cursive", display: 'flex', flexDirection: 'column' }}>
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
              <Typography variant="h6" style={{ fontWeight: 'bold', marginRight: '350px', fontFamily: "'Dexery', cursive", textTransform: 'uppercase' }}>
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
                onClick={() => handleOpen(doctor)}
              >
                {doctor.slots}
              </Button>
              <Typography variant="body1" style={{ fontWeight: 'bold', color: 'white', fontFamily: "'Dexery', cursive", textTransform: 'uppercase' }}>
                {doctor.fee}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Modal for Appointment Request */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h5" style={{ marginBottom: '20px', fontFamily: "'Dexery', cursive", textAlign: 'center', textTransform: 'uppercase', color: 'blue' }}>
            Request Appointment with Doctor {selectedDoctor.name}
          </Typography>

          <Typography variant="body1" style={{ marginBottom: '15px', fontFamily: "'Dexery', cursive", textTransform: 'uppercase', color: 'green' }}>
            Patient Name: Patient A
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '15px', fontFamily: "'Dexery', cursive", textTransform: 'uppercase', color: 'green' }}>
            Patient ID: {uniqueID}
          </Typography>

          <Typography variant="body1" style={{ fontFamily: "'Dexery', cursive", marginBottom: '10px', textTransform: 'uppercase', color: 'blue' }}>
            Choose Date:
          </Typography>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileDisabled={({ date }) => isBlockedDate(date)}
            style={{ maxWidth: '100%', height: '200px', marginBottom: '20px' }} // Adjust height of calendar
          />

          <Typography variant="body1" style={{ fontFamily: "'Dexery', cursive", marginBottom: '10px', marginTop: '20px', textTransform: 'uppercase', color: 'blue' }}>
            Choose Time Slot:
          </Typography>
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <TextField
              select
              value={selectedHour}
              onChange={(e) => setSelectedHour(e.target.value)}
              variant="outlined"
              style={{ marginRight: '10px' }}
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map(hour => (
                <MenuItem key={hour} value={hour.toString().padStart(2, '0')}>
                  {hour.toString().padStart(2, '0')}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              value={selectedMinute}
              onChange={(e) => setSelectedMinute(e.target.value)}
              variant="outlined"
              style={{ marginRight: '10px' }}
            >
              {['00', '15', '30', '45'].map(minute => (
                <MenuItem key={minute} value={minute}>
                  {minute}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              value={selectedMeridian}
              onChange={(e) => setSelectedMeridian(e.target.value)}
              variant="outlined"
            >
              {['AM', 'PM'].map(meridian => (
                <MenuItem key={meridian} value={meridian}>
                  {meridian}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <Typography variant="body1" style={{ fontFamily: "'Segoe Script', cursive", marginBottom: '10px', textTransform: 'uppercase', color: 'green' }}>
            Duration:
          </Typography>
          <TextField
            select
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
            variant="outlined"
            style={{ marginBottom: '20px', width: '100%' }}
          >
            {availableDurations.map(duration => (
              <MenuItem key={duration} value={duration}>
                {duration}
              </MenuItem>
            ))}
          </TextField>

          <Typography variant="body1" style={{ fontFamily: "'Segoe Script', cursive", marginBottom: '10px', textTransform: 'uppercase', color: 'green' }}>
            Reason for Appointment:
          </Typography>
          <TextField
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            variant="outlined"
            fullWidth
            style={{ marginBottom: '20px' }}
          />

          <Button
            variant="contained"
            onClick={handleRequestAppointment}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: 'bold',
              float: 'right',
              marginTop: '20px'
            }}
          >
            Request Appointment
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default DoctorAppointments;
