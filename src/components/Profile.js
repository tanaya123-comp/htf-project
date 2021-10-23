import React from 'react'
import './Profile.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import RoomIcon from '@mui/icons-material/Room';

import badges from '../data/BadgeList';
import activity from '../data/PastActivity'

import LevelTimeline from './LevelTimeline';


function Profile() {
    return (
        <Grid container spacing={2}>
            <Grid item lg={4} style={{ margin: "10px" }}>
                <Card sx={{ maxHeight: 460 }}>

                    <CardContent>
                        <div className="title-wrapper">
                            <div style={{
                                height: "50px",
                                width: "50px",
                                backgroundColor: "#E5E4E2",
                                borderRadius: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <div>
                                    P
                                </div>
                            </div>
                            <Typography gutterBottom variant="h5" component="div" style={{ marginLeft: "20px" }}>
                                pratham022
                            </Typography>
                        </div>
                        <Typography gutterBottom variant="h5" component="div" style={{ marginTop: "10px" }}>
                            Prathamesh Thombre
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" style={{ marginTop: "10px" }}>
                            pthombre657@gmail.com
                        </Typography>

                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <RoomIcon />
                            <Typography gutterBottom variant="h6" component="div" style={{ marginTop: "10px", marginLeft: "10px" }}>
                                Pune, India
                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small">EDIT</Button>
                    </CardActions>
                </Card>

                <LevelTimeline />


            </Grid>
            <Grid item lg={7}>
                <Typography gutterBottom variant="h5" component="div" style={{ marginTop: "20px" }}>
                    Badges
                </Typography>
                <Card className="badge-list">
                    <Grid container spacing={2}>
                        {badges.map(badge => (
                            <>
                                <Grid item lg={3} style={{ marginTop: "auto", marginBottom: "auto" }}>
                                    <img src={badge.img} alt="Badge" className="badge-icon" />
                                    <Typography gutterBottom variant="h5" component="div">
                                        x {badge.achieved}
                                    </Typography>
                                </Grid>
                            </>
                        ))}
                    </Grid>
                </Card>
                <Typography gutterBottom variant="h5" component="div" style={{ marginTop: "20px" }}>
                    Activity
                </Typography>
                {activity.map(item => (
                    <Card style={{ marginTop: "10px" }}>
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
            </Grid>
        </Grid>
    )
}

export default Profile;
