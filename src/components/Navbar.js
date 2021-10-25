import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import SawoLogin from 'sawo-react';
import {Link} from 'react-router-dom';
import sawoLogin from './sawoLogin';


function Navbar() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#92cf34' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab style={{color:'white'}} label="Home"  to='/' component={Link} />
        <Tab style={{color:'white'}} label="Profile" to='/profile' component={Link}/>
        <Tab style={{color:'white'}} label="Leaderboard" to='/Leaderboard' component={Link} />
        <Tab style={{color:'white'}} label="Events" to='/events' component={Link}/>
        <Tab style={{color:'white'}} to='/sawoLogin' label='Sign Up/Sign In'  /> 
      </Tabs>
    </Box>
  );
}

export default Navbar


//353849 , FFFFFF , 03CC90 ,232734, 3F4354
