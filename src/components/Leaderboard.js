import React from 'react';
import './Leaderboard.css';
import EnhancedTable from '../data/EnhancedTable';
import crown from '../images/crown.jpg';


function Leaderboard() {
    return (
        <div id="box">
            <h1 id="mainComp">Leaderboard</h1>
            <img src= {crown} style={{height:10, width:10}} />
            <div><EnhancedTable/></div>
        </div>
        
    )
}


export default Leaderboard
