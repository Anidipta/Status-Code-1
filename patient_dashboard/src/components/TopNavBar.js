import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, Avatar, ListItemIcon, ListItemText, Button, Badge, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import HistoryIcon from '@mui/icons-material/History';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MessageIcon from '@mui/icons-material/Message';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

const TopNavBar = ({ notification, unreadCount, setUnreadCount, profileImage }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Determine the active menu based on the current URL path
    const path = location.pathname;
    if (path.includes('/health-records')) {
      setActiveMenu('Health Records');
    } else if (path.includes('/appointments')) {
      setActiveMenu('Appointments');
    } //else if (path.includes('/health-overview')) 
      //{
      //setActiveMenu('Health Overview');
    //}
        else if (path.includes('/communication')) {
      setActiveMenu('Communication');
    } else if (path.includes('/feedback-support')) {
      setActiveMenu('Feedback & Support');
    } else if (path.includes('/profile-management')) {
      setActiveMenu(''); // Reset active menu for profile management
    } else {
      setActiveMenu('Appointments'); // Default to 'Appointments' if no other path matches
    }
  }, [location]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuClick = (text) => {
    setActiveMenu(text);
    if (text === 'Health Records') {
      navigate('/health-records');
    } else if (text === 'Appointments') {
      navigate('/appointments');
    } 
    //else if (text === 'Health Overview') 
    //{
    //navigate('/health-overview');
    //} 
    else if (text === 'Communication') {
      navigate('/communication');
    } else if (text === 'Feedback & Support') {
      navigate('/feedback-support');
    }
  };

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
    setUnreadCount(0); // Reset unread count once notifications are viewed
  };

  const handleNotificationClose = () => {
    setAnchorEl(null);
  };

  const handleLogoClick = () => {
    navigate('/appointments'); // Navigate to Appointments page when logo is clicked
  };

  const handleProfileClick = () => {
    navigate('/profile-management'); // Navigate to Profile Management page
    setActiveMenu(''); // Reset active menu for profile management
  };

  const menuItems = [
    { text: 'Appointments', icon: <CalendarTodayIcon /> },
    { text: 'Health Overview', icon: <HealthAndSafetyIcon /> },
    { text: 'Health Records', icon: <HistoryIcon /> },
    { text: 'Communication', icon: <MessageIcon /> },
    { text: 'Feedback & Support', icon: <FeedbackIcon /> },
  ];

  return (
    <AppBar position="fixed" style={{ backgroundColor: '#1e3a8a' }}>
      <Toolbar>
        {/* Drawer Button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          style={{ marginRight: '20px' }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* Project Logo and Title */}
        <Typography
          variant="h5"
          noWrap
          component="div"
          style={{ display: 'flex', alignItems: 'center', fontFamily: "'Segoe Script', cursive", fontWeight: 'bold', cursor: 'pointer' }}
          onClick={handleLogoClick}
        >
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <img src={logo} alt="MediTrack Logo" style={{ height: '40px', marginRight: '10px' }} />
            <span style={{ color: '#000', fontWeight: 'bold' }}>Medi</span>
            <span style={{ color: '#228B22', fontWeight: 'bold' }}>Track</span>
          </a>
        </Typography>

        {/* Navigation Links */}
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', marginLeft: '30px' }}>
          {menuItems.map((item, index) => (
            <Button
              key={`nav-${index}`}
              style={{
                color: activeMenu === item.text ? '#4ade80' : 'white',
                fontSize: '1rem',
                margin: '0 10px',
                textTransform: 'none',
                position: 'relative',
                fontWeight: activeMenu === item.text ? 'bold' : 'normal',
                fontFamily: "'Segoe Script', cursive",
              }}
              onClick={() => handleMenuClick(item.text)}
              className="nav-link"
            >
              {item.text}
              <span
                className="underline-effect"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  backgroundColor: '#4ade80',
                  transform: activeMenu === item.text ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </Button>
          ))}
        </div>

        {/* Notification Icon */}
        <IconButton color="inherit" onClick={handleNotificationClick} style={{ position: 'relative', marginRight: '20px' }}>
          <Badge badgeContent={unreadCount} color="error" style={{ fontSize: '0.75rem' }}>
            <NotificationsIcon fontSize="large" />
          </Badge>
        </IconButton>

        {/* User Icon */}
        <IconButton color="inherit" onClick={handleProfileClick}>
          {profileImage ? (
            <Avatar src={profileImage} style={{ width: 40, height: 40 }} />
          ) : (
            <AccountCircleIcon fontSize="large" />
          )}
        </IconButton>
      </Toolbar>

      {/* Sliding Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div
          style={{ width: '240px', backgroundColor: '#1e40af', height: '100%', paddingTop: '20px', color: 'white' }}
          onClick={toggleDrawer}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={`drawer-${index}`}
                style={{
                  padding: '15px 20px',
                  backgroundColor: activeMenu === item.text ? '#4ade80' : 'transparent',
                  color: activeMenu === item.text ? '#000' : 'white',
                  borderRadius: '10px',
                  fontWeight: activeMenu === item.text ? 'bold' : 'normal',
                }}
                onClick={() => {
                  handleMenuClick(item.text);
                  navigate(`/${item.text.toLowerCase().replace(/ /g, '-')}`); // Navigate to the page
                }}
              >
                <ListItemIcon style={{ color: activeMenu === item.text ? '#000' : 'white' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{
                    style: {
                      fontFamily: "'Segoe Script', cursive",
                      fontWeight: 'bold'
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

      {/* Notification Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleNotificationClose}
        PaperProps={{
          style: {
            maxHeight: '200px', // Fixed height
            width: '300px',
            backgroundColor: '#f5f5f5',
            color: '#000',
            overflowY: 'auto' // Enable scrolling
          },
        }}
      >
        {notification ? (
          <MenuItem onClick={handleNotificationClose}>
            <Typography variant="body1">{notification}</Typography>
          </MenuItem>
        ) : (
          <MenuItem onClick={handleNotificationClose}>
            <Typography variant="body1">No new notifications</Typography>
          </MenuItem>
        )}
      </Menu>
    </AppBar>
  );
};

export default TopNavBar;
