import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, FormControl, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SpiralBinding = styled(Box)({
  background: '#f7f7f7',
  borderRadius: '10px',
  padding: '20px',
  fontFamily: "'Segoe Script', cursive",
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  border: '2px solid #ccc',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '-20px',
    width: '10px',
    background: 'linear-gradient(to bottom, #ccc 10%, transparent 0%)',
    backgroundSize: '10px 20px',
    backgroundRepeat: 'repeat-y',
  },
});

const RightSection = styled(Box)({
  background: '#e3f2fd',
  borderRadius: '10px',
  padding: '20px',
  fontFamily: "'Segoe Script', cursive",
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  border: '2px solid #ccc',
});

const VisualsSection = styled(Paper)({
  marginTop: '20px',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  fontFamily: "'Segoe Script', cursive",
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
});

// Sample data for vitals at different scales
const generateData = (scale) => {
  if (scale === 'daily') {
    return {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      datasets: [
        {
          label: 'Blood Pressure (mmHg)',
          data: [120, 125, 130, 128, 122, 127, 124],
          borderColor: '#ff6384',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },
        {
          label: 'Heart Rate (bpm)',
          data: [72, 74, 75, 73, 76, 72, 70],
          borderColor: '#36a2eb',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
        },
        {
          label: 'Blood Glucose (mg/dL)',
          data: [90, 95, 100, 105, 110, 108, 103],
          borderColor: '#ff9f40',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
        },
        {
          label: 'Oxygen Saturation (%)',
          data: [98, 97, 99, 97, 98, 96, 98],
          borderColor: '#4bc0c0',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
        // Add more vitals if needed
      ],
    };
  } else if (scale === 'monthly') {
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Blood Pressure (mmHg)',
          data: [125, 126, 130, 128, 126, 127, 129],
          borderColor: '#ff6384',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },
        {
          label: 'Heart Rate (bpm)',
          data: [72, 73, 74, 75, 72, 73, 74],
          borderColor: '#36a2eb',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
        },
        {
          label: 'Blood Glucose (mg/dL)',
          data: [100, 105, 107, 110, 108, 106, 109],
          borderColor: '#ff9f40',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
        },
        {
          label: 'Oxygen Saturation (%)',
          data: [97, 98, 97, 98, 96, 98, 97],
          borderColor: '#4bc0c0',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
        // Add more vitals if needed
      ],
    };
  } else if (scale === 'yearly') {
    return {
      labels: ['2021', '2022', '2023', '2024'],
      datasets: [
        {
          label: 'Blood Pressure (mmHg)',
          data: [125, 126, 127, 128],
          borderColor: '#ff6384',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },
        {
          label: 'Heart Rate (bpm)',
          data: [72, 73, 74, 75],
          borderColor: '#36a2eb',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
        },
        {
          label: 'Blood Glucose (mg/dL)',
          data: [102, 105, 107, 110],
          borderColor: '#ff9f40',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
        },
        {
          label: 'Oxygen Saturation (%)',
          data: [98, 97, 98, 96],
          borderColor: '#4bc0c0',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
        // Add more vitals if needed
      ],
    };
  }
};

// Chart options
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Vitals Overview',
    },
  },
};

const HealthRecords = () => {
  const [timeScale, setTimeScale] = useState('daily'); // Track the selected time scale

  // Handle time scale change
  const handleTimeScaleChange = (event) => {
    setTimeScale(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Grid container spacing={3}>
        {/* Medical History and Current Treatments */}
        <Grid item xs={12} md={6}>
          <SpiralBinding>
            <Typography
              variant="h5"
              gutterBottom
              style={{
                fontFamily: "Alanis Hand",
                color: '#4b0082', // Heading color (Indigo)
                fontWeight: 'bold',
              }}
            >
              Medical History
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontFamily: "'Segoe Script', cursive",
                color: '#00008b', // Body text color (Dark Blue)
              }}
            >
              - Hypertension: Diagnosed in 2021 <br />
              - Diabetes Type 2: Under control with medication <br />
              - Asthma: Regular use of inhaler <br />
              - Allergies: Seasonal allergies managed with antihistamines <br />
            </Typography>
          </SpiralBinding>
        </Grid>
        <Grid item xs={12} md={6}>
          <RightSection>
            <Typography
              variant="h5"
              gutterBottom
              style={{
                fontFamily: "Alanis Hand",
                color: '#4b0082', // Heading color (Indigo)
                fontWeight: 'bold',
              }}
            >
              Current Treatments
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontFamily: "'Segoe Script', cursive",
                color: '#00008b', // Body text color (Dark Blue)
              }}
            >
              - Metformin: 500mg twice a day for diabetes <br />
              - Amlodipine: 5mg daily for blood pressure control <br />
              - Salbutamol: Inhaler as needed for asthma <br />
              - Lisinopril: 10mg daily for hypertension <br />
            </Typography>
          </RightSection>
        </Grid>

        {/* Visuals Section */}
        <Grid item xs={12}>
          <VisualsSection>
            <Typography
              variant="h5"
              gutterBottom
              style={{
                fontFamily: "Alanis Hand",
                color: '#4b0082', // Heading color (Indigo)
                fontWeight: 'bold',
              }}
            >
              Vitals & Visuals
            </Typography>

            {/* Dropdown to select time scale */}
            <FormControl fullWidth margin="normal">
              <Select
                value={timeScale}
                onChange={handleTimeScaleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Time Scale' }}
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="yearly">Yearly</MenuItem>
              </Select>
            </FormControl>

            {/* Adding a Line Chart */}
            <Line data={generateData(timeScale)} options={chartOptions} />
          </VisualsSection>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HealthRecords;
