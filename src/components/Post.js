import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Post.css";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";


export default function Post(props) {
  const img = props.img;
  const title = props.title;
  const id = props.id;
  const info = props.info;
  const position = props.position;
  const details=props.details;

  console.log(position);

  return (
    <div classname="postInfo">
      {position == "left" && (
        <Grid container >
          <Grid item xs={12} lg={6} md={6}>
            <img src={img} style={{ height: "50vh", width: "30vw" ,borderRadius:'20px'}} />
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <div>
              <Card style={{padding:'10px',borderRadius:'10px',marginLeft:'2vw'}}>
              <div style={{fontSize:'35px',fontWeight:'bold'}}>{title}</div>
              <div style={{fontSize:'20px'}}>{info}</div>
              <div style={{fontSize:'20px',marginTop:'2vh',fontWeight:'bold'}}>{details}</div>
              <Button className='button'>Participate</Button>
              </Card>
            </div>
          </Grid>
        </Grid>
      )}

      {position == "right" && (
        <Grid container >
          
          <Grid item xs={12} lg={6} md={6}>
            <div>
              <Card style={{padding:'10px',borderRadius:'10px',marginLeft:'2vw'}}>
              <div style={{fontSize:'35px',fontWeight:'bold'}}>{title}</div>
              <div style={{fontSize:'20px'}}>{info}</div>
              <div style={{fontSize:'20px',marginTop:'2vh',fontWeight:'bold'}}>{details}</div>
              <Button className='button'>Participate</Button>
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <img src={img} style={{ height: "50vh", width: "30vw" , borderRadius:'20px' }} />
          </Grid>
        </Grid>
      )}
    </div>
  );
}
