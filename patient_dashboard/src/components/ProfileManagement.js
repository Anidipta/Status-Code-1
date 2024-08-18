import React, { useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Grid, Avatar, Typography } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import { useNavigate } from 'react-router-dom';

const ProfileManagement = ({ setProfileImage }) => {
  const [profileData, setProfileData] = useState({
    name: '',
    gender: '',
    dob: null,
    contact: '',
    medicalConditions: '',
    allergies: '',
    medications: '',
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [editMode, setEditMode] = useState(true); // Add state for edit mode
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setProfileData({
      ...profileData,
      dob: date,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setProfileImage(URL.createObjectURL(file)); // Set the selected image as the profile image
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit profile data (e.g., save to backend or local storage)
    alert('Profile updated successfully!');
    setEditMode(true); // Lock the profile after updating
  };

  const handleEditClick = () => {
    setEditMode(false); // Unlock the profile for editing
  };

  return (
    <div style={styles.container}>
      <Typography variant="h4" style={styles.title}>
        Profile Management
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Avatar src={selectedImage} style={styles.avatar} />
            {!editMode && (
              <input
                accept="image/*"
                style={styles.input}
                id="profile-image-upload"
                type="file"
                onChange={handleImageChange}
              />
            )}
            <label htmlFor="profile-image-upload">
              <Button
                variant="contained"
                component="span"
                style={styles.uploadButton}
                disabled={editMode}
              >
                {editMode ? 'Image Locked' : 'Upload Image'}
              </Button>
            </label>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              label="Name"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
              fullWidth
              required
              style={styles.field}
              disabled={editMode}
            />
            <FormControl fullWidth required style={styles.field}>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={profileData.gender}
                onChange={handleInputChange}
                disabled={editMode}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <DatePicker
              label="Date of Birth"
              value={profileData.dob}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} fullWidth required style={styles.field} disabled={editMode} />}
            />
            <TextField
              label="Contact Information"
              name="contact"
              value={profileData.contact}
              onChange={handleInputChange}
              fullWidth
              required
              style={styles.field}
              disabled={editMode}
            />
            <TextField
              label="Medical Conditions"
              name="medicalConditions"
              value={profileData.medicalConditions}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={3}
              style={styles.field}
              disabled={editMode}
            />
            <TextField
              label="Allergies"
              name="allergies"
              value={profileData.allergies}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={3}
              style={styles.field}
              disabled={editMode}
            />
            <TextField
              label="Medications"
              name="medications"
              value={profileData.medications}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={3}
              style={styles.field}
              disabled={editMode}
            />
          </Grid>
        </Grid>
        <div style={styles.buttonContainer}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={styles.submitButton}
            disabled={editMode}
          >
            Save Profile
          </Button>
          {editMode && (
            <Button
              type="button"
              variant="contained"
              color="secondary"
              style={styles.editButton}
              onClick={handleEditClick}
            >
              Edit Profile
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    margin: '20px auto',
    maxWidth: '800px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
  },
  title: {
    marginBottom: '20px',
    fontFamily: "'Segoe Script', cursive",
  },
  avatar: {
    width: '150px',
    height: '150px',
    margin: '10px auto',
  },
  input: {
    display: 'none',
  },
  uploadButton: {
    display: 'block',
    marginTop: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  field: {
    marginBottom: '20px',
  },
  submitButton: {
    marginTop: '20px',
  },
  editButton: {
    marginTop: '20px',
    marginLeft: '10px',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default ProfileManagement;
