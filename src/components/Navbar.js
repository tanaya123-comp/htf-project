import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function Navbar() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#40916c' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab style={{color:'white'}} label="Home" />
        <Tab style={{color:'white'}} label="Profile" />
        <Tab style={{color:'white'}} label="Leaderboard" />
        <Tab style={{color:'white'}} label="Events"/>
        
      </Tabs>
    </Box>
  );
}

export default Navbar


//353849 , FFFFFF , 03CC90 ,232734, 3F4354
