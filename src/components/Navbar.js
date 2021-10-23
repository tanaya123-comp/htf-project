import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import SawoLogin from 'sawo-react';


function Navbar() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#40916c' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" />
        <Tab label="Profile" />
        <Tab label="Leaderboard" />
        <Tab label="Events" />
        <Button variant="contained" href="#contained-buttons" id="sawo-container" sx={{bgcolor:'black',align:'right',}}>Sign Up/Sign In </Button> 
      </Tabs>
    </Box>
  );
}

export default Navbar


//353849 , FFFFFF , 03CC90 ,232734, 3F4354
