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

export default function Post(props) {
  const img = props.img;
  const title = props.title;
  const id = props.id;
  const info = props.info;
  const position = props.position;

  console.log(position);

  return (
    <div classname="postInfo">
      {position == "left" && (
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} md={6}>
            <img src={img} style={{ height: "50vh", width: "30vw" }} />
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <div>
              <div>{title}</div>
              <div>{info}</div>
            </div>
          </Grid>
        </Grid>
      )}

      {position == "right" && (
        <Grid container spacing={2}>
          
          <Grid item xs={12} lg={6} md={6}>
            <div>
              <div>{title}</div>
              <div>{info}</div>
            </div>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <img src={img} style={{ height: "50vh", width: "30vw" }} />
          </Grid>
        </Grid>
      )}
    </div>
  );
}
