import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import DatePicker from 'react-date-picker';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Hack This Fall 2.0
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [
  {
    id:1,
    img:img1,
  },
  {
    id:2,
    img:img2,
  },
  {
    id:3,
    img:img3,
  }
  ,
  {
    id:4,
    img:img4
  }
  ,{
    id:5,
    img:img5
  }

];

const theme = createTheme();


export default function Album() {
  const [value, onChange] = useState(new Date());

  const history=useHistory();

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>

        <Container sx={{ py: 8 }} maxWidth="l">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <img
                    // component="img"
                    // sx={{
                    //   pt: '26.25%',
                    // }}
                    src={card.img}
                    style={{height:'200px',width:'200px',marginLeft:'4vw'}}
                    // alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      One Tree Planted
                    </Typography>
                    <div>
                      Select Date &nbsp;
                      <input type="date" />
                      {/* <DatePicker className="date" onChange={onChange} value={value} /> */}
                    </div>
                    {/* <br />   */}
                    <div>
                      Enter Email &nbsp;
                      <input id="email" type="email" />
                    </div>
                  </CardContent>
                  <CardActions>
                      <div style={{display:'block', margin: 'auto'}}>
                    <Button size="large">Confirm</Button>
                    <br/>
                    {/* <br/> */}
                    <Button size="small" onClick={()=>history.push('/organisationInfo')} style={{display:'flex', justifyContent: 'center'}}>Know More</Button>
                 </div>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}