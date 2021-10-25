import React from "react";
import "./Dashboard.css";

import Carousel from "react-material-ui-carousel";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import tree from "../images/tree.png";
import tree2 from "../images/tree2.png";
import recycle from "../images/recycle.png";
import plant from "../images/plant.jpeg";
import earth from "../images/earth.jpeg";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Card from '@mui/material/Card';
import plantTree from '../images/plantTree.jpg';
import waste1 from '../images/waste1.jpg';
import waste2 from '../images/waste2.jpg';
import clean from '../images/clean.jpg';
import marathon from '../images/marathon.jpg';
import cycle from '../images/cycle.jpg';
import trek from '../images/trek.jpg';
import TextField from "@mui/material/TextField";
import activity from '../Data/BadgeInfo.js';
import { useHistory } from 'react-router';
import { Button } from "@material-ui/core";


function Dashboard() {
  const [category, setCategory] = React.useState("");

  const history=useHistory();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="container">
      <p style={{ fontSize: "40px", fontWeight: "bold" }}>
        <img src={tree} style={{ height: "50px", width: "50px" }} /> Give A
        Contribution To Save Nature{" "}
        <img src={tree} style={{ height: "50px", width: "50px" }} />
      </p>

      <div class="carousel-container">
        <img
          src={recycle}
          style={{ height: "100px", width: "100px", marginRight: "5vw" }}
        />

        <img
          src={earth}
          style={{ height: "100px", width: "100px", marginRight: "5vw" }}
        />

        <Carousel>
          <img src={img7} style={{ height: "60vh", width: "50vw" }} />

          <img src={img8} style={{ height: "60vh", width: "50vw" }} />

          <img src={img9} style={{ height: "60vh", width: "50vw" }} />
        </Carousel>

        <img
          src={plant}
          style={{ height: "100px", width: "100px", marginLeft: "5vw" }}
        />

        <img
          src={earth}
          style={{ height: "100px", width: "100px", marginLeft: "5vw" }}
        />
      </div>

      <div style={{color:"green",fontSize:'20px',fontWeight:'bold'}}>
        Events that you can participate in!!
      </div>

      <Grid style={{marginTop:'3vh'}} container spacing={2}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card className="eventCard">
            <div>
              <img src={plantTree} style={{height:'200px',width:'200px'}}/>
            </div>

            <div>
              Plant a Life! 
            </div>

            <div>
              <Button variant='contained' color='secondary' onClick={()=>history.push('/events')}>View Events</Button>
            </div>

          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>

        <Card className="eventCard">
            <div>
              <img src={clean} style={{height:'200px',width:'200px'}}/>
            </div>

            <div>
              It's Time to Clean !!
            </div>

            <div>
              <Button variant='contained' color='secondary' onClick={()=>history.push('/events')}>View Events</Button>
            </div>

          </Card>
          
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
        <Card className="eventCard">
            <div>
              <img src={waste1} style={{height:'200px',width:'200px'}}/>
            </div>

            <div>
              Can I recycle my used plastic cup? 🤷‍♀️
            </div>

            <div>
              <Button variant='contained' color='secondary' onClick={()=>history.push('/events')}>View Events</Button>
            </div>

          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
        <Card className="eventCard">
            <div>
              <img src={waste2} style={{height:'200px',width:'200px'}}/>
            </div>

            <div>
              Imagine what wonders your organic waste can do? 🤩
            </div>

            <div>
              <Button variant='contained' color='secondary' onClick={()=>history.push('/events')}>View Events</Button>
            </div>

          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3}>
        <Card className="eventCard">
            <div>
              <img src={marathon} style={{height:'200px',width:'200px'}}/>
            </div>

            <div>
              Let's Run 🏃‍♀️
            </div>

            <div>
              <Button variant='contained' color='secondary' onClick={()=>history.push('/events')}>View Events</Button>
            </div>

          </Card>
        </Grid>

        
        
       
        
        


      </Grid>

      <div style={{color:"green",fontSize:'20px',fontWeight:'bold'}}>
        Fun Events for Weekend!!
      </div>

      <Grid style={{marginTop:'3vh'}} container spacing={2}>

      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Card className="eventCard">
            <div>
              <img src={cycle} style={{height:'200px',width:'200px'}}/>
            </div>

            <div>
              I'll better go for cycling 🚴‍♂️
            </div>

            <div>
              <Button variant='contained' color='secondary' onClick={()=>history.push('/events')}>View Events</Button>
            </div>

          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3}>
        <Card className="eventCard">
            <div>
              <img src={trek} style={{height:'200px',width:'200px'}}/>
            </div>

            <div>
              Mountains are fun na 😍
            </div>

            <div>
              <Button variant='contained' color='secondary' onClick={()=>history.push('/events')}>View Events</Button>
            </div>

          </Card>
        </Grid>



        
        </Grid>


        <div>
        {activity.map(item => (
                    <Card style={{ marginTop: "10px",width:'1000px' }}>
                        <Grid container spacing={2}>
                            <Grid item lg={3} style={{ marginTop: "auto", marginBottom: "auto" }}>
                                <img src={item.img} alt="Badge" className="badge-icon" />
                            </Grid>
                            <Grid item lg={6} style={{ marginTop: "auto", marginBottom: "auto" }}>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.organisation}
                                </Typography>
                                <Typography gutterBottom variant="p" component="div">
                                    {item.description}
                                </Typography>
                            </Grid>
                            <Grid item lg={3} style={{ marginTop: "auto", marginBottom: "auto" }}>
                                {item.date}
                            </Grid>
                        </Grid>
                    </Card>
                ))}
        </div>

    </div>
  );
}

export default Dashboard;
