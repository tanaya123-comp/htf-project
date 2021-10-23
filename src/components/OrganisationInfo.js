import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import org1 from '../images/org1.jpg'
import org2 from '../images/org2.jpg'
import org3 from '../images/org3.jpg'
import org4 from '../images/org4.jpg'
import orgTree from '../images/orgTree.png'
import leadership from '../images/leadership.png'
import volunteering from '../images/volunteering.png'
import img3 from '../images/img3.png'

const imgArray = [
    org1, org2, org4, org3
]
function OrganisationInfo() {
    return (
        <div style={{ paddingBottom: 3, marginTop: "10px" }}>
            <Carousel>
                {imgArray.map(img => (
                    <img src={img} alt="Organnisation Img" style={{ maxWidth: "800px", maxHeight: "600px" }} />
                ))}
            </Carousel>
            <img src={img3} alt="Logo" style={{ marginTop: "10px" }}/>
            <h2>We are one of India's largest volunteer organizations.</h2>
            <h3>Our work revolves around</h3>
            <Grid container spacing={2}>
                <Grid item lg={4}>
                    <Card sx={{ minWidth: 275, minHeight: 100 }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 100 }}>
                            <img src={orgTree} alt="Tree" style={{ height: "50px", width: "50px" }} />
                            <Typography variant="h5" component="div">
                                Tree Plantation
                            </Typography>
                        </div>
                    </Card>
                </Grid>
                <Grid item lg={4}>
                    <Card sx={{ minWidth: 275, minHeight: 100 }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 100 }}>
                            <img src={leadership} alt="Leadership" style={{ height: "50px", width: "50px" }} />
                            <Typography variant="h5" component="div">
                                Leadership
                            </Typography>
                        </div>
                    </Card>
                </Grid>
                <Grid item lg={4}>
                    <Card sx={{ minWidth: 275, minHeight: 100 }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 100 }}>
                            <img src={volunteering} alt="Volunteering" style={{ height: "50px", width: "50px" }} />
                            <Typography variant="h5" component="div">
                                Civic Volunteering
                            </Typography>
                        </div>
                    </Card>
                </Grid>
            </Grid>
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

            <h1>ONE MOTTO. ONE TREE. ONE PLANET.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    )
}

export default OrganisationInfo
