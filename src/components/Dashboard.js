import React from "react";
import "./Dashboard.css";
import Post from "./Post";
import TextField from "@mui/material/TextField";
import posts from '../Data/Posts';

function Dashboard() {
  return (
    <div className="container">
      <TextField id="standard-basic" label="" variant="standard" className="searchbar"/>
      
        {posts.map((post)=>(
              <div style={{marginTop:'2vh'}}>
            <Post id={post.id} position={parseInt(post.id)%2==0?'right':'left'} key={post.id} img={post.img} info={post.info} title={post.title} />
            </div>
        ))}
      
    </div>
  );
}

export default Dashboard;
